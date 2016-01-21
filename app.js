require('./css/styles.css');
var Backbone = require('backbone');
var $ = require('jquery');
var TodoCollection = require('./models/todo-collection');
var Router = require('./router');
var TodoListView = require('./views/todo-list-view');
var LoginView = require('./views/login-view');

var App = Backbone.View.extend({
	el: $('.todoapp'),

	initialize: function() {
		this.router = new Router();
		this.todos = new TodoCollection();
	},
	
	renderTodos: function() {
		this.todoListView = this.todoListView || new TodoListView({ collection: this.todos });
		this.todoListView.render();
	},

	renderLogin: function(){
		this.loginView = this.loginView || new LoginView();
		this.loginView.render();
	}
});

window.ref = new Firebase('https://sweltering-torch-5006.firebaseio.com');
window.app = new App();
Backbone.history.start();

