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
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userModel_1 = require("../daos/mongo/models/userModel");
const secret = process.env.SECRET;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
    const user = { username, password: hashedPassword };
    yield (0, userModel_1.createUser)(user);
    res.status(201).send('User registered');
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = yield (0, userModel_1.findUserByUsername)(username);
    if (!user) {
        return res.status(400).send('Invalid username or password');
    }
    const validPassword = yield bcryptjs_1.default.compare(password, user.password);
    if (!validPassword) {
        return res.status(400).send('Invalid username or password');
    }
    const token = jsonwebtoken_1.default.sign({ _id: user.id }, secret, { expiresIn: '1h' });
    res.send({ token });
});
exports.login = login;
