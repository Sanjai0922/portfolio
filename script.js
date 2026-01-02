// Smooth Scroll Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Contact Form Handling - Send to WhatsApp
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Clear previous errors
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';
    
    let isValid = true;
    
    // Validation
    if (!name || name.length < 3) {
      document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
      isValid = false;
    }
    
    if (!email || !isValidEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email';
      isValid = false;
    }
    
    if (!subject || subject.length < 5) {
      document.getElementById('subjectError').textContent = 'Subject must be at least 5 characters';
      isValid = false;
    }
    
    if (!message || message.length < 10) {
      document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
      isValid = false;
    }
    
    if (isValid) {
      // Create WhatsApp message
      const whatsappMessage = `*New Portfolio Message*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*Email:* ${encodeURIComponent(email)}%0A*Subject:* ${encodeURIComponent(subject)}%0A%0A*Message:*%0A${encodeURIComponent(message)}`;
      
      // WhatsApp number: 919952311744
      const whatsappLink = `https://wa.me/919952311744?text=${whatsappMessage}`;
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank');
      
      // Show success message
      const formMessage = document.getElementById('formMessage');
      formMessage.textContent = 'Opening WhatsApp to send your message...';
      formMessage.classList.add('success');
      formMessage.classList.remove('error');
      
      // Reset form
      contactForm.reset();
      
      // Clear message after 3 seconds
      setTimeout(() => {
        formMessage.textContent = '';
        formMessage.classList.remove('success');
      }, 3000);
      
      console.log('WhatsApp Message Sent:', { name, email, subject, message });
    } else {
      const formMessage = document.getElementById('formMessage');
      formMessage.textContent = 'Please fix the errors above';
      formMessage.classList.add('error');
      formMessage.classList.remove('success');
    }
  });
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Navbar Background on Scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 50) {
    navbar.style.background = 'rgba(15, 15, 30, 0.98)';
    navbar.style.boxShadow = '0 4px 30px rgba(102, 126, 234, 0.25)';
  } else {
    navbar.style.background = 'rgba(15, 15, 30, 0.95)';
    navbar.style.boxShadow = '0 4px 30px rgba(102, 126, 234, 0.15)';
  }
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  observer.observe(section);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
  observer.observe(card);
});

// Observe skill categories
document.querySelectorAll('.skill-category').forEach(category => {
  observer.observe(category);
});

// Contact Card Hover Effects
document.querySelectorAll('.contact-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Project Card Click Effects
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px)';
  });
  
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0)';
  });
});

// Active Navigation Link
const navLinks = document.querySelectorAll('.nav-menu a');
window.addEventListener('scroll', () => {
  let current = '';
  
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    
    if (pageYOffset >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.style.color = '#b0b0c0';
    link.style.fontWeight = '500';
    
    if (link.getAttribute('href').slice(1) === current) {
      link.style.color = '#a0c0ff';
      link.style.fontWeight = '600';
    }
  });
});

// Form Input Animations
const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
formInputs.forEach(input => {
  input.addEventListener('focus', function() {
    this.parentElement.style.transform = 'scale(1.02)';
  });
  
  input.addEventListener('blur', function() {
    this.parentElement.style.transform = 'scale(1)';
  });
});

// Ripple Effect on Skill Tags
document.querySelectorAll('.skill-tag').forEach(tag => {
  tag.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    this.appendChild(ripple);
    
    setTimeout(() => ripple.remove(), 600);
  });
});

// Initialize AOS-like animations on page load
document.addEventListener('DOMContentLoaded', () => {
  // Add animation class to hero content
  document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    setTimeout(() => {
      el.style.opacity = '1';
    }, 100);
  });
  
  // Log console message
  console.log('Welcome to Sanjai Kumar\'s Portfolio! 👋');
  console.log('Feel free to explore and reach out for opportunities.');
});

// Add ripple style to stylesheet dynamically
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }
  
  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
