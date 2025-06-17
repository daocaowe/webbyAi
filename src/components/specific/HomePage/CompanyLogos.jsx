import React from 'react';
import styled from 'styled-components';

const LogosWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 1rem 0;
  background-color: #f8f9fa; // Slightly different background
  border-radius: 8px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #555;
`;

const LogoGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

// Placeholder for a logo. In a real app, this would be an <img> tag.
const LogoPlaceholder = styled.div`
  font-size: 1.2rem;
  color: #777;
  padding: 1rem;
  border: 1px dashed #ccc;
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
`;

const CompanyLogos = () => {
  // Mock data for company names (representing logos)
  const companies = [
    'Innovatech', 'NextGen Solutions', 'Alpha Corp', 'Beta Startup', 'Gamma AI', 'Delta Web'
  ];

  return (
    <LogosWrapper>
      <Title>Trusted by Leading Startups</Title>
      <LogoGrid>
        {companies.map(company => (
          <LogoPlaceholder key={company}>{company} Logo</LogoPlaceholder>
        ))}
      </LogoGrid>
    </LogosWrapper>
  );
};

export default CompanyLogos;
