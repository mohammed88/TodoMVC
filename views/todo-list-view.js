var Backbone = require('backbone');
var TodoItemView = require('./todo-item-view');
var $ = require('jquery');

var TodoListView = Backbone.View.extend({
	el: $('.todoapp'),

	template: require('ejs!../templates/todo-list-tmpl.ejs'),

	events: {
		'submit': 'newTodo',
		'click .logout': 'logout'
	},

	initialize: function() {
		this.listenTo(this.collection, 'add', this.add);
	},
	
	render: function() {
		var self = this;
		this.$el.html(this.template());
		this.list = this.$('.todo-list');
		this.input = this.$('input[type="text"]');
		this.collection.forEach(function(model){
			self.add(model);
		});
	},

	newTodo: function(e) {
		e.preventDefault();
		this.collection.create({ title: this.input.val() })
		this.input.val('').focus();
	},

	add: function(model){
		this.list.append(new TodoItemView({ model: model }).$el);
	},

	logout: function(e) {
		window.ref.unauth();
	}
});

module.exports = TodoListView;