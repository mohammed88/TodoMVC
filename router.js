var Router = Backbone.Router.extend({
	routes: {
		'' : 'login',
		'todos' : requiresAuth('todos')
	},
	login: function(){
		app.renderLogin();
	},
	todos: function(){
		app.renderTodos();
	}
});

function requiresAuth(handlerName) {
	return function () {
		if (window.ref.getAuth()) {
			this[handlerName].apply(this, arguments)
		} else {
			this.navigate('', {trigger: true});
		}
	}
}

module.exports = Router;