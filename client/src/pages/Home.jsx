import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}


      <header className="relative bg-[#ff9700] text-white overflow-hidden bg-[url('/images/heroBg.png')] bg-no-repeat bg-cover bg-center">
        

        <div className="container mx-auto px-6 py-24 md:py-32 relative z-10 max-[420px]:py-15 max-[420px]:px-3">
          <div className=" mx-auto text-center">
            {/* <img className='w-[500px]' src="images/heroText.png" alt="" /> */}

            <h1 className='font-firstfont text-[#ff9700] text-5xl max-[420px]:text-3xl !leading-10 max-[420px]:!leading-5'>ELEVATE 2.0 <span className='max-[420px]:text-xs block text-white font-italic text-sm'>Level up your faith</span></h1>

            <div className='leading-4 mt-3'>
              <h3 className='font-secondfont text-7xl max-[420px]:text-xl'>INTER CHURCH TALENT CONTEST</h3>
              <p className='font-secondfontItalics'>Not just gifted, but called</p>
            </div>

            <button className='text-white bg-[#ff9700] font-firstfont text-xs py-2 px-3 rounded border mt-5 hover:bg-transparent hover:border'><Link to='/form'>Register Yourself</Link></button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Who We Are
            </h2>
            <div className="w-24 h-1 bg-[#ff9700] mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <span className="font-semibold text-[#ff9700]">Youth for christ</span> is a non-profit organization dedicated to empowering young people aged 15-25
              through education, leadership development, and community engagement programs. Since our
              founding in 2010, we've impacted over 15,000 young lives across the country.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is to provide youth with the tools, resources, and support they need to reach
              their full potential and become active contributors to society. We focus on creating
              inclusive spaces where young people can develop skills, build confidence, and make
              meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Programs
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive initiatives designed to nurture talent and leadership
            </p>
            <div className="w-24 h-1 bg-[#ff9700] mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Program 1 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-blue-500 to-purple-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl mb-5 text-blue-600">
                  🎓
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Leadership Academy</h3>
                <p className="text-gray-600 leading-relaxed">
                  A 12-week program that develops leadership skills through workshops, mentorship,
                  and community projects. Participants learn public speaking, team building, and
                  project management.
                </p>
              </div>
            </div>

            {/* Program 2 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-green-500 to-teal-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-5 text-green-600">
                  💼
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Career Readiness</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equips youth with essential job skills including resume writing, interview techniques,
                  financial literacy, and workplace etiquette through hands-on training and industry connections.
                </p>
              </div>
            </div>

            {/* Program 3 */}
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="h-3 bg-gradient-to-r from-purple-500 to-pink-600"></div>
              <div className="p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center text-3xl mb-5 text-purple-600">
                  🎨
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Creative Expression</h3>
                <p className="text-gray-600 leading-relaxed">
                  Arts-based programs that use music, visual arts, and performance to help youth express
                  themselves, build confidence, and explore their identities in a supportive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our Impact
            </h2>
            <p className="text-gray-600 text-lg">
              Measurable results from our youth empowerment initiatives
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15,000+</div>
              <div className="text-gray-600 font-medium">Youth Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-600 font-medium">Program Completion</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">300+</div>
              <div className="text-gray-600 font-medium">Community Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">85%</div>
              <div className="text-gray-600 font-medium">Increased Confidence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Voices from Our Community
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="text-6xl text-blue-100 absolute top-4 right-6 select-none">"</div>
              <p className="text-gray-700 text-lg mb-6 relative z-10 pl-4 border-l-4 border-blue-200">
                "The Leadership Academy changed my life. I went from being too shy to speak in class
                to leading community projects and presenting at conferences. This organization
                believed in me when I didn't believe in myself."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  MC
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">Maria Chen</div>
                  <div className="text-sm text-gray-500">Program Alumna, Age 21</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg relative">
              <div className="text-6xl text-green-100 absolute top-4 right-6 select-none">"</div>
              <p className="text-gray-700 text-lg mb-6 relative z-10 pl-4 border-l-4 border-green-200">
                "As a parent, I've seen incredible growth in my son since he joined the Career
                Readiness program. He's more focused, has clear goals, and actually talks about
                his future with excitement!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                  JW
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-800">James Wilson</div>
                  <div className="text-sm text-gray-500">Parent of Participant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Movement
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-3xl mx-auto">
            Whether you're a young person looking for opportunities, a volunteer wanting to make a difference,
            or a partner interested in supporting youth development, there are many ways to get involved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-3 rounded-lg text-lg transition transform hover:scale-105">
              Volunteer
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 font-semibold px-6 py-3 rounded-lg text-lg transition">
              Donate
            </button>
            <button className="bg-transparent border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-gray-900 font-semibold px-6 py-3 rounded-lg text-lg transition">
              Partner
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Youth Forward</h3>
              <p className="mb-6 text-gray-400 leading-relaxed">
                Empowering the next generation of leaders through education, mentorship, and community engagement.
              </p>
              <div className="flex space-x-4">
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Facebook</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition">f</div>
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Instagram</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition">ig</div>
                </Link>
                <Link to="/" className="text-gray-400 hover:text-white transition">
                  <span className="sr-only">Twitter</span>
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition">t</div>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/" className="hover:text-white transition">Donate</Link></li>
                <li><Link to="/form" className="hover:text-white transition">Elevate Registration</Link></li>
                <li><Link to="/admin" className="hover:text-white transition">Get Involved</Link></li>
                <li><Link to="/schedule" className="hover:text-white transition">Schedule</Link></li>
                <li><Link to="/" className="hover:text-white transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@youthforward.org</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>(555) 123-4567</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Community Street, Cityville, ST 12345</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>&copy; 2023 Youth Forward. All rights reserved.</p>
            <div className="mt-2 space-x-4 text-sm">
              <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
              <Link to="/" className="hover:text-white transition">Terms of Service</Link>
              <Link to="/" className="hover:text-white transition">Accessibility</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
