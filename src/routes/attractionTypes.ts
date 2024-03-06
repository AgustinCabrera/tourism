import express,{Request,Response} from 'express';
const router = express.Router();

interface AttractionsTypes{
    id: number,
    name: string
}

const attractionTypesArray: AttractionsTypes[] = [
    {
        id: 1,
        name: "Ticket 1"
    },
    {
        id: 2,
        name: "Ticket 2"
    },
    {
        id: 3,
        name: "Ticket 3"
    }
];  

router.get('/attractions',(req: Request, res:Response) =>{
    res.json(attractionTypesArray);
});
router.get('/:id', (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);
    const attractionTytpe = attractionTypesArray.find(attractionTytpe => attractionTytpe.id === id);
    if (attractionTytpe) {
        res.json(attractionTytpe);
    } else {
        res.status(404).send('Attraction Type not found');
    }
});
export default router;