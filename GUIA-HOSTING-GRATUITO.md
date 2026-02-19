# Guía: Hosting Gratuito para ANSES Simple

## 🌐 Sitio actualizado
**URL:** https://uvb4sw65qj6aq.ok.kimi.link

---

## ✅ Problema corregido

Eliminé el texto "Desplazá para ver más" que se superponía sobre los botones. Ahora el hero se ve limpio.

---

## 🚀 Opciones de Hosting Gratuito

### Opción 1: Netlify (RECOMENDADA) ⭐

**Ventajas:**
- 100% gratis para sitios estáticos
- Dominio personalizado gratuito (tusitio.netlify.app)
- HTTPS automático
- Muy fácil de usar
- Arrastrar y soltar archivos

**Cómo subir:**
1. Andá a https://www.netlify.com
2. Creá una cuenta (podés usar Gmail)
3. En el dashboard, arrastrá la carpeta `dist/` al área indicada
4. Listo! Te dan una URL tipo `https://anses-simple-123.netlify.app`

**Para actualizar:**
- Simplemente arrastrá la nueva carpeta `dist/` de nuevo

---

### Opción 2: Vercel (Muy buena)

**Ventajas:**
- Gratis para proyectos personales
- Muy rápido (CDN global)
- HTTPS automático
- Buen para React

**Cómo subir:**
1. Andá a https://vercel.com
2. Creá cuenta con GitHub o Gmail
3. Instalá Vercel CLI:
   ```bash
   npm i -g vercel
   ```
4. En la carpeta del proyecto:
   ```bash
   cd /mnt/okcomputer/output/app/dist
   vercel --prod
   ```
5. Seguí las instrucciones

---

### Opción 3: GitHub Pages

**Ventajas:**
- Gratis si tenés cuenta de GitHub
- Integrado con Git
- Buen para proyectos open source

**Cómo subir:**
1. Creá un repositorio en GitHub
2. Subí los archivos de la carpeta `dist/`
3. En Settings > Pages, activá GitHub Pages
4. Seleccioná la rama main
5. Tu sitio estará en `https://tunombre.github.io/nombre-repo`

---

### Opción 4: Surge.sh (Muy simple)

**Ventajas:**
- Extremadamente fácil
- Gratis con dominio .surge.sh
- Comando de una línea

**Cómo subir:**
1. Instalá Surge:
   ```bash
   npm install -g surge
   ```
2. En la carpeta dist:
   ```bash
   cd /mnt/okcomputer/output/app/dist
   surge
   ```
3. Elegí un nombre tipo `anses-simple.surge.sh`
4. Listo!

---

### Opción 5: Firebase Hosting (Google)

**Ventajas:**
- De Google (confiable)
- Gratis hasta cierto límite
- CDN rápido

**Cómo subir:**
1. Andá a https://firebase.google.com
2. Creá un proyecto
3. Instalá Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
4. Iniciá sesión:
   ```bash
   firebase login
   ```
5. Inicializá el proyecto:
   ```bash
   cd /mnt/okcomputer/output/app/dist
   firebase init hosting
   ```
6. Subí los archivos:
   ```bash
   firebase deploy
   ```

---

## 📊 Comparación rápida

| Hosting | Dificultad | Dominio | HTTPS | Recomendado |
|---------|-----------|---------|-------|-------------|
| **Netlify** | ⭐ Fácil | .netlify.app | ✅ | ⭐⭐⭐ |
| **Vercel** | ⭐⭐ Medio | .vercel.app | ✅ | ⭐⭐⭐ |
| **GitHub Pages** | ⭐⭐ Medio | .github.io | ✅ | ⭐⭐ |
| **Surge.sh** | ⭐ Fácil | .surge.sh | ✅ | ⭐⭐ |
| **Firebase** | ⭐⭐⭐ Difícil | .web.app | ✅ | ⭐⭐ |

---

## 🎯 Mi recomendación

Para este proyecto, usá **Netlify** porque:
1. Es el más fácil (arrastrar y soltar)
2. No necesitás saber comandos
3. Es muy estable
4. HTTPS incluido
5. Perfecto para sitios estáticos

---

## 📁 Qué archivos subir

Subí **TODO el contenido** de la carpeta `dist/`:

```
dist/
├── index.html          ← Página principal
├── assets/             ← CSS, JavaScript, imágenes
│   ├── index-xxx.css
│   └── index-xxx.js
└── ... otros archivos
```

**NO subas** la carpeta `src/` ni `node_modules/`, solo `dist/`.

---

## 🔄 Cómo actualizar el sitio

Cuando hagas cambios:

1. **Compilá el proyecto:**
   ```bash
   cd /mnt/okcomputer/output/app
   npm run build
   ```

2. **Subí la nueva carpeta dist/:**
   - Netlify: Arrastrá y soltá de nuevo
   - Vercel: `vercel --prod`
   - Surge: `surge` (en la carpeta dist)

---

## 💡 Consejos

### Para dominio personalizado (.com.ar)
Si querés un dominio tipo `ansessimple.com.ar`:

1. Compralo en https://nic.ar (aprox $500-1000 ARS/año)
2. En tu hosting (Netlify/Vercel), configurá el dominio personalizado
3. Seguí las instrucciones para apuntar los DNS

### Para Analytics (ver visitas)
1. Creá cuenta en https://analytics.google.com
2. Agregá el código de seguimiento en `index.html`

---

## ❓ Problemas comunes

### "La página se ve en blanco"
- Asegurate de subir TODO el contenido de `dist/`, no solo `index.html`
- Verificá que la carpeta `assets/` también esté subida

### "Los estilos no se cargan"
- El problema es que no subiste la carpeta `assets/`
- Subí todo el contenido de `dist/`

### "El sitio es muy lento"
- Usá Netlify o Vercel (tienen CDN global)
- No uses hosting de Argentina para visitantes de Argentina (irónico, pero los CDNs internacionales son más rápidos)

---

## 📞 Soporte

- **Netlify:** https://www.netlify.com/support/
- **Vercel:** https://vercel.com/support
- **GitHub Pages:** https://docs.github.com/pages

---

**¡Elegí el hosting que prefieras y subí tu sitio!** 🚀
