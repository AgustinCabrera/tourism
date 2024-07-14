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
exports.deletePromotion = exports.updatePromotion = exports.createPromotion = exports.getPromotionsById = exports.getPromotions = void 0;
const promotion_1 = __importDefault(require("../daos/mongo/models/promotion"));
const getPromotions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = yield promotion_1.default.find();
        return res.status(200).json(promotions);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.getPromotions = getPromotions;
const getPromotionsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotions = yield promotion_1.default.findById(req.params.id);
        return res.status(200).json(promotions);
    }
    catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
});
exports.getPromotionsById = getPromotionsById;
const createPromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, promotionType, pricingStrategy, costOrDiscount, isDelted } = req.body;
        const newPromotion = new promotion_1.default({ id, promotionType, pricingStrategy, costOrDiscount, isDelted });
        yield newPromotion.save();
        return res.status(201).send(`Promotion added with ID: ${newPromotion._id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.createPromotion = createPromotion;
const updatePromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id, tickets, cost, name, time, attraction_type_id, is_deleted } = req.body;
        const updatedPromotion = yield promotion_1.default.findByIdAndUpdate(req.params.id, { id, tickets, cost, name, time, attraction_type_id, is_deleted });
        return res.status(200).send(`Promotion modified with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.updatePromotion = updatePromotion;
const deletePromotion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield promotion_1.default.findByIdAndDelete(req.params.id);
        return res.status(200).send(`Promotion deleted with ID: ${req.params.id}`);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.deletePromotion = deletePromotion;
