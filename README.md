# Grosh Dmitriy chat

[Pull request #1](https://github.com/DmitriyGrosh/middle.messenger.praktikum.yandex/pull/1)
[Pull request #2](https://github.com/DmitriyGrosh/middle.messenger.praktikum.yandex/pull/2)

### Ветка, в которой делаете задания спринта, должна называться sprint_i, где i - номер спринта. Не переименовывайте её.

[Pull request из `sprint_1`](https://github.com/DmitriyGrosh/middle.messenger.praktikum.yandex/pull/1)
[Pull request из `sprint_2`](https://github.com/DmitriyGrosh/middle.messenger.praktikum.yandex/pull/2)

[Сайт на Netlify](https://classy-torrone-20e766.netlify.app/)

## Установка

Для работы вам нужно установить `node.js >=14.17`.

Далее, следуйте командам:

```bash
git clone https://github.com/DmitriyGrosh/middle.messenger.praktikum.yandex.git
cd middle.messenger.praktikum.yandex
npm install
```

## Для старта

- `npm run start` - запуск проекта версии
- `npm run build` - собрать проект
- `npm run serve` - раздача статики через `Express`


## Макеты 

[Макет проекта в Figma](https://www.figma.com/file/jF5fFFzgGOxQeB4CmKWTiE/Chat_external_link?node-id=0%3A1)

## Для старта
- добавил валидацию при авторизации, регистрации и смены данных в профиле
- добавил чат, и возможномть просматривать напечатанное сообщение
- добавил атомарность в проект
- в папке components лежат тупые компоненты, в папке layouts лежат переиспользуемве компоненты с логикой
