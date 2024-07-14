import { Request, Response } from 'express';
import Atraction from '../daos/mongo/models/atractionPromotion'
import Promotion from '../daos/mongo/models/promotion';

export const getAtractionID = async (req: Request, res: Response): Promise<Response> => {
    try {
        const atractions = await Atraction.findById(req.params.id);
        return res.status(200).json(atractions);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}
export const getPromotionID = async (req: Request, res: Response): Promise<Response> => {
    try {
        const promotion = await Promotion.findById(req.params.id);
        return res.status(200).json(promotion);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}