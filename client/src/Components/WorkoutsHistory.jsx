import React, { useState, useEffect } from "react";
import axios from "axios";

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await axios.get("/api/workouts"); // Adjust the endpoint as necessary
        setWorkouts(response.data);
      } catch (err) {
        setError("Failed to fetch workouts");
        console.error(err);
      }
    };

    fetchWorkouts();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Workout History</h2>
      {workouts.length === 0 ? (
        <p>No workouts found</p>
      ) : (
        <ul>
          {workouts.map((workout) => (
            <li key={workout._id}>
              <h3>Date: {workout.date}</h3>
              <ul>
                {workout.exercises.map((exercise, index) => (
                  <li key={index}>
                    <strong>{exercise.name}</strong>
                    <p>Muscles: {exercise.muscles}</p>
                    <p>Equipment: {exercise.equipment || "None"}</p>
                    <p>Intensity Level: {exercise.intensity_level}</p>
                    <p>Explanation: {exercise.explanation}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutHistory;
