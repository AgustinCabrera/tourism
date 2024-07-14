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
exports.deleteItinerary = exports.updateItinerary = exports.createItinerary = exports.getItineraryById = exports.getItinerarys = void 0;
const itinerary_1 = __importDefault(require("../daos/mongo/models/itinerary"));
const getItinerarys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itinerary = yield itinerary_1.default.find();
        return res.status(200).json(itinerary);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.getItinerarys = getItinerarys;
const getItineraryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const itinerary = yield itinerary_1.default.findById(req.params.id);
        return res.status(200).json(itinerary);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.getItineraryById = getItineraryById;
const createItinerary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, userID, atractionID } = req.body;
        const newItinerary = new itinerary_1.default({ id, userID, atractionID });
        yield newItinerary.save();
        return res.status(201).send(`User added with ID: ${newItinerary._id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.createItinerary = createItinerary;
const updateItinerary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, userID, atractionID } = req.body;
        const updatedItinerary = yield itinerary_1.default.findByIdAndUpdate(req.params.id, { id, userID, atractionID });
        return res.status(200).send(`User modified with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.updateItinerary = updateItinerary;
const deleteItinerary = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield itinerary_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).send(`User deleted with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.deleteItinerary = deleteItinerary;
