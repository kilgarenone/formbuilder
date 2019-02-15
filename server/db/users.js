import db from "./db";
import validateSchema from "../schemas/index";

const users = db.use("users");

function createUser(user) {
  return users.insert(user, user.email);
}

export default {
  create: validateSchema("user", createUser)
};
