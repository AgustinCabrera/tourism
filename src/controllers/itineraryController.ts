import { Request, Response } from 'express';
import Itinerary from '../daos/mongo/models/itinerary'

export const getItinerarys = async (req: Request, res: Response): Promise<Response> => {
    try {
        const itinerary = await Itinerary.find();
        return res.status(200).json(itinerary);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
}
export const getItineraryById = async (req: Request, res: Response): Promise<Response> =>{
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        return res.status(200).json(itinerary);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
export const createItinerary = async (req: Request, res: Response): Promise<Response> => {
    try {
        const {id, userID, atractionID} = req.body;
        const newItinerary = new Itinerary({id, userID, atractionID});
        await newItinerary.save();
            return res.status(201).send(`User added with ID: ${newItinerary._id}`)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}
export const updateItinerary = async (req: Request, res:Response): Promise<Response> => {
    try {
        const {id, userID, atractionID} = req.body;
        const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, {id, userID, atractionID});
            return res.status(200).send(`User modified with ID: ${req.params.id}`)
    } catch (error) {
        console.error(error)
        return res.status(500).send(error);
    }
}
export const deleteItinerary = async (req: Request, res:Response): Promise<Response> => {
    try {
        await Itinerary.findByIdAndDelete(req.params.id);
        return res.status(200).send(`User deleted with ID: ${req.params.id}`);
    } catch (error) {
        console.error(error)
        return res.status(500).send(error)
    }
}