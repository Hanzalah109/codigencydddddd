document.addEventListener('DOMContentLoaded', function () {
    // ========== Mobile Navigation ==========
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
        });

        document.querySelectorAll('.nav-links a, .nav-link, .nav-btn, .whatsapp-btn').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    hamburger.classList.remove('active');
                    navMenu.classList.remove('active');
                    hamburger.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = 'auto';
                }
            });
        });

        navMenu.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
                hamburger.focus();
            }
        });
    }

    // ========== Sticky Header ==========
    const header = document.querySelector('.sticky-header');
    if (header) {
        window.addEventListener('scroll', function () {
            header.style.boxShadow = window.scrollY > 50
                ? '0 5px 15px rgba(0,0,0,0.2)'
                : '0 2px 10px rgba(0,0,0,0.1)';
        });
    }

    // ========== WhatsApp Button ==========
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.classList.add('pulse');
        setTimeout(() => whatsappBtn.classList.remove('pulse'), 5000);
        whatsappBtn.addEventListener('mouseenter', () => whatsappBtn.classList.add('pulse'));
        whatsappBtn.addEventListener('mouseleave', () => whatsappBtn.classList.remove('pulse'));
    }

    // Optional: Hide WhatsApp on scroll
    const waBtn = document.querySelector('.whatsapp-btn');
    if (waBtn) {
        window.addEventListener('scroll', () => {
            waBtn.style.bottom = (window.scrollY > 50) ? '-70px' : '30px';
        });
    }

    // ========== Portfolio Filtering ==========
    const filterBtns = document.querySelectorAll('.filter-btn');
    const positionCards = document.querySelectorAll('.position-card');
    if (filterBtns.length && positionCards.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function () {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                positionCards.forEach(card => {
                    card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
                });
            });
        });
    }

    // ========== Animate on Scroll ==========
    const animateOnScroll = () => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight - 100) {
                el.classList.add('animated');
            }
        });
    };
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // ========== Work Categories ==========
    const categories = document.querySelectorAll('.work-category');
    if (categories.length) {
        categories.forEach(category => {
            category.addEventListener('click', function () {
                categories.forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                const categoryName = this.getAttribute('data-category');
                document.querySelectorAll('.work-example').forEach(ex => ex.style.display = 'none');
                document.querySelectorAll(`.${categoryName}`).forEach(ex => ex.style.display = 'block');
            });
        });
    }

    // ========== Features & Results ==========
    const featuresContainer = document.querySelector('.features-grid');
    if (featuresContainer) {
        const features = [
            { icon: 'fa-chalkboard-teacher', title: 'Interactive Virtual Classroom', desc: 'Zoom API with recording & whiteboard' },
            { icon: 'fa-user-graduate', title: 'Student Progress Tracking', desc: 'Dashboard for performance & attendance' },
            { icon: 'fa-globe', title: 'Multilingual Support', desc: 'Arabic/English + RTL support' },
            { icon: 'fa-credit-card', title: 'Payment System', desc: 'Multi-currency gateway with installments' },
            { icon: 'fa-calendar-alt', title: 'Scheduling System', desc: 'Automated reminders with timezones' },
            { icon: 'fa-mobile-alt', title: 'Mobile Responsive', desc: 'Fully responsive for all devices' }
        ];
        features.forEach(f => {
            featuresContainer.innerHTML += `
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas ${f.icon}"></i></div>
                    <h3>${f.title}</h3><p>${f.desc}</p>
                </div>`;
        });
    }

    const resultsContainer = document.querySelector('.results-grid');
    if (resultsContainer) {
        const results = [
            { value: '300+', label: 'Active Students' },
            { value: '95%', label: 'Satisfaction' },
            { value: '40%', label: 'Revenue Increase' },
            { value: '15', label: 'Countries Served' }
        ];
        results.forEach(r => {
            resultsContainer.innerHTML += `<div class="result-card"><h3>${r.value}</h3><p>${r.label}</p></div>`;
        });
    }

    // ========== Blog Cards ==========
    document.querySelectorAll('.blog-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.cursor = 'pointer');
        card.addEventListener('click', () => {
            const link = card.querySelector('.read-more');
            if (link) window.location.href = link.href;
        });
    });

    // NOTE: Scroll-to-top functionality removed
});
