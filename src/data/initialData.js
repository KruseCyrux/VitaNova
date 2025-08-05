const initialData = {
  personalInfo: [
    {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      linkedin: "",
      website: "",
      birthDate: "",
      nationality: "",
    },
  ],

  profile: [
    {
      summary: "",                    // Descripción breve de objetivos profesionales
      yearsExperience: "",            // Años de experiencia
      mainSector: "",                 // Sector o industria principal
      personalValues: "",             // Valores personales o profesionales
      availability: "",               // Disponibilidad (inmediata, medio tiempo, freelance, etc.)
      jobInterests: "",               // Intereses laborales (puestos deseados, áreas de interés)
      keyPhrases: "",                 // Frases clave (orientado a resultados, trabajo en equipo, etc.)
      internationalWorkPermit: false,// Permiso de trabajo internacional o disponibilidad de mudanza
      salaryExpectations: "",         // Pretensiones salariales (opcional/privado)
    },
  ],

  experience: [
    {
      company: "",                   // Nombre de la empresa
      role: "",                     // Cargo o puesto
      cityCountry: "",              // Ciudad y país
      startDate: "",                // Fecha de inicio (mes y año)
      endDate: "",                  // Fecha de finalización (mes y año)
      achievements: [""],           // Logros principales (bullet points)
      keyResponsibilities: "",     // Responsabilidades clave
      technologies: "",             // Tecnologías/herramientas utilizadas
      employmentType: "",           // Tipo de empleo (tiempo completo, remoto, etc.)
      reference: {                  // Referencia laboral
        name: "",
        contact: "",
      },
    },
  ],

  education: [
    {
      educationLevel: "",            // Nivel educativo (Licenciatura, Técnico, Maestría, etc.)
      degreeName: "",                // Nombre del título obtenido
      institution: "",               // Institución educativa
      cityCountry: "",               // Ciudad y país
      startDate: "",                 // Fecha de inicio
      endDate: "",                   // Fecha de finalización
      status: "",                   // Estado (finalizado, en curso, trunco)
      grades: "",                   // Promedio o calificaciones relevantes (opcional)
      thesisProject: "",            // Proyecto de tesis o investigación
      extracurricularActivities: "",// Actividades extracurriculares / cargos
    },
  ],

  skills: [
    {
      category: "",                 // Técnica o Blanda
      skillName: "",               // Nombre de la habilidad
      proficiencyLevel: "",        // Nivel de dominio (Básico / Intermedio / Avanzado / Experto)
      yearsExperience: "",         // Años de experiencia
      certification: "",           // Certificado que lo respalde (opcional)
    },
  ],

  languages: [
    {
      language: "",                // Nombre del idioma
      reading: "",                 // Nivel de lectura
      writing: "",                 // Nivel de escritura
      speaking: "",                // Nivel de habla
      certification: "",           // Certificaciones (TOEFL, IELTS, DELF, etc.)
      usedProfessionally: false,   // Uso profesional (checkbox)
    },
  ],

  projects: [
    {
      title: "",                  // Nombre del proyecto
      description: "",            // Descripción breve
      technologies: "",           // Tecnologías o herramientas utilizadas
      role: "",                  // Rol desempeñado
      results: "",               // Resultados o métricas logradas
      duration: "",              // Duración
      link: "",                  // Enlace al repositorio o demo
      team: "",                  // Equipo involucrado (opcional)
      client: "",                // Cliente (si aplica)
    },
  ],

  additionalInfo: [
    {
      type: "",                  // Tipo de información (premios, membresías, etc.)
      content: "",               // Contenido detallado
    },
  ],

  certifications: [
    {
      name: "",                  // Nombre de la certificación
      institution: "",           // Institución que la otorga
      dateObtained: "",          // Fecha de obtención
      dateExpires: "",           // Fecha de vencimiento (si aplica)
      verificationId: "",        // ID de verificación o URL
      specialty: "",             // Ámbito o especialidad
      certificateLink: "",       // Enlace al certificado digital
    },
  ],
};
