/* eslint-disable import/no-mutable-exports */
import PouchDB from "pouchdb-browser";
import pouchDbAuth from "pouchdb-authentication";
import { toHexCode } from "./utils";

PouchDB.plugin(pouchDbAuth);

export const dummyDB = new PouchDB(`${process.env.DB_BASEURL}`, {
  skip_setup: true
});

export const localDB = new PouchDB("documents");

export let remoteDB = null;
let syncHandler = null;

export function setRemoteDB(userName) {
  remoteDB = new PouchDB(
    `${process.env.DB_BASEURL}/userdb-${toHexCode(userName)}`,
    {
      skip_setup: true,
      fetch: (url, opts) => fetch(url, { ...opts, credentials: "same-origin" })
    }
  );
}

export function initSyncDataBases() {
  syncHandler = localDB
    .sync(remoteDB, {
      live: true,
      retry: true
    })
    .on("change", change => {
      // yo, something changed!
    })
    .on("paused", info => {
      // replication was paused, usually because of a lost connection
    })
    .on("active", info => {
      // replication was resumed
    })
    .on("error", err => {
      // totally unhandled error (shouldn't happen)
    });

  syncHandler.on("complete", info => {
    console.log("replication was canceled!");
  });
}

export function cancelDataBasesSync() {
  syncHandler.cancel();
}
