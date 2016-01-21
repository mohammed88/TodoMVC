var Backbone = require('backbone');
var Firebase = require('firebase');
var _ = require('lodash');
var TodoModel = require('./todo');
window.Backbone = Backbone;
window._ =  _;
require('script!../bower_components/backbonefire/dist/backbonefire.min.js');

var TodoCollection = Backbone.Firebase.Collection.extend({
	model: TodoModel,
	url: 'https://sweltering-torch-5006.firebaseio.com/'
});

module.exports = TodoCollection;;