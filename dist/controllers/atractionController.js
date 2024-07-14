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
exports.deleteAtraction = exports.updateAtraction = exports.createAtraction = exports.getAtractionsById = exports.getAtractions = void 0;
const atractionModel_1 = __importDefault(require("../daos/mongo/models/atractionModel"));
const getAtractions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const atractions = yield atractionModel_1.default.find();
        return res.status(200).json(atractions);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.getAtractions = getAtractions;
const getAtractionsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const atractions = yield atractionModel_1.default.findById(req.params.id);
        return res.status(200).json(atractions);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.getAtractionsById = getAtractionsById;
const createAtraction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, tickets, cost, name, time, attraction_type_id, is_deleted } = req.body;
        const newAtraction = new atractionModel_1.default({ id, tickets, cost, name, time, attraction_type_id, is_deleted });
        yield newAtraction.save();
        return res.status(201).send(`Atraction added with ID: ${newAtraction._id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.createAtraction = createAtraction;
const updateAtraction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, tickets, cost, name, time, attraction_type_id, is_deleted } = req.body;
        const updatedAtraction = yield atractionModel_1.default.findByIdAndUpdate(req.params.id, { id, tickets, cost, name, time, attraction_type_id, is_deleted });
        return res.status(200).send(`Atraction modified with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.updateAtraction = updateAtraction;
const deleteAtraction = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield atractionModel_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).send(`Atraction deleted with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.deleteAtraction = deleteAtraction;
