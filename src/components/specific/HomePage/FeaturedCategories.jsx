import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Assuming categories link somewhere

const CategoriesWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const CategoryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const CategoryItem = styled(Link)`
  background-color: #f0f8ff; // Light blue
  color: #007bff;
  padding: 0.75rem 1.5rem;
  border-radius: 20px;
  text-decoration: none;
  font-weight: 500;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

const FeaturedCategories = () => {
  // Mock data for categories
  const categories = [
    { name: 'Full Stack Developers', path: '/jobs/full-stack' },
    { name: 'Frontend Developers', path: '/jobs/frontend' },
    { name: 'Backend Developers', path: '/jobs/backend' },
    { name: 'DevOps Engineers', path: '/jobs/devops' },
    { name: 'AI & Machine Learning', path: '/jobs/ai-ml' },
    { name: 'Mobile Developers', path: '/jobs/mobile' },
    { name: 'SaaS', path: '/jobs/saas' },
    { name: 'Web3', path: '/jobs/web3' },
  ];

  return (
    <CategoriesWrapper>
      <Title>Explore Opportunities</Title>
      <CategoryList>
        {categories.map(category => (
          <CategoryItem key={category.name} to={category.path}>
            {category.name}
          </CategoryItem>
        ))}
      </CategoryList>
    </CategoriesWrapper>
  );
};

export default FeaturedCategories;
