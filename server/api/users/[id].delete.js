import db from "../../database/db";

export default defineEventHandler((event) => {
  const { id } = getRouterParams(event);

  db.prepare("DELETE FROM users WHERE id = ?").run(id);

  return {
    success: true,
    id,
  };
});