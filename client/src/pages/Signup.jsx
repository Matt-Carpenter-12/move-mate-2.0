import { useState } from 'react';
import { Form, Button, Alert, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../utils/API'; 
import Auth from '../utils/auth';
import NavTabs from '../Components/NavTabs'
import '../assets/css/login.css'

const SignupForm = () => {
  const navigate = useNavigate();
  // set initial form state
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // set state for form validation
  const [validated, setValidated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  //handles changes in form input fields
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };


  // work being done once form is submitted
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
      return;
    }
    try {
      const response = await createUser(userFormData);
      console.log("Data:",userFormData)
        if (!response.ok) {
          throw new Error('something went wrong!');
        }

      const { token, user } = await response.json();
      console.log(user);
      Auth.signup(token);
      
      // grab user id from user and save to session storage for questionnaire use
      sessionStorage.setItem('userId', user._id);
      
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }
    
    //after: show empty
    setUserFormData({
      email: '',
      password: '',
    });

  };

  return (
    <div>
      <NavTabs />
      <div className="signup-body">
        <h1 className="signup-header"><span className='accent-color'>SIGN UP TODAY</span> <span className="light-color">FOR YOUR MOVE MATE ACCOUNT</span></h1>
        <Card className='signup-card'>
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
              Something went wrong with your signup!
            </Alert>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='email'>Email</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email Address'
                  name='email'
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                />
              <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className='mb-3'>
              <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='Enter Password'
                  name='password'
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
              <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
            </Form.Group>
            <Button disabled={!(userFormData.email && userFormData.password)} type='submit' className='btn signup-btn'>
                SIGN UP
            </Button>  
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default SignupForm;
