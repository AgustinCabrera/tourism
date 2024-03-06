import {Pool} from 'pg';

const pool = new Pool({
    user: 'yourUsername',
    host: 'localhost',
    database: 'yourDatabaseName',
    password: 'yourPassword',
    port: 8081,
});

const query = async (text: string, params: any[]) => {
    try{
        const res = await pool.query(text, params);
        return res.rows;
    }
    catch(err){
        console.log("Error executing query",err);
        throw err;
    }
}

export {pool,query};