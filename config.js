// Конфигурация для астрологического сайта
// Безопасная конфигурация для статического хостинга

const CONFIG = {
    // Основные настройки сайта
    SITE: {
        NAME: 'Астрологічна',
        DESCRIPTION: 'Ведический астролог-прогнозист Оксана Семенович',
        URL: 'https://astrologichnaya.com',
        EMAIL: 'oksana@astrologichnaya.com'
    },

    // Контактная информация (публичная)
    CONTACTS: {
        WHATSAPP: '+48690275119',
        TELEGRAM: '@astrologichnaya',
        INSTAGRAM: '@astrologichnaya',
        YOUTUBE: '@astrologichnaya'
    },

    // Настройки форм (без токенов)
    FORMS: {
        // Используем простую отправку на email
        EMAIL_ENABLED: true,
        // Или можно использовать Formspree, Netlify Forms и т.д.
        FORMSPREE_ENABLED: false,
        NETLIFY_ENABLED: false
    },

    // Настройки анимаций
    ANIMATIONS: {
        ENABLED: true,
        DURATION: 300,
        EASING: 'ease-in-out'
    },

    // Настройки производительности
    PERFORMANCE: {
        LAZY_LOADING: true,
        IMAGE_OPTIMIZATION: true,
        CACHE_ENABLED: true
    }
};

// Экспортируем конфигурацию
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
