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
exports.getAlgo = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const db_1 = require("../db/db");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db_1.pool.query('SELECT * FROM Usuario');
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500);
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield db_1.pool.query('SELECT * FROM Usuario WHERE id = $1', [id]);
        return res.status(200).json(response.rows);
    }
    catch (error) {
        console.log(error);
        return res.status(500);
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, gold, avaiable_time, preferred_attraction_type_id, is_admin } = req.body;
        const response = yield db_1.pool.query('INSERT INTO Usuario (username,password,gold,avaiable_time,preferred_attraction_type_id,is_admin) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *', [username][password][gold][avaiable_time][preferred_attraction_type_id][is_admin]);
        res.status(201).send(`User added with ID: ${response.rows[0].id}`);
    }
    catch (error) {
        console.log(error);
        return res.status(500);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { username, password, gold, avaiable_time, preferred_attraction_type_id, is_admin } = req.body;
        const response = yield db_1.pool.query('UPDATE Usuario SET username = $1 ,password = $2,gold = $3,avaiable_time = $4,preferred_attraction_type_id = $5,is_admin= $6) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *', [username][password][gold][avaiable_time][preferred_attraction_type_id][is_admin]);
        res.status(200).send(`User modified with ID: ${id}`);
    }
    catch (error) {
        console.log(error);
        return res.status(500);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        db_1.pool.query('DELETE FROM Usuario WHERE id = $1 ', [id]);
        res.status(200).send(`User deleted with ID: ${id}`);
    }
    catch (error) {
        console.log(error);
        return res.status(500);
    }
});
exports.deleteUser = deleteUser;
const getAlgo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => setTimeout(resolve, 3000));
    res.status(200).json({ key: 'value' });
});
exports.getAlgo = getAlgo;
