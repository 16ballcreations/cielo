// Pasa las fotos de investigacion/fotos/ a assets/img/web/ en WebP, con el recorte de cada una.
// Uso: node herramientas/optimizar-imagenes.mjs  (necesita sharp; si no está instalado aquí,
// NODE_PATH=C:/Dev/16bc-site/node_modules)
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const sharp = require('sharp');
const raiz = fileURLToPath(new URL('..', import.meta.url));
const origen = raiz + 'investigacion/fotos/';
const destino = raiz + 'assets/img/web/';

// recorte: [x, y, ancho, alto] en píxeles del original; salida: ancho final
const fotos = [
  // Portada
  { de: 'mucura-cocina-en-L-terminada_reel-DeUn_htCtAK.jpg', a: 'portada-cocina', recorte: [0, 560, 1080, 790], ancho: 1080 },
  { de: 'mucura-sala-balcon_reel-DeUn_htCtAK.jpg', a: 'portada-sala', recorte: [0, 640, 1080, 790], ancho: 1080 },
  { de: 'mucura-bano-terminado_reel-DeUn_htCtAK.jpg', a: 'portada-bano', recorte: [0, 700, 1080, 790], ancho: 1080 },
  // José
  { de: 'jose-retrato-camisa-rosada_post-DQDgCRTDO-V.jpg', a: 'jose', recorte: [180, 0, 1152, 1440], ancho: 880 },
  { de: 'jose-chaleco-cielo-apartamento_reel-DecWmF4CObJ.jpg', a: 'jose-obra', recorte: [0, 120, 720, 900], ancho: 720 },
  // Proceso: la entrega con el contrato
  { de: 'mucura-entrega-lectura-contrato-cocina_post-DeNJkjGEiAy.jpg', a: 'entrega-contrato', recorte: [0, 0, 2160, 2160], ancho: 900 },
  // Del render a la obra (renders recortados del collage del reel DecWmF4CObJ)
  { de: 'render-collage-sala-habitacion_reel-DecWmF4CObJ.jpg', a: 'render-sala', recorte: [0, 0, 720, 412], ancho: 720 },
  { de: 'mucura-sala-balcon_reel-DeUn_htCtAK.jpg', a: 'obra-sala', recorte: [0, 560, 1080, 618], ancho: 1080 },
  { de: 'render-collage-closet-bano_reel-DecWmF4CObJ.jpg', a: 'render-bano', recorte: [0, 868, 720, 412], ancho: 720 },
  { de: 'mucura-bano-terminado_reel-DeUn_htCtAK.jpg', a: 'obra-bano', recorte: [0, 900, 1080, 618], ancho: 1080 },
  // Proyectos (3:5)
  { de: 'mucura-cocina-y-nevera_reel-DeUn_htCtAK.jpg', a: 'p-cocina', recorte: [0, 60, 1080, 1800], ancho: 600 },
  { de: 'mucura-closet-madera_reel-DecWmF4CObJ.jpg', a: 'p-closet', recorte: [0, 40, 720, 1200], ancho: 600 },
  { de: 'mucura-bano-terminado_reel-DeUn_htCtAK.jpg', a: 'p-bano', recorte: [0, 60, 1080, 1800], ancho: 600 },
  { de: 'mucura-clienta-recorriendo_reel-DeUn_htCtAK.jpg', a: 'p-entrega', recorte: [0, 60, 1080, 1800], ancho: 600 },
  { de: 'visita-mueble-tv-madera_reel-DeUo10yDz5p.jpg', a: 'p-mueble', recorte: [0, 40, 720, 1200], ancho: 600 },
  { de: 'mucura-puerta-corrediza_reel-DecWmF4CObJ.jpg', a: 'p-puerta', recorte: [0, 40, 720, 1200], ancho: 600 },
  { de: 'web-render-exterior-113.jpg', a: 'p-casa', recorte: [560, 0, 648, 1080], ancho: 600 },
  { de: 'web-render-interior-103-escalera.jpg', a: 'p-interior', recorte: [900, 0, 648, 1080], ancho: 600 },
];

for (const f of fotos) {
  const [left, top, width, height] = f.recorte;
  await sharp(origen + f.de)
    .extract({ left, top, width, height })
    .resize({ width: f.ancho, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(destino + f.a + '.webp');
  console.log(f.a);
}
