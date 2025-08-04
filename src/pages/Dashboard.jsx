import React from 'react';
import Sidebar from '../components/Sidebar';
import ProfileSection from '../components/sections/ProfileSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <h2>Editor de Currículum</h2>
        <ProfileSection />
        <ExperienceSection />
        <SkillsSection />
      </main>
    </div>
  );
}

export default Dashboard;
