# Guía: AdSense y Expansión del Sitio

## 🌐 Sitio en Vivo
**URL:** https://uvb4sw65qj6aq.ok.kimi.link

---

## 📋 Resumen del Sitio Creado

El sitio **ANSES Simple** es una página web informativa diseñada específicamente para personas mayores en Argentina. Incluye:

### Páginas/Secciones:
1. **Home (Página Principal)** - Hero con herramienta de consulta
2. **Herramienta de Consulta** - Selector de beneficio + DNI
3. **¿Dónde cobro ANSES?** - Guía paso a paso
4. **Preguntas Frecuentes** - 8 preguntas con respuestas
5. **Información Adicional** - Tarjetas con información extra

### Características:
- ✅ Diseño responsive (celular, tablet, desktop)
- ✅ Letra grande y legible
- ✅ Botones grandes para fácil clic
- ✅ Colores de alto contraste
- ✅ Sin animaciones molestas
- ✅ Navegación simple
- ✅ Avisos legales visibles
- ✅ SEO optimizado
- ✅ Espacios para publicidad

---

## 💰 Cómo Agregar Google AdSense

### Paso 1: Crear cuenta de AdSense
1. Andá a [Google AdSense](https://www.google.com/adsense)
2. Creá una cuenta con tu correo de Gmail
3. Agregá tu sitio web (la URL que te di)

### Paso 2: Verificar el sitio
Google te va a pedir que verifiques que sos el dueño del sitio. Tenés dos opciones:

**Opción A: Meta tag (más fácil)**
1. Copiá el meta tag que te da AdSense
2. Pegalo en el archivo `index.html` dentro de `<head>`
3. Ejemplo:
```html
<meta name="google-adsense-account" content="ca-pub-TU_ID">
```

**Opción B: Archivo HTML**
1. Descargá el archivo de verificación que te da AdSense
2. Poneló en la carpeta `public/` del proyecto

### Paso 3: Agregar el código de AdSense
En el archivo `index.html`, descomentá esta línea (sacale los `<!-- -->`):

```html
<!-- Cambiá esto: -->
<!-- <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script> -->

<!-- Por esto (con tu ID): -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-TU_ID" crossorigin="anonymous"></script>
```

### Paso 4: Insertar anuncios en el sitio

Ya dejé preparados **espacios para publicidad** en el sitio. Están marcados como:

```jsx
<div className="ad-placeholder">
  <span>Espacio publicitario</span>
</div>
```

**Ubicaciones actuales:**
1. Después de la herramienta de consulta (PaymentTool.tsx)
2. En la sección "¿Dónde cobro?" (DondeCobro.tsx)
3. Después del FAQ (FAQ.tsx)
4. En InfoCards (InfoCards.tsx)
5. En el Footer (Footer.tsx)

**Para reemplazar con anuncios reales:**

1. Andá a tu cuenta de AdSense
2. Creá un nuevo bloque de anuncio
3. Copiá el código que te dan
4. Reemplazá el `ad-placeholder` con ese código

Ejemplo:
```jsx
// Antes:
<div className="ad-placeholder">
  <span>Espacio publicitario</span>
</div>

// Después:
<ins className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-TU_ID"
  data-ad-slot="TU_SLOT"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
```

### Paso 5: Volver a compilar y subir

```bash
cd /mnt/okcomputer/output/app
npm run build
```

Y subí los archivos de la carpeta `dist/` a tu hosting.

---

## 📄 Cómo Agregar Más Páginas

### Opción 1: Agregar contenido a páginas existentes

La forma más fácil es agregar más FAQs o más tarjetas de información.

**Para agregar FAQs:**
Editá el archivo `src/data/anses-data.ts` y agregá más objetos al array `faqs`:

```typescript
export const faqs: FAQ[] = [
  // ... FAQs existentes ...
  {
    pregunta: 'Tu nueva pregunta?',
    respuesta: 'La respuesta a tu pregunta...'
  },
];
```

**Para agregar tarjetas de información:**
Editá `src/sections/InfoCards.tsx` y agregá más tarjetas.

### Opción 2: Crear una página nueva completa

Si querés crear una página completamente nueva (por ejemplo, "/calendario-completo"):

**Paso 1: Crear el componente de la página**

Creá un archivo nuevo en `src/pages/NuevaPagina.tsx`:

```tsx
export default function NuevaPagina() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-20">
        <h1>Título de la nueva página</h1>
        {/* Contenido */}
      </main>
      <Footer />
    </div>
  );
}
```

**Paso 2: Agregar ruteo**

Instalá react-router:
```bash
npm install react-router-dom
```

Modificá `App.tsx` para usar rutas:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import NuevaPagina from '@/pages/NuevaPagina';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nueva-pagina" element={<NuevaPagina />} />
      </Routes>
    </BrowserRouter>
  );
}
```

**Paso 3: Agregar enlaces de navegación**

En `Navbar.tsx`, agregá el nuevo link:

```tsx
const navLinks = [
  // ... links existentes ...
  { label: 'Nueva Página', href: '/nueva-pagina' },
];
```

---

## 🔍 SEO - Cómo mejorar el posicionamiento

### Palabras clave principales (ya incluidas):
- "cuándo cobro ANSES"
- "fecha de cobro ANSES según DNI"
- "dónde cobro ANSES"
- "calendario ANSES"
- "jubilación ANSES"
- "AUH fecha de cobro"

### Para agregar más palabras clave:

1. **Editá el `index.html`** y agregá más palabras en:
   ```html
   <meta name="keywords" content="tus, nuevas, palabras, clave">
   ```

2. **Agregá más contenido** sobre temas relacionados:
   - Cómo calcular la jubilación
   - Requisitos para jubilarse
   - Cómo tramitar la AUH
   - etc.

3. **Creá más páginas** específicas para cada tema

---

## 🎨 Personalización de colores

Si querés cambiar los colores del sitio, editá `src/index.css`:

```css
:root {
  --anses-primary: #1a3a5c;    /* Azul principal */
  --anses-secondary: #2d5a87;  /* Azul secundario */
  --anses-light: #e8f4fc;      /* Fondo claro */
  --anses-accent: #c9a227;     /* Dorado/acento */
}
```

---

## 📱 Pruebas antes de publicar

Antes de publicar cambios, verificá:

1. **En tu computadora:**
   ```bash
   npm run dev
   ```
   Y abrí http://localhost:5173

2. **En celular:**
   - Usá el modo responsive del navegador (F12 → icono de celular)
   - O abrí el sitio en tu celular real

3. **Verificá:**
   - ✅ Que los botones sean fáciles de tocar
   - ✅ Que el texto se lea bien
   - ✅ Que las imágenes carguen
   - ✅ Que los enlaces funcionen
   - ✅ Que no haya errores en la consola (F12 → Console)

---

## 🚀 Cómo publicar cambios

Cada vez que hagas cambios:

```bash
# 1. Entrá a la carpeta del proyecto
cd /mnt/okcomputer/output/app

# 2. Compilá el proyecto
npm run build

# 3. Los archivos para subir están en la carpeta dist/
# Subí todo el contenido de dist/ a tu hosting
```

---

## 💡 Ideas para futuras mejoras

1. **Calculadora de jubilación:** Una herramienta que estime cuánto le corresponde cobrar
2. **Noticias ANSES:** Sección con últimas noticias sobre aumentos y cambios
3. **Formulario de contacto:** Para que los usuarios te hagan preguntas
4. **Chat simple:** Respuestas automáticas a preguntas comunes
5. **App móvil:** Convertir el sitio en una app con PWA

---

## 📞 Soporte

Si tenés dudas sobre:
- **AdSense:** https://support.google.com/adsense
- **React:** https://react.dev
- **Hosting:** Contactá tu proveedor de hosting

---

**¡Listo! Tu sitio está preparado para recibir tráfico y generar ingresos con publicidad.** 🎉
