import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Questionnaire = () => {
  const [Level, setLevel] = useState(false);
  const [Consistency, setConsistency] = useState(false);

  //shows level after selection from previous question has been made
  const handleTypeInput = (e) => {
      if (e.target.value !== 'Select one') {
          setLevel(true);
      } else {
          setLevel(false);
          setConsistency(false);
      }
  };
  //shows consistency after selection from previous question has been made
  const handleLevelInput = (e) => {
      if (e.target.value !== 'Select one') {
          setConsistency(true);
      } else {
          setConsistency(false);
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

              {Level && (
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

              {Consistency && (
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

              <Link to='/Homepage'>
              <Button type="submit">Submit</Button>
              </Link>
          </fieldset>
      </Form>
  );
};

export default Questionnaire;