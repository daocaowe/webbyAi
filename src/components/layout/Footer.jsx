import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #f8f9fa;
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  margin-top: 2rem;
`;

const FooterText = styled.p`
  color: #777;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterText>© ${new Date().getFullYear()} WellfoundClone. All rights reserved. Inspired by Wellfound.</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
