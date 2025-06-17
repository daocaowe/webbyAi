import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  background-color: #fff;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #555;
  font-weight: 500;

  &:hover {
    color: #007bff;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

const Button = styled(Link)`
  padding: 0.5rem 1rem;
  border: 1px solid #007bff;
  border-radius: 4px;
  text-decoration: none;
  color: #007bff;
  font-weight: 500;

  &.primary {
    background-color: #007bff;
    color: white;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo to="/">WellfoundClone</Logo>
      <Nav>
        <NavLink to="/discover">Discover</NavLink>
        <NavLink to="/jobs">For Job Seekers</NavLink>
        <NavLink to="/companies">For Companies</NavLink>
      </Nav>
      <AuthButtons>
        <Button to="/login">Log In</Button>
        <Button to="/signup" className="primary">Sign Up</Button>
      </AuthButtons>
    </HeaderWrapper>
  );
};

export default Header;
