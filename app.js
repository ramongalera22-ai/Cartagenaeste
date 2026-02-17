/* ==========================================
   CARTAGENA ESTE - APLICACIÓN JS
   Carga dinámica de contenidos
   ========================================== */

// Datos de ejemplo
const data = {
    documentos: [
        {
            id: 1,
            titulo: 'Guía de Trámites Administrativos',
            descripcion: 'Documento con los trámites principales y documentos requeridos',
            fecha: '2026-02-10',
            url: '#',
            tipo: 'PDF'
        },
        {
            id: 2,
            titulo: 'Normativa de Seguridad y Salud',
            descripcion: 'Reglamentación para la seguridad en el centro',
            fecha: '2026-02-05',
            url: '#',
            tipo: 'PDF'
        },
        {
            id: 3,
            titulo: 'Protocolos de Atención',
            descripcion: 'Procedimientos estándar de atención al paciente',
            fecha: '2026-01-28',
            url: '#',
            tipo: 'PDF'
        },
        {
            id: 4,
            titulo: 'Política de Privacidad',
            descripcion: 'Información sobre protección de datos personales',
            fecha: '2026-01-20',
            url: '#',
            tipo: 'PDF'
        }
    ],
    profesionales: [
        {
            id: 1,
            nombre: 'Dr. Juan García López',
            especialidad: 'Medicina General',
            horario: 'Lunes a Viernes: 9:00 - 14:00',
            email: 'juan.garcia@cartagenaeste.es'
        },
        {
            id: 2,
            nombre: 'Dra. María Rodríguez Pérez',
            especialidad: 'Pediatría',
            horario: 'Lunes, Miércoles, Viernes: 15:00 - 18:00',
            email: 'maria.rodriguez@cartagenaeste.es'
        },
        {
            id: 3,
            nombre: 'Dr. Carlos Martínez Sánchez',
            especialidad: 'Cardiología',
            horario: 'Martes y Jueves: 10:00 - 12:30',
            email: 'carlos.martinez@cartagenaeste.es'
        },
        {
            id: 4,
            nombre: 'Enfermera Ana Fernández Gómez',
            especialidad: 'Enfermería de Atención Primaria',
            horario: 'Lunes a Viernes: 8:00 - 15:00',
            email: 'ana.fernandez@cartagenaeste.es'
        }
    ],
    pacientes: [
        {
            titulo: 'Cita Médica Online',
            descripcion: 'Solicita tu cita médica a través de nuestro portal online. Acceso 24/7 disponible.',
            icon: '📅'
        },
        {
            titulo: 'Historial Médico',
            descripcion: 'Consulta tu historial médico, pruebas realizadas y recomendaciones del doctor.',
            icon: '📋'
        },
        {
            titulo: 'Medicamentos',
            descripcion: 'Información sobre tus medicamentos prescritos y recomendaciones de uso.',
            icon: '💊'
        },
        {
            titulo: 'Preguntas Frecuentes',
            descripcion: 'Respuestas a las preguntas más comunes sobre servicios y procedimientos.',
            icon: '❓'
        },
        {
            titulo: 'Derechos del Paciente',
            descripcion: 'Conoce tus derechos como paciente y cómo ejercerlos.',
            icon: '⚖️'
        },
        {
            titulo: 'Contacto y Apoyo',
            descripcion: 'Línea de atención al paciente disponible de lunes a viernes.',
            icon: '☎️'
        }
    ],
    anuncios: [
        {
            id: 1,
            titulo: '¡Nuevo servicio de Telemedicina!',
            contenido: 'Ya está disponible nuestro servicio de consultas por videollamada. Solicita cita en nuestro portal.',
            fecha: '2026-02-16',
            urgencia: 'normal'
        },
        {
            id: 2,
            titulo: 'Cierre por mantenimiento',
            contenido: 'El sábado 22 de febrero estaremos cerrados por labores de mantenimiento. Nos disculpamos por los inconvenientes.',
            fecha: '2026-02-15',
            urgencia: 'alto'
        },
        {
            id: 3,
            titulo: 'Campaña de Vacunación 2026',
            contenido: 'Inicia la campaña de vacunación del 2026. Consulta con tu médico sobre las vacunas recomendadas para ti.',
            fecha: '2026-02-12',
            urgencia: 'normal'
        },
        {
            id: 4,
            titulo: 'Nuevos Horarios de Atención',
            contenido: 'A partir del 1 de marzo, ampliamos nuestro horario de atención al público. Consulta los nuevos horarios en nuestro portal.',
            fecha: '2026-02-10',
            urgencia: 'bajo'
        }
    ]
};

// ==========================================
// FUNCIONES DE CARGA DE CONTENIDOS
// ==========================================

/**
 * Carga documentos dinámicamente
 */
function loadDocumentos() {
    const container = document.getElementById('documentos-list');
    
    if (!data.documentos || data.documentos.length === 0) {
        container.innerHTML = '<p class="loading">No hay documentos disponibles</p>';
        return;
    }

    container.innerHTML = data.documentos.map(doc => `
        <div class="document-card">
            <h3>${doc.titulo}</h3>
            <p>${doc.descripcion}</p>
            <div class="document-meta">
                <span>📁 ${doc.tipo}</span> | 
                <span>📅 ${formatDate(doc.fecha)}</span>
            </div>
            <a href="${doc.url}" class="btn-download">Descargar PDF</a>
        </div>
    `).join('');
}

/**
 * Carga profesionales dinámicamente
 */
function loadProfesionales() {
    const container = document.getElementById('profesionales-list');
    
    if (!data.profesionales || data.profesionales.length === 0) {
        container.innerHTML = '<p class="loading">No hay profesionales disponibles</p>';
        return;
    }

    container.innerHTML = data.profesionales.map(prof => `
        <div class="professional-card">
            <h3>${prof.nombre}</h3>
            <p><strong>Especialidad:</strong> ${prof.especialidad}</p>
            <p><strong>Horario:</strong> ${prof.horario}</p>
            <p><strong>Email:</strong> <a href="mailto:${prof.email}">${prof.email}</a></p>
        </div>
    `).join('');
}

/**
 * Carga información para pacientes
 */
function loadPacientes() {
    const container = document.getElementById('pacientes-list');
    
    if (!data.pacientes || data.pacientes.length === 0) {
        container.innerHTML = '<p class="loading">No hay información disponible</p>';
        return;
    }

    container.innerHTML = data.pacientes.map(info => `
        <div class="patient-info-card">
            <h3>${info.icon} ${info.titulo}</h3>
            <p>${info.descripcion}</p>
        </div>
    `).join('');
}

/**
 * Carga anuncios dinámicamente
 */
function loadAnuncios() {
    const container = document.getElementById('anuncios-list');
    
    if (!data.anuncios || data.anuncios.length === 0) {
        container.innerHTML = '<p class="loading">No hay anuncios disponibles</p>';
        return;
    }

    container.innerHTML = data.anuncios.map(anuncio => `
        <div class="announcement-item ${anuncio.urgencia === 'alto' ? 'urgente' : ''}">
            <h3>${anuncio.titulo}</h3>
            <p>${anuncio.contenido}</p>
            <div class="announcement-date">
                📅 ${formatDate(anuncio.fecha)}
                ${anuncio.urgencia === 'alto' ? '<span style="color: #cc0000; margin-left: 10px;"> ⚠️ URGENTE</span>' : ''}
            </div>
        </div>
    `).join('');
}

/**
 * Formatea fechas en formato legible
 */
function formatDate(dateString) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('es-ES', options);
}

/**
 * Maneja el menú hamburguesa en móvil
 */
function initMobileMenu() {
    const menuBtn = document.getElementById('menuBtn');
    const mainNav = document.getElementById('mainNav');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');
        });

        // Cerrar menú al hacer click en un enlace
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
            });
        });

        // Cerrar menú si se hace click fuera
        document.addEventListener('click', (e) => {
            if (!mainNav.contains(e.target) && !menuBtn.contains(e.target)) {
                mainNav.classList.remove('active');
            }
        });
    }
}

/**
 * Scroll suave para enlaces internos
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href !== '#') {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
}

/**
 * Inicializa la aplicación
 */
function init() {
    console.log('🚀 Inicializando Cartagena Este...');
    
    // Cargar todos los contenidos
    loadDocumentos();
    loadProfesionales();
    loadPacientes();
    loadAnuncios();
    
    // Inicializar funcionalidades
    initMobileMenu();
    initSmoothScroll();
    
    console.log('✅ Cartagena Este cargado correctamente');
}

// ==========================================
// EVENTOS DEL DOM
// ==========================================

// Ejecutar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// ==========================================
// API PARA CARGAR DATOS EXTERNOS (FUTURO)
// ==========================================

/**
 * Función para cargar datos de un servidor externo
 * Placeholder para futuras implementaciones
 */
async function loadDataFromServer(endpoint) {
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const newData = await response.json();
        Object.assign(data, newData);
        loadDocumentos();
        loadProfesionales();
        loadPacientes();
        loadAnuncios();
    } catch (error) {
        console.error('Error cargando datos del servidor:', error);
    }
}

// Exportar funciones para uso externo si es necesario
window.cartagenaEste = {
    loadDocumentos,
    loadProfesionales,
    loadPacientes,
    loadAnuncios,
    loadDataFromServer
};
