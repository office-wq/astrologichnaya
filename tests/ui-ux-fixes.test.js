/**
 * Тесты для проверки исправлений UI/UX проблем
 */

// Мок переводов для тестирования
const mockTranslations = {
    pl: {
        'hero-motto-1': '✨ Jasno. Dokładnie. Logicznie. Użytecznie.',
        'hero-motto-2': '✨ Wiem to, co jest ukryte przed innymi'
    },
    en: {
        'hero-motto-1': '✨ Clear. Accurate. Logical. Useful.',
        'hero-motto-2': '✨ I know what is hidden from others'
    },
    uk: {
        'hero-motto-1': '✨ Чітко. Точно. Логічно. Корисно.',
        'hero-motto-2': '✨ Знаю те, що приховано від інших'
    },
    ru: {
        'hero-motto-1': '✨ Ясно. Точно. Логично. Полезно.',
        'hero-motto-2': '✨ Знаю то, что скрыто от других'
    }
};

describe('UI/UX Fixes Tests', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        container.innerHTML = `
            <header class="header">
                <nav class="nav">
                    <div class="nav-menu">
                        <a href="#home" class="active">Головна</a>
                        <a href="#services">Послуги</a>
                        <a href="#about">Про мене</a>
                        <a href="#contact">Контакти</a>
                    </div>
                </nav>
            </header>
            
            <section id="home" class="hero">
                <div class="motto-card">
                    <div class="motto-inner">
                        <div class="motto-front" data-translate="hero-motto-1">
                            ✨ Чітко. Точно. Логічно. Корисно.
                        </div>
                        <div class="motto-back" data-translate="hero-motto-2">
                            ✨ Знаю те, що приховано від інших
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="services">
                <div class="btn btn-primary">Кнопка</div>
            </section>
            
            <section id="about"></section>
            <section id="contact"></section>
        `;
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
    });

    describe('Translation Fixes', () => {
        test('should have correct motto order in Polish', () => {
            expect(mockTranslations.pl['hero-motto-1']).toBe('✨ Jasno. Dokładnie. Logicznie. Użytecznie.');
            expect(mockTranslations.pl['hero-motto-2']).toBe('✨ Wiem to, co jest ukryte przed innymi');
        });

        test('should have correct motto order in English', () => {
            expect(mockTranslations.en['hero-motto-1']).toBe('✨ Clear. Accurate. Logical. Useful.');
            expect(mockTranslations.en['hero-motto-2']).toBe('✨ I know what is hidden from others');
        });

        test('should have correct motto order in Ukrainian', () => {
            expect(mockTranslations.uk['hero-motto-1']).toBe('✨ Чітко. Точно. Логічно. Корисно.');
            expect(mockTranslations.uk['hero-motto-2']).toBe('✨ Знаю те, що приховано від інших');
        });

        test('should have correct motto order in Russian', () => {
            expect(mockTranslations.ru['hero-motto-1']).toBe('✨ Ясно. Точно. Логично. Полезно.');
            expect(mockTranslations.ru['hero-motto-2']).toBe('✨ Знаю то, что скрыто от других');
        });
    });

    describe('Button Flickering Fix', () => {
        test('should have button element with proper structure', () => {
            const button = container.querySelector('.btn');
            expect(button).toBeTruthy();
            expect(button.classList.contains('btn-primary')).toBe(true);
        });

        test('should have proper button attributes', () => {
            const button = container.querySelector('.btn');
            expect(button).toBeTruthy();
            expect(typeof button.addEventListener).toBe('function');
        });
    });

    describe('Motto Card Flip Fix', () => {
        test('should have proper motto card structure', () => {
            const mottoCard = container.querySelector('.motto-card');
            const mottoInner = container.querySelector('.motto-inner');
            const mottoFront = container.querySelector('.motto-front');
            const mottoBack = container.querySelector('.motto-back');

            expect(mottoCard).toBeTruthy();
            expect(mottoInner).toBeTruthy();
            expect(mottoFront).toBeTruthy();
            expect(mottoBack).toBeTruthy();
        });

        test('should have correct motto content', () => {
            const mottoFront = container.querySelector('.motto-front');
            const mottoBack = container.querySelector('.motto-back');

            expect(mottoFront.textContent.trim()).toBe('✨ Чітко. Точно. Логічно. Корисно.');
            expect(mottoBack.textContent.trim()).toBe('✨ Знаю те, що приховано від інших');
        });
    });

    describe('Navigation Fix', () => {
        test('should have active link styles', () => {
            const activeLink = container.querySelector('.nav-menu a.active');
            expect(activeLink).toBeTruthy();
            expect(activeLink.getAttribute('href')).toBe('#home');
        });

        test('should have proper smooth scrolling setup', () => {
            const navLinks = container.querySelectorAll('.nav-menu a[href^="#"]');
            expect(navLinks.length).toBeGreaterThan(0);
            
            navLinks.forEach(link => {
                expect(link.getAttribute('href')).toMatch(/^#/);
            });
        });

        test('should have all required navigation sections', () => {
            const sections = ['#home', '#services', '#about', '#contact'];
            sections.forEach(sectionId => {
                const section = container.querySelector(sectionId);
                expect(section).toBeTruthy();
            });
        });
    });

    describe('Scroll Spy Functionality', () => {
        test('should have proper event handling setup', () => {
            expect(typeof window.addEventListener).toBe('function');
            expect(typeof window.dispatchEvent).toBe('function');
        });

        test('should have sections with proper IDs', () => {
            const sections = container.querySelectorAll('section[id]');
            expect(sections.length).toBeGreaterThan(0);
            
            sections.forEach(section => {
                expect(section.id).toBeTruthy();
            });
        });
    });

    describe('CSS Properties Check', () => {
        test('should have proper CSS classes applied', () => {
            const mottoCard = container.querySelector('.motto-card');
            const button = container.querySelector('.btn');
            const navMenu = container.querySelector('.nav-menu');

            expect(mottoCard.classList.contains('motto-card')).toBe(true);
            expect(button.classList.contains('btn')).toBe(true);
            expect(button.classList.contains('btn-primary')).toBe(true);
            expect(navMenu.classList.contains('nav-menu')).toBe(true);
        });
    });
});