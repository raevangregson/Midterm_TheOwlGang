$(document).ready(function(){

var drinks = [{
    name:"soda",
    description:" Coke/Sprite",
    price:"$2.00"
  },
  {
    name:"beer",
  description:"bud/budlight",
  price:"$3.00"
},
{
  name:"coffee",
description:"decaf/regular",
price:"$1.50"
}
]

var snacks = [{
    name:"poptart",
    description:"pastry goodness",
    price:"$2.00"
  },
  {
    name:"cheeze it's",
  description:"cheesy crackers",
  price:"$3.00"
},
{
  name:"chips",
  description:"BBQ",
  price:"$1.50"
}
]



var sandwiches = [{
    name:"bologna",
    description:"bologna and bread",
    price:"$4.00"
  },
  {
    name:"chicken salad sandwich",
  description:"chicken, lettuce and bread",
  price:"$5.00"
},
{name:"pbj",
description:"peanut butter and bread",
price:"$2.50"
}
]

var yummies = [{
    name:"brownie",
    description:"chocolate goodness",
    price:"$2.00"
  },
  {
    name:"cookie",
  description:"chocolate chip",
  price:"$1.00"
},
{name:"pie",
description:"apple",
price:"$2.50"
}
]


$(".menuOptions").on("click",function(){
$(".yummies").hide();
$(".itemSpecifics").show();


var className = $(this).attr("class");
switch (className) {
  case "menuOptions drinks":
  $(".drinks .name").text(drinks[0].name);
  $(".description").text(drinks[0].description);
  $(".price").text(drinks[0].price);

  $(".snacks .name").text(drinks[1].name);
  $(" .description").text(drinks[1].description);
  $(" .price").text(drinks[1].price);

  $(".sandwiches .name").text(drinks[2].name);
  $(" .description").text(drinks[2].description);
  $(" .price").text(drinks[2].price);
  break;
  case "menuOptions snacks":
  $(".drinks .name").text(snacks[0].name);
  $("  .description").text(snacks[0].description);
  $("  .price").text(snacks[0].price);

  $(".snacks .name").text(snacks[1].name);
  $(" .description").text(snacks[1].description);
  $(" .price").text(snacks[1].price);

  $(".sandwiches .name").text(snacks[2].name);
  $(" .description").text(snacks[2].description);
  $(" .price").text(snacks[2].price);
  break;
  case "menuOptions sandwiches":
  $(".drinks .name").text(sandwiches[0].name);
  $(".description").text(sandwiches[0].description);
  $(".price").text(sandwiches[0].price);

  $(".snacks .name").text(sandwiches[1].name);
  $(".description").text(sandwiches[1].description);
  $(".price").text(sandwiches[1].price);

  $(".sandwiches .name").text(sandwiches[2].name);
  $(".description").text(sandwiches[2].description);
  $(".price").text(sandwiches[2].price);
  break;
  case "menuOptions yummies":
  $(".drinks .name").text(yummies[0].name);
  $(".description").text(yummies[0].description);
  $(".price").text(yummies[0].price);

  $(".snacks .name").text(yummies[1].name);
  $(".description").text(yummies[1].description);
  $(".price").text(yummies[1].price);

  $(".sandwiches .name").text(yummies[2].name);
  $(".description").text(yummies[2].description);
  $(".price").text(yummies[2].price);
  break;
  default:
  break;
}







});

















});
