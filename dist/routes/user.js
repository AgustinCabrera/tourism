"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const users = [
    {
        id: 1,
        usernames: "user1",
        password: "password1",
        gold: 100.50,
        available_time: 120,
        preferred_attraction_type_id: 1,
        is_admin: false
    },
    {
        id: 2,
        usernames: "user2",
        password: "password2",
        gold: 50.25,
        available_time: 90,
        preferred_attraction_type_id: 2,
        is_admin: false
    }
];
router.get('/', (req, res) => {
    res.json(users);
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).send('User not found');
    }
});
exports.default = router;
