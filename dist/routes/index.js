"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const indexController_1 = require("../controllers/indexController");
router.get('/users', indexController_1.getUsers);
exports.default = router;
