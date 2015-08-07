# form-obj

> Convert an HTML form's input values into an object.


## Install

```
$ npm install --save form-obj
```


## Usage
```js
var formObj = require('form-obj');
var form = document.querySelector('form');

formObj(form);
/*
	{
		username: 'foo',
		password: '123456'
	}
 */
```
With the HTML:
```html
<form>
	<input type="text" name="username"/>
	<input type="password" name="password"/>
</form>
```

## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
