var React = require('react');

var Login = React.createClass({
	render () {
		return (
			<div>
				<header>
					<h1>login</h1>
				</header>
				<form className="login">
					<input type="text" className="email" autofocus="" placeholder="Email" autoComplete />
					<input type="password" className="pass" placeholder="Password" />
					<input type="submit" id="login-button" value="Login" />
				</form>
			</div>
		);
	}
})

module.exports = Login;