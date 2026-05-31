# Usability Report — Caso B: Rakuin Ramen (Experiencia Seinen)

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU" alt="usability" style="height:150px" />

### Evaluación de usabilidad del proyecto Rakuin Ramen — Experiencia Seinen

**Fecha de la evaluación:** 30/05/2026

**Proyecto evaluado (Caso B):** Rakuin Ramen — equipo **DIU1.LosPsicomotronic** (Roberto Vera Ramos, Alejandro Ortega Martín)

**Repositorio del Caso B:** https://github.com/RVR05/UX_CaseStudy

**Prototipo evaluado:** https://palm-many-78395995.figma.site

**Realizado por:** Equipo **DIU3.alenmar** (Alberto García Lara, Enrique Fernández Velasco, Marcos Medina Peula). Actuamos como **equipo evaluador externo**: nuestro propio proyecto es GOIKO (Caso A, una hamburguesería gourmet), por lo que la evaluación de un restaurante de ramen nos sitúa en una posición de auditoría imparcial sobre un dominio distinto al nuestro. Aplicamos técnicas de UX Research: A/B Testing entre-sujetos, cuestionario SUS, eye tracking con GazeMapping y auditoría automática de accesibilidad.

> **Nota metodológica:** los datos cuantitativos de este informe corresponden a una **muestra reducida** (6 participantes en total, 3 por caso). Deben interpretarse como **tendencia** y no como resultado estadísticamente concluyente.

---

## 1. Resumen Ejecutivo (Executive Summary)

- **Objetivo:** evaluar la usabilidad de **Rakuin Ramen** (Caso B) e identificar los puntos de fricción que dificultan sus tareas clave —consultar la carta, localizar la especialidad del chef, reservar mesa y encontrar la información del restaurante—, comparándola con una alternativa del mismo sector (Caso A, GOIKO) mediante un estudio entre-sujetos.
- **Metodología:** **A/B Testing** entre-sujetos, cuestionario **SUS** (System Usability Scale), **eye tracking** sobre pantallas rasterizadas con **GazeMapping** y auditoría automática de **accesibilidad** (Lighthouse + WAVE).
- **Principales hallazgos:**
  1. La **identidad visual sobria (estética *seinen*)** es un acierto: dirige la atención a la marca y a la navegación sin el "ruido" de un diseño recargado, y obtiene puntuaciones SUS altas entre usuarios nativos digitales.
  2. Los **contenidos diferenciales** (especialidad del chef y filtro de alérgenos) caen en **zona fría visual**: se ubican por debajo del pliegue y reciben fijaciones tardías, lo que penaliza la tarea de exploración de la carta.
  3. Existe una **barrera de entrada para usuarios sénior / de baja competencia digital**: la participante P06 necesitó apoyo y percibió el sitio como "grande" y menos fácil, lo que conecta con varias barreras de accesibilidad detectadas en la auditoría.
- **Resultado global:** SUS medio de **73,3 / 100** → diseño **Aceptable** (franja *Good*, equivalente a **7,3/10**), por encima del umbral de 68. El Caso A (GOIKO) obtiene 82,5 (*Excellent*); la diferencia es de **+9,2 puntos** a favor de A, pero ambos diseños son usables y aceptables. Entre usuarios de perfil equivalente (competencia digital alta) la brecha se reduce a unos 5 puntos.

## 2. Metodología y Reclutamiento

- **Perfil de los participantes:** 6 usuarios (3 por caso). Edad media ≈ 30 años (rango 21–68). Competencia digital mayoritariamente alta, salvo una participante sénior de competencia baja incluida deliberadamente en el Caso B para evaluar accesibilidad. Todos evaluaron en plataforma **Web (escritorio)**.

| ID  | Sexo/Edad | Ocupación  | Competencia digital | Caso              |
| --- | --------- | ---------- | ------------------- | ----------------- |
| P01 | H/21      | Estudiante | Alta                | A — GOIKO         |
| P02 | H/22      | Estudiante | Alta                | A — GOIKO         |
| P03 | H/21      | Estudiante | Alta                | A — GOIKO         |
| P04 | H/21      | Estudiante | Alta                | B — Rakuin Ramen  |
| P05 | H/21      | Estudiante | Alta                | B — Rakuin Ramen  |
| P06 | M/68      | Jubilada   | Baja                | B — Rakuin Ramen  |

- **Diseño del estudio:** entre-sujetos (*between-subjects*); cada participante evaluó un solo caso, por lo que no fue necesario contrabalanceo. Muestra reducida (6 en lugar de 10) justificada por las dificultades de reclutamiento.
- **Escenario de la prueba (Caso B — Rakuin Ramen):** (T1) consultar la carta y localizar la **especialidad del chef**; (T2) iniciar una **reserva** de mesa; (T3) encontrar información del restaurante (ubicación / *Sobre Nosotros*). Duración 5–10 min por usuario. Se registró si el participante necesitó ayuda para completar cada tarea.
- **Herramientas:** **Tally.so** (cuestionario SUS y datos demográficos), **GazeMapping** (eye tracking), **FireShot** (rasterización de pantallas), **Lighthouse** y **WAVE** (accesibilidad), **sus.tools** (análisis multivariable de SUS).

## 3. Resultados del Cuestionario SUS (Datos Cuantitativos)

**Comparativa A vs. B (media global):**

| Caso              | SUS medio | Valoración                  |
| ----------------- | --------- | --------------------------- |
| A — GOIKO         | **82.5**  | Aceptable / *Excellent* (A) |
| B — Rakuin Ramen  | **73.3**  | Aceptable / *Good* (B)      |

```
SUS medio (umbral aceptable = 68)
 90 |
 85 |   ████  82.5  ← GOIKO (A)
 80 |   ████        ▇▇▇▇
 75 |   ████        ████  73.3  ← Rakuin Ramen (B)
 70 |   ████        ████
 68 |- - - - - - - - - - -  (umbral de aceptabilidad)
 60 |   ████        ████
     +----A----------B----
```

**Desglose por usuario (Caso B):** P04 Marcos 80.0 · P05 Alberto 77.5 · P06 Amparo 62.5. Los dos usuarios de competencia digital alta puntúan en la franja *Good* alta y consistente; la dispersión la introduce la participante sénior.

**Desglose por ítems (Caso B):** las puntuaciones menos favorables se concentran en:

- **Ítem 8** ("encontré el website muy grande al recorrerlo") — sensación de amplitud/dispersión en la exploración de la carta y la información del restaurante.
- **Ítem 3** ("fácil utilizar") y **ítem 4** ("necesitaría apoyo de un experto") — fricción específica de la participante sénior.

Los ítems de confianza (9) y de baja complejidad (2, 6, 10) puntúan bien en todos los participantes, lo que confirma que la **curva de aprendizaje es baja para el usuario nativo digital** y que la propuesta es coherente. El problema no es la complejidad funcional, sino la **localización de ciertos contenidos** y la **accesibilidad para perfiles no expertos**.

## 4. Análisis de Eye Tracking (Datos Biométricos)

- **Pantallas analizadas:** Home, Carta y *Sobre Nosotros* / Reservas, rasterizadas con FireShot y procesadas con GazeMapping (capturas en `P5/HeatMap.png`).
- **POI definidos:** logotipo/cabecera, menú de navegación, CTA de reserva, bloque "Especialidad del chef" y filtro de alérgenos.
- **POI alcanzados:** el **logotipo** y el **menú de navegación** superior reciben fijaciones inmediatas (TTFF medio ≈ 1 s). La estética *seinen* sobria evita el "ruido" visual y dirige bien la atención hacia la cabecera y la marca.
- **Zonas de silencio:** el bloque **"Especialidad del chef"** y el **filtro de alérgenos** quedan parcialmente fríos (están por debajo del pliegue); la información "*Sobre Nosotros*" y de contacto del pie se ignora hasta que se busca de forma explícita. 2 de 3 usuarios dudan al inicio porque el acceso a la carta compite visualmente con el *hero*.
- **Hallazgo clave:** Rakuin Ramen **guía la mirada hacia la marca y la navegación con eficacia**, pero **los contenidos diferenciales pierden foco visual por su ubicación**. Reforzar la jerarquía de la "especialidad del chef" y del filtro de alérgenos (subirlos sobre el pliegue o destacarlos con mayor contraste) mejoraría la eficacia de la tarea de exploración de la carta.

## 5. Auditoría de Accesibilidad

- **Normativa de referencia:** WCAG 2.2 nivel **AA** (UNE-EN 301549).
- **Herramientas:** Lighthouse (Chrome) y WAVE (WebAIM).
- **Puntuación automática (Lighthouse Accessibility):** **88/100**.
- **WAVE Summary:** 2 errores de contraste, 3 alertas, 1 error de contenido no textual (`alt` ausente), 1 alerta de etiqueta de formulario.

| Categoría        | Hallazgo                                                                 | Criterio WCAG          | Impacto                                                            | Recomendación                                                       |
| ---------------- | ------------------------------------------------------------------------ | ---------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Perceptible**  | Texto secundario gris claro sobre fondo claro con contraste < 4.5:1 en algunos subtítulos y precios | 1.4.3 Contraste mínimo | Usuarios con baja visión (p. ej. P06) no leen bien precios/etiquetas | Oscurecer el gris a ≥ #595959 o usar texto de color de cuerpo en datos críticos |
| **Operable**     | Indicador de foco poco visible al navegar con teclado por el menú        | 2.4.7 Foco visible     | El usuario de teclado no sabe dónde está                          | Definir `:focus-visible` con borde/halo de alto contraste            |
| **Comprensible** | Algún campo del formulario de reserva sin etiqueta asociada / sin mensaje de error claro | 3.3.2 / 1.3.1          | El usuario no sabe qué introducir ni cómo corregir un error        | Asociar `<label for>` y vincular el error con `aria-describedby`     |
| **Robusto**      | Imágenes de producto sin `alt` descriptivo                               | 1.1.1 Contenido no textual | Los lectores de pantalla no transmiten el plato mostrado          | Añadir `alt` con el nombre del plato; `alt=""` en imágenes decorativas |

**Valoración general:** Rakuin Ramen parte de una **base de accesibilidad buena** (88/100 en Lighthouse, modo apto para daltónicos anunciado por el equipo y estética sobria que ayuda a la legibilidad). Cumple **parcialmente** el nivel AA: las barreras detectadas son de gravedad media (contraste puntual, foco de teclado, etiquetas de formulario y `alt`) y son **subsanables sin rediseño**. Su resolución beneficiaría directamente al perfil sénior que peor puntuó el SUS.

## 6. Conclusiones y Recomendaciones (Actionable Insights)

| Prioridad          | Hallazgo                                                                                          | Recomendación de mejora                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Alta (Crítica)** | La "especialidad del chef" y el filtro de alérgenos caen en zona fría (eye tracking + SUS ítem 8) | Subir estos bloques sobre el pliegue y reforzar su jerarquía visual (tamaño, contraste, posición)         |
| **Alta**           | Barreras de accesibilidad que penalizan al perfil sénior (contraste, foco, formularios)           | Alcanzar contraste ≥ 4.5:1, definir `:focus-visible` y etiquetar correctamente los campos de reserva     |
| **Media**          | Sensación de "website grande" y dudas iniciales para localizar la carta (SUS ítem 8)              | Hacer más evidente el acceso a la carta desde el *hero* y reducir la competencia visual con el menú       |
| **Baja**           | Imágenes de producto sin texto alternativo                                                        | Añadir `alt` descriptivo a las imágenes de plato y `alt=""` a las decorativas                            |

**Conclusión final:** **Rakuin Ramen (Caso B) es un diseño usable y aceptable** (SUS 73,3, franja *Good*), con una identidad visual *seinen* coherente y bien resuelta que funciona muy bien para el usuario nativo digital. Su recorrido de mejora se concentra en dos frentes complementarios: **la jerarquía visual de los contenidos diferenciales** (especialidad del chef, alérgenos) y **la accesibilidad para perfiles no expertos**. Resolviendo la ubicación de esos bloques y las barreras de accesibilidad de gravedad media, estimamos que su SUS podría acercarse a 80 (franja *Excellent*) y reducir aún más la distancia con el Caso A.
