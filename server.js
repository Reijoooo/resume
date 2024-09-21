// Подключаем встроенный модуль http
const http = require('http');

// Создаём сервер
const server = http.createServer((req, res) => {
  // Устанавливаем заголовки
  res.statusCode = 200; // Код ответа 200 — ОК
  res.setHeader('Content-Type', 'text/plain'); // Указываем тип содержимого
  
  // Отправляем ответ
  res.end('Hello, World!123\n');
});

// Определяем порт
const PORT = 3000;

// Запускаем сервер
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}/`);
});
