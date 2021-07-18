var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
// Default parameters
var displayDefaultParms = function (a, b) {
    if (a === void 0) { a = 0; }
    if (b === void 0) { b = 2; }
    return a + b;
};
var defaultCall = function (num1, num2) {
    var num3 = document.getElementById(num1).value;
    var num4 = document.getElementById(num2).value;
    var output = document.getElementById('defaultOutput');
    var callOutput;
    if (num3 && num4) {
        callOutput = displayDefaultParms(Number(num3), Number(num4));
    }
    else if (num3) {
        callOutput = displayDefaultParms(Number(num3));
    }
    else {
        callOutput = displayDefaultParms();
    }
    output.innerHTML = String(callOutput);
};
// Template Literal
var tempLit = document.getElementById('tempLit');
tempLit.innerHTML = "Testing Santosh";
var tempLiterals = function () {
    var temp = 10, add1 = 28, add2 = 30;
    document.getElementById('withNum').innerHTML = "Template with Number " + temp;
    document.getElementById('arthOpera').innerHTML = "Arithmetic Operation: " + (add1 + add2);
};
tempLiterals();
//let and const differences
var constLetDiff = function () {
    document.getElementById('letconst').innerHTML = "<div>Dynamic html rendering with template literals </div>";
    document.getElementById('letVar').innerHTML = "<div>Let Example: it's a block scope</div>";
    if (true) {
        var one1 = 123;
        document.getElementById('output').innerHTML = "<div>Let Scope: " + one1 + "</div>";
    }
    // console.log(one1) We can not access one1 out of the block
    document.getElementById('constVar').innerHTML = "<div>Const Example: it's a block scope and we can't change once assigned value</div>";
    if (true) {
        var canAssign = 'Testing Const';
        document.getElementById('constoutput').innerHTML = "<div>Const Output: " + canAssign + "</div>";
        //canAssign = 'Re Assign' not possible
    }
    // console.log(canAssign) //We can not access one1 out of the block
};
constLetDiff();
//Arrow functions 
// Default/ No parameters function
var displayArrow = function () { return "Default/ No parameters function"; };
document.getElementById('defaultAw').innerHTML = displayArrow();
// Single parameters Arrow function
var singleArrow = function (param) { return param; };
document.getElementById('singleAw').innerHTML = singleArrow("Single Parameter: $" + 25.5);
// Multiple parameters Arrow function
var multiArrow = function (param1, param2) { return param1 + param2; };
document.getElementById('multiAw').innerHTML = String("Output " + multiArrow(10, 29)); // innerHTML assign String only and calling method using Template literals
//For in vs of
var arr = [1, 3, 5, 9];
var forInOf = function (arr) {
    console.log("For in:");
    for (var index in arr) {
        var value = arr[index];
        console.log("Displaying for in key: " + index + " value: " + value);
    }
    console.log("For of:");
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var i = arr_1[_i];
        console.log("Displaying for of key: " + i); // i contains directly value, we are using 'of'
    }
};
forInOf(arr);
// lambda function
var arrLength = function (arr) { return arr.length; };
document.getElementById('lambdaOut').innerHTML = "Lambda output: " + arrLength(arr);
//Spread operators with Array
console.log("Spread operators with Array:");
var arr1 = ['San', 'to', 'sh'];
var arr2 = [1, 3, 5, 9];
var arr3 = __spreadArray(__spreadArray([], arr1), arr2); // Here using | operator we can allow number and Strings into single array
console.log('Moving to other array', arr3);
console.log(__spreadArray(__spreadArray([1, 10, 'xyz'], arr1), arr2));
//Spread operators with Object
console.log("Spread operators with Object:");
var obj = {
    name: 'Santosh',
    age: '35'
};
var obj1 = {
    lastname: 'bujala',
    count: '10'
};
var obj3 = __assign(__assign({}, obj), obj1);
console.log(obj3);
console.log(__assign(__assign({ test: 'testing' }, obj), obj1));
// Number of arguments
var numberOfArrgs = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (e) {
        console.log(e);
    });
};
console.log("Number of arguments:");
numberOfArrgs('Santosh', 'Manvith', 'Bujala');
numberOfArrgs('test', 'test1', 'test2', 'test3', 'test4', 'test5');
numberOfArrgs(1, 2, 3);
//Optional arguments
var optionalArgs = function (a, b, c) {
    if (a && b && c)
        console.log("a: " + a + " b: " + b + " c: " + c);
    else if (a && b)
        console.log("a: " + a + " b: " + b);
    else
        a ? console.log("a: " + a) : b ? console.log("b: " + b) : console.log("c: " + c);
};
console.log("Optional arguments");
optionalArgs(1);
optionalArgs(1, 2);
optionalArgs(1, 2, 3);
optionalArgs(1, 'Test', 3); // We are passing mixed parameters using |
//Function destructuring
var destruct = function () { return [10, 20, 80]; };
var _a = destruct(), v1 = _a[0], v2 = _a[1], v3 = _a[2];
console.log("Function destructuring");
console.log(v1);
console.log(v2);
console.log(v3);
var destructNargs = function () { return [5, 10, 15, 20, 25]; };
var _b = destructNargs(), a1 = _b[0], a2 = _b[1], a3 = _b.slice(2);
console.log(a1);
console.log(a2);
console.log(a3);
