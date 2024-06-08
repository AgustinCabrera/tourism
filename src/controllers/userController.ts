    import { Request, Response } from 'express';
    import * as bcrypt from 'bcryptjs';
    import * as jwt from 'jsonwebtoken';
    import { createUser, findUserByUsername, IUser } from '../daos/mongo/models/userModel';

    const secret = process.env.SECRET; 

    export const register = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user: IUser = { username, password: hashedPassword };
    await createUser(user);

    res.status(201).send('User registered');
    };

    export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const user = await findUserByUsername(username);

    if (!user) {
        return res.status(400).send('Invalid username or password');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
        return res.status(400).send('Invalid username or password');
    }

    const token = jwt.sign({ _id: user.id }, secret, { expiresIn: '1h' });

    res.send({ token });
    };
