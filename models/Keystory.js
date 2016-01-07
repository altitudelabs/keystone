var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Keystory = new keystone.List('Keystory', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

Keystory.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, height: 400 },
	author: { type: String },
	order: { type: String }
});

Keystory.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Keystory.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Keystory.register();
