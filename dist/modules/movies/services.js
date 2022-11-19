"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getByTitle = exports.getMovies = void 0;
const db_1 = require("../../db");
function getMovies() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const dbObject = yield (0, db_1.getDbConnection)();
            if (!(dbObject === null || dbObject === void 0 ? void 0 : dbObject.db)) {
                throw Error("Couldn't connect to db");
            }
            const db = dbObject.db;
            const client = dbObject.client;
            const movies = yield db.collection("movies").find({}).toArray();
            (0, db_1.closeDbConnection)(client);
            return movies;
        }
        catch (error) {
            console.log("Couldn't fetch the movies", error);
        }
    });
}
exports.getMovies = getMovies;
function getByTitle(string) {
    return __awaiter(this, void 0, void 0, function* () {
        let regex = new RegExp(string, "i");
        try {
            const dbObject = yield (0, db_1.getDbConnection)();
            if (!(dbObject === null || dbObject === void 0 ? void 0 : dbObject.db)) {
                console.log("Couldn't connect to db");
                return undefined;
            }
            const db = dbObject.db;
            const client = dbObject.client;
            const movies = yield db
                .collection("movies")
                .aggregate([{ $match: { title: regex } }])
                .toArray();
            (0, db_1.closeDbConnection)(client);
            return movies;
        }
        catch (error) {
            console.log("Couldn't fetch the movies");
            return undefined;
        }
    });
}
exports.getByTitle = getByTitle;
