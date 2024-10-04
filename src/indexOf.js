

module.exports = function(arr, obj) {
  if (!Array.isArray(arr)) {
    throw new TypeError('First argument must be an array');
  }
  
  return arr.indexOf(obj);
};
