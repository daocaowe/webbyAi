import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FormWrapper, FormContainer, FormTitle, FormGroup, Label, Input, Button, FormText } from '../components/common/FormElements';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock login logic
    console.log('Login attempt with:', { email, password });
    alert('Login functionality is a mockup. Redirecting to homepage.');
    navigate('/');
  };

  return (
    <FormWrapper>
      <FormContainer onSubmit={handleSubmit}>
        <FormTitle>Log In</FormTitle>
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
            placeholder="••••••••"
          />
        </FormGroup>
        <Button type="submit">Log In</Button>
        <FormText>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </FormText>
      </FormContainer>
    </FormWrapper>
  );
};

export default LoginPage;
