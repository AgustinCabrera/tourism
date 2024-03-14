import {Request,Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../db/db'

export const getUsers = async (req:Request,res:Response) => {
    const response:QueryResult = await pool.query('SELECT * FROM Usuario');
    res.status(200).json(response.rows);
}