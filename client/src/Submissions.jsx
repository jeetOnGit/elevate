// src/Submissions.jsx
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Submissions() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://elevate-d7qq.onrender.com/submissions')
      .then((res) => res.json())
      .then((data) => {
        setSubmissions(data);
        setLoading(false);
        console.log(data);
        
      })
      .catch((err) => {
        console.error('Error fetching submissions:', err);
        setLoading(false);
      });
  }, []);

  const handleLogout = () => {
    localStorage.clear(); // or remove only specific keys
    navigate('/login');
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 absolute top-4 right-4"
    >
      Logout
    </button>
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">All Submissions</h2>

      {loading ? (
        <p className="text-gray-600">Loading...</p>
      ) : submissions.length === 0 ? (
        <p className="text-gray-500">No submissions found.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full text-sm text-left text-gray-700 border">
            <thead className="bg-indigo-600 text-white uppercase text-xs">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Phone</th>
                <th className="px-4 py-2">Age</th>
                <th className="px-4 py-2">Church</th>
                <th className="px-4 py-2">Organization</th>
                <th className="px-4 py-2">Invited By</th>
                <th className="px-4 py-2">Institution</th>
                <th className="px-4 py-2">Activities</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((entry) => (
                <tr key={entry._id} className="border-t hover:bg-gray-50">
                  <td className="px-4 py-2">{entry.name}</td>
                  <td className="px-4 py-2">{entry.email}</td>
                  <td className="px-4 py-2">{entry.phone}</td>
                  <td className="px-4 py-2">{entry.age}</td>
                  <td className="px-4 py-2">{entry.church}</td>
                  <td className="px-4 py-2">{entry.organization}</td>
                  <td className="px-4 py-2">{entry.inviteby || entry.invitedBy}</td>
                  <td className="px-4 py-2">{entry.institution}</td>
                  <td className="px-4 py-2">{entry.options?.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
