import { Card } from "react-bootstrap";
import '../assets/css/homepage.css'
import React, { useState } from 'react';


  const DayCard = ({ id, day }) => {
    const [selectedCard, setSelectedCard] = useState(null);
  
    const handleCardClick = (id) => {
      setSelectedCard(id);
    };

  return (
    <div>
        <Card onClick={() => handleCardClick(id)} id={id} className={`day-card ${selectedCard === id ? 'selected' : ""}`}>
          <Card.Body className="day-card-body">
          <Card.Title className="day-card-title">{day}</Card.Title>
          {/* <Card.Text></Card.Text> */}
          </Card.Body>
        </Card>
    </div>
  )
};

export default DayCard;
