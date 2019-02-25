import PouchDB from "pouchdb-browser";
import pouchDbAuth from "pouchdb-authentication";
import { toHexCode } from "./utils";

PouchDB.plugin(pouchDbAuth);

export const dummyDB = new PouchDB(`${process.env.DB_BASEURL}`, {
  skip_setup: true
});

export const localDB = new PouchDB("documents");

// eslint-disable-next-line prefer-const
export let remoteDB = null;

export function setRemoteDB(userName) {
  remoteDB = new PouchDB(
    `${process.env.DB_BASEURL}/userdb-${toHexCode(userName)}`
  );
}
