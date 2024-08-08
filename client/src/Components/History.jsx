import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/css/log.css"; // Custom styles for checkmarks

const History = ({ workoutHistory }) => {
  const [value, setValue] = useState(new Date());

  const isWorkoutDay = (date) => {
    // Check if the date matches any workout dates in your history
    return workoutHistory.some((workoutDate) => {
      const workoutDay = new Date(workoutDate).setHours(0, 0, 0, 0);
      const currentDay = new Date(date).setHours(0, 0, 0, 0);
      return workoutDay === currentDay;
    });
  };

  const tileContent = ({ date, view }) => {
    if (view === "month" && isWorkoutDay(date)) {
      return <span className="workout-checkmark">✔️</span>;
    }
  };

  return (
    <div className="history-container">
      <Calendar onChange={setValue} value={value} tileContent={tileContent} />
    </div>
  );
};

export default History;
