// Need to test manually, run browserify and open test.html
// $ browserify test.js > tmp.js

'use strict';
var formObj = require('../');
var form = document.querySelector('form');

form.addEventListener('submit', function (e) {
	e.preventDefault();
	console.log(formObj(form));
});

console.log(formObj(form));
