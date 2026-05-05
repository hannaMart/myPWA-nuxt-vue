import db from "../../database/db";

export default defineEventHandler((event) => {
  const id = event.context.params.id;

  const user = db
    .prepare("SELECT * FROM users WHERE id = ?")
    .get(id);

  return user;
});