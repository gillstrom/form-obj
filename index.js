'use strict';
var objType = require('obj-type');

module.exports = function (form) {
	var ret = {};

	if (!objType(form).indexOf('element') || form.tagName.toLowerCase() !== 'form') {
		throw new TypeError('Expected an HTML DOM form');
	}

	for (var i = 0; i < form.elements.length; i++) {
		var el = form.elements[i];

		if (el.disabled || !el.name) {
			continue;
		}

		if (el.type === 'checkbox' && el.checked) {
			ret[el.name] = Array.isArray(ret[el.name]) ? ret[el.name] : [];
			ret[el.name].push(el.value);
			continue;
		}

		if (el.type === 'radio') {
			if (el.checked) {
				ret[el.name] = el.value;
			}

			continue;
		}

		if (el.type === 'select-multiple') {
			ret[el.name] = [];

			for (var j = 0; j < el.options.length; j++) {
				var opt = el.options[j];

				if (opt.selected) {
					ret[el.name].push(opt.value);
				}
			}

			continue;
		}

		ret[el.name] = el.value;
	}

	return ret;
};
