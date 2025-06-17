import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/HomePage';
import DiscoverPage from '../pages/DiscoverPage';
import JobsPage from '../pages/JobsPage';
import CompaniesPage from '../pages/CompaniesPage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
// Import other pages as they are created

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/jobs" element={<JobsPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          {/* Define other routes here */}
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
