import { Field, List } from 'keystone';
import i18nKeystone from '@/utils/i18nKeystone';

const schemaName = 'City';
const schemaData = {
	name: i18nKeystone(String),
	// country: { type: Field.Types.Relationship, ref: 'Country' },
	country: String,
	lat: { type: Number },
	lng: { type: Number }
};

const schemaKeystone = new List(schemaName, {
	map: { name: 'name.en' },
	searchFields: 'name.en',
	plural: 'cities',
	singular: 'city'
});
schemaKeystone.add(schemaData);
schemaKeystone.defaultColumns = 'name.en';
schemaKeystone.register();

export default schemaKeystone.model;