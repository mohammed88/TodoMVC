var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var TodoItemView = require('./todo-item-view');
var TodoList = require('../components/todo-list-tmpl');
var $ = require('jquery');

var TodoListView = Backbone.View.extend({
	el: $('.todoapp'),

	events: {
		'submit': 'newTodo',
		'click .logout': 'logout'
	},

	initialize: function() {
		this.listenTo(this.collection, 'add', this.add);
	},
	
	render: function() {
		var self = this;
		ReactDOM.render(<TodoList />, this.el);
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