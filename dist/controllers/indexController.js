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
const mongodb_1 = require("mongodb");
const client = new mongodb_1.MongoClient('mongodb://localhost:27017');
const database = client.db('local');
const usersCollection = database.collection('users');
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const users = yield usersCollection.find().toArray();
        return res.status(200).json(users);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    finally {
        yield client.close();
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const id = new mongodb_1.ObjectId(req.params.id);
        const user = yield usersCollection.findOne({ _id: id });
        return res.status(200).json(user);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    finally {
        yield client.close();
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const { username, password, gold, available_time, preferred_attraction_type_id, is_admin } = req.body;
        const newUser = { username, password, gold, available_time, preferred_attraction_type_id, is_admin };
        const result = yield usersCollection.insertOne(newUser);
        res.status(201).send(`User added with ID: ${result.insertedId}`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    finally {
        yield client.close();
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const id = new mongodb_1.ObjectId(req.params.id);
        const { username, password, gold, available_time, preferred_attraction_type_id, is_admin } = req.body;
        const updatedUser = { username, password, gold, available_time, preferred_attraction_type_id, is_admin };
        yield usersCollection.updateOne({ _id: id }, { $set: updatedUser });
        res.status(200).send(`User modified with ID: ${id}`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    finally {
        yield client.close();
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield client.connect();
        const id = new mongodb_1.ObjectId(req.params.id);
        yield usersCollection.deleteOne({ _id: id });
        res.status(200).send(`User deleted with ID: ${id}`);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    finally {
        yield client.close();
    }
});
exports.deleteUser = deleteUser;
const getAlgo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise((resolve) => setTimeout(resolve, 3000));
    res.status(200).json({ key: 'ga ti to' });
});
exports.getAlgo = getAlgo;
