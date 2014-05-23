StringifyStream
===================

JSON.stringify and prettify for Stream

Usage
==================

```sh
$ npm install stringify-stream -S
```

```javascript
var fs = require("fs");

var StringifyStream = require('stringify-stream');
var ss = new StringifyStream({
  spaces: 2,
});

// { "hello": "world", "deep": "purple" }
var inStream = fs.createReadStream("test/in.json");
var outStream = fs.createWriteStream("test/out.json");

// prettifized!!
// { 
//    "hello": "world", 
//    "deep": "purple" 
// }
inStream.pipe(ss).pipe(outStream);

```
