var Backbone = require('backbone');

var TodoItemView = Backbone.View.extend({
	tagName: 'li',

	initialize: function() {
		this.listenTo(this.model, 'change', this.render);
		this.listenTo(this.model, 'destroy', this.remove);
		this.render();
	},

	events: {
		'click .destroy': 'delete',
		'dblclick label': 'edit',
		'keypress .edit': 'update',
		'blur .edit': 'cancel',
		'click .toggle': 'toggle'
	},
	
	template: require('ejs!../templates/todo-item-tmpl.ejs'),

	render: function() {
		this.$el.html(this.template(this.model.attributes));
		this.$el.toggleClass('completed', this.model.get('completed'));
	},

	delete: function(e) {
		this.model.destroy();
	},

	cancel: function(e) {
		e.preventDefault();
		this.$el.removeClass('editing');
	},

	edit: function(e) {
		e.preventDefault();
		this.$el.addClass('editing');
	},

	update: function(e) {
		if (e.which === 13) {
			this.model.save({'title': this.$('.edit').val()});
		}
	},

	toggle: function(e) {
		var status = e.target.checked;
		status ? this.$el.addClass('completed') : this.$el.removeClass('completed');
		this.model.save({'completed': status});
	}
});

module.exports = TodoItemView;