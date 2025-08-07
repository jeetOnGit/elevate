import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}


      <header className="relative bg-[#ff9700] text-white overflow-hidden bg-[url('/images/hero.jpeg')] bg-no-repeat bg-cover bg-center h-screen flex justify-center items-center">
        

        <div className="container mx-auto px-6 md:py-32 relative z-10 max-[420px]:py-15 max-[420px]:px-1">
          <div className=" mx-auto text-center">

            <h1 className='font-firstfont text-[#ff9700] text-5xl max-[420px]:text-5xl !leading-10 max-[420px]:!leading-8'>ELEVATE 2.0 <span className='max-[420px]:text-xs block text-white font-italic text-sm'>Level up your faith</span></h1>

            <div className='leading-4 mt-3'>
              <h3 className='font-secondfont text-7xl max-[420px]:text-4xl'>INTER CHURCH TALENT CONTEST</h3>
              <p className='font-secondfontItalics'>Not just gifted, but called</p>
            </div>

            <button className='text-white bg-[#ff9700] font-firstfont text-xs py-2 px-3 rounded border mt-5 hover:bg-transparent hover:border'><Link to='/form'>Register Yourself</Link></button>
          </div>
        </div>
      </header>  
    </div>
  );
};

export default Home;
