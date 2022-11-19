import * as mongoDb from "mongodb";

export interface DBObjectUI {
  db: mongoDb.Db;
  client: mongoDb.MongoClient;
}
