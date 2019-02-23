import UserController from '@/controllers/user'
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
	res.status(201).send({ message: 'welcome to users dflator' });
});

// ******************************************************
// USER SINGUP
// ******************************************************

// TODO BODY VALIDATION
// TODO TOKEN STUFF
router.post('/signup', async(req, res) => {
	const newUser = req.body;
	newUser.email = newUser.email.toLowerCase();
	const userExist = await UserController.checkIfUserExists(newUser.email);
	if (userExist) return res.status(409).send({ emailUsed: true });
	const addedUser = await UserController.addUser(newUser);
	if (!addedUser) if (userExist) return res.status(403).send({ errorSignup: true });
	// SEND CONFIRMATION MAIL
	res.status(201).send(addedUser);
});

// TODO BODY VALIDATION
// TODO TOKEN STUFF
router.post('/login', async(req, res) => {
	const user = await UserController.login(req.body);
	if (!user) return res.status(404).send({ wrongCredentials: true });
	res.status(201).send(user);
})

export default router;