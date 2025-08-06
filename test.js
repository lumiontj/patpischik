// Элементы страницы
const clickerBtn = document.getElementById('clickerBtn'); // Кнопка кликов
const clickCountEl = document.getElementById('clickCount'); // Счётчик кликов
const submitBtn = document.getElementById('submitBtn'); // Кнопка отправки

// Переменная для подсчёта кликов
let clickCount = 0;

// Обработчик кликов на кнопку "Кликни меня!"
clickerBtn.addEventListener('click', () => {
  clickCount++; // Увеличиваем счётчик кликов
  clickCountEl.textContent = clickCount; // Обновляем текст на странице
});

// Обработчик кликов на кнопку "Отправить подписчиков"
submitBtn.addEventListener('click', () => {
  // Сохраняем количество кликов в Local Storage (для передачи на форму)
  localStorage.setItem('clickCount', clickCount);
  // Перенаправляем на страницу формы
  window.location.href = 'form.html';
});
// Установка значения для количества подписчиков из Local Storage
document.addEventListener('DOMContentLoaded', () => {
    const followersInput = document.getElementById('followers');
    const clickCount = localStorage.getItem('clickCount') || 0; // Получаем клики или 0
    followersInput.value = clickCount; // Устанавливаем значение в поле
  });
  
