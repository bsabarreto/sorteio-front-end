import React from 'react';
import Container from '../styles/Layout'
const Layout = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
}; 

export default Layout;