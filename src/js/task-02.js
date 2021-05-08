const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

const toggleUserState = (allUsers, userName) => {
  return new Promise((resolve, reject) => {
    const updatedUsers = allUsers.map(user =>
    user.name === userName ? { ...user, active: !user.active } : user,
    );
    resolve(updatedUsers);
   })
};

const logger = updatedUsers => console.table(updatedUsers);


// Вызов функции для проверки
toggleUserState(users, 'Lux').then(logger);