import { Request, Response } from 'express';
import Promotion from '../daos/mongo/models/promotion';

export const getPromotions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const promotions = await Promotion.find();
        return res.status(200).json(promotions);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}
export const getPromotionsById = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const promotions = await Promotion.findById(req.params.id);
        return res.status(200).json(promotions);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}

export const createPromotion = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id, promotionType, pricingStrategy, costOrDiscount,isDelted} = req.body;
        const newPromotion = new Promotion({id,  promotionType, pricingStrategy, costOrDiscount,isDelted});
        await newPromotion.save();
            return res.status(201).send(`Promotion added with ID: ${newPromotion._id}`)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
export const updatePromotion = async (req: Request, res:Response): Promise<Response> => {
    try {
        const {id, tickets, cost, name, time, attraction_type_id, is_deleted} = req.body;
        const updatedPromotion = await Promotion.findByIdAndUpdate(req.params.id, {id, tickets, cost, name, time, attraction_type_id , is_deleted});
            return res.status(200).send(`Promotion modified with ID: ${req.params.id}`)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error);
    }
}

export const deletePromotion = async (req: Request, res:Response): Promise<Response> => {
    try {
        await Promotion.findByIdAndDelete(req.params.id);
        return res.status(200).send(`Promotion deleted with ID: ${req.params.id}`);
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
