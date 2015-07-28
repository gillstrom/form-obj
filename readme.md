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
		name: 'foo',
		password: '123456'
	}
 */
```


## API

### formObj(form)

#### form

*Required*  
Type: `HTML DOM element`


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
