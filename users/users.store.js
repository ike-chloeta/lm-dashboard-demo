import fs from "fs";
import path from "path";

const USERS_FILE = path.join(process.cwd(), "users.json");

export function readUsers() {
  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, "[]");
  }

  return JSON.parse(fs.readFileSync(USERS_FILE, "utf8"));
}

export function saveUsers(users) {
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

export function findUser(username) {
  return readUsers().find((user) => user.username === username);
}

export function updateUser(updatedUser) {
  const users = readUsers();
  const index = users.findIndex(
    (user) => user.username === updatedUser.username
  );

  if (index === -1) {
    throw new Error("User not found");
  }

  users[index] = updatedUser;
  saveUsers(users);
}
