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
//     { time: `${baseDate}T08:00`, title: 'Arrival', description: 'Arrival' },
//     { time: `${baseDate}T08:30`, title: 'Breakfast', description: 'Breakfast' },
//     { time: `${baseDate}T09:00`, title: 'Check In', description: 'Check in + Tagging ' },
//     { time: `${baseDate}T09:30`, title: '4th', description: 'Ice-breaking Activity + Orientation' },
//     { time: `${baseDate}T10:00`, title: '5th', description: 'Drama & Carrom' },
//     { time: `${baseDate}T11:30`, title: '6th', description: 'Dancing & Extempore' },
//     { time: `${baseDate}T13:00`, title: '7th', description: 'Lunch' },
//     { time: `${baseDate}T14:00`, title: '8th', description: 'Singing & Chess' },
//     { time: `${baseDate}T15:20`, title: '8th', description: 'Tea Break' },
//     { time: `${baseDate}T15:30`, title: '8th', description: 'Worship' },
//     { time: `${baseDate}T16:00`, title: '8th', description: 'Message' },
//     { time: `${baseDate}T16:30`, title: '8th', description: 'Winner Announced + Prizes' },
//     { time: `${baseDate}T17:30`, title: '8th', description: 'Announcements + Thanksgiving' },
//     { time: `${baseDate}T18:00`, title: '8th', description: 'Closing Prayer' },
//   ];

//   return (
//     <div className="min-h-screen p-6 bg-gray-100">
//       <h1 className="text-3xl font-bold mb-6 text-center">📅 Event Schedule</h1>
//       <Schedule schedule={events} />
//     </div>
//   );
// }
