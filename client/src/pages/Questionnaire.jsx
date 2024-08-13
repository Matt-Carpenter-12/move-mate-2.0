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

//   const location = useLocation();
//   const { user } = location.state;

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

    // Retrieve the user ID from session storage
    const userId = sessionStorage.getItem('userId');

    //need to send form data as a post request to endpoint (/api/users/:id/form)
    const formRequest = () => {
        return fetch(`/api/users/${userId}/form`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('DATA RETRIEVED: ', data);
        })
        .catch((error) => {
            console.error(error);
        });
    };
    formRequest();
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
                            <option>Beginner</option>
                            <option>Intermediate</option>
                            <option>Expert</option>
                    </Form.Select>
                </Form.Group>

                {showEquipment && (
                    <Form.Group className="mb-3">
                        <Form.Label>Select fitness Equipment:</Form.Label>
                            <ToggleButtonGroup type="radio" name='equipment' value={equipment} onChange={handleEquipmentInput}>
                                <ToggleButton id="bands" className='choice-btn' variant='warning' value='Resistance bands'>
                                    Resistance Bands
                                </ToggleButton>
                                <ToggleButton id="kettlebells" className='choice-btn' variant='warning' value='Kettlebells'>
                                    Kettlebells
                                </ToggleButton>
                                <ToggleButton id="dumbbells" className='choice-btn' variant='warning' value='Dumbbells'>
                                    Dumbbells
                                </ToggleButton>
                                <ToggleButton id="barbell" className='choice-btn' variant='warning' value='Barbell'>
                                    Barbell
                                </ToggleButton>
                                <ToggleButton id="squat-rack" className='choice-btn' variant='warning' value='Squat-rack'>
                                    Squat Rack
                                </ToggleButton>
                                <ToggleButton id="machines" className='choice-btn' variant='warning' value="Machines">
                                    Gym Machines
                                </ToggleButton>
                                <ToggleButton id="bench" className='choice-btn' variant='warning' value='Bench'>
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