var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Service = new keystone.List('Service', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
	nodelete: true,
	nocreate: true
});

Service.add({
	title: { type: String, required: true },
	tagline: { type: String },
	bigWords: { type: String },
	content: {
		brief: { type: String, height: 150 },
		mainContent: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	image: { type: Types.CloudinaryImage }
});

Service.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Service.register();
