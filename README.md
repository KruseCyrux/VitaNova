# 🌐 VitaNova – Proyecto Integrador

**VitaNova** es un currículum interactivo, profesional y dinámico desarrollado como parte de un **proyecto integrador académico**, con el objetivo de ofrecer una representación digital completa y moderna de la trayectoria de una persona. Este CV online no solo muestra información personal y profesional, sino que incorpora funcionalidades avanzadas para mejorar la presentación, accesibilidad e interacción del usuario con su perfil.

Este desarrollo ha sido realizado por:

**Ricardo Alejandro Martínez Reynoso**  
**Luis Enrique Ramírez Armenta**  
**Martín Tonathiut Mendoza Rangel**

En conjunto, este proyecto representa una fusión de conocimientos técnicos, creatividad y visión profesional, pensado para destacar en un entorno competitivo y cada vez más digitalizado.

---

## 🧱 Estructura del Proyecto

- **Frontend:** React + Vite  
- **Estilos:** CSS Modules (Vanilla CSS)  
- **Multilenguaje:** React-i18next  
- **Contacto:** EmailJS  
- **PDF Export:** html2pdf.js  
- **Datos persistentes:** localStorage  
- **Edición en vivo del CV desde la interfaz**

---


## 📅 Avance por sesiones
```
| Sesión | Estado      | Descripción                                                                                   | Archivos / Carpetas clave                                          |
| ------ | ----------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| 1      | ✅ Realizada | Inicialización del proyecto, estructura base y diseño general                                 | `/src/`, `App.jsx`, `index.html`                                   |
| 2      | ✅ Realizada | Página de perfil e información personal                                                       | `components/ProfileCard.jsx`, `data/personal.js`                   |
| 3      | ✅ Realizada | Experiencia laboral y educación en línea de tiempo                                            | `components/Timeline.jsx`, `data/experience.js`                    |
| 4      | ✅ Realizada | Sección de habilidades generales                                                              | `components/Skills.jsx`, `data/skills.js`                          |
| 5      | ✅ Realizada | Menús especializados según área profesional                                                   | `components/SpecialSkills.jsx`, `data/profiles/`                   |
| 6      | ✅ Realizada | Galería de proyectos                                                                          | `components/Projects.jsx`, `data/projects.js`                      |
| 7      | ✅ Realizada | Formulario de contacto funcional con EmailJS                                                  | `components/Contact.jsx`                                           |
| 8      | ✅ Realizada | Generador de PDF con html2pdf.js                                                              | `components/ExportButton.jsx`                                      |
| 9      | ✅ Realizada | Implementación de multilenguaje con React-i18next                                             | `i18n/config.js`, `locales/`                                       |
| 10     | ✅ Realizada | Mejoras de accesibilidad y SEO                                                                | `index.html`, etiquetas meta y atributos SEO                       |
| 11     | ✅ Realizada | Subida a GitHub y despliegue en Vercel o GitHub Pages                                         | `README.md`, configuraciones de despliegue                         |
| 12     | ✅ Realizada | Editor tipo CVGEN: panel de edición y vista previa en tiempo real, guardado en localStorage   | `components/CVEditor.jsx`, `components/CVPreview.jsx`, `src/data/`|
| 13     | ⏳ Pendiente | Mejorar estilos visuales para igualar el diseño y experiencia del sitio Netlify               | CSS avanzado, animaciones, optimizaciones visuales                 |
| 14     | ⏳ Pendiente | Implementar exportación avanzada (PDF con estilos profesionales, opciones de descarga)        | Mejoras en `ExportButton.jsx` y backend opcional                   |
| 15     | ⏳ Pendiente | Añadir carga y edición de foto de perfil                                                      | Componente `ProfilePhotoUploader.jsx` y backend opcional           |
| 16     | ⏳ Pendiente | Agregar funcionalidades de guardado en backend / sincronización entre dispositivos            | API backend o integración con bases de datos                       |
| 17     | ⏳ Pendiente | Añadir plantillas visuales múltiples y selector para el usuario                               | Nuevos temas CSS y lógica de selección en el editor                |
| 18     | ⏳ Pendiente | Mejorar accesibilidad (modo oscuro, compatibilidad ARIA, navegación por teclado)              | Ajustes CSS y componentes accesibles                               |
| 19     | ⏳ Opcional  | Incorporar soporte multilenguaje completo con traducción automática y cambio dinámico         | Mejoras en `react-i18next` y archivos de traducción                |
| 20     | ⏳ Opcional  | Preparar función para compartir enlace público del CV (deploy dinámico o integración backend) | Backend y rutas dinámicas                                          |

```
---

## 🔧 Funcionalidades

- ✅ Diseño responsive y adaptable a cualquier dispositivo  
- ✅ Generación de CV descargable en formato PDF  
- ✅ Soporte multilenguaje (español e inglés)  
- ✅ Formulario de contacto conectado a correo electrónico  
- ✅ Integración con redes sociales y portafolios  
- ✅ Línea de tiempo interactiva para educación y experiencia  
- ✅ Sección de proyectos destacados  
- ✅ Menús especializados por área laboral (ej. desarrollador, abogado, ingeniero)  
- ✅ Habilidades generales y técnicas organizadas visualmente  
- ✅ Accesibilidad básica y optimización SEO  
- ✅ Edición en vivo de todo el contenido del CV desde la interfaz  
- ✅ Datos persistentes mediante localStorage  

---

## 📥 Instalación y ejecución local del proyecto

# 1. Clona el repositorio
git clone https://github.com/KruseCyrux/VitaNova.git

# 2. Entra a la carpeta del proyecto
cd VitaNova

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev

# 5.⚠️ Asegúrate de tener Node.js v18 o superior y npm instalados en tu equipo.

---

## 📦 Tecnologías usadas
- React + Vite
- CSS Modules (estilos personalizados)
- React-i18next (multilenguaje)
- EmailJS (formulario de contacto)
- html2pdf.js (exportación a PDF)
- localStorage (persistencia de datos)
- Proyecto modular, escalable y editable en vivo desde la interfaz

---