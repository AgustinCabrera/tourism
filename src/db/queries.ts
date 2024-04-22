import { Pool, QueryResult } from 'pg';
import { Request, Response } from 'express';

const pool = new Pool({
  user: 'agustin', //process.env.DBUSER
  host: 'localhost',//process.env.HOST
  database:'tourismapp', //process.env.DB,
  password: 'root', //process.env.DBPASS
  port: 5432,
});

const getUsers = (request: Request, response: Response): void => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error: Error, results: QueryResult) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getUserById = (request: Request, response: Response): void => {
  const id: number = parseInt(request.params.id);

  pool.query('SELECT * FROM users WHERE id = $1', [id], (error: Error, results: QueryResult) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const createUser = (request: Request, response: Response): void => {
  const { name, email }: { name: string; email: string } = request.body;

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error: Error, results: QueryResult) => {
    if (error) {
      throw error;
    }
    response.status(201).send(`User added with ID: ${results.rows[0].id}`);
  });
};

const updateUser = (request: Request, response: Response): void => {
  const id: number = parseInt(request.params.id);
  const { name, email }: { name: string; email: string } = request.body;

  pool.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error: Error, results: QueryResult) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    }
  );
};

const deleteUser = (request: Request, response: Response): void => {
  const id: number = parseInt(request.params.id);

  pool.query('DELETE FROM users WHERE id = $1', [id], (error: Error, results: QueryResult) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
