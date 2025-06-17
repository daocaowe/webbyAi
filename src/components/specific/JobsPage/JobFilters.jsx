import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const FiltersWrapper = styled.aside`
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  width: 100%;
  max-width: 300px;
  height: fit-content;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Input = styled.input`
  width: calc(100% - 1rem);
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 0.9rem;
`;

const JobFilters = ({ onFilterChange }) => {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');

  useEffect(() => {
    // This effect calls the onFilterChange prop whenever any filter state changes.
    // This is a common pattern for lifting state up or notifying parent components.
    onFilterChange({
      keywords: keywords.toLowerCase(),
      location: location.toLowerCase(),
      jobType,
      experience
    });
  }, [keywords, location, jobType, experience, onFilterChange]);

  return (
    <FiltersWrapper>
      <Title>Filter Jobs</Title>
      <FormGroup>
        <Label htmlFor="keywords">Keywords</Label>
        <Input
          type="text"
          id="keywords"
          placeholder="Job title, company, skill"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="location">Location</Label>
        <Input
          type="text"
          id="location"
          placeholder="City, state, or remote"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label htmlFor="jobType">Job Type</Label>
        <Select id="jobType" value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">All Types</option>
          <option value="full-time">Full-time</option>
          <option value="part-time">Part-time</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </Select>
      </FormGroup>
      <FormGroup>
        <Label htmlFor="experience">Experience Level</Label>
        <Select id="experience" value={experience} onChange={(e) => setExperience(e.target.value)}>
          <option value="">All Levels</option>
          <option value="entry">Entry Level</option>
          <option value="mid">Mid Level</option>
          <option value="senior">Senior Level</option>
        </Select>
      </FormGroup>
    </FiltersWrapper>
  );
};

export default JobFilters;
