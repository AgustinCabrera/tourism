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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAlgo = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const userModel_1 = __importDefault(require("../daos/mongo/models/userModel"));
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield userModel_1.default.find();
            return res.status(200).json(users);
        }
        catch (error) {
            console.error(error);
            return res.status(500).send(error);
        }
    });
}
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield userModel_1.default.findById(req.params.id);
        return res.status(200).json(user);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.getUserById = getUserById;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, gold, available_time, preferred_attraction_type_id, is_admin } = req.body;
        const newUser = new userModel_1.default({ username, password, gold, available_time, preferred_attraction_type_id, is_admin });
        yield newUser.save();
        return res.status(201).send(`User added with ID: ${newUser._id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.createUser = createUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, gold, available_time, preferred_attraction_type_id, is_admin } = req.body;
        const updatedUser = yield userModel_1.default.findByIdAndUpdate(req.params.id, { username, password, gold, available_time, preferred_attraction_type_id, is_admin }, { new: true });
        return res.status(200).send(`User modified with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userModel_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).send(`User deleted with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.deleteUser = deleteUser;
const getAlgo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield new Promise(resolve => setTimeout(resolve, 3000));
    return res.status(200).json({ key: 'ga ti to' });
});
exports.getAlgo = getAlgo;
