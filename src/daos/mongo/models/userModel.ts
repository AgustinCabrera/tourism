    import {pool} from '../../../db/db';

    export interface IUser {
    id?: number;
    username: string;
    password: string;
    }

    export const createUser = async (user: IUser): Promise<void> => {
    const client = await pool.connect();
    try {
        const { username, password } = user;
        await client.query('INSERT INTO users (username, password) VALUES ($1, $2)', [username, password]);
    } finally {
        client.release();
    }
    };

    export const findUserByUsername = async (username: string): Promise<IUser | null> => {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM users WHERE username = $1', [username]);
        if (result.rows.length > 0) {
        return result.rows[0];
        }
        return null;
    } finally {
        client.release();
    }
    };
