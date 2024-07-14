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
exports.getPromotionID = exports.getAtractionID = void 0;
const atractionPromotion_1 = __importDefault(require("../daos/mongo/models/atractionPromotion"));
const promotion_1 = __importDefault(require("../daos/mongo/models/promotion"));
const getAtractionID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const atractions = yield atractionPromotion_1.default.findById(req.params.id);
        return res.status(200).json(atractions);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.getAtractionID = getAtractionID;
const getPromotionID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const promotion = yield promotion_1.default.findById(req.params.id);
        return res.status(200).json(promotion);
    }
    catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
});
exports.getPromotionID = getPromotionID;
