import City from '@/models/city';
import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
	res.status(201).send({ message: 'welcome to users cities' });
});

// const addCities = (_cities) => new Promise((resolve, reject) => {
// 	_cities.forEach(_city => {
// 		let newCity = new City({
// 			country: 'TN',
// 			name: {
// 				fr: _city.city,
// 				en: _city.city
// 			},
// 			lat: _city.lat,
// 			lng: _city.lng
// 		});
// 		newCity.save().then(res => {
// 			logger.debug("-----------------------",res);
// 		});
// 	});
// 	return resolve({allAdded: true})
// })

// router.post('/', async(req, res) => {
// 	const cities = req.body;
// 	const addedCities = await addCities(cities);
// 	return res.status(201).json(addedCities);
// })

export default router;