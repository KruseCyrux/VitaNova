import React, { createContext, useContext, useState } from "react";

const CVContext = createContext();

export const useCV = () => useContext(CVContext);

export const CVProvider = ({ children }) => {
  // 🧠 Datos del currículum
  const [cvData, setCvData] = useState({
    personalInfo: [
      {
        fullName: "",
        birthDate: "",
        address: "",
        phone: "",
        email: "",
        website: "",
        nationality: "",
        maritalStatus: "",
      },
    ],
    profile: [
      {
        summary: "",
        goals: "",
        experienceYears: "",
        industry: "",
        values: "",
        availability: "",
        interests: "",
        keywords: "",
        relocation: "",
        salary: "",
      },
    ],
    experience: [
      {
        company: "",
        role: "",
        location: "",
        startDate: "",
        endDate: "",
        achievements: [""],
        responsibilities: "",
        tools: "",
        employmentType: "",
        reference: "",
      },
    ],
    education: [
      {
        nivel: "",
        titulo: "",
        institucion: "",
        ubicacion: "",
        fechaInicio: "",
        fechaFin: "",
        estado: "",
        promedio: "",
        proyecto: "",
        actividades: "",
      },
    ],
    skills: [
      {
        name: "",
        category: "",
        level: "",
        experience: "",
        certificate: "",
      },
    ],
    certifications: [
      {
        name: "",
        institution: "",
        dateObtained: "",
        dateExpires: "",
        verificationId: "",
        specialty: "",
        certificateLink: "",
      },
    ],
    languages: [
      {
        language: "",
        usedProfessionally: false,
        reading: "",
        writing: "",
        speaking: "",
        certification: "",
      },
    ],
    projects: [
      {
        title: "",
        description: "",
        technologies: "",
        role: "",
        results: "",
        duration: "",
        link: "",
        team: "",
        client: "",
      },
    ],
    additionalInfo: [
      {
        type: "",
        content: "",
      },
    ],
  });

  // 🎨 Configuración de estilos (plantillas)
  const [styleConfig, setStyleConfig] = useState({
    template: "Clásica",
    color: "#2e3a59",
    font: "Roboto",
    latexTheme: "moderncv",
  });

  // 🔧 Funciones para actualizar datos
  const updateSection = (section, value) => {
    setCvData((prev) => ({
      ...prev,
      [section]: value,
    }));
  };

  const updateArraySection = (section, index, field, value) => {
    setCvData((prev) => {
      const updated = [...prev[section]];
      updated[index] = { ...updated[index], [field]: value };
      return { ...prev, [section]: updated };
    });
  };

  const addArrayItem = (section, newItem) => {
    setCvData((prev) => ({
      ...prev,
      [section]: [...prev[section], newItem],
    }));
  };

  // 🚀 Proveedor del contexto
  return (
    <CVContext.Provider
      value={{
        cvData,
        updateSection,
        updateArraySection,
        addArrayItem,
        styleConfig,
        setStyleConfig, // ✅ permite cambiar estilos desde Sidebar o Dashboard
      }}
    >
      {children}
    </CVContext.Provider>
  );
};
