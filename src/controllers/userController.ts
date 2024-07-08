    import { Request, Response } from 'express';
    import User from '../daos/mongo/models/userModel'

    export const getUsers = async (req: Request, res: Response): Promise<Response> => {
    try {
        const users = await User.find();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
    };

    export const getUserById = async (req: Request, res: Response): Promise<Response> => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
    };

    export const createUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, password, gold, available_time, preferred_attraction_type_id, is_admin } = req.body;
        const newUser = new User({ username, password, gold, available_time, preferred_attraction_type_id, is_admin });
        await newUser.save();
        return res.status(201).send(`User added with ID: ${newUser._id}`);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
    };

    export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        const { username, password, gold, available_time, preferred_attraction_type_id, is_admin } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.params.id, { username, password, gold, available_time, preferred_attraction_type_id, is_admin }, { new: true });
        return res.status(200).send(`User modified with ID: ${req.params.id}`);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
    };

    export const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).send(`User deleted with ID: ${req.params.id}`);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error);
    }
    };

    export const getAlgo = async (req: Request, res: Response): Promise<Response> => {
    await new Promise(resolve => setTimeout(resolve, 3000));
    return res.status(200).json({ key: 'ga ti to' });
    };
