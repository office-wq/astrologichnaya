const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Конфигурация бота
const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const bot = new TelegramBot(token, { polling: false });

const app = express();
app.use(cors());
app.use(express.json());

// Middleware для логирования
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
});

// Обработка POST запросов с формы
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, service, message } = req.body;
        
        // Валидация данных
        if (!name || !email || !service) {
            return res.status(400).json({
                success: false,
                message: 'Необходимо заполнить обязательные поля'
            });
        }

        // Формирование сообщения для Telegram
        const telegramMessage = formatTelegramMessage({
            name, email, phone, service, message
        });

        // Отправка в Telegram
        await bot.sendMessage(chatId, telegramMessage, {
            parse_mode: 'HTML',
            disable_web_page_preview: true
        });

        // Логирование успешной отправки
        console.log(`✅ Сообщение от ${name} (${email}) успешно отправлено в Telegram`);

        res.json({
            success: true,
            message: 'Сообщение успешно отправлено!'
        });

    } catch (error) {
        console.error('❌ Ошибка отправки сообщения:', error);
        res.status(500).json({
            success: false,
            message: 'Ошибка отправки сообщения'
        });
    }
});

// Форматирование сообщения для Telegram
function formatTelegramMessage(data) {
    const serviceNames = {
        'personal': '🌟 Персональная консультация',
        'course': '🎓 Курс "Я-астролог"',
        'forecast': '📊 Астропрогнозы'
    };

    const serviceName = serviceNames[data.service] || data.service;
    
    return `
🔮 <b>НОВАЯ ЗАЯВКА С САЙТА!</b>

👤 <b>Имя:</b> ${data.name}
📧 <b>Email:</b> ${data.email}
${data.phone ? `📱 <b>Телефон:</b> ${data.phone}` : ''}
🔮 <b>Услуга:</b> ${serviceName}
💬 <b>Сообщение:</b> ${data.message || 'Не указано'}

⏰ <b>Время:</b> ${new Date().toLocaleString('uk-UA', {
        timeZone: 'Europe/Kiev'
    })}

🌐 <b>Источник:</b> astrologichnaya.com
    `.trim();
}

// Обработка ошибок
app.use((error, req, res, next) => {
    console.error('❌ Необработанная ошибка:', error);
    res.status(500).json({
        success: false,
        message: 'Внутренняя ошибка сервера'
    });
});

// Проверка здоровья сервера
app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Telegram бот запущен на порту ${PORT}`);
    console.log(`📱 Бот готов принимать сообщения с сайта`);
    console.log(`🔗 Webhook URL: http://localhost:${PORT}/api/contact`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('🛑 Получен сигнал SIGTERM, завершение работы...');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('🛑 Получен сигнал SIGINT, завершение работы...');
    process.exit(0);
});

module.exports = app;
