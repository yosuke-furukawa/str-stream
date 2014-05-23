var assert = require("assert");
var fs = require("fs");

var StringifyStream = require('../index');
var ss = new StringifyStream({
  spaces: 8,
});

var inJson = require("./in.json");
var inStream = fs.createReadStream("test/in.json");
var outStream = fs.createWriteStream("test/out.json");

inStream.pipe(ss).pipe(outStream).on("finish", function(){
  fs.readFile("test/out.json", function(err, data) {
    assert.deepEqual(inJson, JSON.parse(""+data));
  });
});

