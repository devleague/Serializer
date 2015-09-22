var sample0 = "simple string";
var sample1 = 234.5;
var sample2 = ["a string",345.6];
var sample3 = [ ["a","b","c"], [2,3,4] ];
var sample4 = { prop1 : "val1" };
var sample5 = { prop1 : "val1", prop2 : 234.5 };
var sample6 = { prop1 : [ "val1", "val2" ] };
var sample7 = { prop1 : [ 2, 3, 4 ], prop2 : [ ["a","b","c"], [ 5, 6, 7 ] ] };
var sample8 = [ { prop1 : "val1" }, { prop1 : "val2" } ];
var sample9 = [ { prop1 : [ ["inner array 0"], ["inner array 1"] ], prop2 : { "inner prop 0" : "val 1" } }, "second element", 3 ];

var Serializer = {
  encode : encode,
  decode : decode
};

function encode(obj){

}

function decode(serialized_string){

}

module.exports = Serializer;
