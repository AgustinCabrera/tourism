import {Request,Response} from 'express'
import {QueryResult} from 'pg'

import {client} from '../db/db'

export const getUsers = async (req:Request,res:Response) => {
    const response:QueryResult = await client.query('SELECT * FROM Usuario');
    res.status(200).json(response.rows);
}