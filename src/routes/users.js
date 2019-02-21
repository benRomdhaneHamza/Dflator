import User from '@/models/user';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
	res.status(201).send({ message: 'welcome to users dflator' });
});

export default router;