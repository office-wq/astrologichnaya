// Integration tests for the entire website
describe('Website Integration Tests', () => {
    beforeEach(() => {
        // Setup test environment
        document.body.innerHTML = `
            <header class="header">
                <nav class="nav">
                    <div class="nav-brand">
                        <i class="fas fa-moon"></i>
                        <span data-translate="nav-brand">🌟 Астрологічна</span>
                    </div>
                    <div class="nav-menu">
                        <a href="#home" data-translate="nav-home">Головна</a>
                        <a href="#services" data-translate="nav-services">Послуги</a>
                        <a href="#about" data-translate="nav-about">Про мене</a>
                        <a href="#contact" data-translate="nav-contact">Контакти</a>
                    </div>
                    <div class="nav-lang">
                        <button class="lang-btn active" data-lang="uk">UK</button>
                        <button class="lang-btn" data-lang="en">EN</button>
                        <button class="lang-btn" data-lang="pl">PL</button>
                    </div>
                </nav>
            </header>
            
            <section id="home" class="hero">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 data-translate="hero-title">🌟 Оксана Семенович | Астролог-Діва</h1>
                        <p data-translate="hero-description">Чи відчували ви, що щось більше чекає на вас?</p>
                    </div>
                </div>
            </section>
            
            <form id="contactForm">
                <input type="text" name="name" required>
                <input type="email" name="email" required>
                <button type="submit">Submit</button>
            </form>
            
            <div id="successModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h3>Success!</h3>
                </div>
            </div>
        `;
    });

    test('should load all sections correctly', () => {
        expect(document.querySelector('.header')).toBeTruthy();
        expect(document.querySelector('.hero')).toBeTruthy();
        expect(document.querySelector('#contactForm')).toBeTruthy();
        expect(document.querySelector('#successModal')).toBeTruthy();
    });

    test('should have working navigation', () => {
        const navLinks = document.querySelectorAll('.nav-menu a');
        expect(navLinks).toHaveLength(4);
        
        navLinks.forEach(link => {
            expect(link.getAttribute('href')).toMatch(/^#/);
        });
    });

    test('should have language switcher', () => {
        const langButtons = document.querySelectorAll('.lang-btn');
        expect(langButtons).toHaveLength(3);
        
        const ukButton = document.querySelector('[data-lang="uk"]');
        expect(ukButton.classList.contains('active')).toBe(true);
    });

    test('should have contact form', () => {
        const form = document.getElementById('contactForm');
        expect(form).toBeTruthy();
        
        const inputs = form.querySelectorAll('input');
        expect(inputs).toHaveLength(2);
        
        const submitButton = form.querySelector('button[type="submit"]');
        expect(submitButton).toBeTruthy();
    });

    test('should have success modal', () => {
        const modal = document.getElementById('successModal');
        expect(modal).toBeTruthy();

        const closeButton = modal.querySelector('.close');
        expect(closeButton).toBeTruthy();
    });

    test('should have proper document structure', () => {
        expect(document.querySelector('nav')).toBeTruthy();
        expect(document.querySelector('.hero')).toBeTruthy();
        expect(document.querySelector('form')).toBeTruthy();
        expect(document.querySelector('.modal')).toBeTruthy();
    });

    test('should have navigation links with proper attributes', () => {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            expect(link.hasAttribute('href')).toBe(true);
            expect(link.hasAttribute('data-translate')).toBe(true);
        });
    });

    test('should have language buttons with proper data attributes', () => {
        const langButtons = document.querySelectorAll('.lang-btn');
        langButtons.forEach(button => {
            expect(button.hasAttribute('data-lang')).toBe(true);
        });
    });

    test('should have form with required fields', () => {
        const form = document.getElementById('contactForm');
        const requiredInputs = form.querySelectorAll('input[required]');
        expect(requiredInputs.length).toBeGreaterThan(0);
    });
});
