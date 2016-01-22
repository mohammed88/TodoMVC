var React = require('react');

var TodoItem = React.createClass({
	render () {
		var {title, completed, toggle}= this.props;
		return (
			<div>
				<div className="view">
					<input className="toggle" type="checkbox" checked={completed ? "checked" : ""} onChange={function(){}} />
					<label>{title}</label>
					<button className="destroy"></button>
				</div>
				<input className="edit" value={title} onChange={function(){}} />
			</div>
		);
	}
})

module.exports = TodoItem;