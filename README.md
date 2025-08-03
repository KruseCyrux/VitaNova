# VitaNova

Generador profesional de CVs con React, Vite y Firebase.

---

## ¿Qué es VitaNova?

VitaNova es una aplicación web moderna diseñada para facilitar la creación, edición y gestión de currículums vitae (CVs) de manera profesional y personalizada. Pensada para usuarios que desean destacar en el ámbito laboral, la plataforma ofrece múltiples plantillas visuales, edición en tiempo real, y opciones avanzadas como exportación a PDF, modo oscuro, multilenguaje y almacenamiento seguro en la nube mediante Firebase.

---

## Características principales

- **Editor visual e intuitivo** para crear y modificar secciones del CV.
- **Plantillas personalizables** con diferentes estilos y formatos.
- **Autenticación segura** con Firebase (registro, login y gestión de usuarios).
- **Guardado y carga de múltiples CVs** por usuario en Firestore.
- **Vista previa en tiempo real** para ver los cambios al instante.
- **Exportación a PDF** para descargar y compartir el CV fácilmente.
- **Modo oscuro y claro**, para trabajar cómodamente en cualquier ambiente.
- **Soporte multilenguaje** para llegar a más usuarios.
- **Panel de administración** para gestionar usuarios y estadísticas.

---

## Equipo de desarrollo

| Nombre Completo                        | Rol                         | Contacto                  |
|----------------------------------------|------------------------------|---------------------------|
| Martin Tonathiut Mendoza Rangel        | Desarrollador Front & Backend | cracbv@gmail.com          |
| Ricardo Alejandro Martinez Reynoso     | Desarrollador Front & Backend | ricardoalejandroreynoso3@gmail.com      |
| Luis Enrique Ramirez Armenta           | Desarrollador Front & Backend | luvare1213@gmail.com     |


> *Nota:* Los miembros pueden editar y contribuir al repositorio para mantener y mejorar la aplicación.

---

## Cómo iniciar el proyecto

1. Clona el repositorio

`git clone https://github.com/KruseCyrux/VitaNova.git`

`cd VitaNova`

2. Instala las dependencias

`npm install`

3. Configura las variables de entorno en .env con tu proyecto Firebase.

4. Ejecuta el servidor de desarrollo

`npm run dev`

5. Antes de trabajar:

`git pull origin master`

6. Después de hacer cambios:
`git add .`

`git commit -m "Descripción clara del cambio"`

`git push origin main`

---

### Estructura del Proyecto
```
├── src/ # Código fuente React (componentes, estilos, configuración Firebase)
├── public/ # Archivos públicos (favicon, assets)
├── .env # Variables de entorno para Firebase
└── firebase/ # Configuración e inicialización de Firebase
```

---

## 🚀 Progreso actual del proyecto

### ✅ **Sesión 1: Inicialización del proyecto**
- Proyecto base creado con **React + Vite**
- Estructura de carpetas modular (`components/`, `pages/`, `firebase/`, `styles/`, `utils/`, etc.)
- Sistema de rutas con **React Router DOM**
- Instalación de dependencias base

### ✅ **Sesión 2: Autenticación con Firebase**
- Integración completa de **Firebase**
- Registro y login de usuarios con **correo y contraseña**
- Manejo de errores personalizados
- Redirección y validaciones en tiempo real
- Protección básica de rutas

### ✅ **Sesión 3: Dashboard del Usuario.**
- Sidebar fija y moderna con colores alineados al logo de VitaNova (azul oscuro, azul claro, dorado).
- Navegación fluida entre las secciones internas: Login, Dashboard.
- Botón de Cerrar sesión integrado (logout con Firebase).
- Encabezado (`Header`) mostrando al usuario activo (correo).
- Base del diseño del panel administrativo.

---

## 🛠️ Tecnologías utilizadas

- React + Vite
- Firebase (Auth, Firestore, Hosting)
- React Router DOM
- CSS Modules
- JavaScript moderno (ES6+)

---
## 🎨 Paleta de colores principal

Inspirada en el logo oficial:

- Azul oscuro `#0D1B2A`
- Azul claro `#1B263B`
- Blanco puro `#FFFFFF`
- Dorado/Amarillo acento `#FFD700`

---

### Contacto y soporte
Para dudas, sugerencias o reportes de errores, contacta al líder del proyecto:
Krusemann Cyrux — cracbv@gmail.com

© 2025 VitaNova. Todos los derechos reservados.