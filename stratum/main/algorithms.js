const hashing = require('bindings')('hashing.node');

////////////////////////////////////////////////////////////////////////////////

// Main Algorithms Function
const Algorithms = {

  // Sha256d Algorithm
  'sha256d': {
    multiplier: 1,
    diff: parseInt('0x00000000ffff0000000000000000000000000000000000000000000000000000'),
    hash: function() {
      return function() {
        return hashing.sha256d.apply(this, arguments);
      };
    }
  },

  // Verthash Algorithm
  'verthash': {
    multiplier: Math.pow(2, 8),
    diff: parseInt('0x00000000ff000000000000000000000000000000000000000000000000000000'),
    hash: /* istanbul ignore next */ function() {
      // Can't test due to "verthash.dat" file
      return function() {
        return hashing.verthash.apply(this, arguments);
      };
    }
  },
};

module.exports = Algorithms;
