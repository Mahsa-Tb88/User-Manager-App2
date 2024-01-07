import { usersData } from "./data";

function getAllUsers() {
  try {
    // localStorage.users = JSON.stringify(usersData);
    return JSON.parse(localStorage.users);
  } catch (e) {
    [];
  }
}

function saveUsers(users) {
  localStorage.users = JSON.stringify(users);
}

function deleteUser(id) {
  const users = getAllUsers();
  const filterdUsers = users.filter((user) => user.id != id);
  saveUsers(filterdUsers);
}

function addTasks(firstname, lastname, phone, province) {
  const tasks = getAllUsers();
  let id;
  if (users.length) {
    id = users[users.length - 1].id + 1;
  } else {
    id = 1;
  }
  const newUser = {
    firstname,
    lastname,
    phone,
    province,
  };
  users.push(newUser);
  saveUsers(users);
  return;
}

function updateUsers(id, firstname, lastname, phone, province) {
  let users = getAllTasks();
  users = users.map((user) => {
    if (user.id == id) {
      return { id, firstname, lastname, phone, province };
    } else {
      return user;
    }
  });

  saveUsers(users);
}

export { getAllUsers, saveUsers, deleteUser, addTasks, updateUsers };
