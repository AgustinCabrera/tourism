import express, {Response,Request} from 'express';
const router = express.Router();

interface Promotion {
    id: number,
    promotion_type: string,
    pricing_strategy: string,
    cost_or_discount: number,
    is_deleted: boolean
}