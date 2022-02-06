var x = prompt("enter the 1st number");
var y = prompt("enter the 2nd number");
var z = prompt("enter the 3rd number");

x = parseInt(x);
y = parseInt(y);
z = parseInt(z);

if (x<y && x<z)
{
alert("x is smaller number");
}
else if(y<x && y<z)
{
alert("y is smaller number");
}
else
{
alert("z is smaller number");
}