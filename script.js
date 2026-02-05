// ===== GSAP SETUP =====
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ===== PRELOADER PREMIUM =====
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    const loaderProgress = document.querySelector('.loader-progress');
    
    // Animar barra de progreso
    gsap.to(loaderProgress, {
        width: '100%',
        duration: 1.5,
        ease: 'power2.inOut',
        onComplete: () => {
            // Ocultar preloader
            gsap.to(preloader, {
                opacity: 0,
                duration: 0.5,
                onComplete: () => {
                    preloader.style.display = 'none';
                    initAnimations();
                }
            });
        }
    });
});

// ===== INICIALIZAR TODAS LAS ANIMACIONES =====
function initAnimations() {
    heroAnimations();
    navbarAnimations();
    servicesAnimations();
    processAnimations();
    portfolioAnimations();
    smoothScrolling();
    cursorAnimations();
    parallaxEffects();
}

// ===== HERO ANIMATIONS =====
function heroAnimations() {
    const heroTl = gsap.timeline();
    
    // Animar círculos de fondo
    gsap.to('.circle-1', {
        x: 100,
        y: -50,
        scale: 1.2,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.circle-2', {
        x: -80,
        y: 100,
        scale: 0.8,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.circle-3', {
        x: 50,
        y: 80,
        scale: 1.1,
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    // Animar título - efecto split text
    const titleLines = document.querySelectorAll('.hero-title .line');
    
    heroTl.from(titleLines, {
        y: 100,
        opacity: 0,
        rotationX: -90,
        transformOrigin: 'top center',
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    })
    .from('.hero-subtitle', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.5')
    .from('.hero-cta', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6')
    .from('.scroll-indicator', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.6');
    
    // Efecto de brillo en texto gradient
    gsap.to('.gradient-text', {
        backgroundPosition: '200% center',
        duration: 3,
        repeat: -1,
        ease: 'none'
    });
}

// ===== NAVBAR ANIMATIONS =====
function navbarAnimations() {
    const navbar = document.querySelector('.navbar');
    
    ScrollTrigger.create({
        start: 'top -100',
        end: 99999,
        toggleClass: {
            className: 'scrolled',
            targets: navbar
        },
        onEnter: () => {
            gsap.to(navbar, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        },
        onLeaveBack: () => {
            gsap.to(navbar, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        }
    });
    
    // Efecto hover en links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', (e) => {
            gsap.to(link, {
                y: -2,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        link.addEventListener('mouseleave', (e) => {
            gsap.to(link, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// ===== SERVICES ANIMATIONS (Scroll Trigger Premium) =====
function servicesAnimations() {
    const serviceCards = gsap.utils.toArray('.service-card');
    
    serviceCards.forEach((card, index) => {
        // Animación de entrada
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top 80%',
                end: 'top 20%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            rotationX: -20,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out'
        });
        
        // Efecto parallax en hover
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -20,
                scale: 1.02,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.service-icon'), {
                scale: 1.1,
                rotation: 5,
                duration: 0.4,
                ease: 'back.out(1.7)'
            });
            
            gsap.to(card.querySelector('.service-hover-effect'), {
                opacity: 1,
                scale: 1,
                duration: 0.4
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.service-icon'), {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: 'power2.out'
            });
            
            gsap.to(card.querySelector('.service-hover-effect'), {
                opacity: 0,
                scale: 0.8,
                duration: 0.4
            });
        });
    });
    
    // Animar números de servicio
    const serviceNumbers = document.querySelectorAll('.service-number');
    serviceNumbers.forEach(num => {
        gsap.from(num, {
            scrollTrigger: {
                trigger: num,
                start: 'top 90%'
            },
            scale: 0,
            rotation: 180,
            duration: 0.8,
            ease: 'back.out(1.7)'
        });
    });
}

// ===== PROCESS ANIMATIONS =====
function processAnimations() {
    const processSteps = gsap.utils.toArray('.process-step');
    
    processSteps.forEach((step, index) => {
        gsap.from(step, {
            scrollTrigger: {
                trigger: step,
                start: 'top 75%',
                toggleActions: 'play none none reverse'
            },
            y: 80,
            opacity: 0,
            scale: 0.8,
            duration: 0.8,
            delay: index * 0.15,
            ease: 'power3.out'
        });
        
        // Animación del icono
        const icon = step.querySelector('.step-icon');
        gsap.from(icon, {
            scrollTrigger: {
                trigger: step,
                start: 'top 75%'
            },
            rotation: 360,
            scale: 0,
            duration: 1,
            delay: index * 0.15 + 0.3,
            ease: 'elastic.out(1, 0.5)'
        });
    });
}

// ===== PORTFOLIO ANIMATIONS =====
function portfolioAnimations() {
    const portfolioItems = gsap.utils.toArray('.portfolio-item');
    
    portfolioItems.forEach((item, index) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 100,
            opacity: 0,
            rotationY: -30,
            duration: 1,
            delay: index * 0.2,
            ease: 'power3.out'
        });
        
        // Efecto hover 3D
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                y: -15,
                rotationY: 5,
                scale: 1.03,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
        
        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                y: 0,
                rotationY: 0,
                scale: 1,
                duration: 0.4,
                ease: 'power2.out'
            });
        });
    });
}

// ===== SMOOTH SCROLLING =====
function smoothScrolling() {
    // Smooth scroll para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                gsap.to(window, {
                    duration: 1.2,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: 'power3.inOut'
                });
            }
        });
    });
}

// ===== CURSOR PERSONALIZADO PREMIUM =====
function cursorAnimations() {
    if (window.innerWidth < 768) return; // No en móviles
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateCursor() {
        // Cursor principal (lento)
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        cursorX += distX * 0.1;
        cursorY += distY * 0.1;
        
        // Punto del cursor (rápido)
        const dotDistX = mouseX - dotX;
        const dotDistY = mouseY - dotY;
        dotX += dotDistX * 0.15;
        dotY += dotDistY * 0.15;
        
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
        cursorDot.style.left = dotX + 'px';
        cursorDot.style.top = dotY + 'px';
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Efectos hover en elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, .service-card, .portfolio-item, input, textarea');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            cursorDot.classList.add('cursor-hover');
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            cursorDot.classList.remove('cursor-hover');
        });
    });
}

// ===== PARALLAX EFFECTS =====
function parallaxEffects() {
    // Parallax en hero
    gsap.to('.hero-content', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1
        },
        y: 200,
        opacity: 0.3,
        ease: 'none'
    });
    
    // Parallax en secciones
    const sections = gsap.utils.toArray('section');
    sections.forEach(section => {
        const bg = section.querySelector('.section-header');
        if (bg) {
            gsap.to(bg, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                },
                y: -50,
                ease: 'none'
            });
        }
    });
}

// ===== FORMULARIO ANIMADO =====
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    // Animar campos al focus
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                scale: 1.02,
                boxShadow: '0 8px 30px rgba(0, 113, 227, 0.2)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                scale: 1,
                boxShadow: '0 0 0 rgba(0, 113, 227, 0)',
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('.submit-button');
        const originalText = submitButton.textContent;
        
        gsap.to(submitButton, {
            scale: 0.95,
            duration: 0.1,
            yoyo: true,
            repeat: 1,
            onComplete: () => {
                submitButton.textContent = 'Enviando...';
                submitButton.disabled = true;
                
                // Simular envío
                setTimeout(() => {
                    gsap.to(submitButton, {
                        backgroundColor: '#34C759',
                        duration: 0.3,
                        onComplete: () => {
                            submitButton.textContent = '✓ Mensaje enviado';
                            
                            setTimeout(() => {
                                contactForm.reset();
                                gsap.to(submitButton, {
                                    backgroundColor: '',
                                    duration: 0.3,
                                    onComplete: () => {
                                        submitButton.textContent = originalText;
                                        submitButton.disabled = false;
                                    }
                                });
                            }, 2000);
                        }
                    });
                }, 1500);
            }
        });
    });
}

// ===== MENÚ HAMBURGUESA ANIMADO =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('active');
        
        gsap.to(navLinks, {
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
            duration: 0.4,
            ease: 'power2.out'
        });
        
        // Animar hamburger
        const spans = hamburger.querySelectorAll('span');
        if (isOpen) {
            gsap.to(spans[0], { rotation: 45, y: 7, duration: 0.3 });
            gsap.to(spans[1], { opacity: 0, duration: 0.3 });
            gsap.to(spans[2], { rotation: -45, y: -7, duration: 0.3 });
        } else {
            gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
            gsap.to(spans[1], { opacity: 1, duration: 0.3 });
            gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
        }
    });
}

// ===== SCROLL REVEAL GENERAL =====
gsap.utils.toArray('.reveal').forEach(element => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
});

// ===== PERFORMANCE OPTIMIZATION =====
// Reducir animaciones en dispositivos de bajo rendimiento
const isLowPerformance = !window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
if (isLowPerformance) {
    gsap.globalTimeline.timeScale(2); // Acelerar animaciones
    ScrollTrigger.config({ limitCallbacks: true });
}

// ===== CONSOLE SIGNATURE =====
console.log('%c Studio 243 ', 'background: linear-gradient(135deg, #0071E3 0%, #0077ED 100%); color: white; font-size: 24px; padding: 15px 30px; border-radius: 8px; font-weight: bold;');
console.log('%c Diseño y desarrollo web premium ', 'font-size: 14px; color: #86868B; padding: 5px;');
console.log('%c ⚡ Potenciado por GSAP ScrollTrigger ', 'font-size: 12px; color: #0071E3; padding: 5px;');
