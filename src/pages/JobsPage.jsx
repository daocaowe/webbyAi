import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import JobFilters from '../components/specific/JobsPage/JobFilters';
import JobList from '../components/specific/JobsPage/JobList';

const JobsPageWrapper = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FiltersContainer = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;

  @media (max-width: 992px) {
    flex-basis: 100%;
    max-width: 600px;
    width: 100%;
  }
`;

const ResultsContainer = styled.div`
  flex-grow: 1;
  min-width: 0;
`;

// Initial mock data - keeping it here for simplicity
const mockJobs = [
  { id: '1', title: 'Senior Frontend Developer', company: 'Tech Solutions Inc.', location: 'New York, NY (Remote)', tags: ['React', 'TypeScript', 'CSS-in-JS'], jobType: 'full-time', experience: 'senior' },
  { id: '2', title: 'Full Stack Engineer', company: 'Innovate Hub', location: 'San Francisco, CA', tags: ['Node.js', 'React', 'PostgreSQL', 'AWS'], jobType: 'full-time', experience: 'mid' },
  { id: '3', title: 'Junior Backend Developer', company: 'Data Systems Co.', location: 'Austin, TX (Hybrid)', tags: ['Python', 'Django', 'REST APIs'], jobType: 'full-time', experience: 'entry' },
  { id: '4', title: 'UX/UI Designer', company: 'Creative Designs LLC', location: 'Remote', tags: ['Figma', 'User Research', 'Prototyping'], jobType: 'contract', experience: 'mid' },
  { id: '5', title: 'DevOps Engineer', company: 'CloudNetics', location: 'Seattle, WA', tags: ['Kubernetes', 'Docker', 'CI/CD', 'Terraform'], jobType: 'full-time', experience: 'senior' },
  { id: '6', title: 'Product Manager', company: 'Innovate Hub', location: 'Remote', tags: ['Agile', 'Roadmap', 'SaaS'], jobType: 'full-time', experience: 'senior' },
  { id: '7', title: 'Data Analyst Intern', company: 'Tech Solutions Inc.', location: 'New York, NY', tags: ['SQL', 'Excel', 'Tableau'], jobType: 'internship', experience: 'entry' }
];
// Add jobType and experience to mockJobs for filtering

const JobsPage = () => {
  const [filteredJobs, setFilteredJobs] = useState(mockJobs);

  const handleFilterChange = useCallback((filters) => {
    let tempJobs = [...mockJobs];

    // Keywords filter (title, company, tags)
    if (filters.keywords) {
      tempJobs = tempJobs.filter(job =>
        job.title.toLowerCase().includes(filters.keywords) ||
        job.company.toLowerCase().includes(filters.keywords) ||
        (job.tags && job.tags.some(tag => tag.toLowerCase().includes(filters.keywords)))
      );
    }

    // Location filter
    if (filters.location) {
      tempJobs = tempJobs.filter(job =>
        job.location.toLowerCase().includes(filters.location)
      );
    }

    // Job Type filter
    if (filters.jobType) {
      tempJobs = tempJobs.filter(job => job.jobType === filters.jobType);
    }

    // Experience Level filter
    if (filters.experience) {
      tempJobs = tempJobs.filter(job => job.experience === filters.experience);
    }

    setFilteredJobs(tempJobs);
  }, []); // mockJobs is stable, so no dependency needed. If mockJobs could change, it should be a dependency.

  return (
    <JobsPageWrapper>
      <FiltersContainer>
        <JobFilters onFilterChange={handleFilterChange} />
      </FiltersContainer>
      <ResultsContainer>
        <h1>Available Jobs</h1>
        <JobList jobs={filteredJobs} />
      </ResultsContainer>
    </JobsPageWrapper>
  );
};

export default JobsPage;
