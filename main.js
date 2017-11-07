var FoodItem = function(name, calories, vegan, glutenFree) {
  this.name = name; // string
  this.calories = calories; // number
  this.vegan = vegan; // boolean
  this.glutenFree = glutenFree; // boolean
};

FoodItem.prototype.stringify = function() {
  var that = this;
  var trueFalseVegan = function() {if (that.vegan) {return "is"} else {return "is not"}};
  var trueFalseGluten = function() {if (that.glutenFree) {return "is"} else {return "is not"}};
  var itemString = `${this.name} has ${this.calories} calories, ${trueFalseVegan()} vegan, and ${trueFalseGluten()} gluten free.`;
  return itemString;
};

var Plate = function(name, description, price, ingredients){
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;
};

var Menu = function(name, plates) {
  this.name = name;
  this.plates = plates;
};

var Restaurant = function(name, description, menu){
  this.name = name;
  this.description = description;
  this.menu = menu;
}

var bacon = new FoodItem('bacon', 100, false, true);
var bun = new FoodItem('bun', 50, true, false);
var glutenFreeBun = new FoodItem('gluten free bun', 50, true, true);
var beefBurger = new FoodItem('beef burger', 150, false, true);
var veggieBurger = new FoodItem(' veggie burger', 100, true, true);
var ltop = new FoodItem('lettuce, tomato, onion, and pickle', 5, true, true);
var avocado = new FoodItem('avocado', 40, true, true);
var egg = new FoodItem('over-easy egg', 60, false, true);
var bbqSauce = new FoodItem('bbq sauce', 20, true, true);
var onionStraw = new FoodItem('crispy onion straws', 30, true, false);
var blueChz = new FoodItem('blue cheese', 20, false, true);
var swissChz = new FoodItem('swiss cheese', 20, false, true);
var americanChz = new FoodItem('american cheese', 20, false, true);
var shrooms = new FoodItem('mushrooms', 5, true, true);
var carmo = new FoodItem('caramelized onions', 5, true, true);
var greens = new FoodItem('baby greens', 2, true, true);
var spinach = new FoodItems('fresh spinach', 2, true, true);
var 

var swissBurger = new Plate("Mushroom Swiss Burger", "Beef Burger with swiss, mushroom, and caramelized onions", 10, [bun, beefBurger, swissChz, shrooms, carmo])

console.log(swissBurger)
