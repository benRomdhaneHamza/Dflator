import keystone from 'keystone';

const keystoneFunc = (DFLATOR_DB_HOST) => {
	keystone.init({
		'cookie secret': process.env.KEYSTONE_SECRET,
		'session store': 'mongo',
		name: 'Dflator Admin Dashboard',
		brand: 'Dflator',
		'user model': 'Admin',
		'auto update': true,
		port: process.env.KEYSTONE_PORT,
		auth: true,
		mongo: DFLATOR_DB_HOST
	});
	keystone.import('models');
	keystone.start();
};

if (process.argv[2] === '--standalone') {
	const DFLATOR_DB_HOST = process.env.DFLATOR_DB_HOST;
	keystoneFunc(DFLATOR_DB_HOST);
}

export default keystoneFunc;
