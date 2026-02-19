# ANSES Simple - Sitio Web Completo

## 🌐 Sitio en Vivo
**URL del sitio:** https://uvb4sw65qj6aq.ok.kimi.link

---

## 📦 ¿Qué se entregó?

Este proyecto incluye un **sitio web completo y funcional** orientado a personas mayores en Argentina, con información clara y simple sobre ANSES.

### Archivos incluidos:

1. **`/app/`** - Carpeta con el código fuente completo del sitio
2. **`GUIA-ADENSE-Y-EXPANSION.md`** - Guía para agregar publicidad y expandir el sitio
3. **`CONTENIDO-DEL-SITIO.md`** - Todo el texto del sitio documentado
4. **`README.md`** - Este archivo (resumen general)

---

## ✅ Características del Sitio

### Diseño pensado para personas mayores:
- ✅ **Letra grande** (18px base, títulos hasta 64px)
- ✅ **Botones grandes** (fáciles de tocar/clickear)
- ✅ **Colores de alto contraste** (azul oscuro sobre blanco)
- ✅ **Texto claro y simple** (sin tecnicismos)
- ✅ **Navegación intuitiva** (menú simple, todo en una página)
- ✅ **Compatible con celulares** (responsive)
- ✅ **Sin animaciones molestas** (solo transiciones suaves)

### Funcionalidades:
- ✅ **Herramienta de consulta** - Seleccioná beneficio + DNI y te muestra fecha estimada
- ✅ **8 Preguntas frecuentes** - Respuestas claras a lo más consultado
- ✅ **Guía "¿Dónde cobro?"** - Paso a paso para consultar el banco
- ✅ **Información adicional** - Tarjetas con más contenido útil

### SEO y Publicidad:
- ✅ **SEO optimizado** - Meta tags, títulos, descripciones
- ✅ **Estructura de datos** (Schema.org) para Google
- ✅ **Espacios para AdSense** - 5 ubicaciones preparadas
- ✅ **Palabras clave** incluidas para búsquedas en Argentina

### Legal y Confianza:
- ✅ **Aviso legal visible** - "Este sitio no es oficial" en múltiples lugares
- ✅ **NO pide datos personales** - Solo información orientativa
- ✅ **Links a ANSES oficial** - En todas las secciones relevantes

---

## 🗺️ Estructura del Sitio

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (fija arriba)                                       │
│  Logo + Menú + Botón "Consultar"                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  HERO (pantalla completa)                                   │
│  "Cuándo cobro ANSES según mi DNI"                          │
│  Subtítulo + 2 botones principales                          │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│  BANNER AVISO LEGAL (destacado)                             │
│  "Este sitio no es oficial de ANSES"                        │
├─────────────────────────────────────────────────────────────┤
│  SECCIÓN: ¿QUÉ PODÉS CONSULTAR?                             │
│  4 tarjetas: Cuándo / Dónde / Cuánto / Cómo                 │
├─────────────────────────────────────────────────────────────┤
│  [ESPACIO PUBLICITARIO]                                     │
├─────────────────────────────────────────────────────────────┤
│  HERRAMIENTA: CONSULTÁ CUÁNDO COBRÁS                        │
│  Select de beneficio + Botones 0-9 + Resultado              │
├─────────────────────────────────────────────────────────────┤
│  [ESPACIO PUBLICITARIO]                                     │
├─────────────────────────────────────────────────────────────┤
│  SECCIÓN: ¿DÓNDE COBRO ANSES?                               │
│  4 pasos numerados + Info de bancos                         │
├─────────────────────────────────────────────────────────────┤
│  [ESPACIO PUBLICITARIO]                                     │
├─────────────────────────────────────────────────────────────┤
│  PREGUNTAS FRECUENTES (8 preguntas)                         │
│  Acordeón desplegable                                       │
├─────────────────────────────────────────────────────────────┤
│  [ESPACIO PUBLICITARIO]                                     │
├─────────────────────────────────────────────────────────────┤
│  INFORMACIÓN ADICIONAL                                      │
│  Tarjetas + Modales con más info                            │
├─────────────────────────────────────────────────────────────┤
│  FOOTER                                                     │
│  Logo + Links + Aviso legal completo                        │
│  [ESPACIO PUBLICITARIO]                                     │
└─────────────────────────────────────────────────────────────┘
```

---

## 🚀 Cómo usar el sitio

### Para visitantes (personas mayores):
1. Entran al sitio
2. Ven el título grande "Cuándo cobro ANSES"
3. Leen el aviso de que no es oficial
4. Usan la herramienta seleccionando:
   - Tipo de beneficio (jubilación, AUH, etc.)
   - Último número del DNI
5. Ven la fecha estimada de cobro
6. Pueden navegar a otras secciones con el menú

### Para el administrador (vos):
1. **Para editar contenido:** Modificá los archivos en `/app/src/`
2. **Para agregar publicidad:** Seguí la guía en `GUIA-ADENSE-Y-EXPANSION.md`
3. **Para publicar cambios:** Corré `npm run build` y subí la carpeta `dist/`

---

## 💰 Monetización con AdSense

El sitio tiene **5 espacios preparados** para publicidad:

1. Después de la herramienta de consulta
2. En la sección "¿Dónde cobro?"
3. Después del FAQ
4. En InfoCards
5. En el Footer

**Para activar AdSense:**
1. Creá cuenta en Google AdSense
2. Agregá tu ID en `index.html`
3. Reemplazá los `ad-placeholder` con el código de anuncios
4. Listo - Google mostrará publicidad automáticamente

**Guía completa:** Ver `GUIA-ADENSE-Y-EXPANSION.md`

---

## 📝 Palabras clave SEO incluidas

El sitio está optimizado para estas búsquedas:
- "cuándo cobro ANSES"
- "fecha de cobro ANSES según DNI"
- "dónde cobro ANSES"
- "calendario ANSES"
- "jubilación ANSES"
- "AUH fecha de cobro"
- "pensión ANSES"
- "PUAM ANSES"
- "aguinaldo jubilados"
- "cambiar banco ANSES"

---

## 🛠️ Tecnologías utilizadas

- **React 18** - Framework de JavaScript
- **TypeScript** - Tipado estático
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilos
- **shadcn/ui** - Componentes UI
- **Lucide React** - Iconos

---

## 📂 Estructura de carpetas

```
/mnt/okcomputer/output/
├── app/                          # Código fuente
│   ├── src/
│   │   ├── sections/            # Secciones del sitio
│   │   │   ├── Navbar.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── DisclaimerBanner.tsx
│   │   │   ├── Benefits.tsx
│   │   │   ├── PaymentTool.tsx
│   │   │   ├── DondeCobro.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── InfoCards.tsx
│   │   │   └── Footer.tsx
│   │   ├── data/
│   │   │   └── anses-data.ts    # Datos de beneficios, FAQs, etc.
│   │   ├── App.tsx              # Componente principal
│   │   ├── index.css            # Estilos globales
│   │   └── main.tsx             # Punto de entrada
│   ├── index.html               # HTML con meta tags SEO
│   ├── package.json
│   ├── tailwind.config.js
│   └── dist/                    # Archivos compilados (para subir)
│
├── GUIA-ADENSE-Y-EXPANSION.md   # Guía de AdSense y expansión
├── CONTENIDO-DEL-SITIO.md       # Todo el texto del sitio
└── README.md                    # Este archivo
```

---

## ⚡ Comandos útiles

```bash
# Entrar a la carpeta del proyecto
cd /mnt/okcomputer/output/app

# Instalar dependencias (si es necesario)
npm install

# Correr en modo desarrollo (para probar)
npm run dev

# Compilar para producción
npm run build

# Los archivos compilados quedan en dist/
```

---

## 🔒 Avisos legales incluidos

El sitio tiene **múltiples disclaimers** para protegerte legalmente:

1. **Banner destacado** debajo del hero
2. **Disclaimer en resultados** de la herramienta
3. **Aviso en footer** con texto completo
4. **Links a ANSES oficial** en todas las secciones

**Texto del aviso:**
> "Este sitio no es oficial de ANSES. Es una herramienta informativa independiente. La información es orientativa y se basa en datos públicos. Para trámites oficiales, consultá directamente en www.anses.gob.ar o llamá al 130."

---

## 📈 Próximos pasos recomendados

1. **Crear cuenta de AdSense** y agregar publicidad
2. **Comprar un dominio** propio (ej: ansessimple.com.ar)
3. **Subir a hosting** propio (el link actual es temporal)
4. **Agregar Google Analytics** para ver visitas
5. **Crear páginas de Facebook/Instagram** para promocionar
6. **Agregar más contenido** según lo que pregunte la gente

---

## ❓ Preguntas frecuentes sobre el sitio

**¿El sitio es gratuito?**
Sí, el código es tuyo. Solo necesitás pagar el dominio y hosting.

**¿Puedo modificar el contenido?**
Sí, todos los textos están en los archivos y podés editarlos.

**¿Cómo agrego más preguntas al FAQ?**
Editá el archivo `src/data/anses-data.ts` y agregá más objetos al array `faqs`.

**¿El sitio funciona en celulares?**
Sí, es 100% responsive y se ve bien en todos los dispositivos.

**¿Necesito saber programar para usarlo?**
Para hacer cambios simples de texto, no. Para cambios grandes, sí es recomendable.

---

## 📞 Soporte

Si necesitás ayuda:
- **React:** https://react.dev
- **AdSense:** https://support.google.com/adsense
- **Hosting:** Contactá tu proveedor

---

**¡Tu sitio está listo para usar!** 🎉

Accedé ahora: https://uvb4sw65qj6aq.ok.kimi.link
