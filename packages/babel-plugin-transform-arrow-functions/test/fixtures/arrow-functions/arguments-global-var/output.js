var _arguments2 = 1;

function fn() {
  var _arguments = _arguments2;

  var foo = function () {
    return _arguments;
  };
}

var bar = function () {
  return _arguments2;
};

var baz = function () {
  return function () {
    return _arguments2;
  };
};