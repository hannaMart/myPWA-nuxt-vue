import db from "../database/db";

export function getUsers() {
  return db.prepare("SELECT * FROM users").all();
}

export function createUser(user) {
  const result = db
    .prepare("INSERT INTO users (name, email) VALUES (?, ?)")
    .run(user.name, user.email);

  return {
    id: result.lastInsertRowid,
    name: user.name,
    email: user.email,
  };
}