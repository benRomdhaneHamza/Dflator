import { List, Field } from 'keystone';
import i18nKeystone from '@/utils/i18nKeystone';

const schemaName = 'User';
const schemaData = {
	firstname: {
		type: String,
		required: true,
		initial: true
	},
	lastname: {
		type: String,
		required: true,
		initial: true
	},
	email: {
		type: Field.Types.Email,
		required: true,
		initial: true
	},
	password: {
		type: String
	},
	birthday: {
		type: Field.Types.Date
	},
	facebookId: {
		type: String
	},
	phone: String,
	gender: Number,
	city: { type: Field.Types.Relationship, ref: 'City' },
	zipCode: String,
	address: String,
}

const schemaKeystone = new List(schemaName, {
	map: { name: 'email' },
	searchFields: 'email firstname lastname',
	plural: 'users',
	singular: 'user'
});

schemaKeystone.add(schemaData);
schemaKeystone.defaultColumns = 'firstname, lastname, email';

schemaKeystone.track = {
	createdAt: true,
	updatedAt: true,
	createdBy: true,
	updatedBy: true
};
schemaKeystone.register();

export default schemaKeystone.model;

