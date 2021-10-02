//obj 1 points to this object

let obj1 = {
  value: 11,
};

let obj2 = obj1;
//console.log(obj1, obj2)
//both obj1 and 2 pointing to value 22
obj1.value = 22;

//console.log(obj1, obj2);
//obj1 obj2 poin to obj3 value 11 = garbage collection by javascript (removed)

let obj3 = {
  value: 57,
};
 obj1 = obj3;
 obj2 = obj3;

console.log(obj3, obj1, obj2)