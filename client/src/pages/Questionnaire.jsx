import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card'


const Questionnaire = () => {
  const [fitnessLevel, setFitnessLevel] = useState('')
  const [Equipment, setEquipment] = useState(false);
  const [Consistency, setConsistency] = useState(false);
  const [value, setValue] = useState([]);

  //shows Equipment after selection from previous question has been made
  const handleTypeInput = (e) => {
      if (e.target.value !== 'Select one') {
          setEquipment(true);
      } else {
          setEquipment(false);
          setConsistency(false);
      } 
  };
  //shows consistency after selection from previous question has been made
  const handleEquipmentInput = (val) => {
      setValue(val);
      if (val.length > 0) {
          setConsistency(true);
      } else {
          setConsistency(false);
      } 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // need to add validation to check required fields
    //need to save user input data

    const formData = {
      fitnessLevel,
      equipment,
      consistency,
    };
    console.log('Form Data:', formData);
  };

  return (
    <div className='survey-body'>
        <h1 className="survey-header"><span className='accent-color'>Fitness</span> <span className="light-color">Requirements</span></h1>
        <Card body className='survey-card'>
            <Form onSubmit={handleSubmit}>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label>Select fitness level:</Form.Label>
                    <Form.Select onChange={handleTypeInput}>
                            <option>Select one</option>
                            <option>beginner</option>
                            <option>intermediate</option>
                            <option>expert</option>
                    </Form.Select>
                </Form.Group>

                {Equipment && (
                    <Form.Group className="mb-3">
                        <Form.Label>Select fitness Equipment:</Form.Label>
                            <ToggleButtonGroup type="checkbox" value={value} onChange={handleEquipmentInput}>
                                <ToggleButton id="dumbbells" value={1}>
                                    Dumbbells
                                </ToggleButton>
                                <ToggleButton id="barbell" value={2}>
                                    Barbell
                                </ToggleButton>
                                <ToggleButton id="squat-rack" value={3}>
                                    Squat Rack
                                </ToggleButton>
                                <ToggleButton id="machines" value={4}>
                                    Gym Machines
                                </ToggleButton>
                                <ToggleButton id="bench" value={5}>
                                    Bench
                                </ToggleButton>
                            </ToggleButtonGroup>
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
                <Button type="submit" className='survey-btn'>Submit</Button>
                </Link>
            </fieldset>
            </Form>
        </Card>
    </div>
  );
};

export default Questionnaire;