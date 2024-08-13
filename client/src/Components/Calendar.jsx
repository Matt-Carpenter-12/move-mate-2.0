import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import '../assets/css/calendar.css'

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
    // <div >
      <Container className="calendar-container">
        <Row>
          <Col align="center">
            <Calendar
              className='calendar'
              calendarType='gregory'
              onChange={handleDateChange}
              value={selectedDate}
              tileContent={tileContent}
            />
            <button className='btn star-btn' onClick={handleStarClick}>
              {selectedDate && starredDates.has(selectedDate.toDateString())
                ? "Remove Workout from Log"
                : "Add Workout to Log"}
            </button>
          </Col>
        </Row>
      </Container>
    // </div>
  );
};

export default StarCalendar;
