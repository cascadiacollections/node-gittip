# Node-gratipay [![Build Status](https://travis-ci.org/KevinTCoughlin/node-gratipay.png?branch=master)](https://travis-ci.org/KevinTCoughlin/node-gratipay)

[![NPM](https://nodei.co/npm/gratipay.png)](https://nodei.co/npm/gratipay/)

A [Node.js](http://nodejs.org/) library for [gratipay](https://github.com/gratipay)'s REST API

## Installation

Install using the node.js package manager [npm](http://npmjs.org/):

    $ npm install gratipay
    
Or...

Install via git clone:

    $ git clone git://github.com/KevinTCoughlin/node-gratipay.git
    $ cd node-gratipay
    $ npm install

## Requirements

You can install node-gratipay and its dependencies with npm:
  
    $ npm install gratipay

Dependencies

* [Node.js](http://nodejs.org/) v0.6 +
* [Request](https://github.com/mikeal/request) v2.x.x

## Examples

Demos of the gratipay module are located in: [./examples](https://github.com/KevinTCoughlin/node-gratipay/tree/master/examples)

## Usage

* **.getPaydays(callback)**

```javascript
g.getPaydays(function(data) {
  console.log(data);
});
```

* **.getStats(callback)**

```javascript
g.getStats(function(data) {
  console.log(data);
});
```

* **.getUser(options, callback)**

```javascript
g.getUser({ name: 'KevinTCoughlin' }, function(data) {
  console.log(data);
});
```

## Testing

Issue the following Make command in the top directory to run the mocha.js test cases:

    $ make test

Or...

    $ npm test

## Contributing

Feel free to contribute!

## License

node-gratipay: Copyright (c) 2013 Kevin Coughlin

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
