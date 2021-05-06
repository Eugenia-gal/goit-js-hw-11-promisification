# goit-js-hw-11-promisification

Задание 1 Напиши функцию delay(ms), которая возвращает промис, переходящий в
состояние "resolved" через ms миллисекунд. Значением исполнившегося промиса
должно быть то кол-во миллисекунд которое передали во время вызова функции
delay.

---

Задание 2 Перепиши функцию toggleUserState() так, чтобы она не использовала
callback-функцию callback, а принимала всего два параметра allUsers и userName и
возвращала промис.

/_ - Сейчас работает так _/ toggleUserState(users, 'Mango', logger);
toggleUserState(users, 'Lux', logger);

/_- Должно работать так _/ toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);

---

Задание 3 Перепиши функцию makeTransaction() так, чтобы она не использовала
callback-функции onSuccess и onError, а принимала всего один параметр
transaction и возвращала промис.

/\*

- Работает так _/ makeTransaction({ id: 70, amount: 150 }, logSuccess,
  logError); makeTransaction({ id: 71, amount: 230 }, logSuccess, logError);
  makeTransaction({ id: 72, amount: 75 }, logSuccess, logError);
  makeTransaction({ id: 73, amount: 100 }, logSuccess, logError); /_
- Должно работать так \*/ makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess) .catch(logError);

makeTransaction({ id: 71, amount: 230 }) .then(logSuccess) .catch(logError);

makeTransaction({ id: 72, amount: 75 }) .then(logSuccess) .catch(logError);

makeTransaction({ id: 73, amount: 100 }) .then(logSuccess) .catch(logError);
