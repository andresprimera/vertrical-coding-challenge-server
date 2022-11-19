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
exports.searchMovies = void 0;
const services_1 = require("./services");
function searchMovies(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const query = (_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.query;
            const response = yield (0, services_1.getByTitle)(query);
            if (!response) {
                res.status(500).json({
                    message: "There was an error performing the search.",
                    response: null,
                });
            }
            res
                .status(200)
                .json({ message: "Search performed successfully", response });
        }
        catch (error) {
            console.log("error en controller");
            res.status(500).json(error);
        }
    });
}
exports.searchMovies = searchMovies;
