import React from 'react';
import styled from 'styled-components';

const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 0.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 0.8rem;
  font-size: 1rem;
  outline: none;
  border-radius: 6px 0 0 6px;
`;

const SearchButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const SearchBar = ({ placeholder = "Search for jobs, companies, or skills" }) => {
  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder={placeholder} />
      <SearchButton>Search</SearchButton>
    </SearchBarWrapper>
  );
};

export default SearchBar;
