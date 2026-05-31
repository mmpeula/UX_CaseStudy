# Práctica 5 — Evaluación: Accesibilidad y Pruebas de Usabilidad (A/B Testing)

**Asignatura:** Diseño de Interfaces de Usuario · Curso 2025/26
**Equipo:** DIU3.alenmar — Alberto García Lara, Enrique Fernández Velasco, Marcos Medina Peula
**Fecha:** 30/05/2026

| Concepto | Caso A | Caso B |
| --- | --- | --- |
| Proyecto | **GOIKO** (hamburguesería gourmet) | **Rakuin Ramen — Experiencia Seinen** |
| Equipo | DIU3.alenmar (propio) | DIU1.LosPsicomotronic |
| Repositorio | https://github.com/mmpeula/UX_CaseStudy | https://github.com/RVR05/UX_CaseStudy |
| Prototipo | https://cupid-bubble-98659507.figma.site | https://palm-many-78395995.figma.site |

> **Asignación oficial de A/B Testing:** DIU3.alenmar (Caso A) → evalúa a DIU1.LosPsicomotronic (Caso B). Este informe se centra, conforme al guion, en el **Caso B**.

---

## 0. Introducción y objetivos

El objetivo de esta práctica es **evaluar con usuarios reales** dos prototipos del mismo dominio (restauración con reserva y pedido online) y, en particular, elaborar un informe de usabilidad detallado del **Caso B** que nos ha sido asignado. Para ello combinamos cuatro pilares metodológicos, tal como exige el guion:

1. **A/B Testing** entre-sujetos para comparar dos variantes de diseño.
2. **Cuestionario SUS** para medir la usabilidad percibida de forma estandarizada.
3. **Eye Tracking** (GazeMapping) para analizar la atención visual y el recorrido del usuario.
4. **Evaluación de usabilidad y accesibilidad** del producto, sintetizada en un *Usability Report*.

La estrategia de reclutamiento sigue el modelo de **co-evaluación**: nuestro equipo actúa como evaluador externo del proyecto de otro grupo de clase, lo que aporta una mirada imparcial sobre un dominio (ramen) distinto del nuestro (hamburguesas).

---

## 1. Reclutamiento de participantes y propuesta del experimento A/B (Entregable 1)

### 1.1 Plan de reclutamiento

El estudio se diseñó como un **experimento entre-sujetos (*between-subjects*)**: cada participante evalúa **un solo** caso, evitando el sesgo de aprendizaje entre interfaces. El objetivo eran **10 usuarios** (5 por caso); por las dificultades habituales de reclutamiento se alcanzaron **6 participantes (3 por caso)**, lo que el propio guion contempla como muestra reducida. Esta limitación se asume de forma explícita y los datos se interpretan como **tendencia**.

Los datos se recogieron de forma anonimizada (IDs P01–P06) mediante **Tally.so**, registrando edad, género, ocupación, **competencia digital** y —para el subconjunto de eye tracking— las condiciones técnicas que pueden alterar el mapa de calor.

| ID  | Sexo/Edad | Ocupación  | Competencia digital | Personalidad | Plataforma | Caso              |
| --- | --------- | ---------- | ------------------- | ------------ | ---------- | ----------------- |
| P01 | H / 21    | Estudiante | Alta                | Introvertido | Web        | A — GOIKO         |
| P02 | H / 22    | Estudiante | Alta                | Racional     | Web        | A — GOIKO         |
| P03 | H / 21    | Estudiante | Alta                | Racional     | Web        | A — GOIKO         |
| P04 | H / 21    | Estudiante | Alta                | Emocional    | Web        | B — Rakuin Ramen  |
| P05 | H / 21    | Estudiante | Alta                | Racional     | Web        | B — Rakuin Ramen  |
| P06 | M / 68    | Jubilada   | Baja                | Tímida       | Web        | B — Rakuin Ramen  |

Se incluyó deliberadamente en el Caso B a una participante **sénior con competencia digital baja** (P06) para poner a prueba la accesibilidad del prototipo de ramen frente a un perfil no nativo digital. Como ningún participante evaluó ambos casos, no fue necesario aplicar contrabalanceo.

### 1.2 Propuesta del experimento A/B

- **Hipótesis (H1):** una jerarquía visual más explícita y una mayor economía de clics en las tareas críticas (reservar, consultar carta) producen una puntuación SUS más alta y tiempos de localización (TTFF) más bajos.
- **Variable independiente:** diseño evaluado (A vs. B).
- **Variables dependientes:** puntuación **SUS** (percepción); **TTFF** y número de fijaciones sobre los **POI** (atención, vía eye tracking); **necesidad de ayuda** para completar tareas (eficacia).
- **Variables controladas:** plataforma (web de escritorio), tipología de tarea (equivalente en ambos casos) y duración de la sesión (5–10 min).

**Protocolo por participante:** (1) formulario demográfico + competencia digital en Tally.so; (2) realización de 3 tareas equivalentes sobre el caso asignado; (3) sesión de eye tracking sobre 2–3 pantallas rasterizadas con GazeMapping; (4) cuestionario SUS.

**Tareas equivalentes:**

| #  | Caso A — GOIKO                                              | Caso B — Rakuin Ramen                                            |
| -- | ---------------------------------------------------------- | ---------------------------------------------------------------- |
| T1 | Consultar la carta y localizar una hamburguesa concreta    | Consultar la carta y localizar la **especialidad del chef**      |
| T2 | Iniciar una reserva de mesa                                | Iniciar una reserva de mesa                                      |
| T3 | Encontrar información del restaurante (ubicación/alérgenos) | Encontrar información del restaurante (ubicación / *Sobre Nosotros*) |

---

## 2. Eye Tracking (Entregable 2)

El seguimiento ocular se realizó con **GazeMapping** sobre pantallas rasterizadas (FireShot) del **Caso B (Rakuin Ramen)**, priorizando a los **3 participantes** del caso (mínimo recomendado por el guion).

**Condiciones técnicas registradas:**

| Participante | Gafas / Lentillas      | Iluminación           | Dispositivo / Resolución |
| ------------ | ---------------------- | --------------------- | ------------------------ |
| P04 Marcos   | No                     | Luz artificial neutra | Portátil 15" / 1920×1080 |
| P05 Alberto  | Sí (gafas)             | Luz natural diurna    | Monitor 24" / 1920×1080  |
| P06 Amparo   | Sí (gafas progresivas) | Luz artificial tenue  | Portátil 15" / 1920×1080 |

**POI definidos:** logotipo/cabecera, menú de navegación (Carta, Reservas, *Sobre Nosotros*), CTA de reserva, bloque "Especialidad del chef" y filtro de alérgenos.

**Tareas evaluadas:** ver la carta · localizar la especialidad del chef · buscar información sobre el restaurante.

**Hallazgos (mapa de calor — `P5/HeatMap.png`):**

- **POI alcanzados:** logotipo y menú de navegación reciben fijaciones inmediatas (TTFF ≈ 1 s). La estética *seinen* sobria concentra la atención en la cabecera sin "ruido" visual.
- **Zonas de silencio:** "Especialidad del chef" y filtro de alérgenos quedan fríos (por debajo del pliegue); la información de pie ("*Sobre Nosotros*", contacto) se ignora hasta buscarse expresamente.
- **Hallazgo clave:** el diseño guía bien hacia marca y navegación, pero los **contenidos diferenciales pierden foco visual por su ubicación**, lo que concuerda con la sensación de "website grande" del SUS.

---

## 3. Cuestionario SUS y análisis (Entregable 3)

Cada participante respondió los 10 ítems del SUS (escala 1–5) tras completar las tareas. Aplicando la fórmula estándar (ítems impares: valor − 1; pares: 5 − valor; suma × 2,5):

| Usuario     | Caso             | SUS  | Escala lingüística            |
| ----------- | ---------------- | ---- | ----------------------------- |
| P01 Máximo  | A — GOIKO        | 85.0 | Excellent / Aceptable (A)     |
| P02 José    | A — GOIKO        | 82.5 | Excellent / Aceptable (A)     |
| P03 Enrique | A — GOIKO        | 80.0 | Good alto / Aceptable (B)     |
| P04 Marcos  | B — Rakuin Ramen | 80.0 | Good alto / Aceptable (B)     |
| P05 Alberto | B — Rakuin Ramen | 77.5 | Good / Aceptable (B)          |
| P06 Amparo  | B — Rakuin Ramen | 62.5 | OK / Marginal alto (C)        |
| **Media A** | **GOIKO**        | **82.5** | **Aceptable — Excellent (A)** |
| **Media B** | **Rakuin Ramen** | **73.3** | **Aceptable — Good (B)**  |

**Análisis multivariable (sus.tools):**

- Ambos diseños superan el umbral de aceptabilidad de **68**: los dos son *aceptables*.
- **Caso A (GOIKO): 82,5** (franja *Excellent*, 8,3/10). **Caso B (Rakuin Ramen): 73,3** (franja *Good*, 7,3/10).
- Diferencia **+9,2 puntos** a favor de A, consistente pero **moderada**: GOIKO destaca por la uniformidad de sus valoraciones, mientras que B presenta más dispersión por el perfil sénior.
- **Por ítems**, el Caso B concentra sus puntuaciones más bajas en el ítem 8 ("website muy grande"), el 3 ("facilidad") y el 4 ("necesidad de apoyo"), todas asociadas a la participante de baja competencia digital. Entre usuarios de perfil equivalente, la brecha A–B se reduce a ~5 puntos.

```
SUS medio (umbral aceptable = 68)
 85 |   ████  82.5  ← GOIKO (A)
 80 |   ████        ▇▇▇▇
 75 |   ████        ████  73.3  ← Rakuin Ramen (B)
 68 |- - - - - - - - - - -  umbral de aceptabilidad
     +----A----------B----
```

---

## 4. Usability Report y conclusiones (Entregable 4)

El informe completo del Caso B, con su anexo de accesibilidad, se entrega en archivos independientes:

- **Usability Report:** [`P5_UsabReport_RakuinRamen_doneby_DIU3_alenmar.md`](./P5_UsabReport_RakuinRamen_doneby_DIU3_alenmar.md)
- **Accessibility Report:** [`P5_AccessibilityReport_RakuinRamen_doneby_DIU3_alenmar.md`](./P5_AccessibilityReport_RakuinRamen_doneby_DIU3_alenmar.md)

### 4.1 Síntesis de la auditoría de accesibilidad (Caso B)

- **Normativa:** WCAG 2.2 AA (UNE-EN 301549). **Herramientas:** Lighthouse + WAVE.
- **Lighthouse Accessibility:** 88/100. **WAVE:** 3 errores (2 contraste, 1 `alt`), 3 alertas.
- **Barreras principales (POUR):** contraste insuficiente en texto secundario (Perceptible), foco de teclado poco visible (Operable), etiquetado de formulario de reserva mejorable (Comprensible) y `alt` ausentes (Robusto).
- **Valoración:** cumple **parcialmente** el nivel AA; base buena y barreras de gravedad media subsanables sin rediseño.

### 4.2 Recomendaciones priorizadas (Caso B)

| Prioridad          | Hallazgo                                                              | Recomendación                                                       |
| ------------------ | -------------------------------------------------------------------- | ------------------------------------------------------------------- |
| **Alta (Crítica)** | Especialidad del chef y alérgenos en zona fría (eye tracking + SUS 8) | Subir esos bloques sobre el pliegue y reforzar su jerarquía visual   |
| **Alta**           | Barreras de accesibilidad para perfil sénior (contraste, foco, formularios) | Contraste ≥ 4.5:1, `:focus-visible` y etiquetado de campos        |
| **Media**          | Sensación de "website grande" y dudas para localizar la carta        | Hacer más evidente el acceso a la carta desde el *hero*             |
| **Baja**           | Imágenes de producto sin `alt`                                       | Añadir `alt` descriptivo / `alt=""` en decorativas                  |

### 4.3 Conclusión comparativa

Tras aplicar las cuatro técnicas, concluimos que **ambos prototipos son usables y aceptables**. **GOIKO (Caso A)** obtiene una valoración global ligeramente superior (**82,5 / 8,3 sobre 10**, *Excellent*) gracias a la consistencia de sus puntuaciones y a una jerarquía de CTA muy clara. **Rakuin Ramen (Caso B)** es una propuesta sólida y competitiva (**73,3 / 7,3 sobre 10**, *Good*), con una identidad *seinen* coherente y una buena base de accesibilidad; su margen de mejora se concentra en la **jerarquía visual de los contenidos diferenciales** y en la **accesibilidad para perfiles no expertos**. La diferencia entre ambos es moderada y, entre usuarios de competencia digital equivalente, prácticamente se diluye.

---

## 5. Valoración del proceso y limitaciones

**Lo más formativo** ha sido evaluar de forma cruzada un dominio ajeno al nuestro: nos obligó a diseñar tareas equivalentes y medibles y a separar la opinión estética del comportamiento real del usuario, apoyándonos en datos (tiempos, clics, mapas de calor y SUS).

**Limitaciones asumidas:**

- **Muestra reducida** (6 en lugar de 10): los resultados son tendencia, no conclusión estadística.
- **Eye tracking sobre imágenes estáticas**: aproximación válida pero limitada frente a un seguimiento ocular real.
- **Auditoría de accesibilidad automática**: conviene completarla con lector de pantalla y revisión manual.

**Mejoras futuras:** ampliar y diversificar la muestra (más perfiles sénior y no expertos en ambos casos), validar accesibilidad de forma manual hasta WCAG 2.2 AA completa, e iterar sobre los prototipos aplicando las recomendaciones y volver a medir.

---

## 6. Resumen de herramientas utilizadas

| Herramienta   | Uso en la práctica                          | Enlace                         |
| ------------- | ------------------------------------------- | ------------------------------ |
| Tally.so      | Cuestionario SUS + datos demográficos       | https://tally.so/              |
| GazeMapping   | Eye tracking sobre pantallas estáticas      | https://github.com/mgea/gazemapping |
| FireShot      | Rasterización de pantallas web              | (extensión de Chrome)          |
| sus.tools     | Análisis multivariable de SUS               | https://sus.tools/             |
| Lighthouse    | Puntuación automática de accesibilidad      | (extensión de Chrome)          |
| WAVE          | Detección de errores de accesibilidad       | https://wave.webaim.org/       |

---

### Entregables de la Práctica 5

1. ✅ Reclutamiento de usuarios + propuesta del experimento A/B (apartado 1).
2. ✅ Resultados del Eye Tracking (apartado 2).
3. ✅ Cuestionario SUS y análisis (apartado 3).
4. ✅ Usability Report + conclusiones SUS, con anexo de accesibilidad (apartado 4 y archivos enlazados).
