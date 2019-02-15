import db from "./db";
import validateSchema from "../schemas/index";

const users = db.use("users");

function createUser(user, cb) {
  users.insert(user, user.email, cb);
}

export default {
  create: validateSchema("user", createUser)
};
