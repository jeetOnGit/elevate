import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../index.css';

const Home = () => {
  const highlights = [
    { src: "/videos/prevElevate.mp4", title: "Elevate 1.0"  },
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
              <Link to="/schedule">Check Schedule</Link>
            </motion.button>
            </motion.div>


            {/* <section>
      <video src="videos/prevElevate.mp4" autoPlay loop controls></video>
    </section> */}


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


            {/* <section className=" py-10 px-4">
              <div className="max-w-4xl mx-auto space-y-6">
                {[
                  "Open to all Churches/Fellowships.",
                  "Each student must join solo or/& in a group for up to 2 categories.",
                  "Prizes in every category."
                ].map((rule, index) => (
                  <motion.div
                    key={index}
                    className="bg-white text-black py-2 px-1 rounded-md shadow-md text-center text-base sm:text-2xl font-semibold relative before:absolute before:w-[5px] before:h-full before:bg-[#ff9700] before:top-0 before:left-0"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + 1.2, duration: 0.5 }}
                  >
                    {rule}
                  </motion.div>
                ))}
              </div>
            </section> */}

            {/* Button */}
            {/* <motion.button
              className="text-white bg-[#ff9700] font-secondfont text-xl sm:text-2xl py-2 px-6 rounded border mt-5 hover:bg-transparent hover:border-white transition tracking-wider"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link to="/form">Register Yourself</Link>
            </motion.button> */}


          </div>
        </div>
      </section>

      {/* Info / Rules Section */}

    </motion.div>
  );
};

export default Home;
