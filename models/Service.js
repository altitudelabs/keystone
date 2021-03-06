var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Service = new keystone.List('Service', {
	map: { name: 'position' },
	autokey: { path: 'slug', from: 'position', unique: true },
	nodelete: true,
	nocreate: true
});

Service.add({
	position: {type: String, required: true,noedit:true,hidden:true},
	title: { type: String},
	tagline: { type: String },
	content: {
		brief: { type: String, height: 150 },
		mainContent: { type: Types.Html, wysiwyg: true, height: 700 }
	}
});

Service.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});
Service.defaultColumns = 'position, title|30%, tagline|30%';
Service.register();
