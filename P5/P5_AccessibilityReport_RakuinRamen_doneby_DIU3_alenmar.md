# Accessibility Report — Caso B: Rakuin Ramen (Experiencia Seinen)

<img src="https://img.uxcel.com/cdn-cgi/image/format=auto/practices/wcag-principles-overview-1742315821212/a-1742315821212-2x.jpg" alt="WCAG principles" style="height:200px" />

Anexo de accesibilidad del *Usability Report* del **Caso B**. Forma parte de la evaluación cruzada realizada por **DIU3.alenmar** sobre el proyecto del equipo **DIU1.LosPsicomotronic**.

## 1. Ficha Técnica del Informe

- **Nombre del proyecto:** **Caso B — Rakuin Ramen (Experiencia Seinen)**, equipo DIU1.LosPsicomotronic.
- **Prototipo auditado:** https://palm-many-78395995.figma.site
- **Normativa de referencia:** **WCAG 2.2, nivel AA** (referencia legal **UNE-EN 301549**).
- **Herramientas utilizadas:** **Lighthouse** (Google Chrome) y **WAVE** (WebAIM). Análisis automático complementado con revisión manual de navegación por teclado y contraste.
- **Fecha de la auditoría:** 30/05/2026.
- **Realizado por:** DIU3.alenmar (Alberto García Lara, Enrique Fernández Velasco, Marcos Medina Peula).

> **Alcance:** auditoría centrada en las pantallas evaluadas en las pruebas de usabilidad (Home, Carta y Reservas / *Sobre Nosotros*). Las herramientas automáticas no detectan el 100 % de las barreras; los hallazgos se complementan con la observación de la participante sénior P06.

## 2. Puntuaciones Globales (Métricas Automáticas)

- **Lighthouse — Accessibility Score:** **88 / 100**.
- **WAVE Summary:**
  - Errores: **2** (contraste) + **1** (contenido no textual / `alt` ausente).
  - Alertas: **3** (incluida 1 etiqueta de formulario posiblemente ausente).
  - Características de accesibilidad detectadas: estructura de encabezados presente, idioma de página definido.

Valoración rápida: la puntuación (88) sitúa al sitio en un nivel **bueno pero mejorable**; las incidencias son de gravedad **media** y subsanables sin rediseño.

## 3. Análisis por Principios (POUR)

<img src="https://cdn.sanity.io/images/r115idoc/production/e745ae232e5e6760c1392354021aed4eecc4627d-1920x1080.png" alt="POUR principles" style="height:200px" />

### A. Perceptible

- **Hallazgo:** texto secundario gris claro sobre fondo claro (subtítulos y precios) con contraste por debajo de 4.5:1; algunas imágenes de plato sin `alt`.
- **Impacto:** usuarios con baja visión —como la participante sénior P06— no leen con comodidad precios y etiquetas; los lectores de pantalla no transmiten el contenido de las imágenes.
- **Solución:** oscurecer el gris a ≥ `#595959` (o usar el color de cuerpo en datos críticos) y añadir `alt` descriptivo a las imágenes informativas (`alt=""` en las decorativas).

### B. Operable

- **Hallazgo:** indicador de foco poco visible al navegar con teclado por el menú principal.
- **Impacto:** un usuario que navega con teclado no sabe en qué elemento se encuentra.
- **Solución:** definir un estilo `:focus-visible` con borde o halo de alto contraste.

### C. Comprensible

- **Hallazgo:** algún campo del formulario de reserva sin `label` asociado y mensajes de error poco claros.
- **Impacto:** el usuario no sabe qué dato introducir ni cómo corregir un campo para avanzar.
- **Solución:** asociar `<label for>` a cada campo y vincular el error con `aria-describedby`; mantener el idioma de la página declarado (`lang="es"`).

### D. Robusto

- **Hallazgo:** uso de imágenes y controles sin nombre accesible (p. ej. iconos de acción sin etiqueta).
- **Impacto:** los lectores de pantalla pueden anunciar elementos sin contexto o saltárselos.
- **Solución:** validar el HTML, garantizar `id` únicos y añadir `aria-label` a los controles basados solo en icono.

## 4. Tabla de Hallazgos y Prioridades

| ID         | Prioridad   | Criterio WCAG               | Error detectado                                            | Recomendación Técnica                                  |
| ---------- | ----------- | --------------------------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| **ACC-01** | **Crítica** | 1.4.3 Contraste mínimo      | Texto gris claro sobre fondo claro en precios/subtítulos.  | Cambiar el gris a ≥ `#595959` (contraste ≥ 4.5:1).     |
| **ACC-02** | **Alta**    | 2.4.7 Foco visible          | Foco de teclado apenas perceptible en el menú.             | Definir `:focus-visible` de alto contraste.            |
| **ACC-03** | **Alta**    | 3.3.2 Etiquetas/Instrucciones | Campo de reserva sin `label` y error poco claro.         | Añadir `<label for>` + `aria-describedby` para el error. |
| **ACC-04** | **Media**   | 1.1.1 Contenido no textual  | Imágenes de plato sin `alt`.                               | Añadir `alt` descriptivo; `alt=""` en decorativas.     |

## 5. Conclusiones y Declaración de Conformidad

- **¿Es el sitio accesible?** Rakuin Ramen **cumple parcialmente el nivel AA**. Parte de una base sólida (88/100 en Lighthouse, modo apto para daltónicos anunciado por el equipo y una estética *seinen* sobria que favorece la legibilidad), pero presenta barreras de gravedad media en **contraste**, **foco de teclado** y **etiquetado de formularios** que afectan sobre todo a usuarios sénior y a quienes navegan con teclado o lector de pantalla.
- **Próximos pasos (3 acciones inmediatas):**
  1. Corregir el **contraste** del texto secundario y de los precios (ACC-01).
  2. Implementar un **foco visible** consistente para navegación por teclado (ACC-02).
  3. **Etiquetar** correctamente los campos del formulario de reserva y sus mensajes de error (ACC-03).

Resolver estas tres incidencias elevaría la puntuación automática por encima de 90 y, sobre todo, reduciría la barrera de entrada del perfil sénior (P06), que fue quien peor valoró la usabilidad del Caso B.
