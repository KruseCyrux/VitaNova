const initialData = {
  personal: {
    fullName: "Nombre Apellido",
    title: "Puesto o profesión",
    email: "correo@ejemplo.com",
    phone: "+52 55 1234 5678",
    address: "Ciudad, País",
    website: "https://miweb.com",
    linkedin: "https://linkedin.com/in/usuario",
    summary: "Escribe aquí un breve resumen profesional...",
  },
  experiences: [
    {
      id: 1,
      position: "Puesto ejemplo",
      company: "Empresa ejemplo",
      city: "Ciudad",
      from: "2020",
      to: "2023",
      description: "Descripción breve de tus responsabilidades y logros.",
    },
  ],
  education: [
    {
      id: 1,
      degree: "Licenciatura en Ejemplo",
      institution: "Universidad ejemplo",
      city: "Ciudad",
      from: "2015",
      to: "2019",
      description: "Descripción breve de tus estudios.",
    },
  ],
  skills: [
    {
      id: 1,
      name: "Habilidad técnica 1",
      level: "Avanzado",
    },
    {
      id: 2,
      name: "Habilidad técnica 2",
      level: "Intermedio",
    },
  ],
};

export default initialData;
