import { Router } from "express";
const router = Router();
import { getUsers } from "../controllers/indexController";

router.get('/users',getUsers)


export default router;