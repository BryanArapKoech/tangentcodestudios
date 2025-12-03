document.addEventListener('DOMContentLoaded', () => {
    
    /* --- Configuration --- */
    const SCROLL_THRESHOLD = 50;
    
    /* --- DOM Elements --- */
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu .nav-link');
    
    /* --- 1. Sticky Header Logic --- */
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* --- 2. Mobile Menu Functions --- */
    const closeMenu = () => {
        if (hamburger) hamburger.classList.remove('is-active');
        if (mobileMenu) mobileMenu.classList.remove('is-open');
        document.body.classList.remove('no-scroll');
    };

    const openMenu = () => {
        if (hamburger) hamburger.classList.add('is-active');
        if (mobileMenu) mobileMenu.classList.add('is-open');
        document.body.classList.add('no-scroll');
    };

    const toggleMenu = () => {
        if (hamburger && mobileMenu) {
            if (mobileMenu.classList.contains('is-open')) {
                closeMenu();
            } else {
                openMenu();
            }
        }
    };

    /* --- 3. Event Listeners --- */
    
    // Toggle menu on hamburger click
    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', toggleMenu);
    }

    // Close menu when clicking a link
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('is-open')) {
            closeMenu();
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (mobileMenu && hamburger && mobileMenu.classList.contains('is-open')) {
            if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
                closeMenu();
            }
        }
    });
 
/* --- Dynamic Portfolio Loader & Filtering --- */
    const portfolioGrid = document.getElementById('portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Initial Load
    if (portfolioGrid) {
        loadProjects(); 
    }

    // Filter Button Listeners
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update Active State
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Fetch Data
            const category = btn.getAttribute('data-filter');
            loadProjects(category);
        });
    });

    async function loadProjects(category = '') {
        try {
            // Build URL with query param
            let url = '/api/projects';
            if (category) {
                url += `?category=${category}`;
            }

            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch');
            
            const projects = await response.json();
            
            // Clear container
            if (portfolioGrid) portfolioGrid.innerHTML = '';

            // Handle Empty State
            if (projects.length === 0) {
                if (portfolioGrid) portfolioGrid.innerHTML = '<p class="text-body">No projects found in this category.</p>';
                return;
            }

            // Generate Cards
            projects.forEach(project => {
                const card = document.createElement('a');
                card.href = `/project.html?slug=${project.slug}`; 
                card.className = 'card-portfolio';
                
                card.innerHTML = `
                    <img src="${project.image_url}" alt="${project.title}" class="card-img">
                    <div class="card-content">
                        <span class="card-category">${project.category}</span>
                        <h3 class="card-title">${project.title}</h3>
                    </div>
                `;
                
                if (portfolioGrid) portfolioGrid.appendChild(card);
            });

        } catch (err) {
            console.error('Error loading projects:', err);
            if (portfolioGrid) portfolioGrid.innerHTML = '<p class="text-body">Unable to load projects at this time.</p>';
        }
    }


    /* --- Contact Modal Logic --- */
    const modal = document.getElementById('contact-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    // Select all links that point to #contact (Header CTA, Hero CTA, Mobile Menu CTA)
    const contactTriggers = document.querySelectorAll('a[href="#contact"]'); 

    const openModal = (e) => {
        if (e) e.preventDefault(); // Prevent jumping to #contact anchor
        if (modal) modal.classList.remove('hidden');
        document.body.classList.add('no-scroll'); // Reuse existing helper
        
        // If mobile menu is open, close it
        if (typeof closeMenu === 'function') closeMenu(); 
    };

    const closeModal = () => {
        if (modal) modal.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    };

    // Event Delegation
    document.addEventListener('click', (e) => {
        // the clicked element (or its parent) should point to #contact
        const trigger = e.target.closest('a[href="#contact"]');
        
        if (trigger) {
            // It is a contact button! Open the modal.
            openModal(e);
        }
    });

    // Close Button
    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeModal);
    }

    // Close when clicking the dark backdrop (outside the form)
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Close on Escape key (Updates existing keydown listener)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (modal && !modal.classList.contains('hidden')) {
                closeModal();
            }
        }
    });

    /* --- Contact Form Submission --- */
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Stop page reload
            
            // Get button to toggle state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            
            // 1. Loading State
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';

            // 2. Gather Data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData.entries());

            try {
                // 3. Send to API
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });

                if (!response.ok) throw new Error('Failed to send');

                // 4. Success UI
                submitBtn.innerText = 'Message Sent!';
                submitBtn.style.backgroundColor = '#10B981'; // Green success color
                
                // Clear form
                contactForm.reset();

                // Close modal after 2 seconds
                setTimeout(() => {
                    closeModal();
                    // Reset button style
                    submitBtn.innerText = originalBtnText;
                    submitBtn.style.backgroundColor = ''; 
                    submitBtn.disabled = false;
                }, 2000);

            } catch (err) {
                console.error('Error sending form:', err);
                submitBtn.innerText = 'Error. Try Again.';
                submitBtn.disabled = false;
            }
        });
    }
});