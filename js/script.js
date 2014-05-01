/**
 * Loops Created by Phirom Yim on 5/1/14.
 */

/*//While Loop, looks like a conditional if statement

var b = 10;

if (b > 0);{
    console.log(b);
}

//infinite loop
while (b > 0);{
    console.log(b)

}*/
var b = 10;//sets up the index

while (b > 0){//checks the condition
    console.log(b + " kegs on the wall");//concatenate it and then run code
    b--; // that is to break the infinite cycle (--) decrements or (++) increments index
}