import { getUsers } from "../../repositories/usersRepository";

export default defineEventHandler(() => {
  return getUsers();
});