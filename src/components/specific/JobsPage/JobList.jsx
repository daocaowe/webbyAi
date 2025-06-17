import React from 'react';
import styled from 'styled-components';
import JobListItem from './JobListItem';

const ListWrapper = styled.div`
  flex-grow: 1; // Takes remaining space in a flex container
`;

const NoJobsMessage = styled.p`
  text-align: center;
  color: #777;
  font-size: 1rem;
  padding: 2rem;
`;

const JobList = ({ jobs }) => {
  if (!jobs || jobs.length === 0) {
    return <NoJobsMessage>No jobs found matching your criteria.</NoJobsMessage>;
  }

  return (
    <ListWrapper>
      {jobs.map(job => (
        <JobListItem key={job.id} job={job} />
      ))}
    </ListWrapper>
  );
};

export default JobList;
