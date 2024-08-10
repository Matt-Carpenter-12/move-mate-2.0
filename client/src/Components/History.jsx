import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../assets/css/log.css"; // Custom styles for checkmarks

//fake static data to display until dynamic data takes place



const History = ({}) => {
  const completedWorkouts = [
    { workout: "run", date: "1/1/11" },
    { workout: "lift", date: "2/2/22" },
    { workout: "stretch", date: "3/3/33" },
    { workout: "lift", date: "4/4/44" },
    { workout: "run", date: "5/5/55" },
    { workout: "yoga", date: "6/6/66" },
  ];
  return (
    <div>
      {completedWorkouts.map((workout) => {
        return (
          <div>
            <h4>{workout.workout}</h4>
            <p>{workout.date}</p>
          </div>
        );
      })}
    </div>
  );
};

export default History;

// const History = ({ workoutHistory = [] }) => {
//   const tileContent = ({ date, view }) => {
//     const workoutDay = workoutHistory.find(
//       (workoutDate) =>
//         new Date(workoutDate).toDateString() === date.toDateString()
//     );
//     return view === "month" && workoutDay ? (
//       <div className="workout-checkmark">✔️</div>
//     ) : null;
//   };

//   return (
//     <div className="history-container">
//       <Calendar tileContent={tileContent} />
//     </div>
//   );
// };

// export default History;
