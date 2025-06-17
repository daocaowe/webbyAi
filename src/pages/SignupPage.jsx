import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormWrapper, FormContainer, FormTitle, FormGroup, Label, Input, Button, FormText } from '../components/common/FormElements';

const SignupPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    // Mock signup logic
    console.log('Signup attempt with:', { fullName, email, password });
    alert('Signup functionality is a mockup. Redirecting to homepage.');
    navigate('/');
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Create Account</FormTitle>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            placeholder="Your Name"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email Address</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Minimum 8 characters"
            minLength="8"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Re-enter your password"
          />
        </FormGroup>
        <Button type="submit">Sign Up</Button>
        <FormText>
          Already have an account? <Link to="/login">Log In</Link>
        </FormText>
      </FormContainer>
    </FormWrapper>
  );
};

export default SignupPage;
