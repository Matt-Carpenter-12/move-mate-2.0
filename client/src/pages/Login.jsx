import '../assets/css/login.css'
import NavTabs from '../Components/NavTabs'
import Auth from '../utils/auth';
import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { loginUser } from '../utils/API'; 
import Card from 'react-bootstrap/Card';

function Login() {

     // set initial form state
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  // set state for form validation
  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = await loginUser(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }

      const { token, user } = await response.json();
      console.log(user);
      sessionStorage.setItem('userId', user._id);
      Auth.login(token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      email: '',
      password: '',
    });
  };

    return (
        <div>
          <NavTabs />
            <div className="login-body">
                <h1 className="login-header"><span className='accent-color'>LOG IN</span> <span className="light-color">TO YOUR MOVE MATE ACCOUNT</span></h1>
                <Card className='login-card'>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        {/* show alert if server response is bad */}
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your login!
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
                            <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label htmlFor='password'>Password</Form.Label>
                            <Form.Control
                                type='password'
                                placeholder='Enter password'
                                name='password'
                                onChange={handleInputChange}
                                value={userFormData.password}
                                required
                            />
                            <Form.Control.Feedback type='invalid'>Password is required!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Check type="checkbox" label="Remember Me" />
                        <Button disabled={!(userFormData.email && userFormData.password)} type='submit' className="btn login-btn">
                                LOGIN
                            </Button>
            
                    </Form>
                </Card>
            </div>
        </div>
    )
}

export default Login;