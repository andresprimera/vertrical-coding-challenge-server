import { Request, Response } from "express";
import { getByTitle } from "./movies.services";

export async function searchMovies(req: Request, res: Response) {
  try {
    const query = req?.params?.query;
    const response = await getByTitle(query);

    if (!response) {
      res.status(500).json({
        message: "There was an error performing the search.",
        response: null,
      });
    }

    res
      .status(200)
      .json({ message: "Search performed successfully", response });
  } catch (error) {
    console.log("error en controller");
    res.status(500).json(error);
  }
}
