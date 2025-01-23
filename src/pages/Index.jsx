import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Team from '../components/Team';
import Dashboard from '../components/Dashboard';

const Index = () => {
  const [showDashboard, setShowDashboard] = React.useState(false);

  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar onDashboardClick={() => setShowDashboard(true)} />
      <Hero onGetStarted={() => setShowDashboard(true)} />
      <Features />
      <Team />
    </div>
  );
};

export default Index;