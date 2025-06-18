// server/api/create-lead.js
import axios from 'axios';
import { defineEventHandler, readBody } from 'h3'; // Обработчик событий для Nuxt 3
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);  // Получаем тело запроса из формы
  const { name, phone } = body;

  // Проверка наличия необходимых данных
  if (!name || !phone) {
    event.res.statusCode = 400;
    return { message: 'Имя и телефон обязательны' };
  }

  const { amoToken, amoSubdomain } = useRuntimeConfig();
  const token = amoToken;
  const subdomain = amoSubdomain;

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
