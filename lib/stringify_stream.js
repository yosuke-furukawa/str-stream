var Transform = require('stream').Transform;
var util = require('util');

function StringifyStream(options) {
  Transform.call(this, options);

  this.data = '';
  var options = options || {};
  this.replacer = options.replacer || null;
  this.spaces = options.spaces || 2;
}

util.inherits(StringifyStream, Transform);

StringifyStream.prototype._transform = function(chunk, output, cb) {
  chunk = chunk.toString();
  if (chunk) {
    this.data += chunk;
  }
  return cb(null);
};

StringifyStream.prototype._flush = function(cb) {
  if (this.data) {
    try {
      var result = JSON.stringify(JSON.parse(this.data), this.replacer, this.spaces);
      this.push(result);
    } catch (e) {
      cb(e);
    }
  }
  cb();
};

module.exports = StringifyStream;

