// // src/pages/SchedulePage.jsx
// import React from 'react';
// import Schedule from './Schedule'; // adjust if your path is different

// export default function SchedulePage() {
//   // You can customize this to any date — here we set it to 25th of next month
//   const targetDate = new Date();
//   targetDate.setMonth(targetDate.getMonth() + 1);
//   targetDate.setDate(25);

//   const yyyy = targetDate.getFullYear();
//   const mm = String(targetDate.getMonth() + 1).padStart(2, '0');
//   const dd = String(targetDate.getDate()).padStart(2, '0');

//   const baseDate = `${yyyy}-${mm}-${dd}`;
  
  

//   const events = [
//     { time: `${baseDate}T08:00`, title: 'Registration', description: 'Entry and welcome kit' },
//     { time: `${baseDate}T09:00`, title: 'Opening Ceremony', description: 'Inauguration and prayer' },
//     { time: `${baseDate}T10:30`, title: 'Singing Competition', description: 'Solo and group performances' },
//     { time: `${baseDate}T12:00`, title: 'Drama Show', description: 'Stage play performance' },
//     { time: `${baseDate}T14:00`, title: 'Dance Battle', description: 'Freestyle dance challenge' },
//     { time: `${baseDate}T15:30`, title: 'Fun Games', description: 'Interactive games for all' },
//     { time: `${baseDate}T17:00`, title: 'Prize Distribution', description: 'Awarding ceremony' },
//     { time: `${baseDate}T18:00`, title: 'Closing Ceremony', description: 'Thank you note and feedback' },
//   ];

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">📅 Event Schedule</h1>
//       <Schedule schedule={events} />
//     </div>
//   );
// }
