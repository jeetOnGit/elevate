import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook } from "lucide-react";
import '../index.css';

const Home = () => {
  const highlights = [
    { src: "/videos/prevElevate.mp4", title: "Elevate 1.0" },
    { src: "/videos/bonfire2024.mp4", title: "Bonfire 2024" },
    { src: "/videos/football.mp4", title: "Football Tournament" },
  ];
  return (
    <motion.div
      className="min-h-screen bg-gray-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hero Section */}
      <section className="relative bg-[#ff9700] text-white overflow-hidden bg-[url('/images/hero.jpeg')] bg-no-repeat bg-cover bg-center flex justify-center items-center">
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">

            {/* H1 */}
            <motion.h1
              className="font-firstfont text-[#ff9700] text-5xl sm:text-6xl leading-tight max-[420px]:text-4xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              ELEVATE 2.0
              <span className="block text-white font-italic text-lg sm:text-xl mt-1">Level up your faith</span>
            </motion.h1>

            {/* H3 */}
            <motion.div
              className="mt-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <h3 className="font-secondfont text-4xl sm:text-6xl leading-snug">
                INTER CHURCH TALENT CONTEST
              </h3>
              <p className="italic text-base sm:text-lg mt-1">Not just gifted, but called</p>
              <motion.button
                className="text-white bg-[#ff9700] font-secondfont text-xl sm:text-2xl py-2 px-6 rounded border mt-5 hover:bg-transparent hover:border-white transition tracking-wider"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <Link to='https://forms.gle/LYyU6DWvw3yHFpCv7' target='_blank'>Elevate Feedback</Link>
              </motion.button>
            </motion.div>




            <div className="min-h-screen py-6 px-6 flex flex-col items-center">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl font-firstfont font-extrabold text-[#ff9700] sm:text-6xl leading-tight max-[420px]:text-4xl my-3"
              >
                IYFC Memories
              </motion.h1>

              <div className="grid md:grid-cols-1 gap-8 w-full max-w-6xl">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg border border-yellow-500"
                  >
                    <video
                      src={item.src}
                      controls
                      loop
                      autoplay
                      className="w-full h-full object-cover"
                    />
                    <div className="p-4">
                      <h2 className="text-yellow-400 font-bold">{item.title}</h2>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>




            {/* Button */}
            {/* <motion.button
              className="text-white bg-[#ff9700] font-secondfont text-xl sm:text-2xl py-2 px-6 rounded border mt-5 hover:bg-transparent hover:border-white transition tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link to="/form">Register Yourself</Link>
            </motion.button> */}

            <section className="w-full py-8 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-8  px-6 py-4 rounded-2xl border border-yellow-500 shadow-lg max-[520px]:flex-col max-[520px]:w-full"
              >
                <p className="text-yellow-400 font-semibold text-lg">Follow Us:</p>

                <a
                  href="https://instagram.com/iyfc_kolkata"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition"
                >
                  <Instagram size={22} /> Instagram
                </a>

                <a
                  href="https://www.facebook.com/share/19yTbKxKyy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-200 hover:text-yellow-400 transition"
                >
                  <Facebook size={22} /> Facebook
                </a>
                
              </motion.div>
            </section>

          </div>
        </div>
      </section>

      {/* Info / Rules Section */}

    </motion.div>
  );
};

export default Home;
