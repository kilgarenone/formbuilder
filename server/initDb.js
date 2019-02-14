import async from "async";
import couch from "./db";

const databases = ["test2", "test3"];

export default function initCouch(cb) {
  createDatabases(cb);
}

function createDatabases(cb) {
  async.each(databases, createDatabase, cb);
}

function createDatabase(db, cb) {
  couch.db.create(db, err => {
    if (err && err.statusCode === 412) {
      err = null;
    }
    cb(err);
  });
}
