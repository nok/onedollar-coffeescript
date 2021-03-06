# OneDollar.js

[![Build Status](https://travis-ci.org/nok/onedollar-unistroke-coffee.svg?branch=master)](https://travis-ci.org/nok/onedollar-unistroke-coffee)
[![npm package](https://img.shields.io/npm/v/OneDollar.js.svg)](https://www.npmjs.com/package/OneDollar.js)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/nok/onedollar-unistroke-coffee/master/LICENSE.txt)

Implementation of the [$1 Unistroke Recognizer](http://depts.washington.edu/aimgroup/proj/dollar/), a two-dimensional template based gesture recognition, in CoffeeScript.

## Table of Contents

- [About](#about)
- [Usage](#usage)
- [Download](#download)
- [Installation](#installation)
- [API](#api)
- [Options](#options)
- [Results](#results)
- [Examples](#examples)
- [Questions?](#questions)
- [License](#license)


## About

The [$1 Gesture Recognizer](http://depts.washington.edu/aimgroup/proj/dollar/) is a research project by Wobbrock, Wilson and Li of the University of Washington and Microsoft Research. It describes a simple algorithm for accurate and fast recognition of drawn gestures.

Gestures can be recognised at any position, scale, and under any rotation. The system requires little training, achieving a 97% recognition rate with only one template for each gesture.

> Wobbrock, J.O., Wilson, A.D. and Li, Y. (2007). [Gestures without libraries, toolkits or training: A $1 recognizer for user interface prototypes](http://faculty.washington.edu/wobbrock/pubs/uist-07.01.pdf). Proceedings of the ACM Symposium on User Interface Software and Technology (UIST '07). Newport, Rhode Island (October 7-10, 2007). New York: ACM Press, pp. 159-168.


## Usage

### Vanilla JS

```javascript
var one = new OneDollar();

one.add('circle', [[50,60], [70,80], /* ... */ [90,10], [20,30]]);
one.add('triangle', [[10,20], [30,40], /* ... */ [50,60], [70,80]]);

one.on('circle triangle', function(result){
  console.log('do this');
});

// OR:
// one.on('*', function(result){
//   console.log('do that');
// });

// OR:
// one.on(function(result){
//   console.log('do that');
// });

one.check([[50,60], [70,80], /* ... */ [90,10], [20,30]]);

// OR:
// one.start(1, [50,60]);
// one.update(1, [70,80]);
// /* ... */
// one.update(1, [90,10]);
// one.end(1, [20,30]);

// OR:
// one.start([50,60]);
// one.update([70,80]);
// /* ... */
// one.update([90,10]);
// one.end([20,30]);
```

### jQuery

```javascript
$('#js-sketch').onedollar({
//  options: {
//    'score': 80,
//    'parts': 64,
//    'step': 2,
//    'angle': 45,
//    'size': 250
//  },
  templates: {
    'circle': [[50,60], [70,80], /* ... */ [90,10], [20,30]],
    'triangle': [[10,20], [30,40], /* ... */ [50,60], [70,80]]
  },
  on: [
    ['circle triangle', function(results) {
      console.log(results);
    }]
  ]
});
```


## Download

<table>
    <thead>
        <tr>
            <th width="1%">Variant</th>
            <th>File Size</th>
            <th>Gzipped</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><a href="lib/onedollar.js?raw=true">onedollar.js</a></td>
            <td>10.4 kB</td>
            <td>2.62 kB</td>
        </tr>
        <tr>
            <td><a href="lib/onedollar.min.js?raw=true">onedollar.min.js</a></td>
            <td>3.89 kB</td>
            <td><strong>1.63 kB</strong></td>
        </tr>
        <tr>
            <td><a href="lib/jquery.onedollar.js?raw=true">jquery.onedollar.js</a></td>
            <td>2.84 kB</td>
            <td>884 B</td>
        </tr>
        <tr>
            <td><a href="lib/jquery.onedollar.min.js?raw=true">jquery.onedollar.min.js</a></td>
            <td>1.18 kB</td>
            <td><strong>588 B</strong></td>
        </tr>
    </tbody>
</table>

<!--
Variant | File Size | Gzipped
--- | --- | ---
[onedollar.js](lib/onedollar.js?raw=true) | 10.4 kB | 2.62 kB
[onedollar.min.js](lib/onedollar.min.js?raw=true) | 3.89 kB | **1.63 kB**
[jquery.onedollar.js](lib/jquery.onedollar.js?raw=true) | 2.84 kB | 884 B
[jquery.onedollar.min.js](lib/jquery.onedollar.min.js?raw=true) | 1.18 kB | **588 B**
-->

Note: For older versions have a look at the [releases](releases).


## Installation

Option 1: Download the files [manually](lib) or clone the repository.

Option 2: The library is available through [Bower](https://github.com/twitter/bower):

```bash
bower install --save onedollar
```

Option 3: The library is available through [NPM](https://www.npmjs.com/):

```bash
npm install --save onedollar.js
```


## API

<table>
    <thead>
        <tr>
            <th width="1%">Method</th>
            <th>Arguments</th>
            <th>Return</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>add</strong></td>
            <td>name : <code>String</code>, path : <code>Array</code></td>
            <td>this : <code>OneDollar</code></td>
            <td>Add a new template</td>
        </tr>
        <tr>
            <td colspan="4"><code>one.add('circle', [[50,60], /* ... */ [20,30]]);</code></td>
        </tr>
        <tr>
            <td><strong>remove</strong></td>
            <td>name : <code>String</code></td>
            <td>this : <code>OneDollar</code></td>
            <td>Remove added template</td>
        </tr>
        <tr>
            <td colspan="4"><code>one.remove('circle');`</td>
    </tr>
    <tr>
      <td><strong>on</strong></td>
      <td>name(s) : <code>String</code>, callback : <code>Function</code></td>
            <td>this : <code>OneDollar</code></td>
            <td>Bind callbacks</td>
        </tr>
        <tr>
            <td colspan="4"><code>one.on('circle', function(results) { /* ... */ });</code></td>
        </tr>
        <tr>
            <td><strong>off</strong></td>
            <td>name : <code>String</code></td>
            <td>this : <code>OneDollar</code></td>
            <td>Unbind callback</td>
        </tr>
        <tr>
            <td colspan="4"><code>one.off('circle');</code></td>
        </tr>
        <tr>
            <td><strong>check</strong></td>
            <td>path : <code>Array</code></td>
            <td>results : <code>Object</code></td>
            <td>Check the path</td>
        </tr>
        <tr>
            <td colspan="4"><code>var results = one.check([[50,60], /* ... */ [20,30]]);</code></td>
        </tr>
        <tr>
            <td><strong>start</strong></td>
            <td>[index : <code>Integer</code>], point : <code>Array[2]</code></td>
            <td>this : <code>OneDollar</code></td>
            <td>Start a new candidate</td>
        </tr>
        <tr>
            <td colspan="2"><code>one.start([50,60]);</code></td>
            <td colspan="2"><code>one.start(1, [50,60]);</code></td>
        </tr>
        <tr>
            <td><strong>update</strong></td>
            <td>[index : <code>Integer</code>], point : <code>Array[2]</code></td>
            <td>this : <code>OneDollar</code></td>
            <td>Update a started candidate</td>
        </tr>
        <tr>
            <td colspan="2"><code>one.update([50,60]);</code></td>
            <td colspan="2"><code>one.update(1, [50,60]);</code></td>
        </tr>
        <tr>
            <td><strong>end</strong></td>
            <td>[index : <code>Integer</code>], point : <code>Array[2]</code></td>
            <td>results : <code>Object</code></td>
            <td>End a started candidate</td>
        </tr>
        <tr>
            <td colspan="2"><code>var results = one.end([50,60]);</code></td>
            <td colspan="2"><code>var results = one.end(1, [50,60]);</code></td>
        </tr>
    </tbody>
</table>

Example:

```javascript
var one = new OneDollar();
one.add('circle', [[50,60], [70,80], /* ... */ [90,10], [20,30]]);
// ...
```


## Options

Note: All options are optional. For further details read the [official paper](http://faculty.washington.edu/wobbrock/pubs/uist-07.01.pdf).

<table>
    <thead>
        <tr>
            <th width="1%">Name</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>options.score</td>
            <td><code>Number</code> (0-100)</td>
            <td>80</td>
            <td>The similarity threshold to apply the callback(s)</td>
            <td>No</td>
        </tr>
        <tr>
            <td>options.parts</td>
            <td><code>Number</code></td>
            <td>64</td>
            <td>The number of resampling points</td>
            <td>No</td>
        </tr>
        <tr>
            <td>options.step</td>
            <td><code>Number</code></td>
            <td>2</td>
            <td>The degree of one single rotation step</td>
            <td>No</td>
        </tr>
        <tr>
            <td>options.angle</td>
            <td><code>Number</code></td>
            <td>45</td>
            <td>The last degree of rotation</td>
            <td>No</td>
        </tr>
        <tr>
            <td>options.size</td>
            <td><code>Number</code></td>
            <td>250</td>
            <td>The width and height of the scaling bounding box</td>
            <td>No</td>
        </tr>
    </tbody>
</table>

<!--
Name | Type | Default | Description | Required
--- | --- | --- | --- | ---
options.score | `Number` (0-100) | 80 | The similarity threshold to apply the callback(s) | No
options.parts | `Number` | 64 | The number of resampling points | No
options.step | `Number` | 2 | The degree of one single rotation step | No
options.angle | `Number` | 45 | The last degree of rotation | No
options.size | `Number` | 250 | The width and height of the scaling bounding box | No
-->

Example:

```javascript
var options = {
  'score': 80,
  'parts': 64,
  'step': 2,
  'angle': 45,
  'size': 250
};
var one = new OneDollar(options);
```


## Results

Note: Each `check` and `end` method will return a result set.

<table>
    <thead>
        <tr>
            <th width="1%">Name</th>
            <th>Type</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>results.recognized</td>
            <td><code>Boolean</code></td>
            <td>Is a template recognized?</td>
        </tr>
        <tr>
            <td>results.score</td>
            <td><code>Number</code></td>
            <td>The score value of the best matched template</td>
        </tr>
        <tr>
            <td>results.name</td>
            <td><code>String</code></td>
            <td>The name of the best matched template</td>
        </tr>
        <tr>
            <td>results.path</td>
            <td><code>Object</code></td>
            <td>↓</td>
        </tr>
        <tr>
            <td>results.path.start</td>
            <td><code>Array[2]</code></td>
            <td>The start point of the candidate</td>
        </tr>
        <tr>
            <td>results.path.end</td>
            <td><code>Array[2]</code></td>
            <td>The end point of the candidate</td>
        </tr>
        <tr>
            <td>results.path.centroid</td>
            <td><code>Array[2]</code></td>
            <td>The centroid of the candidate</td>
        </tr>
        <tr>
            <td>results.ranking</td>
            <td><code>Array</code></td>
            <td>A sorted ranking of matched templates</td>
        </tr>
    </tbody>
</table>

<!--
Name | Type | Description
--- | --- | ---
results.recognized | `Boolean` | Is a template recognized?
results.score | `Number` | The score value of the best matched template
results.name | `String` | The name of the best matched template
results.path | `Object` | ↓
results.path.start | `Array[2]` | The start point of the candidate
results.path.end | `Array[2]` | The end point of the candidate
results.path.centroid | `Array[2]` | The centroid of the candidate
results.ranking | `Array` | A sorted ranking of matched templates
-->

Example:

```javascript
var results = one.check([[50,60], [70,80], /* ... */ [90,10], [20,30]]);
console.log(results);
// {
//   recognized: true,
//   score: 84.27,
//   name: "circle",
//   path: {
//   	start: Array[2],
//   	end: Array[2],
//   	centroid: Array[2]
//   },
//   ranking: Array
// }
```


## Examples

- [Vanilla JS](examples/vanilla/index.html)
- [jQuery Plugin](examples/jquery/index.html)


## Questions?

Don't be shy and feel free to contact me via mail or [Twitter](https://twitter.com/darius_morawiec).


## License

The library is Open Source Software released under the [license](LICENSE.txt). It's developed by [Darius Morawiec](http://nok.onl).
