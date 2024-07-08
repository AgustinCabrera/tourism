import { Request, Response } from 'express';
import Atraction from '../daos/mongo/models/atractionModel'

export const getAtractions = async (req: Request, res: Response): Promise<Response> => {
    try {
        const atractions = await Atraction.find();
        return res.status(200).json(atractions);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}

export const getAtractionsById = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const atractions = await Atraction.findById(req.params.id);
        return res.status(200).json(atractions);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
export const createAtraction = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id, tickets, cost, name, time, attraction_type_id, is_deleted} = req.body;
        const newAtraction = new Atraction({id, tickets, cost, name, time, attraction_type_id , is_deleted});
        await newAtraction.save();
            return res.status(201).send(`User added with ID: ${newAtraction._id}`)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}

export const updateAtraction = async (req: Request, res:Response): Promise<Response> => {
    try {
        const {id, tickets, cost, name, time, attraction_type_id, is_deleted} = req.body;
        const updatedAtraction = await Atraction.findByIdAndUpdate(req.params.id, {id, tickets, cost, name, time, attraction_type_id , is_deleted});
            return res.status(200).send(`User modified with ID: ${req.params.id}`)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error);
    }
}