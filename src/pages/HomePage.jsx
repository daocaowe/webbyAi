import React from 'react';
import styled from 'styled-components';
import HeroSection from '../components/specific/HomePage/HeroSection';
import SearchBar from '../components/specific/HomePage/SearchBar';
import FeaturedCategories from '../components/specific/HomePage/FeaturedCategories';
import CompanyLogos from '../components/specific/HomePage/CompanyLogos';
import BlogHighlights from '../components/specific/HomePage/BlogHighlights'; // Import the new component

const HomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <HeroSection />
      <SearchBar />
      <FeaturedCategories />
      <CompanyLogos />
      <BlogHighlights /> {/* Add the new component here */}
    </HomePageWrapper>
  );
};

export default HomePage;
