"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const attractions = [
    {
        id: 1,
        ticket: "Ticket 1",
        cost: 10,
        name: "Attraction 1",
        time: 60,
        attraction_type_id: 1,
        is_deleted: false
    },
    {
        id: 2,
        ticket: "Ticket 2",
        cost: 20,
        name: "Attraction 2",
        time: 90,
        attraction_type_id: 2,
        is_deleted: false
    }
];
// Define your route handlers
router.get('/', (req, res) => {
    res.json(attractions);
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const attraction = attractions.find(attraction => attraction.id === id);
    if (attraction) {
        res.json(attraction);
    }
    else {
        res.status(404).send('Attraction not found');
    }
});
exports.default = router;
