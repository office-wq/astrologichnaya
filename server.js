const http = require('http');
const fs = require('fs');
const path = require('path');

// MIME типы для разных расширений файлов
const mimeTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.eot': 'application/vnd.ms-fontobject'
};

const server = http.createServer((req, res) => {
    try {
        let filePath = '.' + req.url;
        
        // Если запрос корневой, показываем index.html
        if (filePath === './') {
            filePath = './index.html';
        }
        
        // Проверяем безопасность пути
        const normalizedPath = path.normalize(filePath);
        if (!normalizedPath.startsWith('.')) {
            res.writeHead(403);
            res.end('Forbidden');
            return;
        }
        
        // Получаем расширение файла
        const extname = path.extname(filePath);
        let contentType = mimeTypes[extname] || 'application/octet-stream';
        
        // Читаем файл
        fs.readFile(filePath, (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    // Файл не найден
                    res.writeHead(404, { 'Content-Type': 'text/plain' });
                    res.end('File not found');
                } else {
                    // Ошибка сервера
                    console.error('Server error:', err);
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end('Server error: ' + err.code);
                }
            } else {
                // Успешно - отдаем файл с правильным MIME-типом
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
    } catch (error) {
        console.error('Server error:', error);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal server error');
    }
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
    console.log('Press Ctrl+C to stop the server');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nReceived SIGINT. Shutting down gracefully...');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});
