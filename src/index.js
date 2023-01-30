
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (arguments.length == 0 || (typeof matrix) != 'object' || matrix.length == 0 ) ? [] : (matrix.reduce((res,el,ind) => (ind == 0) ? res : (ind % 2 == 0) ? res.concat(el) : res.concat(el.reverse())));
}

