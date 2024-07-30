import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Questionnaire = ({props}) => {
    return(
        <Form>
        <fieldset>
        <Form.Group className="mb-3">
          <Form.Label> Select workout type:</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Select one</option>
            <option>Running</option>
            <option>PowerLifting</option>
            <option>Strength-training</option>
            <option>Yoga</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Select fitness level:</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Select one</option>
            <option>beginner</option>
            <option>intermediate</option>
            <option>expert</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Workout days per week:</Form.Label>
          <Form.Select id="disabledSelect">
            <option>Select one</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
          </Form.Select>
        </Form.Group>
        <Form.Check
            type="switch"
            id="custom-switch"
            label="Notify me reminders of my workout"
        />
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
    )
};

export default Questionnaire;