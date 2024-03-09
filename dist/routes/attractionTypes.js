"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const attractionTypesArray = [
    {
        id: 1,
        name: "Ticket 1"
    },
    {
        id: 2,
        name: "Ticket 2"
    },
    {
        id: 3,
        name: "Ticket 3"
    }
];
router.get('/attractions', (req, res) => {
    res.json(attractionTypesArray);
});
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const attractionTytpe = attractionTypesArray.find(attractionTytpe => attractionTytpe.id === id);
    if (attractionTytpe) {
        res.json(attractionTytpe);
    }
    else {
        res.status(404).send('Attraction Type not found');
    }
});
exports.default = router;
