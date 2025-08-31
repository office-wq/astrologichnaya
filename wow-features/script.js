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

// Initialize form handler
document.addEventListener('DOMContentLoaded', function() {
    new FormHandler();
});
