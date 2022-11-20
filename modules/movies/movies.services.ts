import { closeDbConnection, getDbConnection } from "../../db";

import Movie from "./movies.models";

export async function getMovies() {
  try {
    const dbObject = await getDbConnection();

    if (!dbObject?.db) {
      throw Error("Couldn't connect to db");
    }

    const db = dbObject.db;
    const client = dbObject.client;
    const movies = await db.collection("movies").find({}).toArray();

    closeDbConnection(client);
    return movies;
  } catch (error) {
    console.log("Couldn't fetch the movies", error);
  }
}

export async function getByTitle(string: string): Promise<Movie[] | undefined> {
  let regex = new RegExp(string, "i");
  try {
    const dbObject = await getDbConnection();

    if (!dbObject?.db) {
      console.log("Couldn't connect to db");
      return undefined;
    }

    const db = dbObject.db;
    const client = dbObject.client;
    const movies: any = await db
      .collection("movies")
      .aggregate([{ $match: { title: regex } }])
      .toArray();

    closeDbConnection(client);
    return movies;
  } catch (error) {
    console.log("Couldn't fetch the movies");
    return undefined;
  }
}
