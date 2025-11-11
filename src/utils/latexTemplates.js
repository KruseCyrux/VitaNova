// src/utils/latexTemplates.js

export const latexTemplates = {
  Clasica: `
  \\documentclass{article}
  \\begin{document}
  \\section*{Nombre}
  {{nombre}}

  \\section*{Perfil}
  {{perfil}}
  \\end{document}
  `,
  Moderna: `
  \\documentclass{moderncv}
  \\begin{document}
  \\makecvtitle
  {{contenido}}
  \\end{document}
  `,
  Minimalista: `
  \\documentclass{article}
  \\usepackage{geometry}
  \\begin{document}
  {{contenido}}
  \\end{document}
  `,
};
