import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    church: '',
    organization: '',
    invitedBy: '',
    institution: '',
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const activities = [
    'Workshops',
    'Prayer Meeting',
    'Youth Fellowship',
    'Volunteer Service',
    'Bible Study',
    'Music & Worship',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else if (selectedOptions.length < 2) {
      setSelectedOptions([...selectedOptions, option]); // ✅ Correct fix
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedOptions.length !== 2) {
      setMessage('Please select exactly 2 activities.');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    const payload = {
      ...formData,
      age: parseInt(formData.age) || null,
      selectedOptions: selectedOptions, // ✅ this is correct
    };

    try {
      const response = await fetch('https://elevate-d7qq.onrender.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage(`✅ Submitted successfully, ${formData.name}!`);
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          gender: '', // ← Add this line
          church: '',
          organization: '',
          invitedBy: '',
          institution: '',
        });
        setSelectedOptions([]);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      setMessage('❌ Submission failed. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLogout = () => {
    localStorage.clear(); // or remove only specific keys
    navigate('/login');
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 absolute top-4 right-4"
      >
        Logout
      </button>
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-indigo-600 px-6 py-8 text-center text-white">
          <h1 className="text-3xl font-bold">Event Registration</h1>
          <p className="mt-2 text-indigo-100">Please fill out the form below</p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="+234 801 234 5678"
            />
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Age *
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
              min="12"
              max="120"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. 25"
            />
          </div>

          {/* Church */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Church
            </label>
            <input
              type="text"
              name="church"
              value={formData.church}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Your local church"
            />
          </div>

          {/* Organization */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Organization
            </label>
            <input
              type="text"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. Youth Fellowship, NGO"
            />
          </div>

          {/* Who Invited */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Who Invited You?
            </label>
            <input
              type="text"
              name="invitedBy"
              value={formData.invitedBy}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. John Doe"
            />
          </div>

          {/* Institution */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Institution (School/Workplace)
            </label>
            <input
              type="text"
              name="institution"
              value={formData.institution}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="e.g. ABC University"
            />
          </div>

          {/* Activities (Checkboxes) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select up to 2 Activities *
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {activities.map((option) => (
                <label
                  key={option}
                  className={`flex items-center space-x-3 p-3 rounded-md border cursor-pointer transition-all
                    ${selectedOptions.includes(option)
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                      : selectedOptions.length >= 2 && !selectedOptions.includes(option)
                        ? 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
                        : 'border-gray-300 hover:border-indigo-300'
                    }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    disabled={selectedOptions.length >= 2 && !selectedOptions.includes(option)}
                    className="w-5 h-5 text-indigo-600 rounded focus:ring-indigo-500"
                  />
                  <span className="font-medium">{option}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              {selectedOptions.length}/2 selected
            </p>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-4 rounded-md font-semibold text-white transition
                ${isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300'
                }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`mt-4 p-3 rounded-md text-center font-medium
                ${message.includes('❌') || message.includes('Please')
                  ? 'bg-red-50 text-red-700 border border-red-200'
                  : 'bg-green-50 text-green-700 border border-green-200'
                }`}
            >
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}