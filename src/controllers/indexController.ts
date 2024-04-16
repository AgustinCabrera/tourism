import {Request,Response} from 'express'
import {QueryResult} from 'pg'

import {pool} from '../db/db'

export const getUsers = async (req:Request,res:Response) => {
    try{
    const response:QueryResult = await pool.query('SELECT * FROM "Usuario"');
    return res.status(200).json(response.rows);
    }catch(error){
        console.log(error)
        return res.status(500)
    }
}

export const getUserById = async (req:Request,res:Response) => {
    try {
        const id = parseInt(req.params.id)
        const response = await pool.query('SELECT * FROM Usuario WHERE id = $1',[id]);
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

export const createUser = async (req:Request,res:Response) =>{
    try {
        const {username,password, gold, avaiable_time, preferred_attraction_type_id, is_admin} = req.body
        const response = await pool.query(
            'INSERT INTO Usuario (username,password,gold,avaiable_time,preferred_attraction_type_id,is_admin) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',
        [username][password][gold][avaiable_time][preferred_attraction_type_id][is_admin]);

        res.status(201).send(`User added with ID: ${response.rows[0].id}`)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

export const updateUser = async (req:Request,res:Response) =>{
    try {
        const id = parseInt(req.params.id)
        const {username,password, gold, avaiable_time, preferred_attraction_type_id, is_admin} = req.body
        const response = await pool.query(
            'UPDATE Usuario SET username = $1 ,password = $2,gold = $3,avaiable_time = $4,preferred_attraction_type_id = $5,is_admin= $6) VALUES ($1, $2,$3,$4,$5,$6) RETURNING *',
            [username][password][gold][avaiable_time][preferred_attraction_type_id][is_admin]);
            res.status(200).send(`User modified with ID: ${id}`)
    } catch (error) {
        console.log(error)
        return res.status(500)
    }
}

export const deleteUser = async(req:Request, res:Response) =>{
try {
    const id = parseInt(req.params.id)
    pool.query('DELETE FROM Usuario WHERE id = $1 ',[id])
    res.status(200).send(`User deleted with ID: ${id}`)
} catch (error) {
    console.log(error)
    return res.status(500)
}

}

export const getAlgo = async (req:Request,res:Response) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    res.status(200).json({key:'ga ti to'});
}