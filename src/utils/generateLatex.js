export const generateLatex = (data) => {
  const safe = (v) => (v && v.trim() !== "" ? v : "");

  const replace = (template, values) => {
    let output = template;
    for (const key in values) {
      const val = values[key];
      const pattern = new RegExp(`{{${key}}}`, "g");
      output = output.replace(pattern, safe(val));
    }
    return output;
  };

  const texTemplate = `
\\section*{Perfil}
${safe(data.profile.summary)}

\\section*{Experiencia}
${data.experience.map((exp) => `
\\textbf{${safe(exp.company)}} (${safe(exp.startDate)} - ${safe(exp.endDate)})\\\\
${safe(exp.role)}\\\\
${safe(exp.responsibilities)}\\\\
${(exp.achievements || []).map(a => "\\item " + safe(a)).join("\\\\")}
`).join("\\\\")}

\\section*{Educación}
${data.education.map((ed) => `
\\textbf{${safe(ed.titulo)}} - ${safe(ed.institucion)} (${safe(ed.fechaInicio)} - ${safe(ed.fechaFin)})\\\\
${safe(ed.ubicacion)}
`).join("\\\\")}

\\section*{Habilidades}
${data.skills.map((sk) => `\\textbf{${safe(sk.name)}} - ${safe(sk.level)}`).join("\\\\")}

\\section*{Idiomas}
${data.languages.map((lg) => `${safe(lg.language)} (${safe(lg.speaking)})`).join("\\\\")}

\\section*{Proyectos}
${data.projects.map((pr) => `\\textbf{${safe(pr.title)}} - ${safe(pr.technologies)}`).join("\\\\")}

\\section*{Certificaciones}
${data.certifications.map((c) => `\\textbf{${safe(c.name)}} - ${safe(c.institution)}`).join("\\\\")}

\\section*{Información adicional}
${data.additionalInfo.map((a) => `\\textbf{${safe(a.type)}}: ${safe(a.content)}`).join("\\\\")}
`;

  return texTemplate;
};
