import {Pool,PoolClient} from 'pg';

const pool = new Pool({
    user: process.env.DBUSER,
    host: process.env.HOST,
    database: process.env.DB,
    password: "root",
    port: 8081,
});

const query = async (text: string, params: any[]) => {
    const client = await pool.connect();
    try {
        const res = await client.query(text, params);
        return res.rows;
    } catch (err) {
        console.log("Error executing query", err);
        throw err;
    } finally {
        client.release();
    }
}

export {pool,query};