# GeekMoney

* Обзор конкурентов
* https://habr.com/post/371161/
* https://4pda.ru/2015/05/27/223052/?utm_source=newer
* https://arena.ua/2017/07/10/10-prilozhenij-dlya-planirovaniya-lichnogo-byudzheta/
* https://www.youtube.com/playlist?list=PLjGwM8d4Q92TaXOawUnl1uS6yvw_vYlIt
* Проектирование
* https://trello.com/b/16lED9gy
* https://realtimeboard.com/welcomeonboard/gYmZ5JpM4hbYXt9hgGz7SlCMVkGVhln6TkFlKJmTAzTbqOSVLkH7ravoOKbGRHWp
* https://app.moqups.com/sermiasnik@gmail.com/cESBA4yOnQ/view
* https://www.figma.com/files/team/636637231876995585/GeekMoney
* https://drive.google.com/file/d/1Dih23JnbbJLIJtC2N91i-0a3mqhLrdR_/view?usp=sharing
* Схема базы данных https://app.quickdatabasediagrams.com/#/d/qEWG6p
* API (swagger) https://app.swaggerhub.com/apis-docs/GeekMoney/GeekMoney/1.0.0#/default/
* Инструменты
* https://material-ui.com/
* https://developers.google.com/identity/sign-in/web/
* https://www.cbr-xml-daily.ru/daily_json.js
* https://www.ecb.europa.eu/stats/eurofxref/eurofxref-daily.xml
* https://drive.google.com/file/d/1mvWCLEeEb_zzHnrg_VR7Netqeo3YwOwa/view?usp=sharing


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
        "password": "111111",
        "remember_me": true
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
        "password": "111111",
        "remember_me": true
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
Пользователь<br>
http://localhost:8080/api/user<br>
POST<br>
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
    "error": "You need to sign in or sign up before continuing."
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
