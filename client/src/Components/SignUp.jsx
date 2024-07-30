import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignUp() {
    return (
        <>
        <Form.Group className="mb-3" controlId="workoutType">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
        <Form.Check
            type="switch"
            id="custom-switch"
            label="Notify me reminders of my workout"
        />
        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
        <Form.Control
            type="password"
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
        />
        </>
    )
}

export default SignUp;