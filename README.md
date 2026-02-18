# 🏥 Cartagena Este - Portal de Información

Portal web responsive replicando la estructura de cartagenaeste.es con HTML, CSS y JavaScript puro (sin dependencias externas).

## ✨ Características

- ✅ **Diseño Responsive**: Mobile-first approach
- ✅ **Menú Hamburguesa**: Navegación adaptable en dispositivos móviles
- ✅ **Contenido Dinámico**: Carga de documentos, profesionales, pacientes y anuncios
- ✅ **Tablón de Anuncios**: Sección destacada con anuncios importantes
- ✅ **Footer Informativo**: Enlaces y contacto
- ✅ **Animaciones Suaves**: Transiciones agradables
- ✅ **Accesibilidad**: Respeta preferencias de movimiento
- ✅ **Sin Dependencias**: HTML, CSS y JavaScript vanilla

## 📁 Estructura

```
cartagena-este-docs/
├── index.html          # Página principal
├── styles.css          # Estilos responsive
├── app.js              # Lógica y carga dinámica
├── data.json           # Datos de ejemplo
├── README.md           # Este archivo
└── .gitignore          # Configuración git
```

## 🚀 Secciones

1. **Documentos** - Guías, normativas y protocolos descargables
2. **Profesionales** - Directorio de médicos y enfermeras con horarios
3. **Pacientes** - Información para pacientes y servicios disponibles
4. **Tablón de Anuncios** - Noticias y comunicados importantes

## 💻 Uso Local

```bash
# Clonar el repositorio
git clone https://github.com/carlosgalera/cartagena-este-docs.git
cd cartagena-este-docs

# Servir localmente (Python 3)
python -m http.server 8000

# O con Node.js (http-server)
npx http-server
```

Luego visita: `http://localhost:8000`

## 🎨 Personalización

### Modificar Datos

Edita `app.js` en la sección `const data = { ... }` para cambiar:
- Documentos
- Profesionales
- Información de pacientes
- Anuncios

### Cambiar Colores

En `styles.css`, modifica las variables CSS en la sección `:root`:

```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #ff6633;    /* Naranja secundario */
    /* ... más colores */
}
```

### Responsive Breakpoints

- **Móvil**: < 768px (por defecto)
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px - 1439px
- **Large Desktop**: ≥ 1440px

## 📱 Compatibilidad

- ✅ Chrome/Chromium (todas las versiones)
- ✅ Firefox (todas las versiones)
- ✅ Safari (iOS 12+)
- ✅ Edge (todas las versiones)
- ✅ Navegadores móviles (iOS Safari, Chrome Mobile)

## 🔧 Desarrollo

### Agregar Nueva Sección

1. Agregar HTML en `index.html`:
```html
<section id="nueva-seccion" class="section">
    <h2>Nueva Sección</h2>
    <div id="nueva-seccion-list">
        <div class="loading">Cargando...</div>
    </div>
</section>
```

2. Agregar datos en `app.js`:
```javascript
const data = {
    // ... otras secciones
    nuevaSeccion: [ /* datos */ ]
};
```

3. Agregar función de carga:
```javascript
function loadNuevaSeccion() {
    const container = document.getElementById('nueva-seccion-list');
    // Lógica de carga
}
```

4. Llamar en `init()`:
```javascript
function init() {
    // ... otras cargas
    loadNuevaSeccion();
}
```

## 📊 Carga de Datos Externos

Para cargar datos desde un servidor:

```javascript
// En app.js
await cartagenaEste.loadDataFromServer('/api/data.json');
```

## 🌐 GitHub Pages

Esta aplicación está optimizada para GitHub Pages:

1. **Branch**: `gh-pages` (publicación automática)
2. **URL**: `https://carlosgalera.github.io/cartagena-este-docs/`
3. **Configuración**: Sin necesidad de configuración adicional

## 📝 Licencia

MIT - Libre para usar, modificar y distribuir

## 👤 Autor

Cartagena Este - Portal de Información y Servicios

---

**Última actualización**: 17 de febrero de 2026

Para más información o reportar problemas, contacta a: info@cartagenaeste.es

<!-- Updated: 2026-02-18T06:43:32.314832 -->
<!-- Updated: 2026-02-18T20:10:33.456862 -->