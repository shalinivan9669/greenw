// server/api/create-lead.js
import axios from 'axios';
import { defineEventHandler, readBody } from 'h3'; // Обработчик событий для Nuxt 3

export default defineEventHandler(async (event) => {
  const body = await readBody(event);  // Получаем тело запроса из формы
  const { name, phone } = body;

  // Проверка наличия необходимых данных
  if (!name || !phone) {
    event.res.statusCode = 400;
    return { message: 'Имя и телефон обязательны' };
  }

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImJmM2JkZmRlNDgxOGI0NTA1ZWIwYTkwMTBhNzc3NzRlNGE4YmE3MTJkOTg4ZjIwOGI2ZWVkMThmMjJmM2I2ODcwZWIzMjdiMTQ5NzQzZWIxIn0.eyJhdWQiOiJhN2NjNmUwNS02MzBlLTQzYWQtYjU4ZC01MTdhYjZkNzdkMDEiLCJqdGkiOiJiZjNiZGZkZTQ4MThiNDUwNWViMGE5MDEwYTc3Nzc0ZTRhOGJhNzEyZDk4OGYyMDhiNmVlZDE4ZjIyZjNiNjg3MGViMzI3YjE0OTc0M2ViMSIsImlhdCI6MTc1MDI0ODQwNywibmJmIjoxNzUwMjQ4NDA3LCJleHAiOjE3OTA2NDAwMDAsInN1YiI6IjExMjk2NjU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODU4ODc0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiYjZkYjhlNDMtNmMyYi00OWM2LTk1NmQtY2U1OWRmOWQxZDc2IiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.YfLUycLzV7oEkrURZvBZ1l7F4H8SCz2ydww-1ycpTFlfk8A7dlSYTjO42mx4EkKV_tKimmm-SctXtGAFNo38Wy3Eqg5T3a2HRxTmrlhUjGsExGgew195d2_YN0iLThX8UdiU2gBGEYnmxmr1ehcAmafHOmpG7UXDWBJpaftPfWnHDsqmodup8-Q5nUfNipf4bxEcIFhFmiYdzgnxaP9ux3vQMtSh9W3I9wtgDsYjn6sLWYM_9b5Be4FYbklw_KA5SNZ_p8L4ro3kxbYGd2vdQa-PeNmXD4fXg6PFi2fpzDnwkQ7-bJWm03t7iMOsWygbJnjcSjq6kLcO86bBejpi5g';  // Замените на актуальный токен
  const subdomain = 'alinams2001'; // Ваш поддомен в amoCRM

  try {
    // Формирование данных для сделки
    const leadData = [
      {
        name: `с сайта: ${name}`, // Название сделки, включающее все данные формы
        price: 10000, // Пример бюджета сделки (необязательно)
        _embedded: {
          tags: [
            {
              name: 'с сайта' // Пример тега для сделки
            }
          ]
        }
      }
    ];

    // Отправка POST-запроса на создание сделки в amoCRM
    const response = await axios.post(
      `https://${subdomain}.amocrm.ru/api/v4/leads`,
      leadData,
      {
        headers: {
          'Authorization': `Bearer ${token}`, // Bearer-токен для авторизации
          'Content-Type': 'application/json',
        },
      }
    );

    // Успешный результат
    console.log('Успех: Заявка успешно отправлена', response.data);
    event.res.statusCode = 200;
    return { message: 'Заявка успешно отправлена', data: response.data };
  } catch (error) {
    // Логирование ошибки
    if (error.response) {
      console.error('Ошибка при отправке данных в amoCRM:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('Ошибка:', error.message);
    }

    // Возвращаем ошибку
    event.res.statusCode = 500;
    return { message: 'Ошибка при создании лида', error: error.message };
  }
});
