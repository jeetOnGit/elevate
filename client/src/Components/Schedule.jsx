import { useState } from "react";
// import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, Calendar, ChevronRight } from "lucide-react";

const events = [
  { time: "08:30 AM", location:"Outdoor", title: "Breakfast", details: "Please brush your teeth before breakfast." },
  { time: "09:00 AM", location:"Outdoor", title: "Check in + Tagging ", details:"Check in and collect your tag." },
  { time: "09:25 AM", location:"Julian Hall", title: "Opening Prayer", details:"" },
  { time: "09:30 AM", location:"Julian Hall", title: "Ice-breaking + Orientation", details:"Turn left and right, talk to the first person you see." },
  { time: "10:00 AM", location:"Whole Premises", title: "Video Editing Competition ", details:"Shoot high quality videos and edit them with the given theme." },
  { time: "10:00 AM", location:"Whole Premises", title: "Drawing Competition", details:"Draw with your best imagination with given theme." },
  { time: "10:00 AM", location:"Julian Hall", title: "Drama Competition", details:"Natak karna koi apse sikhe." },
  { time: "10:00 AM", location:"CEC", title: "Carrom Competition", details:"Rani kiski hogi?" },
  { time: "11:30 AM", location:"Julian Hall", title: "Dancing Competition", details:"Nach basanti nach" },
  { time: "11:30 AM", location:"CEC", title: "Extempore", details:"Bohot baatein karte ho!!" },
  { time: "01:00 PM", location:"Outdoor", title: "Lunch", details:"Paisa diye ho?" },
  { time: "02:00 PM", location:"Julian Hall", title: "Singing Competition", details:"Are you arijit or shreya?" },
  { time: "02:00 PM", location:"CEC", title: "Carrom Competition Finals", details:"Rani ki kahani ka antim faisla" },
  { time: "03:20 PM", location:"Outdoor", title: "Tea Break", details:"Hello friends, Chai pee lo!" },
  { time: "03:30 PM", location:"Julian Hall", title: "Quiz Competition", details:"Don't dare to use Google or AI." },
  { time: "04:15 PM", location:"Julian Hall", title: "Worship Action Song", details:"" },
  { time: "04:30 PM", location:"Julian Hall", title: "Prizes Distribution", details:"You are always THE BEST, forget prizes." },
  { time: "05:15 PM", location:"Julian Hall", title: "Vission Casting + Thanksgiving", details:"Thanks for your support, now watch the screen" },
  { time: "05:45 PM", location:"Julian Hall", title: "Announcements", details:"English bolke bataye?" },
  { time: "06:00 PM", location:"Julian Hall", title: "Closing Prayer", details:"Like, Share and Follow." },
  { time: "06:00 PM", location:"Whole Premises", title: "Tea + Fellowship", details:"Dost banao, kya pata BFF ban jaye." },
];

export default function EventSchedule() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-black py-10 px-6 flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl font-firstfont font-extrabold text-[#ff9700] mb-6 drop-shadow-lg max-[420px]:text-3xl text-center"
      >
        ELEVATE INTER CHURCH COMPETETION 
      </motion.h1>

      <div className="w-full max-w-2xl shadow-2xl rounded-2xl bg-zinc-900 border border-[#ff9700]">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="flex items-center gap-2 text-[#ff9700] font-medium">
                <Calendar size={18} /> 06th October 2025
              </p>
              <p className="flex items-center gap-2 text-[#ff9700] font-medium">
                <Clock size={18} /> 08:00 AM - 06:00 PM
              </p>
              <p className="flex items-center gap-2 text-[#ff9700] font-medium">
                <MapPin size={18} /> CRBC, Sealdah
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {events.map((event, index) => (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex justify-between gap-1 items-center p-4 rounded-xl cursor-pointer transition-all shadow-md border ${
                    selectedEvent === index
                      ? "bg-[#ff9700] text-black border-[#ff9700]"
                      : "bg-zinc-800 text-gray-200 hover:bg-zinc-700 border-zinc-700"
                  }`}
                  onClick={() =>
                    setSelectedEvent(selectedEvent === index ? null : index)
                  }
                >
                  <span className="font-semibold text-left text-sm">{event.time}</span>
                  <span className="">{event.title}</span>
                  <ChevronRight
                    className={
                      selectedEvent === index ? "text-black rotate-90 transition-transform" : "text-[#ff9700] transition-transform"
                    }
                  />
                </motion.div>

                <AnimatePresence>
                  {selectedEvent === index && (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 50 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 p-4 bg-zinc-800 rounded-xl border border-[#ff9700]"
                    >
                      <h2 className="text-lg font-bold text-[#ff9700] mb-2">
                        Event Details
                      </h2>
                      <p className="text-gray-200">
                        <strong>{events[selectedEvent].time}</strong> - <strong>{events[selectedEvent].location}</strong> — {events[selectedEvent].details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
