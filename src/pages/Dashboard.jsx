import React from 'react';
import Sidebar from '../components/Sidebar';
import PersonalInfoSection from '../components/sections/PersonalInfoSection';
import ProfileSection from '../components/sections/ProfileSection';
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationSection from "../components/sections/EducationSection";
import SkillsSection from "../components/sections/SkillsSection";
import LanguagesSection from "../components/sections/LanguagesSection";
import CertificationsSection from '../components/sections/CertificationsSection';
import ProjectsSection from "../components/sections/ProjectsSection";
import AdditionalInfoSection from '../components/sections/AdditionalInfoSection';
import PreviewSection from "../components/PreviewSection";
import '../styles/dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <main className="dashboard-main">
        <h2>Editor de Currículum</h2>
        <PersonalInfoSection />
        <ProfileSection />
         <ExperienceSection />
        <EducationSection />
        <SkillsSection />
        <CertificationsSection />
        <LanguagesSection />
        <ProjectsSection />
        <AdditionalInfoSection />
        <PreviewSection />
      </main>
    </div>
  );
}

export default Dashboard;
