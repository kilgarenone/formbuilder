import couch from "./db";

const databases = ["dummy"];

export default function initDb() {
  return Promise.all(databases.map(database => couch.db.create(database)));
}
