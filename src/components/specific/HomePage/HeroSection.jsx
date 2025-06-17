import React from 'react';
import styled from 'styled-components';

const HeroWrapper = styled.section`
  background: linear-gradient(to right, #6dd5ed, #2193b0);
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 8px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 1rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Basic button, can be replaced by a common Button component later
const CTAButton = styled.button`
  background-color: #ffffff;
  color: #2193b0;
  border: none;
  padding: 0.8rem 1.8rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const HeroSection = () => {
  return (
    <HeroWrapper>
      <Title>Find What's Next</Title>
      <Subtitle>Where startups and job seekers connect.</Subtitle>
      {/* CTA can be linked later, e.g., to job search or signup */}
      <CTAButton>Get Started</CTAButton>
    </HeroWrapper>
  );
};

export default HeroSection;
