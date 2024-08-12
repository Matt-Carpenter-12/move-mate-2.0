import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const StarCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [starredDates, setStarredDates] = useState(new Set());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleStarClick = () => {
    if (selectedDate) {
      setStarredDates((prev) => {
        const newDates = new Set(prev);
        const dateString = selectedDate.toDateString();

        if (newDates.has(dateString)) {
          newDates.delete(dateString); // Remove the star
        } else {
          newDates.add(dateString); // Add the star
        }

        return newDates;
      });
    }
  };

  const tileContent = ({ date, view }) => {
    if (view === "month" && starredDates.has(date.toDateString())) {
      return <span style={{ color: "gold" }}>★</span>;
    }
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        tileContent={tileContent}
      />
      <button onClick={handleStarClick}>
        {selectedDate && starredDates.has(selectedDate.toDateString())
          ? "Unstar Date"
          : "Star Date"}
      </button>
    </div>
  );
};

export default StarCalendar;
