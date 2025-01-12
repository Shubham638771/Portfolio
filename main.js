// Custom cursor
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
    cursor.style.transform = 'scale(0.8)';
    setTimeout(() => {
        cursor.style.transform = 'scale(1)';
    }, 100);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Here you would typically send this data to a server
    console.log('Form submitted:', { name, email, message });
    
    // Reset form
    contactForm.reset();
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
});

// Skill progress animation
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const progress = card.querySelector('.progress');
        progress.style.width = progress.parentElement.dataset.progress;
    });
});

// 3D cube animation control
const cube = document.querySelector('.cube');
let isHovered = false;

cube.addEventListener('mouseenter', () => {
    isHovered = true;
    cube.style.animationPlayState = 'paused';
});

cube.addEventListener('mouseleave', () => {
    isHovered = false;
    cube.style.animationPlayState = 'running';
});

// Parallax effect for hero section
document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
    
    document.querySelector('.hero-content').style.transform = 
        `translate(${moveX}px, ${moveY}px)`;
});