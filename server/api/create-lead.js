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

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMyYTAyYTllNDVlMmU2MGZiYmFhMWVkODM4NTA2ZDJlZDI1N2UyODY2ZWUwNzk2N2Y4YTQ5NjNkMDU3NTYzYzc2ZjU4Yjg5MmZlOTA3Nzk4In0.eyJhdWQiOiI0MzY5MmRmNC02ZDI1LTRhMzgtYjEzZS00NThiOTk0ODk2NzEiLCJqdGkiOiJjMmEwMmE5ZTQ1ZTJlNjBmYmJhYTFlZDgzODUwNmQyZWQyNTdlMjg2NmVlMDc5NjdmOGE0OTYzZDA1NzU2M2M3NmY1OGI4OTJmZTkwNzc5OCIsImlhdCI6MTc1MDMzMzAxNywibmJmIjoxNzUwMzMzMDE3LCJleHAiOjE3NjcxMzkyMDAsInN1YiI6IjExMjk2NjU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODU4ODc0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOTZiNmJkNmMtNjY1Zi00YjNhLTljYTUtYThjNDA5MTRlZmNkIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.Mo2shOSk8AeglNKMbhoZ3p2bSYHHcq02XXQmbXmas6jhSYeNEk4idbBL1DpdSSEa6d-hskZck0bBhPiWMnXVd9Le7QQY8MTskkKz1yfyqWp7o2187u883bBIdWO4OubN3ktgi0mXJGlMlOisojAYTpRqvHqzkSW7iAstLuQVe-k9_xoevvnjwdarua3lEhC3Hp2OmXOezDN1_owYfPn49OsRVImURDv9lV1kbWfFJHqTSI8w4t5r14KDvsyBQo2aCEcc5PQY4SY-zZ_jM5wuBLe8-QvZBnRF9KQbv1_soBu4vXXCTm5cXNbKWGac7uUVTPW8bBlP-1NbC1YlolZ3ag';  // Замените на актуальный токен
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
