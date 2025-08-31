// Простая система мультиязычности
const translations = {
    uk: {
        // Header
        'nav-brand': '🌟 Астрологічна',
        'nav-home': 'Головна',
        'nav-services': 'Послуги',
        'nav-about': 'Про мене',
        'nav-contact': 'Контакти',
        
        // Hero Section
        'hero-title': '🌟 Оксана Семенович | Астролог-Діва',
        'hero-motto': '✨ Чітко. Точно. Логічно. Корисно.',
        'hero-description': 'Чи відчували ви, що щось більше чекає на вас? Чи готові ви відкрити своє справжнє призначення? Я допоможу вам знайти відповіді, які змінять ваше життя назавжди.',
        'hero-btn-primary': '🌟 Записатися на консультацію (50€)',
        'hero-btn-secondary': '🔮 Безкоштовні астропрогнози на YouTube',
        
        // Services
        'services-title': '🔮 Мої послуги',
        'service-1-title': '🌟 Персональна консультація',
        'service-1-desc': 'Уявіть собі, що ви нарешті розумієте, чому ви тут і що маєте робити. Я розкрию таємниці вашої натальної карти та покажу шлях до вашого найвищого потенціалу.',
        'service-1-price': '🌟 від 50€',
        'service-2-title': '🎓 Курс \'Я-астролог\'',
        'service-2-desc': 'Чи готові ви стати астрологом? Мій курс по ведичній астрології високо оцінили навіть ті, хто вже навчався в інших школах. Розкрийте таємниці зірок разом зі мною!',
        'service-2-price': '🎓 Деталі на сайті',
        'service-3-title': '📊 Астропрогнози',
        'service-3-desc': 'Щомісячні астропрогнози, які збуваються з вражаючою точністю! Підписуйтесь на мій YouTube-канал \'Астрологія доступна кожному!\' та отримуйте корисну інформацію першими.',
        'service-3-price': '📊 Безкоштовно',
        
        // About
        'about-title': '🔮 Про мене - Оксана Семенович',
        'about-desc-1': 'Я не просто астролог - я провідник між світами. Ведичний астролог-прогнозист з багаторічним досвідом, автор YouTube-каналу \'Астрологія доступна кожному!\', де щомісяця публікую доступні, збуваючіся з вражаючою точністю астропрогнози.',
        'about-desc-2': 'На основі свого практичного досвіду я створила курс по ведичній астрології \'Я-астролог\', який високо оцінили навіть ті, хто вже навчався в інших школах астрології. Кожна консультація - це священна подорож у глибини вашої душі.',
        'credential-1': '🌟 Ведичний астролог-прогнозист',
        'credential-2': '🔮 YouTube канал \'Астрологія доступна кожному!\'',
        'credential-3': '🎓 Автор курсу \'Я-астролог\'',
        'credential-4': '⭐ Астролог-Діва. Чітко. Точно. Логічно. Корисно.',
        
        // Contact
        'contact-title': '🌟 Готові розкрити своє призначення?',
        'contact-name': '🌟 Ваше священне ім\'я',
        'contact-email': '🔮 Ваш магічний Email',
        'contact-phone': '💫 Ваш космічний телефон',
        'contact-service': '🔮 Оберіть вашу магію',
        'contact-service-placeholder': '🌟 Оберіть магічну послугу',
        'contact-service-1': '🌟 Персональна консультація',
        'contact-service-2': '🎓 Курс \'Я-астролог\'',
        'contact-service-3': '📊 Астропрогнози',
        'contact-message': '✨ Ваше священне послання',
        'contact-message-placeholder': '🌟 Опишіть, що ви відчуваєте та що хочете змінити у своєму житті...',
        'contact-submit': '🌟 Розкрити своє призначення',
        'contact-sidebar-title': '💫 Зв\'яжіться зі мною',
        'payment-title': '💫 Оплата вашої магії',
        'payment-card': '💳 Космічна карта',
        'payment-info': '🌟 Безпечна оплата через захищені космічні системи',
        
        // Footer
        'footer-name': '🌟 Оксана Семенович',
        'footer-desc': '🌟 Ведичний астролог-прогнозист. Розкрийте таємниці вашої душі та знайдіть своє справжнє призначення',
        'footer-contacts': '🌟 Контакти',
        'footer-social': '🌟 Соціальні мережі',
        'footer-rights': '🌟 Всі права захищені космічним законом',
        
        // Modal
        'modal-title': '🌟 Ваше призначення розкрито!',
        'modal-message': '🌟 Я зв\'яжуся з вами найближчим часом, щоб розкрити таємниці вашої душі та показати шлях до вашого найвищого потенціалу.',
        
        // Page Title
        'page-title': '🌟 Оксана Семенович | Ведический астролог-прогнозист'
    },
    en: {
        // Header
        'nav-brand': '🌟 Astrological Shop',
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-about': 'About',
        'nav-contact': 'Contact',
        
        // Hero Section
        'hero-title': '🌟 Oksana Semenovich | Astrologer-Virgo',
        'hero-motto': '✨ Clear. Accurate. Logical. Useful.',
        'hero-description': 'Have you ever felt that something greater awaits you? Are you ready to discover your true purpose? I will help you find answers that will change your life forever.',
        'hero-btn-primary': '🌟 Book a Consultation (50€)',
        'hero-btn-secondary': '🔮 Free Astro Forecasts on YouTube',
        
        // Services
        'services-title': '🔮 My Services',
        'service-1-title': '🌟 Personal Consultation',
        'service-1-desc': 'Imagine finally understanding why you\'re here and what you\'re meant to do. I will reveal the secrets of your natal chart and show you the path to your highest potential.',
        'service-1-price': '🌟 from 50€',
        'service-2-title': '🎓 Course \'I-am-Astrologer\'',
        'service-2-desc': 'Are you ready to become an astrologer? My course in Vedic astrology has been highly praised even by those who have already studied in other schools. Unlock the secrets of the stars with me!',
        'service-2-price': '🎓 Details on website',
        'service-3-title': '📊 Astro Forecasts',
        'service-3-desc': 'Monthly astro forecasts that come true with amazing accuracy! Subscribe to my YouTube channel \'Astrology is accessible to everyone!\' and get useful information first.',
        'service-3-price': '📊 Free',
        
        // About
        'about-title': '🔮 About Me - Oksana Semenovich',
        'about-desc-1': 'I am not just an astrologer - I am a guide between worlds. A Vedic astrologer-predictor with years of experience, author of the YouTube channel \'Astrology is accessible to everyone!\', where I publish accessible, amazingly accurate monthly astro forecasts.',
        'about-desc-2': 'Based on my practical experience, I created a course in Vedic astrology \'I-am-Astrologer\', which was highly praised even by those who have already studied in other astrology schools. Every consultation is a sacred journey into the depths of your soul.',
        'credential-1': '🌟 Vedic Astrologer-Predictor',
        'credential-2': '🔮 YouTube Channel \'Astrology is accessible to everyone!\'',
        'credential-3': '🎓 Author of \'I-am-Astrologer\' Course',
        'credential-4': '⭐ Astrologer-Virgo. Clear. Accurate. Logical. Useful.',
        
        // Contact
        'contact-title': '🌟 Ready to Unlock Your Purpose?',
        'contact-name': '🌟 Your Sacred Name',
        'contact-email': '🔮 Your Magical Email',
        'contact-phone': '💫 Your Cosmic Phone',
        'contact-service': '🔮 Choose Your Magic',
        'contact-service-placeholder': '🌟 Choose a magical service',
        'contact-service-1': '🌟 Personal Consultation',
        'contact-service-2': '🎓 Course \'I-am-Astrologer\'',
        'contact-service-3': '📊 Astro Forecasts',
        'contact-message': '✨ Your Sacred Message',
        'contact-message-placeholder': '🌟 Describe what you feel and what you want to change in your life...',
        'contact-submit': '🌟 Unlock Your Purpose',
        'contact-sidebar-title': '💫 Contact Me',
        'payment-title': '💫 Payment for Your Magic',
        'payment-card': '💳 Cosmic Card',
        'payment-info': '🌟 Secure payment through protected cosmic systems',
        
        // Footer
        'footer-name': '🌟 Oksana Semenovich',
        'footer-desc': '🌟 Vedic astrologer-predictor. Unlock the secrets of your soul and find your true purpose',
        'footer-contacts': '🌟 Contact',
        'footer-social': '🌟 Social Media',
        'footer-rights': '🌟 All rights protected by cosmic law',
        
        // Modal
        'modal-title': '🌟 Your Purpose is Unlocked!',
        'modal-message': '🌟 I will contact you soon to reveal the secrets of your soul and show you the path to your highest potential.',
        
        // Page Title
        'page-title': '🌟 Oksana Semenovich | Vedic Astrologer-Predictor'
    },
    pl: {
        // Header
        'nav-brand': '🌟 Sklep Astrologiczny',
        'nav-home': 'Główna',
        'nav-services': 'Usługi',
        'nav-about': 'O mnie',
        'nav-contact': 'Kontakt',
        
        // Hero Section
        'hero-title': '🌟 Oksana Semenovich | Astrolog-Panna',
        'hero-motto': '✨ Jasno. Dokładnie. Logicznie. Użytecznie.',
        'hero-description': 'Czy kiedykolwiek czułeś, że czeka na Ciebie coś większego? Czy jesteś gotowy odkryć swoje prawdziwe przeznaczenie? Pomogę Ci znaleźć odpowiedzi, które zmienią Twoje życie na zawsze.',
        'hero-btn-primary': '🌟 Zarezerwuj konsultację (50€)',
        'hero-btn-secondary': '🔮 Darmowe prognozy astrologiczne na YouTube',
        
        // Services
        'services-title': '🔮 Moje usługi',
        'service-1-title': '🌟 Konsultacja osobista',
        'service-1-desc': 'Wyobraź sobie, że wreszcie rozumiesz, dlaczego tu jesteś i co masz robić. Ujawnię tajemnice Twojego horoskopu urodzeniowego i pokażę Ci ścieżkę do Twojego najwyższego potencjału.',
        'service-1-price': '🌟 od 50€',
        'service-2-title': '🎓 Kurs \'Jestem-astrologiem\'',
        'service-2-desc': 'Czy jesteś gotowy zostać astrologiem? Mój kurs z astrologii wedyjskiej został wysoko oceniony nawet przez tych, którzy już uczyli się w innych szkołach. Odkryj tajemnice gwiazd ze mną!',
        'service-2-price': '🎓 Szczegóły na stronie',
        'service-3-title': '📊 Prognozy astrologiczne',
        'service-3-desc': 'Miesięczne prognozy astrologiczne, które się spełniają z zadziwiającą dokładnością! Subskrybuj mój kanał YouTube \'Astrologia dostępna dla każdego!\' i otrzymuj przydatne informacje jako pierwszy.',
        'service-3-price': '📊 Darmowo',
        
        // About
        'about-title': '🔮 O mnie - Oksana Semenovich',
        'about-desc-1': 'Nie jestem tylko astrologiem - jestem przewodnikiem między światami. Wedyjski astrolog-przewidywacz z wieloletnim doświadczeniem, autor kanału YouTube \'Astrologia dostępna dla każdego!\', gdzie co miesiąc publikuję dostępne, spełniające się z zadziwiającą dokładnością prognozy astrologiczne.',
        'about-desc-2': 'Na podstawie swojego praktycznego doświadczenia stworzyłam kurs z astrologii wedyjskiej \'Jestem-astrologiem\', który został wysoko oceniony nawet przez tych, którzy już uczyli się w innych szkołach astrologii. Każda konsultacja to święta podróż w głębiny Twojej duszy.',
        'credential-1': '🌟 Wedyjski astrolog-przewidywacz',
        'credential-2': '🔮 Kanał YouTube \'Astrologia dostępna dla każdego!\'',
        'credential-3': '🎓 Autorka kursu \'Jestem-astrologiem\'',
        'credential-4': '⭐ Astrolog-Panna. Jasno. Dokładnie. Logicznie. Użytecznie.',
        
        // Contact
        'contact-title': '🌟 Gotowy odkryć swoje przeznaczenie?',
        'contact-name': '🌟 Twoje święte imię',
        'contact-email': '🔮 Twój magiczny Email',
        'contact-phone': '💫 Twój kosmiczny telefon',
        'contact-service': '🔮 Wybierz swoją magię',
        'contact-service-placeholder': '🌟 Wybierz magiczną usługę',
        'contact-service-1': '🌟 Konsultacja osobista',
        'contact-service-2': '🎓 Kurs \'Jestem-astrologiem\'',
        'contact-service-3': '📊 Prognozy astrologiczne',
        'contact-message': '✨ Twoje święte przesłanie',
        'contact-message-placeholder': '🌟 Opisz, co czujesz i co chcesz zmienić w swoim życiu...',
        'contact-submit': '🌟 Odkryj swoje przeznaczenie',
        'contact-sidebar-title': '💫 Skontaktuj się ze mną',
        'payment-title': '💫 Płatność za Twoją magię',
        'payment-card': '💳 Kosmiczna karta',
        'payment-info': '🌟 Bezpieczna płatność przez chronione kosmiczne systemy',
        
        // Footer
        'footer-name': '🌟 Oksana Semenovich',
        'footer-desc': '🌟 Wedyjski astrolog-przewidywacz. Odkryj tajemnice swojej duszy i znajdź swoje prawdziwe przeznaczenie',
        'footer-contacts': '🌟 Kontakt',
        'footer-social': '🌟 Media społecznościowe',
        'footer-rights': '🌟 Wszystkie prawa chronione prawem kosmicznym',
        
        // Modal
        'modal-title': '🌟 Twoje przeznaczenie zostało odkryte!',
        'modal-message': '🌟 Skontaktuję się z Tobą wkrótce, aby ujawnić tajemnice Twojej duszy i pokazać Ci ścieżkę do Twojego najwyższego potencjału.',
        
        // Page Title
        'page-title': '🌟 Oksana Semenovich | Wedyjski astrolog-przewidywacz'
    }
};

// Текущий язык
let currentLang = 'uk';

// Функция смены языка
function changeLanguage(lang) {
    console.log('Changing language to:', lang);
    currentLang = lang;
    
    // Обновляем активную кнопку
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Обновляем заголовок страницы
    document.title = translations[lang]['page-title'];
    
    // Обновляем все элементы с data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    console.log('Language changed successfully to:', lang);
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing language system...');
    
    // Добавляем обработчики для кнопок языка
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Language button clicked:', lang);
            changeLanguage(lang);
        });
    });
    
    // Устанавливаем язык по умолчанию
    changeLanguage('uk');
    console.log('Language system initialized');
});

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
            const result = await this.simulateApiCall(data);

            if (result.success) {
                // Show success modal
                this.showModal();
                // Reset form
                this.form.reset();
            } else if (result.manualContact) {
                // Show manual contact info
                alert(`${result.message}\n\n📱 WhatsApp: +48 690 275 119\n💬 Telegram: @astrologichnaya\n📧 Email: через форму на сайті`);
                // Don't reset form, user can try again
            } else {
                alert('Помилка відправки. Спробуйте ще раз.');
            }

        } catch (error) {
            console.error('Form submission error:', error);
            alert('Помилка відправки. Зв\'яжіться зі мною напряму:\n\n📱 WhatsApp: +48 690 275 119\n💬 Telegram: @astrologichnaya');
        } finally {
            // Restore button state
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }
    }
    
    async simulateApiCall(data) {
        console.log('Sending form data:', data);

        // Способ 1: Netlify Forms (если сайт на Netlify)
        if (window.location.hostname.includes('netlify')) {
            try {
                const formData = new FormData();
                formData.append('form-name', 'contact');
                formData.append('name', data.name);
                formData.append('email', data.email);
                formData.append('phone', data.phone || '');
                formData.append('service', data.service);
                formData.append('message', data.message || '');

                const response = await fetch('/', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    console.log('Form submitted to Netlify Forms');
                    return { success: true };
                }
            } catch (error) {
                console.log('Netlify Forms failed, trying alternatives...');
            }
        }

        // Способ 2: Отправка в Telegram бота
        const BOT_TOKEN = window.CONFIG?.TELEGRAM?.BOT_TOKEN || 'YOUR_TELEGRAM_BOT_TOKEN';
        const CHAT_ID = window.CONFIG?.TELEGRAM?.CHAT_ID || 'YOUR_TELEGRAM_CHAT_ID';

        const message = `
🌟 НОВА ЗАЯВКА НА КОНСУЛЬТАЦІЮ! 🌟

👤 Ім'я: ${data.name}
📧 Email: ${data.email}
📱 Телефон: ${data.phone || 'Не вказано'}
🔮 Послуга: ${data.service}
📝 Повідомлення: ${data.message || 'Без додаткового повідомлення'}

⏰ Час заявки: ${new Date().toLocaleString('uk-UA')}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: message,
                    parse_mode: 'HTML'
                })
            });

            if (response.ok) {
                console.log('Form data sent to Telegram:', data);
                return { success: true };
            }
        } catch (error) {
            console.error('Telegram failed:', error);
        }

        // Способ 3: Email через Web3Forms (бесплатно, без регистрации)
        try {
            const web3FormData = {
                access_key: window.CONFIG?.WEB3FORMS?.ACCESS_KEY || 'ВАШ_WEB3FORMS_ACCESS_KEY', // Получите на web3forms.com
                name: data.name,
                email: data.email,
                phone: data.phone || '',
                service: data.service,
                message: data.message || '',
                subject: 'Нова заявка на консультацію - Оксана Семенович'
            };

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(web3FormData)
            });

            if (response.ok) {
                console.log('Form data sent to Web3Forms:', data);
                return { success: true };
            }
        } catch (error) {
            console.error('Web3Forms failed:', error);
        }

        // Способ 4: Показать контакты для ручной связи
        console.log('All automated methods failed, showing manual contact info');
        return {
            success: false,
            manualContact: true,
            message: 'Не вдалося відправити заявку автоматично. Зв\'яжіться зі мною напряму:'
        };
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

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    new FormHandler();
    new StarMap();
    new MagicParticles();
    window.tarotInstance = new TarotCards();
    new ZodiacWheel();
    new FloatingSymbols();
});
