/* ==========================================
   SALTWISE KITCHEN - VANILLA JAVASCRIPT
   Functionality for menus, scrolling, and forms
   ========================================== */

// ==========================================
// DOM READY - Initialize all functions
// ==========================================
document.addEventListener('DOMContentLoaded', function () {
    initMenuToggle();
    initDropdownMenu();
    initBackToTop();
    initSmoothScroll();
    initContactForm();
});

// ==========================================
// MENU TOGGLE (Mobile Navigation)
// ==========================================
function initMenuToggle() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (!menuToggle || !navList) return;

    menuToggle.addEventListener('click', function (e) {
        e.stopPropagation();
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navList.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navList.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function () {
            menuToggle.setAttribute('aria-expanded', 'false');
            navList.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav')) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navList.classList.remove('active');
        }
    });
}

// ==========================================
// DROPDOWN MENU (Recipe Navigation)
// ==========================================
function initDropdownMenu() {
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');

    dropdownButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            const menu = this.nextElementSibling;

            if (!menu || !menu.classList.contains('dropdown-menu')) return;

            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            // Close all other dropdowns
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                m.classList.remove('active');
            });
            document.querySelectorAll('.dropdown-btn').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });

            // Toggle current dropdown
            if (!isExpanded) {
                this.setAttribute('aria-expanded', 'true');
                menu.classList.add('active');
            }
        });
    });

    // Close dropdown when a link is clicked
    document.querySelectorAll('.dropdown-menu a').forEach(link => {
        link.addEventListener('click', function () {
            const btn = this.closest('.dropdown').querySelector('.dropdown-btn');
            if (btn) {
                btn.setAttribute('aria-expanded', 'false');
            }
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                m.classList.remove('active');
            });
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            document.querySelectorAll('.dropdown-menu').forEach(m => {
                m.classList.remove('active');
            });
            document.querySelectorAll('.dropdown-btn').forEach(btn => {
                btn.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

// ==========================================
// BACK TO TOP BUTTON
// ==========================================
function initBackToTop() {
    const backToTopBtn = document.querySelector('.back-to-top');

    if (!backToTopBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    // Scroll to top when button is clicked
    backToTopBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==========================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ==========================================
function initSmoothScroll() {
    // Get all anchor links
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if href is just "#"
            if (href === '#') return;

            const target = document.querySelector(href);

            // Check if target exists
            if (!target) return;

            e.preventDefault();

            // Account for sticky header height
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const targetPosition = target.offsetTop - headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// ==========================================
// CONTACT FORM HANDLING
// ==========================================
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Simulate form submission
        // In a real application, you would send this data to a backend service
        console.log('Form submitted:', {
            name: name,
            email: email,
            subject: subject,
            message: message
        });

        // Show success message
        const successMessage = document.getElementById('successMessage');
        if (successMessage) {
            successMessage.style.display = 'block';
        }

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(function () {
            if (successMessage) {
                successMessage.style.display = 'none';
            }
        }, 5000);
    });
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Debounce function to limit how often a function can be called
 * @param {Function} func - The function to debounce
 * @param {number} wait - Milliseconds to wait
 * @returns {Function} - The debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit how often a function can be called
 * @param {Function} func - The function to throttle
 * @param {number} limit - Milliseconds between calls
 * @returns {Function} - The throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/**
 * Check if an element is in the viewport
 * @param {HTMLElement} element - The element to check
 * @returns {boolean} - True if element is visible
 */
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * Get all focusable elements in a container
 * @param {HTMLElement} container - The container element
 * @returns {Array} - Array of focusable elements
 */
function getFocusableElements(container) {
    return Array.from(
        container.querySelectorAll(
            'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
    );
}

// ==========================================
// KEYBOARD NAVIGATION (Accessibility)
// ==========================================
document.addEventListener('keydown', function (e) {
    // Close menus when Escape is pressed
    if (e.key === 'Escape') {
        // Close mobile menu
        const menuToggle = document.querySelector('.menu-toggle');
        const navList = document.querySelector('.nav-list');
        if (menuToggle && navList) {
            menuToggle.setAttribute('aria-expanded', 'false');
            navList.classList.remove('active');
        }

        // Close dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(m => {
            m.classList.remove('active');
        });
        document.querySelectorAll('.dropdown-btn').forEach(btn => {
            btn.setAttribute('aria-expanded', 'false');
        });
    }
});

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================

// Lazy load images if Intersection Observer is supported
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Log initialization complete
console.log('Saltwise Kitchen initialized successfully');