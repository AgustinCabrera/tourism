"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typeOfAtractionController_1 = require("../controllers/typeOfAtractionController");
const router = (0, express_1.Router)();
router.get('/typeOfAtraction/:id', typeOfAtractionController_1.getAtractionID);
exports.default = router;
