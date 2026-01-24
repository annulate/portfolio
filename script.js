// =====================
// SMOOTH SCROLL BEHAVIOR
// =====================

// Wait for the page to fully load before running any code
document.addEventListener('DOMContentLoaded', function() {
    
    // SMOOTH SCROLLING for navigation links
    // When you click a nav link, smoothly scroll to that section
    const navLinks = document.querySelectorAll('.nav-links a, .cta-buttons a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Check if link starts with # (internal page link)
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                event.preventDefault(); // Stop normal jump behavior
                
                const targetId = href.substring(1); // Remove the # symbol
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Scroll to the section smoothly
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    
    // =====================
    // SCROLL ANIMATIONS
    // =====================
    
    // Add fade-in animation when elements come into view
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element enters viewport
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target); // Stop observing once animated
            }
        });
    }, observerOptions);
    
    // Observe all project cards and skill categories
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .achievement-item');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    
    // =====================
    // NAVBAR SCROLL EFFECT
    // =====================
    
    // Add shadow to navbar when scrolling down
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
    });
    
    
    // =====================
    // DYNAMIC YEAR IN FOOTER
    // =====================
    
    // Automatically update copyright year
    const footerText = document.querySelector('.footer p');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = `&copy; ${currentYear} Chervelle Tan. Built with HTML, CSS, and JavaScript.`;
    }
    
    
    // =====================
    // CONSOLE MESSAGE
    // =====================
    
    // Fun message for developers who check the console
    console.log('%c👋 Hi there, fellow developer!', 'font-size: 16px; font-weight: bold; color: #2563EB;');
    console.log('%cThis portfolio was built from scratch with clean, understandable code.', 'font-size: 14px; color: #5A6C7D;');
    console.log('%cFeel free to explore! - Chervelle', 'font-size: 14px; color: #10B981;');
    
});


// =====================
// CSS FOR ANIMATIONS (added via JavaScript)
// =====================

// Inject animation styles into the page
const style = document.createElement('style');
style.textContent = `
    /* Initial state - invisible */
    .project-card,
    .skill-category,
    .achievement-item {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    /* Animated state - visible */
    .project-card.fade-in,
    .skill-category.fade-in,
    .achievement-item.fade-in {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);