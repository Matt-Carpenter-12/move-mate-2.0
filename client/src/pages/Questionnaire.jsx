import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Card from 'react-bootstrap/Card'


const Questionnaire = () => {
  const [fitnessLevel, setFitnessLevel] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [workoutDays, setWorkoutDays] = useState('');
  const [showEquipment, setShowEquipment] = useState(false);
  const [showConsistency, setShowConsistency] = useState(false);
  const [value, setValue] = useState([]);

  //shows Equipment after selection from previous question has been made
  const handleTypeInput = (e) => {
    const value = e.target.value;
    setFitnessLevel(value);
        if (value !== 'Select one') {
            setShowEquipment(true);
        } else {
            setShowEquipment(false);
            setShowConsistency(false);
    }
  };
  //shows consistency after selection from previous question has been made
  const handleEquipmentInput = (val) => {
      setValue(val);
      setEquipment(val);
      if (val.length > 0) {
          setShowConsistency(true);
      } else {
          setShowConsistency(false);
      } 
  };

  //updates state of workout days
  const handleConsistencyInput = (e) => {
    setWorkoutDays(e.target.value);
  };

  //saves user input once submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fitnessLevel,
      equipment,
      workoutDays,
    };
    console.log('Form Data:', formData);
    localStorage.setItem('formData', JSON.stringify(formData));
  };

  return (
    <div className='survey-body'>
        <h1 className="survey-header"><span className='accent-color'>Fitness</span> <span className="light-color">Requirements</span></h1>
        <Card body className='survey-card'>
            <Form onSubmit={handleSubmit}>
            <fieldset>
                <Form.Group className="mb-3">
                    <Form.Label>Select fitness level:</Form.Label>
                    <Form.Select value={fitnessLevel} onChange={handleTypeInput} required>
                            <option>Select one</option>
                            <option>beginner</option>
                            <option>intermediate</option>
                            <option>expert</option>
                    </Form.Select>
                </Form.Group>

                {showEquipment && (
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

                {showConsistency && (
                    <Form.Group className="mb-3">
                        <Form.Label>Workout days per week:</Form.Label>
                        <Form.Select value={workoutDays} onChange={handleConsistencyInput} required>
                            <option>Select one</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </Form.Select>
                    </Form.Group>
                )}

                <Button type="submit" className='survey-btn'>Submit</Button>
                {/* <Link to='/Homepage'>
                <Button type="submit" className='survey-btn'>Submit</Button>
                </Link> */}
            </fieldset>
            </Form>
        </Card>
    </div>
  );
};

export default Questionnaire;