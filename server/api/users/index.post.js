import { createUser } from "../../repositories/usersRepository";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  return createUser(body);
});