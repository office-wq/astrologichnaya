# 🌟 Астрологічна - Официальный сайт Оксаны Семенович

Официальный сайт ведического астролога-прогнозиста Оксаны Семенович с интерактивными элементами, мультиязычностью и интеграцией с Telegram.

## ✨ Особенности

- 🌟 **Интерактивные элементы**: Звездная карта, карты Таро, зодиакальный круг
- 🌍 **Мультиязычность**: Украинский, английский, польский языки
- 📱 **Мобильная оптимизация**: Адаптивный дизайн для всех устройств
- 🤖 **Telegram интеграция**: Автоматическая отправка заявок в Telegram
- 🎨 **Современный дизайн**: Анимации, градиенты, мистическая тематика
- ⚡ **PWA готовность**: Service Worker, манифест, офлайн функциональность
- 🧪 **Полное покрытие тестами**: Unit, интеграционные и E2E тесты

## 🚀 Быстрый старт

### Требования
- Node.js 16+
- npm или yarn

### Установка
```bash
# Клонирование репозитория
git clone https://github.com/your-username/astrologichnaya-website.git
cd astrologichnaya-website

# Установка зависимостей
npm install

# Запуск в режиме разработки
npm run dev

# Запуск тестов
npm test
```

## 📁 Структура проекта

```
astrologichnaya-website/
├── 📄 index.html              # Главная страница
├── 🎨 styles.css              # Основные стили
├── ⚡ script.js               # Основная логика
├── 🤖 telegram-bot/          # Telegram бот
│   ├── bot.js                # Основной файл бота
│   ├── package.json          # Зависимости бота
│   └── env.example           # Пример конфигурации
├── 🧪 tests/                 # Тесты
│   ├── unit/                 # Unit тесты
│   └── integration/          # Интеграционные тесты
├── 📦 package.json           # Зависимости проекта
├── 🔧 manifest.json          # PWA манифест
├── 🚀 sw.js                  # Service Worker
└── 📖 README.md              # Документация
```

## 🤖 Настройка Telegram бота

### 1. Создание бота
1. Напишите [@BotFather](https://t.me/botfather) в Telegram
2. Создайте нового бота командой `/newbot`
3. Получите токен бота

### 2. Получение Chat ID
1. Добавьте бота в нужный чат/канал
2. Отправьте сообщение в чат
3. Перейдите по ссылке: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Найдите `chat.id` в ответе

### 3. Настройка окружения
```bash
cd telegram-bot
cp env.example .env
```

Отредактируйте `.env`:
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
PORT=3000
NODE_ENV=development
```

### 4. Запуск бота
```bash
cd telegram-bot
npm install
npm start
```

## 🧪 Тестирование

### Запуск всех тестов
```bash
npm test
```

### Запуск unit тестов
```bash
npm run test:unit
```

### Запуск интеграционных тестов
```bash
npm run test:integration
```

### Покрытие кода
```bash
npm run test:coverage
```

### Тесты в режиме watch
```bash
npm run test:watch
```

## 📱 Мобильная оптимизация

### Особенности
- **Touch-friendly интерфейс**: Минимальные размеры кнопок 44px
- **Gesture навигация**: Свайпы для переключения секций
- **Performance оптимизация**: Упрощенные анимации для мобильных
- **Responsive дизайн**: Адаптация под все размеры экранов
- **iOS оптимизация**: Предотвращение зума при фокусе на input

### Медиа-запросы
```css
/* Мобильные устройства */
@media (max-width: 768px) { ... }

/* Маленькие экраны */
@media (max-width: 480px) { ... }

/* Ландшафтная ориентация */
@media (max-width: 768px) and (orientation: landscape) { ... }
```

## 🎨 Анимации и эффекты

### CSS анимации
- `starFloat` - Плавающие звезды
- `titleGlow` - Свечение заголовков
- `float` - Плавающие элементы
- `profileGlow` - Свечение профиля
- `rotate` - Вращение элементов

### JavaScript анимации
- **Scroll Animations**: Анимации при прокрутке
- **Touch Gestures**: Жесты для мобильных устройств
- **Performance Optimized**: Оптимизированные для производительности
- **Mobile Specific**: Специальные для мобильных устройств

## 🔧 Сборка и развертывание

### Development режим
```bash
npm run dev
```

### Production сборка
```bash
npm run build
```

### Линтинг
```bash
npm run lint
npm run lint:fix
```

## 🌐 Развертывание

### Статический хостинг
```bash
npm run build
# Загрузите содержимое dist/ на ваш хостинг
```

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Загрузите dist/ в Netlify
```

## 📊 Производительность

### Core Web Vitals
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

### Оптимизации
- Ленивая загрузка изображений
- Минификация CSS/JS
- Сжатие ресурсов
- Кэширование Service Worker
- Preload критических ресурсов

## 🔒 Безопасность

### Заголовки безопасности
- Content Security Policy (CSP)
- X-Content-Type-Options
- X-Frame-Options
- X-XSS-Protection
- Referrer Policy

### Валидация форм
- Серверная валидация
- Клиентская валидация
- Защита от XSS
- CSRF защита

## 📈 Аналитика

### Google Analytics 4
- Отслеживание Core Web Vitals
- Пользовательские события
- Конверсии форм

### Facebook Pixel
- Отслеживание посетителей
- Ретаргетинг
- Конверсии

## 🤝 Вклад в проект

1. Форкните репозиторий
2. Создайте ветку для новой функции
3. Внесите изменения
4. Добавьте тесты
5. Создайте Pull Request

## 📄 Лицензия

MIT License - см. файл [LICENSE](LICENSE)

## 📞 Контакты

- **Оксана Семенович**: [@astrologichnaya](https://t.me/astrologichnaya)
- **Telegram**: [https://t.me/astrologichnaya](https://t.me/astrologichnaya)
- **Instagram**: [@astrologichnaya](https://www.instagram.com/astrologichnaya)
- **YouTube**: [Астрологія доступна кожному!](https://www.youtube.com/@astrologichnaya)

## 🙏 Благодарности

Спасибо всем, кто помогал в разработке этого проекта!

---

⭐ **Звезды приветствуются!** Если проект вам понравился, поставьте звездочку на GitHub.
