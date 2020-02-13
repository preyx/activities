function DigitalPal () {
  this.hungry = false
  this.sleepy = false
  this.bored = true
  this.age = 0
  this.outside = false
  this.houseCondition = 100
  this.feed = function () {
    if (this.hungry) {
      console.log('That was yummy!')
      this.hungry = false
      this.sleepy = true
    } else {
      console.log('No thanks! I\'m full!')
    }
  }
  this.sleep = function () {
    if (this.sleepy) {
      console.log('Zzzzzzzz')
      this.sleepy = false
      this.increaseAge()
    } else {
      console.log('No way! I\'m not tired.')
    }
  }
  this.play = function () {
    if (this.bored) {
      console.log('Yay! Let\'s play!')
      this.bored = false
      this.hungry = true
    } else {
      console.log('Not right now. Later?')
    }
  }
  this.increaseAge = function () {
    console.log(`Happy Birthday to me! I am ${++this.age} old`)
  }
  this.bark = function () {
    console.log('Woof! Woof!')
  }
  this.goOutside = function () {
    if (this.outside) {
      console.log('We\'re already outside though...')
    } else {
      console.log('Yay! I love the outdoors!')
      this.outside = true
      this.bark()
    }
  }
  this.goInside = function () {
    if (this.outside) {
      console.log('Do we have to? Fine...')
      this.outside = false
    } else {
      console.log('I\'m already inside...')
    }
  }
  this.meow = function () {
    console.log('Meow! Meow!')
  }
  this.destroyFurniture = function () {
    if (this.houseCondition !== 0) {
      this.houseCondition -= 10
      console.log('MUAHAHAHAHAHAHA TAKE THAT FURNITURE!')
      this.bored = false
      this.sleepy = true
    }
  }
  this.buyNewFurniture = function () {
    this.houseCondition += 50
    console.log('Are you sure about that?')
  }
}

const dog = new DigitalPal()
const cat = new DigitalPal()
