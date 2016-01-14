var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Keystory = new keystone.List('Keystory', {
	sortable: true,
	map: { name: 'author' },
	autokey: { path: 'slug', from: 'author', unique: true },
	defaultSort: 'sortOrder'
});

Keystory.add({
	author: { type: String, required: true },
	content: { type: Types.Html, height: 400 },
});

Keystory.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Keystory.defaultColumns = 'author, content|60%';
Keystory.register();
