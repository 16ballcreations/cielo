# Constructora Cielo — propuesta de web

**Estado: primera versión (3 nov 2026), para la videollamada con el cliente.**

Maqueta navegable de la web propuesta para **Constructora Cielo S.A.S.** (Cali, C.C. La Pasarela),
estudio de arquitectura y remodelación de apartamentos y casas.
Hecha por **16 Ball Creations**: hoy `constructoracielo.com`, que enlazan en Google, Instagram y
Facebook, muestra la página por defecto del hosting.

## Concepto: «Te entregaron media casa. Nosotros la terminamos.»

Quien remodela con Cielo no busca exclusividad: quiere ver que su inversión rinde y que no habrá sorpresas.
La página muestra calidad, limpieza, objetividad y eficiencia, es decir, hacer mucho con poco. Por eso
hay precio a la vista, pagos por hitos y el render al lado de la obra entregada.

La distribución viene de la plantilla **Larson** (bslthemes, https://larson.bslthemes.com):
- fondo blanco y un solo color de acento;
- portada con proyectos lado a lado e índice 01·02·03;
- foto enmarcada con cita;
- servicios numerados y cifras;
- proyectos con filtros;
- testimonios en tarjetas con borde.

Se le agregaron tres bloques que pide este público: el paquete con precio, el proceso con los pagos
y la comparación del render con la obra entregada. Se quitaron las noticias, porque obligarían a
producir contenido.

| # | Sección | Qué hace |
|---|---|---|
| 1 | Portada | Cocina, entrega y baño del apartamento Mucura (Yumbo), con índice 01·02·03 |
| 2 | Nosotros | El porqué de Cielo y José con la esquina naranja de Larson |
| 3 | Servicios | Seis servicios numerados; el botón abre el reel del render a la obra |
| 4 | Cifras | 5,0 en Google, 20 reseñas, 6 años, 5 pasos |
| 5 | Paquete | Franja madera: desde $35.000.000, 50 a 60 m², lo que incluye |
| 6 | Cómo trabajamos | Sus 5 pasos y la barra de pagos 50/35/15; foto de la lectura del contrato en la entrega |
| 7 | Del render a tu casa | Render y obra entregada lado a lado (sala y baño de Mucura) |
| 8 | Proyectos | Ocho tarjetas con filtros: remodelación, carpintería, diseño y render |
| 9 | Opiniones | Tres reseñas de Google |
| 10 | Contacto | Franja azul cielo; el formulario arma el mensaje de WhatsApp |

**Página de proyecto: `proyectos/mucura/`.** Es la forma del proyecto de Larson: título grande con foto ancha, el relato al lado de la ficha, los seis cambios, render y obra, una galería con visor, la entrega (con el contrato y el testimonio en video) y un llamado final. La portada y las tarjetas de Mucura enlazan aquí.

## Marca

| Token | Valor | De dónde sale |
|---|---|---|
| `--cielo` | `#0b7fcb` | Logo y franja de su banner de Facebook |
| `--profundo` | `#04325c` | Titulares y precio del banner |
| `--sol` | `#f49b1b` | «constructora», el pájaro (el acento de Larson) |
| `--madera` | `#5e3f25` | La isla de la cocina del render del banner |
| `--beige` / `--arena` | `#cbbdb3` / `#f5f0eb` | El sofá y las paredes de ese render |
| `--rojo` | `#c8232c` | Detalle crítico; hoy solo el punto junto al nombre de José (ver «Por confirmar») |

Tipografías: Outfit (títulos) y Figtree (texto), de Google Fonts, en lugar de Gilroy y Poppins de Larson.

## Archivos

| Ruta | Qué es |
|---|---|
| `index.html` | La página |
| `assets/css/marca.css` | Tokens de color y tipografía |
| `assets/css/sitio.css` | Estilos de la página |
| `assets/js/sitio.js` | Portada, menú, revelados, cifras, render/obra, filtros y formulario |
| `proyectos/mucura/index.html` | Página del proyecto Mucura |
| `assets/css/proyecto.css`, `assets/js/proyecto.js` | Estilos y comportamiento de las páginas de proyecto (visor de la galería incluido) |
| `assets/img/marca/` | Logo recortado del banner (`logo-banner.png`) e isotipo del pájaro |
| `assets/img/web/` | Fotos recortadas y en WebP |
| `herramientas/servir.mjs` | Servidor local: `node herramientas/servir.mjs 4340` |
| `herramientas/optimizar-imagenes.mjs` | Recorta las fotos de `investigacion/fotos/` hacia `assets/img/web/` (necesita `sharp`) |

La investigación (`investigacion/`) no se sube: nombra a personas y es material de trabajo.

## Por confirmar con el cliente

- **El paquete de $35.000.000** era la promoción de junio y julio. En la página aparece como
  «desde» y valor de referencia. Hay que confirmar si sigue vigente y qué incluye «estuco y pintura».
- **El rojo**: el brief lo tomaba de una camiseta roja de José. En la foto elegida
  (post DQDgCRTDO-V) su camisa es rosada (#E5C3CF). El token queda provisional.
- **Logo en alta**: el de la página está recortado del banner (384 px). Hay que pedir el vector.
- **Fotos en alta**: casi todas salen de fotogramas de reels (720 o 1080 px).
- **Los renders** de Proyectos (casa de dos pisos, escalera) vienen de su web de 2024. Confirmar
  que son suyos y que los quieren mostrar.
- **«Licencias y permisos»** estaba en su web de 2023. Confirmar que todavía lo ofrecen.
- **Horario**: los posts dicen distintas cosas. En la página: lunes a sábado, 8:30 a. m. a 5:00 p. m.
- **La cita de José** viene de una publicación suya en LinkedIn. **El origen del nombre** viene
  de la nota de la Cámara de Comercio de Cali. Confirmar que quiere ambos en la web.
- **Reseñas**: solo se pudieron leer 5 de 20. Se publican con nombre e inicial del apellido,
  como aparecen en Google.
- **Proyecto Mucura**: área, tiempo de obra, fecha de entrega y si fue con el paquete o a la medida.
  También el permiso de la clienta para mostrar su cara y su testimonio, y si quiere aparecer con nombre.
  La frase del testimonio («Estoy recibiendo hoy la unidad Mucura…») sale de los subtítulos del reel DeUn_htCtAK.
  Hay que confirmarla con el audio. No hay fotos del «antes».
