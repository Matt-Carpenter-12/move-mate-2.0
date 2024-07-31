import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const Questionnaire = () => {
  const [showLevel, setShowLevel] = useState(false);
  const [showConsistency, setShowConsistency] = useState(false);

  const handleTypeInput = (e) => {
      if (e.target.value !== 'Select one') {
          setShowLevel(true);
      } else {
          setShowLevel(false);
          setShowConsistency(false);
      }
  };

  const handleLevelInput = (e) => {
      if (e.target.value !== 'Select one') {
          setShowConsistency(true);
      } else {
          setShowConsistency(false);
      }
  };

  return (
      <Form>
          <fieldset>
              <Form.Group className="mb-3">
                  <Form.Label>Select workout type:</Form.Label>
                  <Form.Select onChange={handleTypeInput}>
                      <option>Select one</option>
                      <option>Running</option>
                      <option>PowerLifting</option>
                      <option>Strength-training</option>
                      <option>Yoga</option>
                  </Form.Select>
              </Form.Group>

              {showLevel && (
                  <Form.Group className="mb-3">
                      <Form.Label>Select fitness level:</Form.Label>
                      <Form.Select onChange={handleLevelInput}>
                          <option>Select one</option>
                          <option>beginner</option>
                          <option>intermediate</option>
                          <option>expert</option>
                      </Form.Select>
                  </Form.Group>
              )}

              {showConsistency && (
                  <Form.Group className="mb-3">
                      <Form.Label>Workout days per week:</Form.Label>
                      <Form.Select>
                          <option>Select one</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                          <option>6</option>
                          <option>7</option>
                      </Form.Select>
                  </Form.Group>
              )}

              <Button type="submit">Submit</Button>
          </fieldset>
      </Form>
  );
};

export default Questionnaire;