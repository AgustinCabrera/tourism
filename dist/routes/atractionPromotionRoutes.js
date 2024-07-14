"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const atractionPromotionController_1 = require("../controllers/atractionPromotionController");
const router = (0, express_1.Router)();
router.get('/atractionPromotionA/:id', atractionPromotionController_1.getAtractionID); // fijate despues que la a es para atrac y p promo
router.get('/atractionPromotionP/:id', atractionPromotionController_1.getPromotionID);
exports.default = router;
