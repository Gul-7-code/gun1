// ===========================
// Configuration
// ===========================
const CONFIG = {
    scrollThreshold: 100,
    navbarOffset: 80,
    observerThreshold: 0.1,
    messageTimeout: 5000,
    parallaxSpeed: 0.5,
    formSubmitDelay: 1500
};

// ===========================
// DOM Element Cache
// ===========================
const DOM = {
    hamburger: document.querySelector('.hamburger'),
    navMenu: document.querySelector('.nav-menu'),
    navLinks: document.querySelectorAll('.nav-link'),
    navbar: document.querySelector('.navbar'),
    sections: document.querySelectorAll('section[id]'),
    hero: document.querySelector('.hero'),
    contactForm: document.getElementById('contactForm'),
    formMessage: document.getElementById('formMessage')
};

// ===========================
// Mobile Menu Toggle
// ===========================
DOM.hamburger.addEventListener('click', () => {
    DOM.hamburger.classList.toggle('active');
    DOM.navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
DOM.navLinks.forEach(link => {
    link.addEventListener('click', () => {
        DOM.hamburger.classList.remove('active');
        DOM.navMenu.classList.remove('active');
    });
});

// ===========================
// Consolidated Scroll Handler
// ===========================
let lastScroll = 0;

// Helper function: Update navbar style based on scroll position
function updateNavbarStyle(scrollY) {
    if (scrollY > CONFIG.scrollThreshold) {
        DOM.navbar.style.padding = '15px 0';
        DOM.navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        DOM.navbar.style.padding = '20px 0';
        DOM.navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
    }
}

// Helper function: Update active navigation link
function updateActiveNavLink(scrollY) {
    DOM.sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - CONFIG.scrollThreshold;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            DOM.navLinks.forEach(link => link.classList.remove('active-nav'));
            if (navLink) navLink.classList.add('active-nav');
        }
    });
}

// Helper function: Apply parallax effect to hero section
function applyParallaxEffect(scrollY) {
    if (DOM.hero && scrollY < DOM.hero.offsetHeight) {
        DOM.hero.style.transform = `translateY(${scrollY * CONFIG.parallaxSpeed}px)`;
    }
}

// Single consolidated scroll event listener
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    updateNavbarStyle(currentScroll);
    updateActiveNavLink(currentScroll);
    applyParallaxEffect(currentScroll);

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
            const offsetTop = target.offsetTop - CONFIG.navbarOffset;

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
    threshold: CONFIG.observerThreshold,
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
    '.service-card, .portfolio-item, .stat-item, .about-text, .contact-content'
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

// Helper function: Set submit button state
function setSubmitButtonState(button, isSubmitting) {
    button.disabled = isSubmitting;
    button.textContent = isSubmitting ? 'Gönderiliyor...' : 'Gönder';
}

// Helper function: Validate email format
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function: Show form message
function showMessage(message, type) {
    DOM.formMessage.textContent = message;
    DOM.formMessage.className = `form-message ${type}`;

    setTimeout(() => {
        DOM.formMessage.className = 'form-message';
    }, CONFIG.messageTimeout);
}

// Main form submission handler
DOM.contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showMessage('Lütfen tüm alanları doldurun.', 'error');
        return;
    }

    // Validate email format
    if (!isValidEmail(formData.email)) {
        showMessage('Geçerli bir e-posta adresi girin.', 'error');
        return;
    }

    const submitBtn = DOM.contactForm.querySelector('button[type="submit"]');

    try {
        setSubmitButtonState(submitBtn, true);

        // Simulate API call (replace with actual API endpoint in production)
        await new Promise(resolve => setTimeout(resolve, CONFIG.formSubmitDelay));

        // Show success message and reset form
        showMessage('Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.', 'success');
        DOM.contactForm.reset();

        // Log form data (in production, this would be sent to a server)
        console.log('Form Data:', formData);

    } catch (error) {
        showMessage('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.', 'error');
    } finally {
        setSubmitButtonState(submitBtn, false);
    }
});

// ===========================
// Portfolio Item Hover Effect Enhancement
// ===========================
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });
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

console.log('Portfolio website initialized successfully! ✨');
