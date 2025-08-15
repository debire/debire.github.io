// // Mobile Menu Toggle
// const burger = document.querySelector('.burger');
// const navLinks = document.querySelector('.nav-links');

// if (burger) {
//   burger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');

//   const spans = burger.querySelectorAll('span');
//   if (navLinks.classList.contains('active')) {
//     // Hamburger → X
//     spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
//     spans[1].style.opacity = '0';
//     spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
//   } else {
//     // X → Hamburger
//     spans[0].style.transform = 'none';
//     spans[1].style.opacity = '1';
//     spans[2].style.transform = 'none';
//   }
// });
// }

// // Close menu when clicking a link
// document.querySelectorAll('.nav-links a').forEach(link => {
//   link.addEventListener('click', () => {
//     navLinks.classList.remove('active');
//     // Reset burger lines
//     const spans = document.querySelectorAll('.burger span');
//     spans[0].style.transform = 'none';
//     spans[1].style.opacity = '1';
//     spans[2].style.transform = 'none';
//   });
// });



// // Dark Mode Toggle
// themeToggle.addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
//   if (body.classList.contains('dark-mode')) {
//     themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//     localStorage.setItem('theme', 'dark');
//   } else {
//     themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
//     localStorage.setItem('theme', 'light');
//   }
// });

// // Save user preference
// document.addEventListener('DOMContentLoaded', () => {
//   if (localStorage.getItem('theme') === 'dark') {
//     body.classList.add('dark-mode');
//     themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//   }
// });

// // Contact Form Submission – Guaranteed Thank You Message
// document.getElementById('contact-form').addEventListener('submit', async function(e) {
//   e.preventDefault();
//   const formMessage = document.getElementById('form-message');
//   const submitBtn = this.querySelector('button[type="submit"]');

//   // Show loading
//   const originalText = submitBtn.textContent;
//   submitBtn.disabled = true;
//   submitBtn.textContent = 'Sending...';

//   try {
//     const formData = new FormData(this);
//     const object = Object.fromEntries(formData);
//     const json = JSON.stringify(object);

//     const response = await fetch("https://formspree.io/f/xblkqplz", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//       },
//       body: json
//     });

//     if (response.ok) {
//       // ✅ SUCCESS: Hide form, show thank you message
//       this.style.display = "none"; // Hide the entire form

//       formMessage.innerHTML = `
//         <div style="
//           text-align: center;
//           max-width: 600px;
//           margin: 2rem auto;
//           padding: 2rem;
//           border-radius: var(--radius);
//           background: rgba(67, 97, 238, 0.08);
//           color: var(--text-primary);
//           font-family: inherit;
//         ">
//           <i class="fas fa-check-circle" style="
//             color: #4361ee;
//             font-size: 2.8rem;
//             margin-bottom: 1rem;
//             display: inline-block;
//           "></i>
//           <h3 style="font-size: 1.8rem; margin-bottom: 0.8rem; color: var(--text-primary);">
//             Thank You!
//           </h3>
//           <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 1.1rem;">
//             Your message has been sent successfully. I'll get back to you as soon as possible.
//           </p>
//           <a href="index.html" class="btn primary" style="font-size: 1rem; padding: 0.8rem 2rem;">
//             Back to Portfolio
//           </a>
//         </div>
//       `;
//     } else {
//       throw new Error("Submission failed");
//     }
//   } catch (error) {
//     console.error("Form error:", error);
//     formMessage.innerHTML = `
//       <div style="
//         text-align: center;
//         color: #d32f2f;
//         background: #ffebee;
//         padding: 1rem;
//         border-radius: var(--radius);
//         margin: 1rem auto;
//         max-width: 600px;
//       ">
//         ❌ Oops! Something went wrong. Please try again.
//       </div>
//     `;
//     submitBtn.disabled = false;
//     submitBtn.textContent = originalText;
//   }
// });

// ========== DARK MODE TOGGLE ==========
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Toggle dark mode
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
      localStorage.setItem('theme', 'dark');
    } else {
      themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
      localStorage.setItem('theme', 'light');
    }
  });
}

// // Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('active');
    }
  });
});

// ========== MOBILE MENU TOGGLE ==========
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    const spans = burger.querySelectorAll('span');
    if (navLinks.classList.contains('active')) {
      // Hamburger → X
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
      // X → Hamburger
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    }
  });

  // Close mobile menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      const spans = burger.querySelectorAll('span');
      spans[0].style.transform = 'none';
      spans[1].style.opacity = '1';
      spans[2].style.transform = 'none';
    });
  });
}

// ========== CONTACT FORM SUBMISSION ==========
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formMessage = document.getElementById('form-message');
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(this);
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch('https://formspree.io/f/xblkqplz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });

      if (response.ok) {
        this.style.display = 'none';

        formMessage.innerHTML = `
          <div style="
            text-align: center;
            max-width: 600px;
            margin: 2rem auto;
            padding: 2rem;
            border-radius: var(--radius);
            background: rgba(67, 97, 238, 0.08);
            color: var(--text-primary);
            font-family: inherit;
          ">
            <i class="fas fa-check-circle" style="
              color: #4361ee;
              font-size: 2.8rem;
              margin-bottom: 1rem;
              display: inline-block;
            "></i>
            <h3 style="font-size: 1.8rem; margin-bottom: 0.8rem; color: var(--text-primary);">
              Thank You!
            </h3>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem; font-size: 1.1rem;">
              Your message has been sent successfully. I'll get back to you as soon as possible.
            </p>
            <a href="index.html" class="btn primary" style="font-size: 1rem; padding: 0.8rem 2rem;">
              Send another
            </a>
          </div>
        `;
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error('Form error:', error);
      formMessage.innerHTML = `
        <div style="
          text-align: center;
          color: #d32f2f;
          background: #ffebee;
          padding: 1rem;
          border-radius: var(--radius);
          margin: 1rem auto;
          max-width: 600px;
        ">
          ❌ Oops! Something went wrong. Please try again.
        </div>
      `;
      submitBtn.disabled = false;
      submitBtn.textContent = originalText;
    }
  });
}
