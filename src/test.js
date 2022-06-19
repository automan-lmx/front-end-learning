function foo() {
    console.log(a);
    var a = 1;
    console.log(a);
    function a() {}
    console.log(a);
    console.log(b);
    var b = 2;
    console.log(b);
    var b = function () {}
    console.log(b);
  }
  
  foo();