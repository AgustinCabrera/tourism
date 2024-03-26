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
exports.query = exports.client = void 0;
const pg_1 = require("pg");
const client = new pg_1.Client({
    user: process.env.DBUSER,
    host: process.env.HOST,
    database: process.env.DB,
    password: "root",
    port: 8081,
});
exports.client = client;
const query = (text, params) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const res = yield client.query(text, params);
        return res.rows;
    }
    catch (err) {
        console.log("Error executing query", err);
        throw err;
    }
});
exports.query = query;
