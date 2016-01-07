var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Program = new keystone.List('Program', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	nodelete: true,
	nocreate: true
});

Program.add({
	title: { type: String, required: true },
	content: { type: Types.Html, wysiwyg: true, height: 400 }
});

Program.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Program.defaultColumns = 'title, state|20%, author|20%, publishedDate|20%';
Program.register();
