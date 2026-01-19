// ===========================
// Ben Dilek - Tur Rehberi Portfolio
// JavaScript Functionality
// ===========================

// ===========================
// Mobile Menu Toggle
// ===========================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.padding = '12px 0';
        navbar.style.boxShadow = '0 4px 30px rgba(44, 24, 16, 0.12)';
    } else {
        navbar.style.padding = '18px 0';
        navbar.style.boxShadow = '0 2px 20px rgba(44, 24, 16, 0.08)';
    }

    lastScroll = currentScroll;
});

// ===========================
// Smooth Scroll for Navigation Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Scroll Reveal Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Elements to animate on scroll
const animateOnScroll = document.querySelectorAll(
    '.service-card, .tour-card, .stat-item, .about-content, .contact-content'
);

animateOnScroll.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Contact Form Handling
// ===========================
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone')?.value || '',
            tour: document.getElementById('tour')?.value || '',
            message: document.getElementById('message').value
        };

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            showMessage('Lutfen gerekli alanlari doldurun.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showMessage('Gecerli bir e-posta adresi girin.', 'error');
            return;
        }

        // Simulate form submission
        try {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Gonderiliyor...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Show success message
            showMessage('Mesajiniz basariyla gonderildi! En kisa surede size donus yapacagim.', 'success');
            contactForm.reset();

            submitBtn.disabled = false;
            submitBtn.textContent = 'Mesaj Gonder';

            // Log form data
            console.log('Form Data:', formData);

        } catch (error) {
            showMessage('Bir hata olustu. Lutfen daha sonra tekrar deneyin.', 'error');

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Mesaj Gonder';
        }
    });
}

function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;

        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ===========================
// Active Navigation Link on Scroll
// ===========================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active-nav'));
            if (navLink) navLink.classList.add('active-nav');
        }
    });
});

// ===========================
// Tour Card Hover Effects
// ===========================
const tourCards = document.querySelectorAll('.tour-card');

tourCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });
});

// ===========================
// Service Card Hover Effects
// ===========================
const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });
});

// ===========================
// Stat Counter Animation
// ===========================
const statNumbers = document.querySelectorAll('.stat-number');

const animateCounter = (el) => {
    const text = el.textContent;
    const hasPlus = text.includes('+');
    const hasStar = text.includes('★');
    const number = parseInt(text.replace(/[^0-9]/g, ''));

    if (isNaN(number)) return;

    let current = 0;
    const increment = number / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
            current = number;
            clearInterval(timer);
        }
        let display = Math.floor(current);
        if (hasPlus) display += '+';
        if (hasStar) display += '★';
        el.textContent = display;
    }, 30);
};

const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statObserver.observe(stat));

// ===========================
// Parallax Effect on Hero Section
// ===========================
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.3;

    if (hero && scrolled < hero.offsetHeight) {
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            heroContent.style.opacity = 1 - (scrolled / hero.offsetHeight);
        }
    }
});

// ===========================
// Page Load Animation
// ===========================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===========================
// Add active class styling for nav
// ===========================
const style = document.createElement('style');
style.textContent = `
    .nav-link.active-nav {
        color: var(--primary-color);
    }
    .nav-link.active-nav::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ===========================
// WhatsApp Button Pulse Animation
// ===========================
const whatsappFloat = document.querySelector('.whatsapp-float');
if (whatsappFloat) {
    setInterval(() => {
        whatsappFloat.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappFloat.style.transform = 'scale(1)';
        }, 300);
    }, 3000);
}

console.log('Ben Dilek - Tur Rehberi Portfolio initialized successfully!');
