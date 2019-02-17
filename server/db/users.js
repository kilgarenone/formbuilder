import * as fp from "lodash/fp";
import db from "./db";
import validateSchema from "../schemas/validate";
import userSchema from "../schemas/userSchema";

const users = db.use("users");

function createUser(user) {
  return users.insert(user, user.email);
}

export default {
  create: fp.compose(
    createUser,
    fp.curry(validateSchema)(userSchema)
  )
};
