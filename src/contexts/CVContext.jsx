import React, { createContext, useContext, useState } from "react";

const CVContext = createContext();

export const useCV = () => useContext(CVContext);

export const CVProvider = ({ children }) => {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: ""
    },
    profile: "",
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    languages: [],
    projects: [],
    additionalInfo: ""
  });

  const updateSection = (section, value) => {
    setCvData(prev => ({
      ...prev,
      [section]: value
    }));
  };

  const updateArraySection = (section, index, field, value) => {
    setCvData(prev => {
      const updated = [...prev[section]];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const addArrayItem = (section, newItem) => {
    setCvData(prev => ({
      ...prev,
      [section]: [...prev[section], newItem]
    }));
  };

  return (
    <CVContext.Provider value={{ cvData, updateSection, updateArraySection, addArrayItem }}>
      {children}
    </CVContext.Provider>
  );
};