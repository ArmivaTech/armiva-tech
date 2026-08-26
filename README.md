# Armiva Tech — Web corporativa

Stack: Next.js 14 · TypeScript · CSS Modules · Vercel

## Estructura de archivos

```
armiva-tech/
├── public/
│   └── robot/
│       └── spritesheet.jpg   ← Las 5 poses del robot (3x2 grid)
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← Metadata SEO + fuentes
│   │   ├── page.tsx          ← Página principal
│   │   ├── page.module.css   ← Estilos de secciones
│   │   └── globals.css       ← Variables globales + cursor
│   └── components/
│       ├── Navbar.tsx         ← Navegación fija
│       ├── Navbar.module.css
│       ├── RobotTracker.tsx  ← Robot que sigue el cursor ⭐
│       ├── CursorTracker.tsx ← Cursor personalizado
│       └── RevealOnScroll.tsx← Animaciones al hacer scroll
└── package.json
```

## Setup local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Añadir/cambiar el robot

Sustituye `public/robot/spritesheet.jpg` por tu imagen.
El formato esperado es una cuadrícula 3×2:

```
[frente]  [izquierda]  [derecha]
[arriba]  [abajo]      (vacío)
```

## Deploy en Vercel

1. Sube este proyecto a GitHub
2. Entra en vercel.com → Import Git Repository
3. Selecciona el repo → Deploy
4. Automático en cada push a main ✓
