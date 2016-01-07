var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Keystory = new keystone.List('Keystory', {
	map: { name: 'author' },
	autokey: { path: 'slug', from: 'author', unique: true }
});

Keystory.add({
	author: { type: String, required: true },
	content: { type: Types.Html, height: 400 },
});

Keystory.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Keystory.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Keystory.register();
