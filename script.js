// GSAP Registration
gsap.registerPlugin(ScrollTrigger);

// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.1
    });
});

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: () => {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        gsap.set(cursorFollower, {
            x: followerX,
            y: followerY
        });
    }
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .service-card');

hoverElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursorFollower, {
            width: 60,
            height: 60,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    element.addEventListener('mouseleave', () => {
        gsap.to(cursorFollower, {
            width: 40,
            height: 40,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Navigation scroll effect
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        gsap.to(spans[0], { rotation: 45, y: 8, duration: 0.3 });
        gsap.to(spans[1], { opacity: 0, duration: 0.3 });
        gsap.to(spans[2], { rotation: -45, y: -8, duration: 0.3 });
    } else {
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    }
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        gsap.to(spans[0], { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(spans[1], { opacity: 1, duration: 0.3 });
        gsap.to(spans[2], { rotation: 0, y: 0, duration: 0.3 });
    });
});

// Hero animations
gsap.from('.hero-label', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out'
});

gsap.from('.hero-title .line', {
    opacity: 0,
    y: 100,
    duration: 1,
    stagger: 0.2,
    delay: 0.4,
    ease: 'power3.out'
});

gsap.from('.hero-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: 1.2,
    ease: 'power3.out'
});

gsap.from('.hero-cta .btn', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.15,
    delay: 1.5,
    ease: 'power3.out'
});

gsap.from('.hero-scroll', {
    opacity: 0,
    duration: 0.8,
    delay: 2,
    ease: 'power3.out'
});

// Section animations on scroll
gsap.utils.toArray('.section-header').forEach(header => {
    gsap.from(header.querySelector('.section-number'), {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.from(header.querySelector('.section-title'), {
        scrollTrigger: {
            trigger: header,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: 0.2,
        ease: 'power3.out'
    });
});

// Service cards animation
gsap.utils.toArray('.service-card').forEach((card, index) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: index * 0.15,
        ease: 'power3.out'
    });
});

// Process intro animation
gsap.from('.process-intro', {
    scrollTrigger: {
        trigger: '.process-intro',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out'
});

// Process steps animation
gsap.utils.toArray('.process-step').forEach((step, index) => {
    gsap.from(step, {
        scrollTrigger: {
            trigger: step,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: index * 0.1,
        ease: 'power3.out'
    });
});

// CTA section animation
const ctaTl = gsap.timeline({
    scrollTrigger: {
        trigger: '.cta',
        start: 'top 70%',
        toggleActions: 'play none none reverse'
    }
});

ctaTl.from('.cta-title .line', {
    opacity: 0,
    y: 80,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out'
})
.from('.cta-subtitle', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.4')
.from('.cta-buttons', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out'
}, '-=0.4');

// Footer animation
gsap.from('.footer-content', {
    scrollTrigger: {
        trigger: '.footer',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 40,
    duration: 0.8,
    ease: 'power3.out'
});

// Smooth scroll for anchor links
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

// Parallax effect on hero background
gsap.to('.hero-bg', {
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

// Service card hover interactions
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        gsap.to(this.querySelector('.service-icon'), {
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
    
    card.addEventListener('mouseleave', function() {
        gsap.to(this.querySelector('.service-icon'), {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
        });
    });
});

// Add subtle floating animation to hero elements
gsap.to('.hero-label', {
    y: -10,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: 'sine.inOut'
});

// Numbers count animation for section numbers
gsap.utils.toArray('.section-number').forEach(number => {
    ScrollTrigger.create({
        trigger: number,
        start: 'top 80%',
        onEnter: () => {
            gsap.from(number, {
                textContent: 0,
                duration: 1.5,
                snap: { textContent: 1 },
                ease: 'power1.inOut'
            });
        }
    });
});

// Button ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'translate(-50%, -50%)';
        
        this.appendChild(ripple);
        
        gsap.to(ripple, {
            width: 300,
            height: 300,
            opacity: 0,
            duration: 0.6,
            ease: 'power2.out',
            onComplete: () => ripple.remove()
        });
    });
});

// Loading animation
window.addEventListener('load', () => {
    gsap.to('body', {
        opacity: 1,
        duration: 0.5
    });
});

// Initial body fade
gsap.set('body', { opacity: 0 });