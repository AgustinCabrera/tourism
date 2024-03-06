import express, { Request, Response } from 'express';
const router = express.Router();

interface Attraction {
    id: number;
    ticket: string;
    cost: number;
    name: string;
    time: number;
    attraction_type_id: number;
    is_deleted: boolean;
}

const attractions: Attraction[] = [

    {
        id: 1,
        ticket: "Ticket 1",
        cost: 10,
        name: "Attraction 1",
        time: 60,
        attraction_type_id: 1,
        is_deleted: false
    },
    {
        id: 2,
        ticket: "Ticket 2",
        cost: 20,
        name: "Attraction 2",
        time: 90,
        attraction_type_id: 2,
        is_deleted: false
    }
];

// Define your route handlers
router.get('/', (req: Request, res: Response) => {
    res.json(attractions);
});

router.get('/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const attraction = attractions.find(attraction => attraction.id === id);
    if (attraction) {
        res.json(attraction);
    } else {
        res.status(404).send('Attraction not found');
    }
});

export default router;
