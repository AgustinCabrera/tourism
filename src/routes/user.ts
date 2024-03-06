import express, {Request,Response} from 'express';
const router = express.Router();

interface User{
    id: number,
    usernames: string,
    password: string,
    gold: number,
    available_time: number,
    preferred_attraction_type_id: number,
    is_admin: boolean
}

const users: User[] = [
    {
        id: 1,
        usernames: "user1",
        password: "password1",
        gold: 100.50,
        available_time: 120,
        preferred_attraction_type_id: 1,
        is_admin: false
    },
    {
        id: 2,
        usernames: "user2",
        password: "password2",
        gold: 50.25,
        available_time: 90,
        preferred_attraction_type_id: 2,
        is_admin: false
    }
];


router.get('/', (req: Request, res: Response) => {
    res.json(users);
});

router.get('/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
});

export default router;