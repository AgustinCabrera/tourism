import { Request, Response } from 'express';
import Atraction from '../daos/mongo/models/atractionModel'

export const getAtractionID = async (req: Request, res: Response): Promise<Response> => {
    try {
        const atractions = await Atraction.findById(req.params.id);
        return res.status(200).json(atractions);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}
