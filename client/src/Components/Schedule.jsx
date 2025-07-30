import React from "react";

const Schedule = () => {
  const now = new Date();
  const twoHoursLater = new Date(now.getTime() + 2 * 60 * 60 * 1000);

  // Set to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  // Create Date object for tomorrow's time
  const buildTimeForTomorrow = (timeStr) => {
    const [hour, minute] = timeStr.split(":").map(Number);
    return new Date(
      tomorrow.getFullYear(),
      tomorrow.getMonth(),
      tomorrow.getDate(),
      hour,
      minute
    );
  };

  // Dummy schedule (for tomorrow)
  const schedule = [
    { time: buildTimeForTomorrow("09:00"), title: "Opening Ceremony", details: "Introduction & welcome" },
    { time: buildTimeForTomorrow("10:00"), title: "Singing Competition", details: "Solo & Group" },
    { time: buildTimeForTomorrow("11:30"), title: "Painting Display", details: "Creative exhibition" },
    { time: buildTimeForTomorrow("13:00"), title: "Dance Battle", details: "Solo, Duet, Group" },
    { time: buildTimeForTomorrow("15:00"), title: "Drama", details: "Stage play performance" },
    { time: buildTimeForTomorrow("16:30"), title: "Quiz Contest", details: "Live competition" },
    { time: buildTimeForTomorrow("18:00"), title: "Prize Distribution", details: "Winner announcements" },
    { time: buildTimeForTomorrow("19:00"), title: "Closing Speech", details: "Thank you note" },
  ];

  // Render event with status
  const renderEvent = (event, index) => {
    const time = event.time;

    if (time < now) {
      return (
        <div key={index} className="bg-green-100 border-l-4 border-green-600 p-4 mb-2 rounded">
          <h3 className="text-lg font-semibold text-green-800">{event.title}</h3>
          <p className="text-sm text-green-700">{event.details}</p>
          <p className="text-xs text-green-600">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      );
    }

    if (time >= now && time <= twoHoursLater) {
      return (
        <div key={index} className="bg-blue-100 border-l-4 border-blue-600 p-4 mb-2 rounded animate-pulse">
          <h3 className="text-lg font-semibold text-blue-800">{event.title}</h3>
          <p className="text-sm text-blue-700">{event.details}</p>
          <p className="text-xs text-blue-600">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      );
    }

    // Surprise (locked)
    return (
      <div key={index} className="bg-gray-100 border-l-4 border-gray-400 p-4 mb-2 rounded opacity-60">
        <h3 className="text-lg font-semibold text-gray-500">🎁 Surprise Event</h3>
        <p className="text-sm text-gray-400">Details will unlock soon</p>
        <p className="text-xs text-gray-500">
          {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    );
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-6">📅 Tomorrow's Event Schedule</h1>
      {schedule.map((event, index) => renderEvent(event, index))}
    </div>
  );
};

export default Schedule;
