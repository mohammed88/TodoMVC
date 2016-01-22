var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var Login = require('../components/login-tmpl');
var $ = require('jquery');

var LoginView = Backbone.View.extend({
	el: $('.todoapp'),

	events: {
		'click #login-button': 'login',
		'keypress .pass': 'loginOnEnter'
	},

	render: function() {
		ReactDOM.render(<Login />, this.el);
	},

	login: function(e) {
		e.preventDefault();
		window.ref.authWithPassword({
			email: this.$('.email').val(),
			password : this.$('.pass').val()
		}, authHandler);

		function authHandler(error, authData) {
			if (error) {
				console.log('Login Failed!', error);
			} else {
				console.log('Authenticated successfully with payload:', authData);
				window.app.router.navigate('todos', {trigger: true});
			}
		}
	},

	loginOnEnter: function(e){
		if (e.keyCode === 13) this.login(e);
	}
});

module.exports = LoginView;