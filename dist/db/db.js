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
exports.query = exports.pool = void 0;
const pg_1 = require("pg");
const pool = new pg_1.Pool({
    user: process.env.DBUSER,
    host: process.env.HOST,
    database: process.env.DB,
    password: "root",
    port: 8081,
});
exports.pool = pool;
const query = (text, params) => __awaiter(void 0, void 0, void 0, function* () {
    let client;
    try {
        yield pool.connect();
        const res = yield pool.query(text, params);
        return res.rows;
    }
    catch (err) {
        console.log("Error executing query", err);
        throw err;
    }
    finally {
        if (client) {
            client.release();
        }
    }
});
exports.query = query;
