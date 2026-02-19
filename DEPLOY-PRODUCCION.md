# Subir a producción (Replit, Vercel o Netlify) para AdSense

Para registrar el sitio en Google AdSense necesitás una **URL pública**. Acá tenés varias opciones gratuitas.

---

## Opción 1: Replit (listo para usar)

El proyecto ya tiene `.replit` y `replit.nix` configurados.

### Pasos

1. **Entrá a [replit.com](https://replit.com)** y creá cuenta (o iniciá sesión con Google).

2. **Crear un nuevo Repl**
   - Click en **"+ Create Repl"**.
   - Elegí **"Import from GitHub"** si tenés el repo en GitHub, o **"Upload project"** / arrastrá la carpeta del proyecto (la que contiene `app/`, `.replit`, `replit.nix`).
   - Si creás Repl vacío: elegí template **"Node.js"**, nombre ej. `anses-simple`.

3. **Subir el proyecto** (si no importaste por GitHub)
   - Subí **toda** la carpeta del proyecto (incluidos `app/`, `.replit`, `replit.nix`, `netlify.toml`).
   - La raíz del Repl debe tener la carpeta `app/` y los archivos `.replit` y `replit.nix`.

4. **Ejecutar**
   - Click en **Run** (o "Run" en el menú).
   - Replit va a: `cd app` → `npm install` → `npm run build` → `npx serve dist -s -l $PORT`.
   - Cuando termine, se abre la web en una URL tipo:
     - `https://anses-simple.TU_USUARIO.repl.co`

5. **URL para AdSense**
   - Copiá esa URL (ej. `https://anses-simple.TU_USUARIO.repl.co`) y usala en Google AdSense como URL del sitio.

---

## Opción 2: Vercel (recomendada, ya configurada)

El proyecto tiene **`vercel.json`** en la raíz. No hace falta tocar nada en el dashboard.

### Con GitHub

1. Subí el proyecto a un repo en [GitHub](https://github.com).
2. Entrá a [vercel.com](https://vercel.com) y creá cuenta (con GitHub).
3. **Add New…** → **Project** → **Import** el repositorio.
4. Vercel usa solo el `vercel.json`: build `cd app && npm install && npm run build`, salida `app/dist`, rewrites para SPA. No cambies Root Directory.
5. **Deploy**. Te dan una URL tipo `https://nombre-proyecto.vercel.app`.

### Sin GitHub (deploy manual)

1. En tu PC: `cd app`, `npm run build`.
2. En [vercel.com](https://vercel.com): **Add New…** → **Deploy** y arrastrá la carpeta **`app/dist`** (o usá Vercel CLI: `npm i -g vercel`, `cd app`, `vercel --prod` apuntando a `dist`).

Usá la URL que te den para registrar el sitio en AdSense.

---

## Opción 3: Netlify

Más estable y rápido; ideal para AdSense a largo plazo. El proyecto tiene `netlify.toml` configurado.

### Opción A: Arrastrar y soltar (sin Git)

1. **En tu PC, generar el build**
   ```bash
   cd app
   npm install
   npm run build
   ```
2. **Subir a Netlify**
   - Entrá a [app.netlify.com](https://app.netlify.com) y creá cuenta.
   - En el dashboard: **"Add new site"** → **"Deploy manually"**.
   - Arrastrá la carpeta **`app/dist`** (no la raíz del proyecto) al área de deploy.
3. Te dan una URL tipo `https://random-name-12345.netlify.app`. Podés cambiarla en **Site settings** → **Domain management** → **Edit site name** (ej. `anses-simple` → `https://anses-simple.netlify.app`).

### Opción B: Conectar con GitHub (deploy automático)

1. Subí el proyecto a un repositorio en GitHub (raíz con `app/`, `netlify.toml`, etc.).
2. En Netlify: **Add new site** → **Import an existing project** → **GitHub** → elegí el repo.
3. Netlify detecta `netlify.toml` y usa:
   - **Base directory:** `app`
   - **Build command:** `npm run build`
   - **Publish directory:** `app/dist` (desde la base `app` → `dist`).
4. Deploy. Cada push a la rama principal actualiza el sitio.
5. URL: `https://NOMBRE-DEL-SITIO.netlify.app` (configurable).

---

## Registrar la URL en AdSense

1. Entrá a [Google AdSense](https://www.google.com/adsense).
2. **Sitios** → **Añadir sitio**.
3. Pegá la URL de producción, por ejemplo:
   - `https://nombre-proyecto.vercel.app` (Vercel)
   - `https://anses-simple.netlify.app` (Netlify)
   - `https://anses-simple.TU_USUARIO.repl.co` (Replit)
4. Seguí los pasos de verificación (meta tag en `index.html` o archivo en la raíz). El script de AdSense en `app/index.html` ya está preparado; solo descomentá la línea y poné tu `ca-pub-...` cuando tengas la cuenta aprobada.

---

## Resumen rápido

| Host     | URL ejemplo                          | Mejor para        |
|----------|--------------------------------------|-------------------|
| Vercel   | `https://nombre.vercel.app`         | Producción (ya configurado) |
| Netlify  | `https://nombre.netlify.app`        | Producción estable |
| Replit   | `https://nombre.tuusuario.repl.co`   | Probar y AdSense  |

Cualquiera de esas URLs sirve para registrar el sitio en AdSense. Después de que el sitio esté en línea, usá esa misma URL en la configuración de AdSense.
