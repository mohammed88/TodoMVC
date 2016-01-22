var React = require('react');

var TodoList = React.createClass({
	render () {
		return (
			<div>
				<header className="header">
					<h1>todos</h1>
					<h4 className="logout"><a href="#">Logout</a></h4>
				</header>
				<section>
					<form>
						<input className="new-todo" placeholder="What needs to be done?" autofocus="" type="text" />
					</form>
				</section>
				<section>
					<ul className="todo-list">
					</ul>
				</section>
			</div>
		);
	}
});

module.exports = TodoList;