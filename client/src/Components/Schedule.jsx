import React from "react";

const Schedule = () => {
  const now = new Date();
  const thirtyMinutesLater = new Date(now.getTime() + 30 * 60 * 1000);

  // Set to tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate());

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
    { time: buildTimeForTomorrow("08:00"), title: "Opening Ceremony", details: "Arrival" },
    { time: buildTimeForTomorrow("08:30"), title: "Breakfast", details: "Paisa diya kya?" },
    { time: buildTimeForTomorrow("09:00"), title: "Check-in & Tagging", details: "Collect your tag to check-in" },
    { time: buildTimeForTomorrow("09:30"), title: "Ice-breaking Activity & Orientation", details: "Talk to your next person and build some strong bond" },
    { time: buildTimeForTomorrow("10:00"), title: "Drama & Carrom", details: "First competetion for this day" },
    { time: buildTimeForTomorrow("11:30"), title: "Dancing & Extempore", details: "WOW!, Second Competetion" },
    { time: buildTimeForTomorrow("13:00"), title: "Lunch", details: "Paise diya kya?" },
    { time: buildTimeForTomorrow("14:00"), title: "Singing & Chess", details: "Third competetion means HATRIC" },
    { time: buildTimeForTomorrow("15:20"), title: "Tea Break", details: "Meet and greet with stranger and make them non-stranger" },
    { time: buildTimeForTomorrow("15:30"), title: "Worship", details: "Make your life easier" },
    { time: buildTimeForTomorrow("16:00"), title: "Message", details: "Dil ki baat" },
    { time: buildTimeForTomorrow("16:30"), title: "Winner Announced & Prizes", details: "Give some applaus and be with them in thier achivments" },
    { time: buildTimeForTomorrow("17:30"), title: "Announcements & Thanksgiving", details: "Important announcements you must hear" },
    { time: buildTimeForTomorrow("18:00"), title: "Closing Prayer", details: "We will meet soon!" },
  ];

  // Render event with status
  const renderEvent = (event, index) => {
    const time = event.time;

    if (time < now) {
      return (
        <div key={index} className="bg-green-100 border-l-4 border-green-600 p-4 mb-2 rounded">
          <h3 className="text-lg font-semibold text-green-800">{event.title}</h3>
          <p className="text-sm text-green-700 italic">{event.details}</p>
          <p className="text-xs text-green-600">{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
      );
    }

    if (time >= now && time <= thirtyMinutesLater) {
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
      <h1 className="text-2xl font-bold text-center mb-6">📅 Today's Event Schedule</h1>
      {schedule.map((event, index) => renderEvent(event, index))}
    </div>
  );
};

export default Schedule;
