import { List, Field } from 'keystone';
import i18nKeystone from '@/utils/i18nKeystone';

const schemaName = 'Space';
const schemaData = {
	name: i18nKeystone(String),
	description: i18nKeystone(Field.Types.Textarea),
	address: i18nKeystone(String),
}

const schemaKeystone = new List(schemaName, {
	map: { name: 'name.fr' },
	searchFields: 'name.fr, name.ar, name.en',
	plural: 'spaces',
	singular: 'space'
});

schemaKeystone.add(schemaData);
schemaKeystone.defaultColumns =
  'name.fr, name.ar, name.en';
schemaKeystone.track = {
	createdAt: true,
	updatedAt: true,
	createdBy: true,
	updatedBy: true
};
schemaKeystone.register();

export default schemaKeystone.model;

