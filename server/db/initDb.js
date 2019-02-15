import couch from "./db";

const databases = ["users3", "forms3"];

export default function initDb() {
  return Promise.all(databases.map(database => couch.db.create(database)));
}
