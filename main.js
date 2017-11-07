// -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-
// food item constructor and prototype
//  -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-

var FoodItem = function(name, calories, vegan, glutenFree) {
  this.name = name; // string
  this.calories = calories; // number
  this.vegan = vegan; // boolean
  this.glutenFree = glutenFree; // boolean
};

FoodItem.prototype.stringify = function() {
  // set the object "this" equal to "that" for access in nested functions
  var that = this;
  // convert boolean statements to english statements
  var trueFalseVegan = function() {if (that.vegan) {return "is"} else {return "is not"}};
  var trueFalseGluten = function() {if (that.glutenFree) {return "is"} else {return "is not"}};
  var itemString = `a ${this.name} containing ${this.calories} calories, that ${trueFalseVegan()} vegan, and ${trueFalseGluten()} gluten free`;
  return itemString;
};


//  -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-
// plate constructor and prototype
//  -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-

var Plate = function(name, description, price, ingredients){
  this.name = name;
  this.description = description;
  this.price = price;
  this.ingredients = ingredients;
};

Plate.prototype.stringify = function() {
  // set the object "this" equal to "that" for access in nested functions
  var that = this;
  var loopArray = [];
  // loop over array of ingredients in the object passed in, pushed into an array that will be joined for finished string
  function loop() {
    for (var ingredient of that.ingredients){
      loopArray.push(ingredient.stringify());
    }
  };
  loop();
  var loopString = loopArray.join(', ')
  var plateString = `${this.name} costs ${this.price} dollars and has ${loopString}`
  return plateString
}

//  -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-
// menu constructor and prototype
//  -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-

var Menu = function(name, plates) {
  this.name = name;
  this.plates = plates;
};

Menu.prototype.stringify = function() {
  // set the object "this" equal to "that" for access in nested functions
  var that = this;
  var loopArray = [];
  function loop() {
    for (var plate of that.plates){
    loopArray.push(plate.stringify());
    }
  }
  loop();
  var loopString = loopArray.join(', ');
  var menuString = `The $(Menu.name) has ${loopString} available`
  return menuString
};


//  -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-
// Restaurant constructor and prototype
//  -==-=--=-=-=-=-=-=-=--==-=--==-=-=-=-=-

var Restaurant = function(name, description, menu){
  this.name = name;
  this.description = description;
  this.menu = menu;
}

// ingredients
var bacon = new FoodItem('bacon', 100, false, true);
var bun = new FoodItem('bun', 50, true, false);
var glutenFreeBun = new FoodItem('gluten free bun', 50, true, true);
var beefBurger = new FoodItem('beef burger', 150, false, true);
var veggieBurger = new FoodItem(' veggie burger', 100, true, true);
var ltop = new FoodItem('lettuce, tomato, onion, and pickle', 5, true, true);
var avocado = new FoodItem('avocado', 40, true, true);
var egg = new FoodItem('over-easy egg', 60, false, true);
var bbqSauce = new FoodItem('bbq sauce', 20, true, true);
var onionRing = new FoodItem('onion rings', 30, true, false);
var blueChz = new FoodItem('blue cheese', 20, false, true);
var swissChz = new FoodItem('swiss cheese', 20, false, true);
var americanChz = new FoodItem('american cheese', 20, false, true);
var shrooms = new FoodItem('mushrooms', 5, true, true);
var carmo = new FoodItem('caramelized onions', 5, true, true);
var greens = new FoodItem('baby greens', 2, true, true);
var spinach = new FoodItem('fresh spinach', 2, true, true);
var feta = new FoodItem('feta cheese', 10, false, true);
var candy = new FoodItem('candy', 15, true, true);
var beets = new FoodItem('beets', 5, true, true);
var nuts = new FoodItem('candied walnut', 8, true, true);



// burgers
var swissBurger = new Plate("Mushroom Swiss Burger", "Beef Burger with swiss, mushroom, and caramelized onions", 10, [bun, beefBurger, swissChz, shrooms, carmo])
var veggieBurger = new Plate("Veggie Burger", "Vegetarian burger on a gluten free bun")
var footBurger = new Plate("Foot Feta-ish burger", "Comes with feta", 5.95, [bun, beefBurger, ltop, feta]);
var childBurger = new Plate("The Child Molester", "Comes with candy", 5.95, [bun, beefBurger, candy]);
var eggBurger = new Plate("Eggers can't be Cheesers", "With Fried Egg and Cheese", 5.95, [bun, beefBurger, egg, americanChz]);
var christmasBurger = new Plate("Fifth day of Christmas burger", "Comes with five golden rings of onion", 5.95, [bun, beefBurger, onionRing])
var beetBurger = new Plate("Beets of Burden", "Comes with Beets", 5.95, [bun, beefBurger, beets, blueChz]);

// salads
var simpleSalad = new Plate("Garden Salad", "Fresh salad with mixed baby greens, bacon, avocado, and blue cheese", 8, [greens, bacon, avocado, blueChz]);
var spinachSalad = new Plate("Spinach Salad", "Spinach salad with bacon, shrooms, feta, and candied walnuts", 9, [spinach, bacon, shrooms, feta, nuts]);


// menu's
var lunchMenu = new Menu("Lunch Menu", [swissBurger, simpleSalad, veggieBurger, spinachSalad]);
var bobsMenu = new Menu("Bob's Specials", [footBurger, childBurger, eggBurger, christmasBurger, beetBurger]);
// console.log(bobsMenu)

// Restaurant
var myPlace = new Restaurant("Bob's Burgers", "Okay fine, but I am going to complain the whole time", [lunchMenu, bobsMenu]);


// console.log(myPlace)
// console.log(swissBurger)

// console.log(swissBurger.stringify());
console.log(lunchMenu.stringify());
