import { getByTitle } from "./services";

export async function searchMovies(query: string) {
  const response = await getByTitle(query);
  return response;
}
