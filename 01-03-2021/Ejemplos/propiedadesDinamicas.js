var property = "test";
var obj = {
    [property]: 1
};

console.log(obj.test); //1

/******************************* */
var property = "test";
var obj = {};
obj[property] = 1;
/******************************** */
var property = "test";
var id = 13;
var obj = {
    [property + id]: 1
};

console.log(obj); //1