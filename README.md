# arff [![Build Status](https://travis-ci.org/julien-f/js-arff.png?branch=master)](https://travis-ci.org/julien-f/js-arff)

> [ARFF](http://www.cs.waikato.ac.nz/ml/weka/arff.html) parsing and formatting

*Notice: this module is in development and ARFF encoding is not working.*

## Install

Download [manually](https://github.com/julien-f/js-arff/releases) or with package-manager.

#### [npm](https://npmjs.org/package/arff)

```
> npm install --save exec-promise
```

## Usage

```javascript
var arff = require('arff');
var readFile = require('fs').readFile;

readFile('data.arff', 'utf8', function (error, content) {
  if (error) {
    return console.error(error);
  }

  console.log(arff.parse(content));
});
```

For the folling `data.arff`:

```arff
% My ARFF file.
@RELATION user

@ATTRIBUTE name       STRING
@ATTRIBUTE lastSignIn DATE
@ATTRIBUTE group      {none,read,write,admin}

@DATA
root,?,admin
julien-f,2014-12-16T19:42:01,write
```

It will give this output:

```js
{
  relation: 'user',
  attributes: [
    {
      name: 'name',
      type: 'string'
    },
    {
      name: 'lastSignIn',
      type: 'date'
    },
    {
      name: 'name',
      type: 'enum',
      values: [
        'none',
        'read',
        'write',
        'admin'
      ]
    }
  ],
  data: [
    {
      name: 'root',
      group: 'admin'
    },
    {
      name: 'julien-f',
      lastSignIn: '2014-12-16T19:42:01',
      group: 'write'
    }
  ]
}
```

## Contributing

Contributions are *very* welcome, either on the documentation or on
the code.

You may:

- report any [issue](https://github.com/julien-f/human-format/issues)
  you've encountered;
- fork and create a pull request.

## License

ISC © [Julien Fontanet](http://julien.isonoe.net)
