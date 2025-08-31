// Конфигурация для отправки заявок
// Замените эти значения на свои реальные данные

const CONFIG = {
    // Telegram Bot настройки
    TELEGRAM: {
        BOT_TOKEN: 'ВАШ_TELEGRAM_BOT_TOKEN', // Получите у @BotFather
        CHAT_ID: 'ВАШ_TELEGRAM_CHAT_ID',     // ID вашего канала или группы
        ENABLED: false  // Включить отправку в Telegram
    },

    // Web3Forms настройки
    WEB3FORMS: {
        ACCESS_KEY: 'ВАШ_WEB3FORMS_ACCESS_KEY', // Получите на web3forms.com
        ENABLED: false  // Включить отправку через Web3Forms
    },

    // Email настройки для резервной копии
    EMAIL: {
        TO: 'oksana@astrologichnaya.com',  // Ваш email
        SUBJECT: 'Нова заявка на консультацію'
    },

    // Контактная информация
    CONTACTS: {
        WHATSAPP: '+48690275119',
        TELEGRAM: '@astrologichnaya',
        INSTAGRAM: '@astrologichnaya',
        YOUTUBE: '@astrologichnaya'
    }
};

// Экспортируем конфигурацию
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
} else {
    window.CONFIG = CONFIG;
}
