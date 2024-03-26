import {Client} from 'pg';

const client = new Client({
    user: process.env.DBUSER,
    host: process.env.HOST,
    database: process.env.DB,
    password: process.env.DBPASS,
    port: 8081,
});

const query = async (text: string, params: any[]) => {
    
    try{
        await client.connect()
        const res = await client.query(text, params);
        return res.rows;
    }
    catch(err){
        console.log("Error executing query",err);
        throw err;
    }
}

export {client,query};