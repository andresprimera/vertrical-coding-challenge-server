import { getByTitle, getMovies } from "../movies.services";

describe("getByTitle", () => {
  it("should return an array", async () => {
    const response = await getByTitle("");
    expect(response?.length).toBeGreaterThanOrEqual(0);
  });

  //OTHER TESTS FOR THIS SERVICES GO HERE
});

describe("getMovies", () => {
  //OTHER TESTS FOR THIS SERVICES GO HERE
});
