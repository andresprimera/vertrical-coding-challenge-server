import { ObjectId } from "mongodb";

export default class Movie {
  constructor(
    public title: string,
    public description: string,
    public shortDescription: string,
    public photo: string,
    public id?: ObjectId
  ) {}
}
