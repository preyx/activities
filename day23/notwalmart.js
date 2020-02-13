// FUNCTIONAL CONSTRUCTOR

function Product (name, category, price, quantity) {
  this.name = name
  this.price = price
  this.quantity = quantity
  this.category = category
}

function Food (name, category, price, quantity, calories, fat, carbs, protein) {
  Product.call(this, name, category, price, quantity)
  this.calories = calories
  this.fat = fat
  this.carbs = carbs
  this.protein = protein
}

function Drink (name, category, price, quantity, calories, carbs, size) {
  Product.call(this, name, category, price, quantity)
  this.calories = calories
  this.carbs = carbs
  this.size = size
}

// FACTORY CONSTRUCTOR

const Product2 = (name, category, price, quantity) => ({
  name,
  price,
  quantity,
  category
})

const Food2 = (name, category, price, quantity, calories, fat, carbs, protein) => ({
  ...Product2(name, category, price, quantity),
  calories,
  fat,
  carbs,
  protein
})

const Drink2 = (name, category, price, quantity, calories, carbs, size) => ({
  ...Product2(name, category, price, quantity),
  calories,
  carbs,
  size
})

// CLASS CONSTRUCTOR

class Product3 {
  constructor (name, category, price, quantity) {
    this.name = name
    this.price = price
    this.quantity = quantity
    this.category = category
  }

  printStats () {
    console.log(this.name, this.category, this.quantity, this.price)
  }
}

class Food3 extends Product3 {
  constructor (name, category, price, quantity, calories, fat, carbs, protein) {
    super(name, category, price, quantity)
    this.calories = calories
    this.fat = fat
    this.carbs = carbs
    this.protein = protein
  }
}

class Drink3 extends Product3 {
  constructor (name, category, price, quantity, calories, carbs, size) {
    super(name, category, price, quantity)
    this.calories = calories
    this.carbs = carbs
    this.size = size
  }
}

class Game3 extends Product3 {
  constructor (name, category, price, quantity, genre, platform, rating) {
    super(name, category, price, quantity)
    this.genre = genre
    this.platform = platform
    this.rating = rating
  }
}

// pizza.calories = 1000

// const pizza = new Food('Frozen Pepperoni Pizza', 'food', 8.99, 1000, 1000, 50, 100, 12)
// const soda = new Drink('Coke Classic', 'drink', 2.99, 1000, 500, 50, '2L')

// const pizza2 = Product2('Frozen Pepperoni Pizza', 'food', 8.99, 1000)
// const pizza2 = Food2('Frozen Pepperoni Pizza', 'food', 8.99, 1000, 1000, 50, 100, 12)

// const pizza3 = new Product3('Frozen Pepperoni Pizza', 'food', 8.99, 1000)
const pizza3 = new Food3('Frozen Pepperoni Pizza', 'food', 8.99, 1000, 1000, 50, 100, 12)

console.log(pizza3)
