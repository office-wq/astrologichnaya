# 🤖 Telegram Bot для сайта Астрологічна

Telegram бот для автоматического приема и обработки заявок с сайта Оксаны Семенович.

## 🚀 Возможности

- 📝 **Автоматический прием заявок** с формы сайта
- 🔔 **Мгновенные уведомления** в Telegram
- 📊 **Форматированные сообщения** с полной информацией
- ✅ **Валидация данных** на сервере
- 🛡️ **Безопасность** и защита от спама
- 📱 **Поддержка всех устройств**

## 📋 Требования

- Node.js 16+
- npm или yarn
- Telegram Bot Token
- Telegram Chat ID

## ⚙️ Установка и настройка

### 1. Клонирование репозитория
```bash
git clone <repository-url>
cd telegram-bot
```

### 2. Установка зависимостей
```bash
npm install
```

### 3. Настройка переменных окружения
```bash
cp env.example .env
```

Отредактируйте `.env` файл:
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
PORT=3000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### 4. Получение Bot Token

1. Напишите [@BotFather](https://t.me/botfather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания бота
4. Сохраните полученный токен

### 5. Получение Chat ID

#### Для личного чата:
1. Добавьте бота в друзья
2. Отправьте любое сообщение боту
3. Перейдите по ссылке: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

#### Для группового чата:
1. Добавьте бота в группу
2. Отправьте сообщение в группу
3. Перейдите по ссылке: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

## 🚀 Запуск

### Development режим
```bash
npm run dev
```

### Production режим
```bash
npm start
```

### Проверка работоспособности
```bash
curl http://localhost:3000/health
```

## 📡 API Endpoints

### POST /api/contact
Принимает заявки с формы сайта.

**Request Body:**
```json
{
  "name": "Имя клиента",
  "email": "email@example.com",
  "phone": "+380123456789",
  "service": "personal",
  "message": "Текст сообщения"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Сообщение успешно отправлено!"
}
```

### GET /health
Проверка состояния сервера.

**Response:**
```json
{
  "status": "OK",
  "timestamp": "2025-01-27T10:00:00.000Z",
  "uptime": 3600
}
```

## 🔧 Конфигурация

### Переменные окружения

| Переменная | Описание | Пример |
|------------|----------|---------|
| `TELEGRAM_BOT_TOKEN` | Токен Telegram бота | `123456789:ABCdefGHIjklMNOpqrsTUVwxyz` |
| `TELEGRAM_CHAT_ID` | ID чата для уведомлений | `-1001234567890` |
| `PORT` | Порт сервера | `3000` |
| `NODE_ENV` | Окружение | `development` или `production` |
| `CORS_ORIGIN` | Разрешенные источники | `http://localhost:3000` |

### Настройка CORS

По умолчанию бот принимает запросы с любого источника. Для продакшена настройте `CORS_ORIGIN`:

```env
CORS_ORIGIN=https://astrologichnaya.com
```

## 📱 Интеграция с сайтом

### JavaScript код для формы
```javascript
async function submitForm(formData) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });
        
        const result = await response.json();
        
        if (result.success) {
            console.log('✅ Форма отправлена успешно!');
        } else {
            console.error('❌ Ошибка отправки:', result.message);
        }
    } catch (error) {
        console.error('❌ Ошибка сети:', error);
    }
}
```

### HTML форма
```html
<form id="contactForm">
    <input type="text" name="name" required placeholder="Ваше имя">
    <input type="email" name="email" required placeholder="Email">
    <input type="tel" name="phone" placeholder="Телефон">
    <select name="service" required>
        <option value="">Выберите услугу</option>
        <option value="personal">Персональная консультация</option>
        <option value="course">Курс "Я-астролог"</option>
        <option value="forecast">Астропрогнозы</option>
    </select>
    <textarea name="message" placeholder="Сообщение"></textarea>
    <button type="submit">Отправить</button>
</form>
```

## 🛡️ Безопасность

### Валидация данных
- Проверка обязательных полей
- Валидация email формата
- Защита от XSS атак
- Ограничение размера сообщений

### Rate Limiting
Рекомендуется добавить rate limiting для предотвращения спама:

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 5, // максимум 5 запросов с одного IP
    message: 'Слишком много запросов, попробуйте позже'
});

app.use('/api/contact', limiter);
```

## 📊 Логирование

Бот ведет подробные логи всех операций:

```
2025-01-27T10:00:00.000Z - POST /api/contact
✅ Сообщение от Иван Петров (ivan@example.com) успешно отправлено в Telegram
```

## 🔍 Мониторинг

### Health Check
```bash
curl http://localhost:3000/health
```

### Логи в реальном времени
```bash
tail -f logs/app.log
```

## 🚀 Развертывание

### Docker
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

### PM2
```bash
npm install -g pm2
pm2 start bot.js --name "telegram-bot"
pm2 save
pm2 startup
```

### Systemd
```ini
[Unit]
Description=Telegram Bot
After=network.target

[Service]
Type=simple
User=node
WorkingDirectory=/path/to/bot
ExecStart=/usr/bin/node bot.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

## 🧪 Тестирование

### Запуск тестов
```bash
npm test
```

### Тестирование API
```bash
# Тест health endpoint
curl http://localhost:3000/health

# Тест contact endpoint
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","service":"personal"}'
```

## 🐛 Устранение неполадок

### Бот не отвечает
1. Проверьте токен бота
2. Убедитесь, что бот активен
3. Проверьте права бота в чате

### Ошибки отправки
1. Проверьте Chat ID
2. Убедитесь, что бот добавлен в чат
3. Проверьте логи сервера

### Проблемы с CORS
1. Проверьте настройки CORS_ORIGIN
2. Убедитесь, что домен сайта указан правильно

## 📈 Масштабирование

### Кластеризация
```javascript
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
} else {
    // Worker process
    app.listen(PORT);
}
```

### Load Balancer
Используйте Nginx или HAProxy для распределения нагрузки:

```nginx
upstream telegram_bot {
    server 127.0.0.1:3000;
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
}

server {
    listen 80;
    location / {
        proxy_pass http://telegram_bot;
    }
}
```

## 📚 Дополнительные ресурсы

- [Telegram Bot API](https://core.telegram.org/bots/api)
- [Node.js Express](https://expressjs.com/)
- [Telegram Bot Examples](https://github.com/yagop/node-telegram-bot-api)

## 🤝 Поддержка

При возникновении проблем:
1. Проверьте логи сервера
2. Убедитесь в правильности настроек
3. Создайте issue в репозитории

## 📄 Лицензия

MIT License
