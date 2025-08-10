import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SlotCheckboxGroup from './Components/SlotCheckboxGroup';
import { useRef } from 'react';
import { toast } from 'react-toastify';


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
      !institution.trim()
    ) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // Check if exactly 2 options are selected (slot checkbox)
    if (selectedOptions.length !== 2) {
      toast.error("Please select exactly 2 activities (1 per slot).");
      return;
    }

    // Check if image is uploaded
    if (!image) {
      toast.error("Please upload your payment screenshot.");
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
        toast.success(`Submitted successfully, ${formData.name}!`);

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
        toast.error("Submission failed.")
      }
    } catch (error) {
      toast.error("Something went wrong.")
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
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
    <div className="py-9">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg">

        <div className="">


          <div className="bg-gray-100 text-center text-white bg-[url('/images/formBg.png')] bg-no-repeat bg-cover bg-center h-[200px] max-[778px]:h-[130px] max-[778px]:bg-contain max-[778px]:bg-top max-[420px]:h-[100px] max-[420px]:bg-contain max-[420px]:bg-top w-full">

            <div className="bg-gray-100 text-center text-white bg-[url('/images/formBg.png')] bg-no-repeat bg-cover bg-center h-[200px] max-[778px]:h-[200px] max-[778px]:bg-contain max-[778px]:bg-top max-[420px]:h-[100px] max-[420px]:bg-contain max-[420px]:bg-top w-full">

            </div>
            <section className="bg-gray-100 py-2 px-6 md:px-16 text-left">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-left text-gray-800 mb-8">📝 Must Read Before Registration</h2>
                <ol className="space-y-6 text-gray-700 text-base leading-relaxed">
                  <li className="">
                    <strong>Join Our WhatsApp Channel :</strong> Get all event updates and announcements. <button className='py-2 px-3 bg-green-600 rounded text-white font-bold'><Link className='' to='https://whatsapp.com/channel/0029Vb5xDqI6RGJ9abuCWY2p' target='_blank'>Join Now</Link></button>
                  </li>
                  <li className="">
                    <strong>Drama Competition :</strong> Each team must have minimum <strong>5 members</strong>. Each team will be given <strong>8-10 minutes</strong> to perform a drama. If you have any background sounds for your performance, then send us before the event day.
                  </li>
                  <li className="">
                    <strong>Dance Competition :</strong>  Each team must have minimum <strong>4 members</strong>. Each team will be given <strong>4-5 minutes</strong> to perform a dance. You have to send us the background music before the event day.
                  </li>
                  <li className="">
                    <strong>Singing Competition :</strong>  Each team must have minimum <strong>5 members</strong> and maximum <strong>3 instruments</strong>. Each team will be given <strong>5 minutes</strong> to perform a song.
                  </li>
                  <li className="">
                    <strong>Solo Reel Making :</strong> Bring your phone and charger with some crazy ideas. Each participant will get an ample amount of time to complete their video making and editing from morning to afternoon, and in between they can take part in their second competition.
                  </li>
                  <li className="">
                    <strong>Solo Sketching :</strong> Bring your own <strong>art materials</strong> (brushes, colors etc). Each participant will get an ample amount of time to complete their sketch of drawing from morning to afternoon, and in between they can take part in their second competition.
                  </li>
                  <li className="">
                    <strong>Solo Extempore :</strong> Each participant will draw a chit from a box containing various topics and deliver a <strong>3-minute</strong> message or sermon on the spot.
                  </li>
                  <li className="">
                    <strong>Double TT :</strong> Participants will be in a pair to face other teams, in the semi final and finals will be in singles. The Game will be in <strong>11 points</strong>.
                  </li>
                  <li className="">
                    <strong>Solo Carrom :</strong> Each participant will face each other in simple knockout matches until we get a winner.
                  </li>
                </ol>
              </div>
            </section>


            <form onSubmit={handleSubmit} className="p-8 space-y-6 text-left">
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
                  className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Your local church"
                  required
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
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. John Doe"
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
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="e.g. ABC University"
                  required
                />
              </div>

              <SlotCheckboxGroup onSelectionChange={setSelectedOptions} resetSignal={resetSignal} />

              {/* Pay online */}

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pay 399/- here, Before 08/09/2025* <strong>(Breakfast, Lunch and snacks included)</strong>
                </label>
                <img className='mx-auto border' src="images/pay.jpeg" alt="" />
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

              <div className='flex justify-between max-[779px]:flex-col max-[779px]:gap-2'>
                <p className='text-black'>For any query Contact Us: </p>
                <p className='text-sm font-semibold rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100  px-2 py-1'>Rahul Nandi : +91 8910241042</p>
                <p className='text-sm font-semibold rounded bg-indigo-50 text-indigo-700 hover:bg-indigo-100  px-2 py-1'>Rahul Biswas : +91 62967 49166</p>
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
    </div>
  );
}
