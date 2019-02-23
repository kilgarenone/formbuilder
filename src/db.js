import PouchDB from "pouchdb-browser";
import pouchDbAuth from "pouchdb-authentication";

PouchDB.plugin(pouchDbAuth);

const db = new PouchDB("http://localhost:5984/mydb", {
  skip_setup: true
});

db.signUp("batman", "brucewayne", (err, response) => {
  if (err) {
    if (err.name === "conflict") {
      // "batman" already exists, choose another username
    } else if (err.name === "forbidden") {
      // invalid username
    } else {
      // HTTP error, cosmic rays, etc.
    }
  }
  console.log(response);
});

// export default db;
