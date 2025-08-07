import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SlotCheckboxGroup from './Components/SlotCheckboxGroup';
import { useRef } from 'react';


export default function App() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    church: '',
    invitedBy: '',
    institution: '',
    image: null,
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [resetSignal, setResetSignal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const fileInputRef = useRef(null);
  const navigate = useNavigate();




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((o) => o !== option));
    } else if (selectedOptions.length < 2) {
      setSelectedOptions([...selectedOptions, option]);
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, age, gender, church, invitedBy, institution, image } = formData;

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !age ||
      !gender ||
      !church.trim() ||
      !invitedBy.trim() ||
      !institution.trim()
    ) {
      setMessage("❌ Please fill in all required fields.");
      return;
    }

    // Check if exactly 2 options are selected (slot checkbox)
    if (selectedOptions.length !== 2) {
      setMessage("❌ Please select exactly 2 activities (1 per slot).");
      return;
    }

    // Check if image is uploaded
    if (!image) {
      setMessage("❌ Please upload your payment screenshot.");
      return;
    }

    setIsSubmitting(true);
    setMessage("");


    try {
      const formPayload = new FormData();
      formPayload.append("name", name);
      formPayload.append("email", email);
      formPayload.append("phone", phone);
      formPayload.append("age", age);
      formPayload.append("gender", gender);
      formPayload.append("church", church);
      formPayload.append("invitedBy", invitedBy);
      formPayload.append("institution", institution);
      formPayload.append("selectedOptions", JSON.stringify(selectedOptions));
      formPayload.append("image", image);


      // https://elevate-d7qq.onrender.com
      const response = await fetch("https://elevate-d7qq.onrender.com/submit", {
        method: "POST",
        body: formPayload,
      });

      if (response.ok) {
        setMessage(`✅ Submitted successfully, ${formData.name}!`);
        setFormData({
          name: "",
          email: "",
          phone: "",
          age: "",
          gender: "",
          church: "",
          invitedBy: "",
          institution: "",
          image: null,
        });
        setSelectedOptions([]);
        setResetSignal((prev) => !prev);
        if (fileInputRef.current) {
          fileInputRef.current.value = null;
        }

      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setMessage("❌ Submission failed. Please try again.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };



  const handleLogout = () => {
    localStorage.clear();
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

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg">

        <div className="">

          <div className="bg-gray-100 text-center text-white bg-[url('/images/formBg.png')] bg-no-repeat bg-cover bg-center h-[200px] max-[778px]:h-[200px] max-[778px]:bg-contain max-[778px]:bg-top max-[420px]:h-[100px] max-[420px]:bg-contain max-[420px]:bg-top w-full">
          </div>
          <section className="bg-gray-100 py-2 px-6 md:px-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-left text-gray-800 mb-8">📝 Rules & Guidelines</h2>
              <ul className="space-y-6 text-gray-700 text-base leading-relaxed">
                <li className="">
                  <strong>1. Join Our WhatsApp Community:</strong> Stay updated with event announcements, timings, and changes by joining our official WhatsApp group.
                </li>
                <li className="">
                  <strong>2. Drama Competition – Background Sound:</strong> Participants must send their own background audio in advance. Supported format: MP3.
                </li>
                <li className="">
                  <strong>3. Dance Performance – Music Track:</strong> Bring your own song (on your phone or pen drive). Internet will not be provided.
                </li>
                <li className="">
                  <strong>4. Singing Performance – Instrument:</strong> Bring your own instrument if required. No instruments will be provided on-site.
                </li>
                <li className="">
                  <strong>5. Video Editing Competition:</strong> Bring your phone with a video editing app installed. No editing devices will be provided.
                </li>
                <li className="">
                  <strong>6. Painting Competition – Art Tools:</strong> All participants must bring their own art materials (brushes, colors, canvas, etc.). Only space will be provided.
                </li>
              </ul>
            </div>
          </section>


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

            {/* Age */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Age *
              </label>
              <select
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              >
                <option value="">Select Age</option>
                {Array.from({ length: 13 }, (_, i) => 14 + i).map((ageValue) => (
                  <option key={ageValue} value={ageValue}>
                    {ageValue}
                  </option>
                ))}
              </select>
            </div>


            {/* Gender */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Gender *
              </label>
              <div className="flex gap-6">
                {["Male", "Female"].map((genderOption) => (
                  <label
                    key={genderOption}
                    className="inline-flex items-center space-x-2 text-gray-700"
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={genderOption}
                      checked={formData.gender === genderOption}
                      onChange={handleChange}
                      required
                      className="text-indigo-600 focus:ring-indigo-500"
                    />
                    <span>{genderOption}</span>
                  </label>
                ))}
              </div>
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


            {/* Church */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Church or Organization*
              </label>
              <input
                type="text"
                name="church"
                value={formData.church}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your local church"
                required
              />
            </div>

            {/* Who Invited */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Who Invited You?*
              </label>
              <input
                type="text"
                name="invitedBy"
                value={formData.invitedBy}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g. John Doe"
                required
              />
            </div>

            {/* Institution */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                School / College / Institution *
              </label>
              <input
                type="text"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="e.g. ABC University"
                required
              />
            </div>

            <SlotCheckboxGroup onSelectionChange={setSelectedOptions} resetSignal={resetSignal} />

            {/* Pay online */}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Pay 399 here, Before 08/09/2025*
              </label>
              <img src="images/pay.jpeg" alt="" />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Upload Payment Screenshot*
              </label>
              <input
                type="file"
                name="image"
                accept="image/*"
                required
                ref={fileInputRef}
                onChange={(e) => setFormData(prev => ({ ...prev, image: e.target.files[0] }))}
                className="w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
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
    </div>
  );
}
