

var s = 11;
var table = " ";
var multiplicativeInverse = [];
for(var i = 0; i < s; i++)
    table = table + " " + i;
console.log(table);
console.log();
for(var i = 0; i < s; i++){
    table = i;
    for(var j = 0; j < s; j++){
         table = table + " " + (i*j)%s 
         if((i*j)%s == 1)
         multiplicativeInverse[j] = "MultiInverse of " + j + " is " + i;
    }
console.log(table);

}
console .log(multiplicativeInverse);
