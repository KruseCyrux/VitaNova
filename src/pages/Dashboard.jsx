import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import PersonalInfoSection from "../components/sections/PersonalInfoSection";
import ProfileSection from "../components/sections/ProfileSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import EducationSection from "../components/sections/EducationSection";
import SkillsSection from "../components/sections/SkillsSection";
import LanguagesSection from "../components/sections/LanguagesSection";
import CertificationsSection from "../components/sections/CertificationsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import AdditionalInfoSection from "../components/sections/AdditionalInfoSection";
import PhotoUploadSection from "../components/sections/PhotoUploadSection";
import "../styles/dashboard.css";
import { useCV } from "../contexts/CVContext";

function Dashboard() {
  const [activeSection, setActiveSection] = useState("personal-info");
  const { styleConfig } = useCV(); // 🎨 obtener estilo actual

  const renderSection = () => {
    switch (activeSection) {
      case "personal-info":
        return (
          <>
            <PhotoUploadSection />
            <PersonalInfoSection />
          </>
        );
      case "profile":
        return <ProfileSection />;
      case "experience":
        return <ExperienceSection />;
      case "education":
        return <EducationSection />;
      case "skills":
        return <SkillsSection />;
      case "languages":
        return <LanguagesSection />;
      case "certifications":
        return <CertificationsSection />;
      case "projects":
        return <ProjectsSection />;
      case "additional-info":
        return <AdditionalInfoSection />;
      default:
        return <PersonalInfoSection />;
    }
  };

  return (
    <div
      className="dashboard-container"
      style={{
        fontFamily: styleConfig.font,
        backgroundColor: "#f7f9fc",
        color: "#333",
      }}
    >
      <Sidebar setActiveSection={setActiveSection} />
      <main
        className="dashboard-main"
        style={{
          borderLeft: `4px solid ${styleConfig.color}`,
          transition: "all 0.3s ease",
        }}
      >
        <h2
          style={{
            color: styleConfig.color,
            marginBottom: "1rem",
          }}
        >
          Editor de Currículum – {styleConfig.template}
        </h2>
        {renderSection()}
      </main>
    </div>
  );
}

export default Dashboard;
