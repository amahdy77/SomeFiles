//Javascript.............................
var first_name = "Nishith";
var last_name = "Mamtora";
var age = 24;
var address = "125 Lexington Ave, New York, NY 10001";

var fav_food = ["daal", "rice", "samusa", 10, 200, 30000];

var complete_bio = [first_name, last_name, age, address];


//alert(fav_food[1]);

if (age == 24){
	document.getElementById("h1please").innerHTML = "Hey My Age is 24";

}else{
	document.getElementById("h1please").innerHTML = "I don't know my age";
}




//JQUERY......................................... 
$(document).ready(function(){
	$("ul").append("<li> This is Ash </li>");
});

