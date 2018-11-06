# GeekMoney

* https://habr.com/post/371161/
* https://4pda.ru/2015/05/27/223052/?utm_source=newer
* https://arena.ua/2017/07/10/10-prilozhenij-dlya-planirovaniya-lichnogo-byudzheta/
*
* https://app.moqups.com/sermiasnik@gmail.com/cESBA4yOnQ/view
* https://www.youtube.com/playlist?list=PLjGwM8d4Q92TaXOawUnl1uS6yvw_vYlIt

## Приложение
Вэб приложение для финансового учета расхода средств пользователей.
Рассчитано для пользователей, которые ежедневно ведут учет своих расходов.
<br><br>
## Преимущества:
Бесплатно<br>
Гибкость в использовании<br>
Приватность пользователей<br>
Доступ с любого устройства в браузере*<br>
Приложения данного типа пользуются популярностью
<br><br>
## Функционал
* Регистрация пользователя
* Курс валют
* Валюта
* Калькулятор
* Календарь
* Экспорт
* Рез. копирование
* Синхронизация
* Защита
* Язык
* Удалить все
*
* Планирование
* Цели
* Баланс
* Счета
* Долги
* Крнтрагент
* Группы
* День
* Неделя
* Месяц
* Год
* Дата
<br><br>
## Технологии
* Ruby rel
* React
* БЭМ
* Material-UI
* Google API v4
<br><br>
## API
Авторизация<br>
http://localhost:8080/api/signin<br>
POST
 ```json
{
    "user": {
        "email": "test51@test.ru",
        "password": "111111"
    }
}
```
Ответ
```json
{
    "id": 1,
    "email": "mail",
    "created_at": "date",
    "updated_at": "date"
}
```
Ошибка
```json
{
    "error": "Invalid Email or password."
}
```
Регистрация<br>
http://localhost:8080/api/signup<br>
POST
 ```json
{
    "user": {
        "email": "test51@test.ru",
        "password": "111111"
    }
}
```
Ответ
```json
{
    "id": 1,
    "email": "mail",
    "created_at": "date",
    "updated_at": "date"
}
```
Ошибка
```json
{
    "error": "Email has already been taken"
}
```
Выход<br>
http://localhost:8080/api/signout<br>
POST<br>
Ответ
```json
{
    "out": true
}
```
