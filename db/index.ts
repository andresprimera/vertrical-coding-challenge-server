import mongoDb, { MongoClient } from "mongodb";

export async function getDbConnection() {
  const uri = process.env.MONGODB_URL;
  const client: MongoClient = new MongoClient(uri as string);

  try {
    await client.connect();

    const db = client.db("vertrical");
    return { db, client };
  } catch (e) {
    console.error(e);
  }
}

export function closeDbConnection(client: mongoDb.MongoClient) {
  client.close();
}
