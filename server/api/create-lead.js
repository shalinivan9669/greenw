import axios from 'axios';
import { defineEventHandler, readBody } from 'h3'; // Обработчик событий для Nuxt 3

export default defineEventHandler(async (event) => {
  const body = await readBody(event);  // Получаем тело запроса из формы
  const { name, phone } = body;

  // Проверка наличия необходимых данных
  if (!name || !phone) {
    return { status: 400, message: 'Имя и телефон обязательны' };
  }

  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY2OTNiMzI4NzgxNTk0Y2YxODc0MmI5NjliYTJjOGE1NjI4YWU3OTRlOTA3MzRkMjcwMTcwZGY1MDkxMzJmNzU1YjZhY2UxY2E1M2QxMjAyIn0.eyJhdWQiOiJhN2NjNmUwNS02MzBlLTQzYWQtYjU4ZC01MTdhYjZkNzdkMDEiLCJqdGkiOiI2NjkzYjMyODc4MTU5NGNmMTg3NDJiOTY5YmEyYzhhNTYyOGFlNzk0ZTkwNzM0ZDI3MDE3MGRmNTA5MTMyZjc1NWI2YWNlMWNhNTNkMTIwMiIsImlhdCI6MTcyODA0NzMxMywibmJmIjoxNzI4MDQ3MzEzLCJleHAiOjE3NDU5NzEyMDAsInN1YiI6IjExMjk2NjU4IiwiZ3JhbnRfdHlwZSI6IiIsImFjY291bnRfaWQiOjMxODU4ODc0LCJiYXNlX2RvbWFpbiI6ImFtb2NybS5ydSIsInZlcnNpb24iOjIsInNjb3BlcyI6WyJjcm0iLCJmaWxlcyIsImZpbGVzX2RlbGV0ZSIsIm5vdGlmaWNhdGlvbnMiLCJwdXNoX25vdGlmaWNhdGlvbnMiXSwiaGFzaF91dWlkIjoiOTM3ZTRiYWQtZTIwNS00NzkzLWIxMGQtZmIyNTIwOWRmZjBmIiwiYXBpX2RvbWFpbiI6ImFwaS1iLmFtb2NybS5ydSJ9.ciDp7KFuJsCKbEDIRSI7oMmKWHbbEel75OsJxkXO2DGTunjAHMe-4lOv7FzA5qEUlMX3dY-NEMldKXkRm_qZIExJ3drGMGCzPBa2dKwqINbChJpYnMb2x3ZRNOl1YDqBGBZyo5MN45LyfM2iS1mbOWrCnH-vwfdYrvfUGZorNSBIwSi3jCyLuXrMjsG_eWLljff9KhZX5b8oQuT5wEVdoAHLmAHY_apIlYDRVkWm6M8A3rIFd0hQUAwmOZNgn_Y5XxRyuIgtDWF1LVpvfoYf23qZjCRTw3Q2vfYn51cuCtCfVEvLtuunIHj8j3sxAtyT2sWyT_Jx5z80ltBGvZjyPg';  // Замените на актуальный токен
  const subdomain = 'alinams2001'; // Ваш поддомен в amoCRM

  try {
    // Формирование данных для сделки
    const leadData = [
      {
        name: `Новая заявка с сайта: ${name} - ${phone}`, // Название сделки, включающее имя и телефон
        price: 10000, // Пример бюджета сделки (необязательно)
        _embedded: {
          tags: [
            {
              name: 'Заявка с сайта' // Пример тега для сделки
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
    return { status: 200, message: 'Заявка успешно отправлена', data: response.data };
  } catch (error) {
    // Логирование ошибки
    if (error.response) {
      console.error('Ошибка при отправке данных в amoCRM:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.error('Ошибка:', error.message);
    }

    // Возвращаем ошибку
    return { status: 500, message: 'Ошибка при создании лида', error: error.message };
  }
});