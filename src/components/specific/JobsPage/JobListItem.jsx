import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ItemWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.08);
  padding: 1.5rem;
  margin-bottom: 1rem;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 10px rgba(0,0,0,0.12);
  }
`;

const JobTitle = styled.h4`
  font-size: 1.2rem;
  color: #007bff;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

const CompanyName = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 0.25rem;
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 1rem;
`;

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const Tag = styled.span`
  background-color: #e9ecef;
  color: #495057;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
`;

const DetailsLink = styled(Link)`
  display: inline-block;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.9rem;

  &:hover {
    text-decoration: underline;
  }
`;

const JobListItem = ({ job }) => {
  if (!job) return null;

  return (
    <ItemWrapper>
      <JobTitle>{job.title}</JobTitle>
      <CompanyName>{job.company}</CompanyName>
      <Location>{job.location}</Location>
      {job.tags && job.tags.length > 0 && (
        <TagsWrapper>
          {job.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </TagsWrapper>
      )}
      <DetailsLink to={`/jobs/${job.id}`}>View Details</DetailsLink>
    </ItemWrapper>
  );
};

export default JobListItem;
