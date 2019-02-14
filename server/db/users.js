import db from "./db";

const users = db.use("users");

function create(user, cb) {
  users.insert(user, user.email, cb);
}

export default { create };
