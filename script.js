// Импорт переводов из отдельного модуля
import { translations } from './translations.js';

console.log('Translations loaded:', translations);

// Функция определения языка браузера
function detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const lang = browserLang.split('-')[0]; // Получаем только основную часть (ru, uk, en, pl)

    // Проверяем, поддерживается ли язык
    const supportedLangs = ['ru', 'uk', 'en', 'pl'];
    if (supportedLangs.includes(lang)) {
        return lang;
    }

    // Если язык не поддерживается, возвращаем украинский по умолчанию
    return 'uk';
}

// Текущий язык
let currentLang = detectBrowserLanguage();

// Функция смены языка
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    console.log('Available translations:', Object.keys(translations));
    console.log('Current translations object:', translations);
    
    currentLang = lang;
    
    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем заголовок страницы
    if (translations[lang] && translations[lang]['page-title']) {
        document.title = translations[lang]['page-title'];
    }
    
    // Обновляем все элементы с data-translate
    let updatedCount = 0;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('Processing element with key:', key);
        
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
            updatedCount++;
        } else {
            console.warn('Translation missing for key:', key, 'in language:', lang);
        }
    });
    
    // Обновляем переворачивающуюся табличку с девизами
    updateMottoCard(lang);
    
    console.log(`Language changed successfully to: ${lang}, updated ${updatedCount} elements`);
}

// Функция обновления переворачивающейся таблички с девизами
function updateMottoCard(lang) {
    const mottoCard = document.querySelector('.motto-card');
    if (mottoCard) {
        const front = mottoCard.querySelector('.motto-front');
        const back = mottoCard.querySelector('.motto-back');
        
        if (front) front.textContent = translations[lang]['hero-motto-1'];
        if (back) back.textContent = translations[lang]['hero-motto-2'];
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing language system...');
    console.log('Current language detected:', currentLang);
    
    // Проверяем наличие кнопок языка
    const langButtons = document.querySelectorAll('.lang-btn');
    console.log('Found language buttons:', langButtons.length);
    
    // Добавляем обработчики для кнопок языка
    langButtons.forEach((btn, index) => {
        const lang = btn.getAttribute('data-lang');
        console.log(`Button ${index}: ${lang}`);
        
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            changeLanguage(lang);
        });
    });
    
    // Устанавливаем язык браузера
    console.log('Setting initial language to:', currentLang);
    changeLanguage(currentLang);
    console.log('Language system initialized');
    
    // Инициализируем переворачивающуюся табличку
    initMottoCard();
    
    // Инициализируем все остальные компоненты
    new FormHandler();
    new StarMap();
    new MagicParticles();
    window.tarotInstance = new TarotCards();
    new ZodiacWheel();
    new FloatingSymbols();
});

// Инициализация переворачивающейся таблички
function initMottoCard() {
    const mottoCard = document.querySelector('.motto-card');
    if (mottoCard) {
        mottoCard.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        // Автоматическое переворачивание каждые 3 секунды
        setInterval(() => {
            mottoCard.classList.toggle('flipped');
        }, 3000);
    }
}


// Form Handler
class FormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.modal = document.getElementById('successModal');
        this.init();
    }
    
    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
        
        if (this.modal) {
            this.bindModalEvents();
        }
    }
    
    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(this.form);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitBtn = this.form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Надсилається...';
        submitBtn.disabled = true;
        
        try {
            // Simulate API call
            await this.simulateApiCall(data);
            
            // Show success modal
            this.showModal();
            
            // Reset form
            this.form.reset();
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Помилка відправки. Спробуйте ще раз.');
        } finally {
            // Restore button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    async simulateApiCall(data) {
        // Simulate network delay
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Form data submitted:', data);
                resolve({ success: true });
            }, 1500);
        });
    }
    
    showModal() {
        if (this.modal) {
            this.modal.style.display = 'block';
        }
    }
    
    bindModalEvents() {
        const closeBtn = this.modal.querySelector('.close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                this.modal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.modal.style.display = 'none';
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.modal.style.display = 'none';
            }
        });
    }
}


// Interactive Star Map Class
class StarMap {
    constructor() {
        this.canvas = document.getElementById('starMap');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.constellations = [];
        this.animating = false;
        this.selectedStar = null;

        this.init();
        this.createStars();
        this.createConstellations();
        this.animate();

        // Add click handler
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
    }

    createStars() {
        const starCount = 150;

        for (let i = 0; i < starCount; i++) {
            this.stars.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 0.5,
                brightness: Math.random(),
                twinkleSpeed: Math.random() * 0.02 + 0.01,
                constellation: Math.floor(Math.random() * 12),
                interactive: Math.random() > 0.7 // 30% of stars are interactive
            });
        }
    }

    createConstellations() {
        const constellationNames = [
            'Велика Ведмедиця', 'Мала Ведмедиця', 'Оріон', 'Кассіопея',
            'Великий Пес', 'Малий Пес', 'Близнята', 'Рак', 'Лев', 'Діва',
            'Терези', 'Скорпіон'
        ];

        const predictions = [
            '🌟 Сила та мудрість будуть з вами!',
            '✨ Нові можливості відкриються скоро!',
            '🔮 Ваші мрії стануть реальністю!',
            '💫 Енергія успіху оточує вас!',
            '🌙 Час для змін настав!',
            '⭐ Любов знайде вас у несподіваному місці!',
            '🌌 Великі досягнення попереду!',
            '🎯 Ваша мета буде досягнута!',
            '🌠 Чудеса трапляються щодня!',
            '💎 Ваш талант буде розкритий!',
            '🌈 Щастя прийде з усіх сторін!',
            '🎪 Життя буде яскравим та насиченим!'
        ];

        for (let i = 0; i < constellationNames.length; i++) {
            this.constellations.push({
                name: constellationNames[i],
                prediction: predictions[i],
                stars: this.stars.filter(star => star.constellation === i).slice(0, 5)
            });
        }
    }

    animate() {
        if (!this.animating) {
            this.animating = true;
            this.draw();
        }
    }

    draw() {
        // Clear canvas with slight trail effect
        this.ctx.fillStyle = 'rgba(0, 0, 20, 0.1)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw constellations connections
        this.drawConstellations();

        // Draw stars
        this.drawStars();

        requestAnimationFrame(() => this.draw());
    }

    drawConstellations() {
        this.ctx.strokeStyle = 'rgba(147, 197, 253, 0.3)';
        this.ctx.lineWidth = 1;

        this.constellations.forEach(constellation => {
            if (constellation.stars.length > 1) {
                this.ctx.beginPath();
                this.ctx.moveTo(constellation.stars[0].x, constellation.stars[0].y);

                for (let i = 1; i < constellation.stars.length; i++) {
                    this.ctx.lineTo(constellation.stars[i].x, constellation.stars[i].y);
                }

                this.ctx.stroke();
            }
        });
    }

    drawStars() {
        this.stars.forEach((star, index) => {
            // Update brightness for twinkling effect
            star.brightness += star.twinkleSpeed;
            if (star.brightness > 1) star.brightness = 0;

            const alpha = 0.3 + (Math.sin(star.brightness * Math.PI * 2) + 1) * 0.4;

            // Draw star glow
            const gradient = this.ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, star.radius * 4
            );
            gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
            gradient.addColorStop(0.5, `rgba(147, 197, 253, ${alpha * 0.5})`);
            gradient.addColorStop(1, 'rgba(147, 197, 253, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius * 4, 0, Math.PI * 2);
            this.ctx.fill();

            // Draw star core
            this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha + 0.3})`;
            this.ctx.beginPath();
            this.ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
            this.ctx.fill();

            // Highlight interactive stars
            if (star.interactive) {
                this.ctx.strokeStyle = `rgba(255, 215, 0, ${alpha * 0.8})`;
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
            }
        });
    }

    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Find clicked star
        const clickedStar = this.stars.find(star => {
            const distance = Math.sqrt((star.x - x) ** 2 + (star.y - y) ** 2);
            return distance < star.radius * 6 && star.interactive;
        });

        if (clickedStar) {
            this.selectedStar = clickedStar;
            this.showConstellationInfo(clickedStar);
            this.createClickEffect(x, y);
        }
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if hovering over interactive star
        const hoveredStar = this.stars.find(star => {
            const distance = Math.sqrt((star.x - x) ** 2 + (star.y - y) ** 2);
            return distance < star.radius * 6 && star.interactive;
        });

        this.canvas.style.cursor = hoveredStar ? 'pointer' : 'default';
    }

    showConstellationInfo(star) {
        const info = document.getElementById('constellationInfo');
        const constellation = this.constellations[star.constellation];

        if (info && constellation) {
            info.querySelector('.constellation-name').textContent = constellation.name;
            info.querySelector('.constellation-prediction').textContent = constellation.prediction;

            // Add glow effect
            info.style.animation = 'none';
            setTimeout(() => {
                info.style.animation = 'glow 2s ease-in-out';
            }, 10);
        }
    }

    createClickEffect(x, y) {
        // Create particle explosion
        for (let i = 0; i < 20; i++) {
            const particle = {
                x: x,
                y: y,
                vx: (Math.random() - 0.5) * 10,
                vy: (Math.random() - 0.5) * 10,
                life: 60,
                color: `hsl(${Math.random() * 60 + 200}, 70%, 60%)`
            };

            this.animateParticle(particle);
        }
    }

    animateParticle(particle) {
        if (particle.life <= 0) return;

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.1; // gravity
        particle.life--;

        this.ctx.fillStyle = particle.color;
        this.ctx.globalAlpha = particle.life / 60;
        this.ctx.beginPath();
        this.ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
        this.ctx.fill();
        this.ctx.globalAlpha = 1;

        requestAnimationFrame(() => this.animateParticle(particle));
    }
}


// Magic Particles Background
class MagicParticles {
    constructor() {
        this.canvas = document.createElement('canvas');
        this.canvas.className = 'magic-particles';
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: 0, y: 0 };

        document.body.appendChild(this.canvas);
        this.init();
        this.createParticles();
        this.animate();

        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
    }

    init() {
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createParticles() {
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 3 + 1,
                life: Math.random() * 100 + 50,
                maxLife: 150,
                color: this.getRandomColor(),
                energy: Math.random()
            });
        }
    }

    getRandomColor() {
        const colors = [
            'rgba(147, 197, 253, 0.6)', // Blue
            'rgba(168, 85, 247, 0.6)',  // Purple
            'rgba(236, 72, 153, 0.6)',  // Pink
            'rgba(34, 197, 94, 0.6)',   // Green
            'rgba(251, 191, 36, 0.6)'   // Yellow
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.particles.forEach((particle, index) => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;

            // Mouse interaction
            const dx = this.mouse.x - particle.x;
            const dy = this.mouse.y - particle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
                particle.vx += dx * 0.0001;
                particle.vy += dy * 0.0001;
            }

            // Boundary check
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;

            // Update life
            particle.life--;
            if (particle.life <= 0) {
                particle.x = Math.random() * this.canvas.width;
                particle.y = Math.random() * this.canvas.height;
                particle.life = particle.maxLife;
                particle.color = this.getRandomColor();
            }

            // Draw particle
            const alpha = particle.life / particle.maxLife;
            this.ctx.globalAlpha = alpha;

            // Draw energy field
            const gradient = this.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.size * 3
            );
            gradient.addColorStop(0, particle.color);
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
            this.ctx.fill();

            // Draw core
            this.ctx.fillStyle = particle.color;
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fill();

            this.ctx.globalAlpha = 1;
        });

        requestAnimationFrame(() => this.animate());
    }
}


// Interactive Tarot Cards
class TarotCards {
    constructor() {
        this.deck = document.getElementById('tarotDeck');
        this.result = document.getElementById('tarotResult');
        this.message = document.getElementById('tarotMessage');
        this.selectedCard = null;

        if (this.deck) {
            this.init();
        }
    }

    init() {
        const cards = this.deck.querySelectorAll('.tarot-card');
        cards.forEach((card, index) => {
            card.addEventListener('click', () => this.selectCard(card, index));
        });

        // Add floating animation
        this.animateCards();
    }

    selectCard(card, index) {
        if (this.selectedCard) return; // Only one card per session

        this.selectedCard = card;
        card.classList.add('selected');

        // Flip animation
        setTimeout(() => {
            card.querySelector('.card-inner').classList.add('flipped');
        }, 500);

        // Show result
        setTimeout(() => {
            this.showResult(index);
        }, 1500);
    }

    showResult(index) {
        const predictions = [
            '🌟 Сила та мудрість будуть з вами! Ви готові до нових викликів, які принесуть вам глибоке розуміння себе.',
            '🌙 Нові можливості відкриються скоро! Місяць принесе вам несподівані сюрпризи та нові шляхи для розвитку.',
            '🔮 Ваші мрії стануть реальністю! Зірки вишикувалися так, щоб ваші бажання здійснилися в найближчому майбутньому.',
            '💫 Енергія успіху оточує вас! Ви на правильному шляху до досягнення своїх цілей.',
            '🌙 Час для змін настав! Старе відходить, щоб дати місце новому та прекрасному.',
            '⭐ Любов знайде вас у несподіваному місці! Відкрийте своє серце для нових можливостей.',
            '🌌 Великі досягнення попереду! Ваші зусилля будуть винагороджені по заслугах.',
            '🎯 Ваша мета буде досягнута! Зосередьтеся на своїх цілях та йдіть вперед.',
            '🌠 Чудеса трапляються щодня! Навчіться їх помічати та цінувати.',
            '💎 Ваш талант буде розкритий! Час поділитися своїми дарами зі світом.',
            '🌈 Щастя прийде з усіх сторін! Будьте відкриті до всіх можливостей.',
            '🎪 Життя буде яскравим та насиченим! Готуйтеся до незабутніх пригод!'
        ];

        this.message.textContent = predictions[index % predictions.length];
        this.result.style.display = 'block';

        // Scroll to result
        this.result.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    animateCards() {
        const cards = this.deck.querySelectorAll('.tarot-card');

        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.2}s`;
            card.classList.add('floating');
        });
    }
}


// Interactive Zodiac Wheel
class ZodiacWheel {
    constructor() {
        this.canvas = document.getElementById('zodiacWheel');
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.centerX = this.canvas.width / 2;
        this.centerY = this.canvas.height / 2;
        this.radius = 150;
        this.selectedSign = null;

        this.zodiacSigns = [
            { name: 'Овен', symbol: '♈', dates: '21 березня - 19 квітня', angle: 0 },
            { name: 'Телець', symbol: '♉', dates: '20 квітня - 20 травня', angle: 30 },
            { name: 'Близнята', symbol: '♊', dates: '21 травня - 20 червня', angle: 60 },
            { name: 'Рак', symbol: '♋', dates: '21 червня - 22 липня', angle: 90 },
            { name: 'Лев', symbol: '♌', dates: '23 липня - 22 серпня', angle: 120 },
            { name: 'Діва', symbol: '♍', dates: '23 серпня - 22 вересня', angle: 150 },
            { name: 'Терези', symbol: '♎', dates: '23 вересня - 22 жовтня', angle: 180 },
            { name: 'Скорпіон', symbol: '♏', dates: '23 жовтня - 21 листопада', angle: 210 },
            { name: 'Стрілець', symbol: '♐', dates: '22 листопада - 21 грудня', angle: 240 },
            { name: 'Козеріг', symbol: '♑', dates: '22 грудня - 19 січня', angle: 270 },
            { name: 'Водолій', symbol: '♒', dates: '20 січня - 18 лютого', angle: 300 },
            { name: 'Риби', symbol: '♓', dates: '19 лютого - 20 березня', angle: 330 }
        ];

        this.predictions = [
            '🌟 Енергія вогню наповнює вас! Час для нових починань та сміливих рішень.',
            '🌱 Земна сила допомагає вам будувати міцні основи для майбутнього.',
            '💨 Повітря приносить вам нові ідеї та цікаві зустрічі.',
            '🌊 Вода відкриває глибину емоцій та інтуїції.',
            '☀️ Сонце підсвічує вашу харизму та лідерські якості.',
            '🌾 Природа нагороджує вас за терпіння та старанність.',
            '⚖️ Баланс допомагає знайти гармонію в усіх сферах життя.',
            '🦂 Глибина та сила ведуть вас до трансформації.',
            '🏹 Свобода та пригоди чекають на вас попереду.',
            '⛰️ Амбіції та дисципліна приведуть до успіху.',
            '💡 Інновації та оригінальність відкривають нові можливості.',
            '🌊 Співчуття та творчість наповнюють ваше життя.'
        ];

        this.init();
        this.animate();
    }

    init() {
        this.canvas.addEventListener('click', (e) => this.handleClick(e));
        this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    }

    handleClick(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left - this.centerX;
        const y = e.clientY - rect.top - this.centerY;
        const distance = Math.sqrt(x * x + y * y);

        if (distance <= this.radius && distance >= this.radius * 0.3) {
            const angle = Math.atan2(y, x) * 180 / Math.PI;
            const normalizedAngle = (angle + 360) % 360;
            const signIndex = Math.floor(normalizedAngle / 30);

            this.selectSign(signIndex);
        }
    }

    handleMouseMove(e) {
        const rect = this.canvas.getBoundingClientRect();
        const x = e.clientX - rect.left - this.centerX;
        const y = e.clientY - rect.top - this.centerY;
        const distance = Math.sqrt(x * x + y * y);

        if (distance <= this.radius && distance >= this.radius * 0.3) {
            this.canvas.style.cursor = 'pointer';
        } else {
            this.canvas.style.cursor = 'default';
        }
    }

    selectSign(index) {
        this.selectedSign = index;
        this.updateZodiacInfo();
        this.animate();
    }

    updateZodiacInfo() {
        if (this.selectedSign === null) return;

        const sign = this.zodiacSigns[this.selectedSign];
        const prediction = this.predictions[this.selectedSign];

        document.getElementById('zodiacSymbol').textContent = sign.symbol;
        document.getElementById('zodiacName').textContent = sign.name;
        document.getElementById('zodiacPrediction').textContent = prediction;
        document.getElementById('zodiacDates').textContent = sign.dates;
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw outer ring
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, this.radius, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
        this.ctx.lineWidth = 3;
        this.ctx.stroke();

        // Draw inner ring
        this.ctx.beginPath();
        this.ctx.arc(this.centerX, this.centerY, this.radius * 0.3, 0, Math.PI * 2);
        this.ctx.strokeStyle = 'rgba(139, 92, 246, 0.5)';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();

        // Draw zodiac signs
        this.zodiacSigns.forEach((sign, index) => {
            const angle = (sign.angle * Math.PI) / 180;
            const x = this.centerX + Math.cos(angle) * (this.radius * 0.7);
            const y = this.centerY + Math.sin(angle) * (this.radius * 0.7);

            // Highlight selected sign
            if (this.selectedSign === index) {
                this.ctx.beginPath();
                this.ctx.arc(x, y, 25, 0, Math.PI * 2);
                this.ctx.fillStyle = 'rgba(251, 191, 36, 0.3)';
                this.ctx.fill();

                this.ctx.beginPath();
                this.ctx.arc(x, y, 22, 0, Math.PI * 2);
                this.ctx.strokeStyle = 'rgba(251, 191, 36, 0.8)';
                this.ctx.lineWidth = 2;
                this.ctx.stroke();
            }

            // Draw sign symbol
            this.ctx.fillStyle = this.selectedSign === index ? '#fbbf24' : 'rgba(255, 255, 255, 0.8)';
            this.ctx.font = '20px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.textBaseline = 'middle';
            this.ctx.fillText(sign.symbol, x, y);

            // Draw sign name
            this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
            this.ctx.font = '12px Arial';
            this.ctx.fillText(sign.name, x, y + 35);
        });

        // Draw connecting lines
        this.ctx.strokeStyle = 'rgba(139, 92, 246, 0.2)';
        this.ctx.lineWidth = 1;

        for (let i = 0; i < 12; i++) {
            const angle = (i * 30 * Math.PI) / 180;
            const x1 = this.centerX + Math.cos(angle) * (this.radius * 0.3);
            const y1 = this.centerY + Math.sin(angle) * (this.radius * 0.3);
            const x2 = this.centerX + Math.cos(angle) * this.radius;
            const y2 = this.centerY + Math.sin(angle) * this.radius;

            this.ctx.beginPath();
            this.ctx.moveTo(x1, y1);
            this.ctx.lineTo(x2, y2);
            this.ctx.stroke();
        }
    }
}


// Global function for shuffling tarot cards
function shuffleTarot() {
    const cards = document.querySelectorAll('.tarot-card');
    const result = document.getElementById('tarotResult');

    // Reset all cards
    cards.forEach(card => {
        card.classList.remove('selected');
        card.querySelector('.card-inner').classList.remove('flipped');
    });

    // Hide result
    result.style.display = 'none';

    // Reset selected card
    const tarotInstance = window.tarotInstance;
    if (tarotInstance) {
        tarotInstance.selectedCard = null;
    }
}


// Floating Astrology Symbols
class FloatingSymbols {
    constructor() {
        this.symbols = ['☾', '☽', '☿', '♀', '♂', '♃', '♄', '⛢', '♅', '♆', '♇'];
        this.elements = [];
        this.createSymbols();
        this.animate();
    }

    createSymbols() {
        for (let i = 0; i < 15; i++) {
            const symbol = document.createElement('div');
            symbol.className = 'floating-symbol';
            symbol.textContent = this.symbols[Math.floor(Math.random() * this.symbols.length)];
            symbol.style.left = Math.random() * 100 + 'vw';
            symbol.style.animationDelay = Math.random() * 10 + 's';
            symbol.style.fontSize = (Math.random() * 20 + 20) + 'px';

            document.body.appendChild(symbol);
            this.elements.push(symbol);
        }
    }

    animate() {
        this.elements.forEach((symbol, index) => {
            symbol.style.animation = `floatSymbol ${8 + Math.random() * 4}s ease-in-out infinite`;
            symbol.style.animationDelay = `${index * 0.5}s`;
        });
    }
}




