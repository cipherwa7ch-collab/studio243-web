// ===== NAVEGACIÓN SCROLL =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===== ANIMACIONES AL SCROLL (Intersection Observer) =====
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos para animación
const elementsToAnimate = document.querySelectorAll('.service-card, .process-step, .portfolio-item');
elementsToAnimate.forEach(element => {
    animateOnScroll.observe(element);
});

// ===== SMOOTH SCROLL PARA ENLACES =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Altura del navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== MENÚ HAMBURGUESA (MÓVIL) =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    hamburger.classList.toggle('active');
});

// ===== PARALLAX SUAVE EN HERO =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / 800);
    }
});

// ===== FORMULARIO DE CONTACTO =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Aquí puedes agregar la lógica para enviar el formulario
        // Por ahora, solo mostramos un mensaje de éxito
        
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;
        
        // Simular envío (reemplazar con tu lógica real)
        setTimeout(() => {
            submitButton.textContent = '✓ Mensaje enviado';
            submitButton.style.background = '#34C759';
            
            // Resetear formulario
            setTimeout(() => {
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.style.background = '';
                submitButton.disabled = false;
            }, 2000);
        }, 1500);
    });
}

// ===== ANIMACIÓN DE NÚMEROS (OPCIONAL) =====
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.textContent = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// ===== CURSOR PERSONALIZADO (OPCIONAL - EFECTO PREMIUM) =====
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;
const speed = 0.15; // Velocidad de seguimiento

function animateCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX += distX * speed;
    cursorY += distY * speed;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

animateCursor();

// Agregar efecto hover en elementos interactivos
const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hover');
    });
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover');
    });
});

// ===== EFECTOS DE SCROLL ADICIONALES =====
// Animación de fade-in progresiva para tarjetas de servicio
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Lo mismo para los pasos del proceso
const processSteps = document.querySelectorAll('.process-step');
processSteps.forEach((step, index) => {
    step.style.transitionDelay = `${index * 0.15}s`;
});

// ===== PREVENIR SCROLL HORIZONTAL =====
document.body.style.overflowX = 'hidden';

// ===== PERFORMANCE: REDUCIR ANIMACIONES EN MÓVILES =====
if (window.innerWidth < 768) {
    // Desactivar cursor personalizado en móvil
    cursor.style.display = 'none';
}

// ===== CONSOLE MESSAGE (OPCIONAL) =====
console.log('%c Studio 243 ', 'background: #0071E3; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
console.log('%c ¿Interesado en trabajar con nosotros? ', 'font-size: 14px; color: #86868B;');
console.log('%c Contacta: hola@studio243.com ', 'font-size: 14px; color: #0071E3;');
