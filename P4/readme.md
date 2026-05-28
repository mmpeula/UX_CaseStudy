# DIU - Practica 4, entregables

>>> Se publicará la [Asignacion_ABtesting](https://github.com/mgea/DIU/blob/master/P4/Asignacion_ABtesting.pdf)
>>> Se publicará la lista de grupos y los respectivos GitHub

- Users. Elección y características de los usuarios reclutados
- Diseño de las pruebas
- Realización del Cuestionario SUS para usuarios y casos A y B.
- Tabla A/B Testing con resultados para A y B
- Eye Tracking para B
- Usability Report del Caso B, con toda la información recabada del caso B

Se dispone del Template de usability.gob (https://www.usability.gov/how-to-and-tools/resources/templates/report-template-usability-test.html) 
- Conclusiones

>>>> Este fichero se debe editar para que cada evidencia quede enlazada con el recurso subido a la carpeta de la practica. Se pide más detalle técnico en las descripciones de lo que sería el README principal del repositorio y que corresponde a la descripcion del Case Study.
>>>> Termine con la seccion de Conclusiones para aportar una valoración final del equipo sobre la propia realización de la práctica

---

## Exportación a React (Componentes UI)

Código fuente: [`React/goiko-react`](React/goiko-react)

El diseño de la WebApp se ha exportado desde **Figma Make** a un proyecto React funcional. Stack técnico:

| Capa | Tecnología |
| ---- | ---------- |
| Build / dev server | **Vite 6** |
| Framework | **React 18** + **TypeScript** |
| Estilos | **Tailwind CSS v4** (`@tailwindcss/vite`) |
| Componentes UI | **shadcn/ui** sobre **Radix UI** |
| Iconos | **Lucide** (`lucide-react`) |

**Estructura del código:**

* `src/main.tsx` — punto de entrada (monta `<App />` en `#root`).
* `src/app/App.tsx` — composición de la web completa.
* `src/app/components/` — componentes propios: `Header`, `Footer`, `GoikoLogo`, `HeroSection`, `VotingSection`, `MyGoikoSection`.
* `src/app/components/ui/` — UI Kit de shadcn/ui (botones, cards, diálogos, tabs, formularios, etc.).
* `src/imports/` — pantallas importadas desde Figma (PáginaPrincipal, Reservar, Carta, HacerPedido, MyGoiko, DesplegableDelLogo).
* `src/styles/` — tema, tipografías y configuración de Tailwind.

**Cómo ejecutarlo:**

```bash
cd React/goiko-react
npm install
npm run dev     # http://localhost:5173
npm run build   # genera dist/
```

Build de producción verificado correctamente (`vite build` → `dist/`).
