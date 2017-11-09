$(document).ready(function(){

// these are my four arrays for the four different genres of food, inside each one
// are 3 objects holding the specific items related to its respective array category
var drinks = [{
    name:"soda",
    description:" Coke/Sprite",
    price:2
  },
  {
    name:"beer",
  description:"bud/budlight",
  price:3
},{
  name:"coffee",
description:"decaf/regular",
price:1
}]

var snacks = [{
    name:"poptart",
    description:"pastry goodness",
    price:2
  },{
    name:"cheeze it's",
  description:"cheesy crackers",
  price:3
},{
  name:"chips",
  description:"BBQ",
  price:1
}];

var sandwiches = [{
    name:"bologna",
    description:"bologna and bread",
    price:4
  },{
    name:"chicken salad sandwich",
  description:"chicken, lettuce and bread",
  price:5
},{name:"pbj",
description:"peanut butter and bread",
price:2
}]

var yummies = [{
    name:"brownie",
    description:"chocolate goodness",
    price:2
  },
  {
    name:"cookie",
  description:"chocolate chip",
  price:1
},
{name:"pie",
description:"apple",
price:2
}]

//this is the on click event for when a food genre is selected,
$(".menuOptions").on("click",function(){

//we then hide of the yummies button as their are only 3 specific items per
//genre
$(".yummies").hide();

//now we show are 3 spans in each button that will hold
//the specifics description, price and name which we will
//just recycle the same span holding the genre name
$(".itemSpecifics").show();

//this grabs the class of the specific button we click
//so we know which category of food items array we need
//to grab holding our food objects
var className = $(this).attr("class").substring(12);

//this takes the string and evaluates it as a variable
// where we then save it back into the variable itself
//so we can call on it below in our function
var itemsInCategory = eval(className);

//calling our custom function taking in the class name as
//a variable aka one of our four arrays above
displayMenuItems(itemsInCategory);


// dependent on which array is called we insert the name into the
//jquery call this way we can recycle the three sections
//instead of doing three for each one and testing in a if statement or using
//a switch.
function displayMenuItems(itemsInCategory){
  $(".drinks .name").text(itemsInCategory[0].name);
  $(".description.drank").text(itemsInCategory[0].description);
  $(".price.drank").text(itemsInCategory[0].price);

  $(".snacks .name").text(itemsInCategory[1].name);
  $(".description.snack").text(itemsInCategory[1].description);
  $(".price.snack").text(itemsInCategory[1].price);

  $(".sandwiches .name").text(itemsInCategory[2].name);
  $(".description.sandwich").text(itemsInCategory[2].description);
  $(".price.sandwich").text(itemsInCategory[2].price);
}







});

















});
