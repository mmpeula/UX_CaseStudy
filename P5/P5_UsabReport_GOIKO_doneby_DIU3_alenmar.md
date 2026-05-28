# Usability Report — Caso B: GOIKO

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF017nhV-TFmNER2OM8UbXtdN6xwAKBYrv0i6onNfKu6Yn0BV0RK6aiOroeXl73LSY-B0&usqp=CAU" alt="usability" style="height:150px" />

### Evaluación de usabilidad del proyecto GOIKO

**Fecha:** 28/05/2026

**Enlace al proyecto evaluado:** https://cupid-bubble-98659507.figma.site

**Realizado por:** Equipo DIU3.alenmar (Alberto García, Enrique Fernández, Marcos Medina). Actuamos como equipo evaluador aplicando técnicas de UX Research (A/B Testing entre-sujetos, cuestionario SUS, eye tracking con GazeMapping y auditoría de accesibilidad).

> Nota: los datos cuantitativos de este informe corresponden a una muestra reducida (6 participantes, 3 por caso) y deben interpretarse como tendencia, no como resultado estadísticamente concluyente.

---

## 1. Resumen Ejecutivo (Executive Summary)

- **Objetivo:** evaluar la usabilidad de la web de GOIKO (Caso B) frente a una alternativa (Caso A, Rakuin Ramen) e identificar puntos de fricción que dificulten las tareas clave: reservar, hacer un pedido y votar la hamburguesa del mes.
- **Metodología:** estudio entre-sujetos con A/B Testing, cuestionario **SUS** (System Usability Scale), **eye tracking** sobre pantallas rasterizadas y auditoría automática de **accesibilidad** (Lighthouse + WAVE).
- **Principales hallazgos:**
  1. Los CTA principales (RESERVAR, VOTAR) tienen excelente visibilidad y tiempo de localización muy bajo.
  2. El **resumen del pedido / checkout** cae en zona fría visual: cuesta localizar el total y el botón "Finalizar Compra".
  3. Existen **barreras de contraste** (texto amarillo/gris sobre fondo oscuro) que penalizan a usuarios sénior y con baja visión.
- **Resultado global:** SUS medio de **73,3 / 100** → diseño **Aceptable** (franja *Good*), por encima del umbral de 68. Supera ampliamente al Caso A (47,5).

## 2. Metodología y Reclutamiento

- **Perfil de los participantes:** 6 usuarios (3 por caso). Edad media ≈ 33 años (rango 21–90). Competencia digital mayoritariamente alta, salvo una participante sénior de competencia baja incluida deliberadamente para evaluar accesibilidad. Todos evaluaron en plataforma **Web**.

| ID | Sexo/Edad | Ocupación | Exp. TIC | Caso |
|----|-----------|-----------|----------|------|
| Máximo | H/21 | Estudiante | Alta | A |
| José | H/22 | Estudiante | Alta | A |
| Amparo | M/90 | Jubilada | Baja | A |
| Marcos | H/21 | Estudiante | Alta | B |
| Alberto | H/21 | Estudiante | Alta | B |
| Enrique | H/21 | Estudiante | Alta | B |

- **Escenario de la prueba (Caso B – GOIKO):** (1) hacer una reserva, (2) realizar un pedido, (3) votar la hamburguesa del mes. Duración 5–10 min por usuario.
- **Herramientas:** **Tally.so** (cuestionario SUS y datos demográficos), **GazeMapping** (eye tracking), **FireShot** (rasterización de pantallas), **Lighthouse** y **WAVE** (accesibilidad), **sus.tools** (análisis multivariable).

## 3. Resultados del Cuestionario SUS (Datos Cuantitativos)

**Comparativa A vs. B (media global):**

| Caso | SUS medio | Valoración |
|------|-----------|------------|
| A — Rakuin Ramen | 47.5 | No aceptable (F) |
| B — GOIKO | **73.3** | **Aceptable / Good (B)** |

```
SUS medio
 80 |                 ▇▇▇▇  (umbral aceptable = 68)
 70 |                 ████  73.3  ← GOIKO (B)
 60 |
 50 |   ████  47.5    ← Rakuin (A)
 40 |   ████
 30 |   ████
     +----A--------B----
```

**Desglose por usuario (Caso B):** Marcos 75.0 · Alberto 77.5 · Enrique 67.5.

**Desglose por ítems (Caso B):** las puntuaciones menos favorables se concentran en:
- **Ítem 8** ("encontré el website muy grande al recorrerlo") — sensación de sobrecarga en las pantallas de pedido.
- **Ítem 2** ("innecesariamente complejo") — fricción puntual en el flujo de checkout.

Los ítems de confianza (9) y facilidad (3) puntúan alto, confirmando que la curva de aprendizaje es baja.

## 4. Análisis de Eye Tracking (Datos Biométricos)

- **Heatmaps:** sobre las pantallas Home, Hacer Pedido y Reservar (capturas de GazeMapping en `img/`).
- **POI alcanzados:** el botón "RESERVAR" de la cabecera y el módulo de votación "VS / VOTAR" reciben fijaciones inmediatas (TTFF medio ≈ 1,3 s). Atención dirigida con eficacia.
- **Zonas de silencio:** el bloque lateral **"Resumen del Pedido"** y el botón **"Finalizar Compra"** quedan parcialmente fríos; 2 de 3 usuarios tardan en localizar el total.
- **Hallazgo clave:** GOIKO guía la mirada hacia sus CTA principales mucho mejor que el Caso A, pero el cierre del pedido (checkout) pierde foco visual y debería reforzarse.

## 5. Auditoría de Accesibilidad

- **Normativa de referencia:** WCAG 2.2 nivel AA (UNE-EN 301549).
- **Puntuación automática (Lighthouse):** **82/100**.
- **WAVE Summary:** 3 errores de contraste, 4 alertas, 1 error de contenido no textual.

| Categoría | Hallazgo | Criterio WCAG | Impacto | Recomendación |
|-----------|----------|---------------|---------|---------------|
| **Perceptible** | Texto amarillo claro sobre fondo oscuro en subtítulos y precios con contraste por debajo de 4.5:1 | 1.4.3 Contraste mínimo | Usuarios con baja visión no leen bien precios y etiquetas | Aumentar luminosidad del amarillo o usar texto blanco puro en datos críticos |
| **Operable** | Indicador de foco poco visible al navegar con teclado por la cabecera | 2.4.7 Foco visible | Usuario de teclado no sabe dónde está | Definir `:focus-visible` con borde de alto contraste |
| **Comprensible** | Icono "Cerrar" (✕) de los modales sin etiqueta textual | 1.1.1 / 4.1.2 | Lectores de pantalla no anuncian la acción | Añadir `aria-label="Cerrar"` |
| **Robusto** | Falta de `alt` descriptivo en algunas imágenes de producto | 1.1.1 Contenido no textual | Sin contexto para lector de pantalla | Añadir `alt` con el nombre de la hamburguesa |

**Valoración general:** GOIKO cumple **parcialmente** el nivel AA; la identidad visual es potente pero el contraste de la paleta oscura es su principal barrera.

## 6. Conclusiones y Recomendaciones (Actionable Insights)

| Prioridad | Hallazgo | Recomendación de mejora |
|-----------|----------|-------------------------|
| **Alta (Crítica)** | Contraste insuficiente del texto amarillo/gris sobre fondo oscuro (SUS ítem 8 + auditoría WCAG) | Ajustar la paleta para alcanzar contraste ≥ 4.5:1 en precios, subtítulos y CTA secundarios |
| **Alta** | El resumen del pedido y "Finalizar Compra" caen en zona fría (eye tracking) | Elevar el bloque de checkout o fijar un botón persistente de "Finalizar Compra" |
| **Media** | Sensación de pantalla "muy grande" en el flujo de pedido (SUS ítem 8) | Reducir la densidad visual y agrupar el pedido en menos pasos (one-page checkout) |
| **Baja** | Iconos e imágenes sin etiquetas accesibles | Añadir `aria-label` y `alt` descriptivos |

**Conclusión final:** GOIKO (Caso B) es un diseño **usable y aceptable** (SUS 73,3), claramente superior al Caso A en todas las pruebas. Resolviendo el contraste y reforzando la visibilidad del checkout, estimamos que la puntuación SUS podría subir por encima de 80 (franja *Excelente*).
