// ================================
// ULTRA-PROFESSIONAL PORTFOLIO JS
// Muhammad Ashar Khan
// ================================

// ================================
// CUSTOM CURSOR
// ================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline && window.innerWidth > 768) {
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Scale cursor on hover
    const hoverElements = document.querySelectorAll('a, button, .project-card, .service-card, .info-card, input, textarea');

    hoverElements.forEach(elem => {
        elem.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(2)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
        });

        elem.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    });
}

// ================================
// MOBILE MENU TOGGLE - SIMPLE FIX
// ================================

window.addEventListener('load', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle) {
        menuToggle.onclick = function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            } else {
                navMenu.classList.add('active');
                menuToggle.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        };
        
        // Close when clicking menu links
        const links = document.querySelectorAll('.nav-link');
        links.forEach(function(link) {
            link.onclick = function() {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                document.body.style.overflow = '';
            };
        });
    }
});

// ================================
// NAVBAR SCROLL EFFECTS
// ================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// ================================
// ACTIVE NAVIGATION HIGHLIGHTING
// ================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
});

// ================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ================================
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

// Observe sections with fade-in
document.querySelectorAll('section').forEach(section => {
    if (!section.classList.contains('hero')) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    }
});

// Observe project cards with stagger
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;

    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    projectObserver.observe(card);
});

// Observe skill categories with stagger
document.querySelectorAll('.skill-category').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateX(-30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;

    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
            }
        });
    }, observerOptions);

    skillObserver.observe(card);
});

// Observe service cards with stagger
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

    const serviceObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);

    serviceObserver.observe(card);
});

// Observe info cards with stagger
document.querySelectorAll('.info-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'scale(0.9)';
    card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;

    const infoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, observerOptions);

    infoObserver.observe(card);
});

// ================================
// PARALLAX EFFECT FOR HERO SHAPES
// ================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const shapes = document.querySelectorAll('.shape');

    shapes.forEach((shape, index) => {
        const speed = (index + 1) * 0.3;
        shape.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
    });
});

// ================================
// ANIMATED COUNTER FOR STATS
// ================================
const animateValue = (element, start, end, duration, suffix = '') => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + suffix;
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

// Observe hero stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = document.querySelectorAll('.stat-content h3');
            stats.forEach(stat => {
                const count = parseInt(stat.getAttribute('data-count'));
                if (count) {
                    if (stat.textContent.includes('%')) {
                        animateValue(stat, 0, count, 2000, '%');
                    } else if (stat.textContent.includes('+')) {
                        animateValue(stat, 0, count, 2000, '+');
                    } else {
                        animateValue(stat, 0, count, 2000);
                    }
                }
            });
            statsObserver.disconnect();
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ================================
// SKILL PROGRESS BARS ANIMATION
// ================================
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.skill-category').forEach(category => {
    skillObserver.observe(category);
});

// ================================
// BRAND INITIALS ANIMATION
// ================================
const brandInitials = document.querySelectorAll('.brand-initial');
brandInitials.forEach((initial, index) => {
    initial.addEventListener('mouseenter', () => {
        initial.style.transform = `rotate(${Math.random() * 360}deg) scale(1.2)`;
    });

    initial.addEventListener('mouseleave', () => {
        const rotation = index === 0 ? -5 : index === 2 ? 5 : 0;
        initial.style.transform = `rotate(${rotation}deg) scale(1)`;
    });
});

// ================================
// CONTACT FORM HANDLING
// ================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);

        // Show success message
        showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');

        // Reset form
        this.reset();

        // Here you would typically send the data to a backend
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
    });
}

// ================================
// NOTIFICATION SYSTEM
// ================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #667eea, #764ba2)' : 'linear-gradient(135deg, #f5576c, #f093fb)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideInRight 0.5s ease;
        font-weight: 600;
        max-width: 350px;
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.5s ease';
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 3000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ================================
// BACK TO TOP BUTTON
// ================================
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ================================
// PROJECT LINKS (PLACEHOLDER)
// ================================
document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            showNotification('Project link coming soon!', 'info');
        }
    });
});

// ================================
// TYPING EFFECT (OPTIONAL)
// ================================
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// You can enable typing effect for hero title if desired
// const heroTitleLines = document.querySelectorAll('.title-line');
// if (heroTitleLines.length && window.innerWidth > 768) {
//     heroTitleLines.forEach((line, index) => {
//         const text = line.textContent;
//         setTimeout(() => {
//             typeWriter(line, text, 50);
//         }, index * 2000);
//     });
// }

// ================================
// RIPPLE EFFECT ON BUTTONS
// ================================
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');

        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ================================
// PAGE LOAD ANIMATION
// ================================
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ================================
// PRELOADER (OPTIONAL)
// ================================
// Uncomment to enable preloader
// window.addEventListener('load', () => {
//     const preloader = document.getElementById('preloader');
//     if (preloader) {
//         preloader.style.opacity = '0';
//         setTimeout(() => {
//             preloader.style.display = 'none';
//         }, 500);
//     }
// });

// ================================
// CONSOLE EASTER EGG
// ================================
console.log('%c✨ Welcome to My Portfolio! ✨', 'color: #667eea; font-size: 24px; font-weight: bold;');
console.log('%cMuhammad Ashar Khan', 'color: #764ba2; font-size: 18px; font-weight: bold;');
console.log('%cCreative Web Developer & Designer', 'color: #4facfe; font-size: 14px;');
console.log('%c💼 Looking for a developer? Let\'s connect!', 'color: #f5576c; font-size: 14px;');
console.log('%c📧 masharkhan205@gmail.com', 'color: #4CAF50; font-size: 14px;');
console.log('%c', 'padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);');

// ================================
// PERFORMANCE OPTIMIZATION
// ================================
// Debounce function for scroll events
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

// Apply debounce to scroll-heavy operations if needed
// const debouncedScroll = debounce(() => {
//     // Your scroll logic here
// }, 100);
// window.addEventListener('scroll', debouncedScroll);

// ================================
// ACCESSIBILITY ENHANCEMENTS
// ================================
// Add keyboard navigation for interactive elements
document.querySelectorAll('.project-card, .service-card, .info-card').forEach(card => {
    card.setAttribute('tabindex', '0');

    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.click();
        }
    });
});

// ================================
// READY MESSAGE
// ================================
console.log('%c🚀 Portfolio Loaded Successfully!', 'color: #4CAF50; font-size: 16px; font-weight: bold;');
