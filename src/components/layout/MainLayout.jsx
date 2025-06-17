import React from 'react';
import Header from './Header';
import Footer from './Footer';
import styled from 'styled-components';

const MainContent = styled.main`
  min-height: calc(100vh - 150px); // Adjust based on header/footer height
  padding: 1rem;
`;

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </>
  );
};

export default MainLayout;
