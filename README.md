# Portafolio de Benjamin Cadillo

Sitio personal profesional desarrollado en React + Vite, preparado para Vercel.

## 1. Requisitos
- Node.js 20.19+ o 22.12+
- npm

## 2. Ejecutar en tu computadora
Abre una terminal en esta carpeta y ejecuta:

```bash
npm install
npm run dev
```

Abre la dirección que muestra la terminal (normalmente http://localhost:5173).

## 3. Construir versión de producción

```bash
npm run build
npm run preview
```

## 4. Personalizar antes de publicar
Abre `src/data.js` y configura el objeto `profile`:
- `email`: correo de contacto (opcional)
- `whatsapp`: número con código de país, solo dígitos (opcional)
- `github`: enlace completo al perfil de GitHub (opcional)
- `linkedin`: enlace completo al perfil de LinkedIn (opcional)
- `cv`: `/cv.pdf` si colocas tu currículo dentro de `public/` (opcional)

Los datos que dejes vacíos NO mostrarán enlaces inservibles. Si no agregas correo ni WhatsApp aparecerá un aviso editorial para completar el contacto: es importante poner al menos uno antes de publicarlo.

### Proyectos
En el arreglo `projects` puedes editar títulos, descripciones, categorías, tecnologías, características y enlaces.

- `image`: ruta a una captura dentro de `public/proyectos/`, por ejemplo `/proyectos/sade.webp`.
- `demo`: URL HTTPS de una versión pública (déjalo vacío si no tienes una).
- `repository`: URL HTTPS del repositorio (déjalo vacío si es privado).

No se incluyeron capturas ni enlaces ficticios. Las tarjetas tienen fondos gráficos elegantes como sustitutos. Verifica las características y tecnologías de los proyectos secundarios antes de presentar el contenido como ficha técnica definitiva.

### Agregar una captura
1. Crea `public/proyectos`.
2. Copia, por ejemplo, `sade.webp` allí.
3. Cambia `image: ''` a `image: '/proyectos/sade.webp'` para ese proyecto.

### Cambiar foto/identidad
El diseño usa un monograma `BC` como marca gráfica y un bloque geométrico, sin requerir una foto personal.

## 5. Subir a GitHub
Crea un repositorio vacío en github.com, por ejemplo `portafolio-benjamin`, sin marcar README si ya lo tienes.

En la carpeta del proyecto ejecuta:

```bash
git init
git add .
git commit -m "Portafolio profesional inicial"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/portafolio-benjamin.git
git push -u origin main
```

Reemplaza `TU_USUARIO` por tu usuario real. Es posible que GitHub solicite autenticación.

## 6. Publicarlo en Vercel
1. Entra a https://vercel.com/ y accede con GitHub.
2. Ve a **Add New → Project**.
3. Importa el repositorio `portafolio-benjamin`.
4. Configuración: **Framework Preset: Vite** / **Build Command: npm run build** / **Output Directory: dist** / **Root Directory: .**.
5. Presiona **Deploy**. Se creará una URL `*.vercel.app`.
6. Para actualizar, modifica archivos y ejecuta `git add .`, `git commit -m "Actualizar portafolio"`, `git push`. Vercel desplegará el cambio.

### Alternativa con CLI
Instala Vercel CLI: `npm i -g vercel`, luego ejecuta `vercel` (preview) o `vercel --prod` (producción) desde la carpeta. Necesitarás iniciar sesión.

## Notas
- No requiere base de datos ni variables de entorno.
- El contacto se hace mediante enlaces directos a WhatsApp y/o correo, no hay backend de formularios.
- No incluye panel de administración: los proyectos se editan desde `src/data.js`.
- Comprueba la ortografía, derechos de uso de imágenes y privacidad de datos antes de publicar.

## Servicios adicionales: mantenimiento, soporte y redes
La sección **Soporte técnico** está incorporada en `src/main.jsx` e incluye mantenimiento preventivo de computadoras y laptops, diagnóstico de fallas, instalación de software, redes cableadas/Wi-Fi, revisión de conectividad, asistencia y asesoramiento tecnológico. Se puede modificar el listado directamente en la sección `id="soporte"`.

Los servicios se ofrecen sujetos a diagnóstico y alcance acordado; evita publicar garantías, certificaciones o precios que no hayan sido definidos. Para habilitar consultas, rellena `email` o `whatsapp` en `src/data.js`.
