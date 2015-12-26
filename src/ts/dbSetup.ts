/// <reference path="../../typings/tsd.d.ts" />

import * as r from "rethinkdb";
var config = require('../server/api/config.json');

let DATABASE = config.db || 'pulse';
let TABLES = ['pulses']; 

r.connect(config)
.then(conn => {
  console.log(' [-] Database Setup');
  return createDbIfNotExists(conn)
  .then(() => Promise.all(TABLES.map((table) => createTableIfNotExists(conn, table))))
  .then(() => closeConnection(conn));
});

let createDbIfNotExists = (conn:r.Connection):Promise<r.CreateResult> => {
  return getDbList(conn).then((list) => {
    if(list.indexOf(DATABASE) === -1) {
        return createDatabase(conn);
    } else {
        console.log(' [!] Database already exists:', DATABASE);
        return Promise.resolve({
            created: 1
        });
    }
  });
}

function createTableIfNotExists(conn:r.Connection, table) {
  return getTableList(conn).then((list) => {
    if(list.indexOf(table) === -1) {
      return createTable(conn, table);
    } else {
      console.log(' [!] Table already exists:', table);
        return Promise.resolve({
            created: 1
        });
    }
  });
}

let getDbList = (conn:r.Connection):Promise<string[]> => {
  return r.dbList().run(conn);
}

let getTableList = (conn:r.Connection):Promise<string[]> => {
  return r.db(DATABASE).tableList().run(conn);
}

let createDatabase = (conn:r.Connection):Promise<r.CreateResult> => {
  console.log(' [-] Create Database:', DATABASE);
  return r.dbCreate(DATABASE).run(conn);
}

let createTable = (conn:r.Connection, table:string):Promise<r.CreateResult> => {
  console.log(' [-] Create Table:', table);
  return r.db(DATABASE).tableCreate(table).run(conn);
}

let closeConnection = (conn:r.Connection) => {
  console.log(' [x] Close connection!');
  return conn.close();
}