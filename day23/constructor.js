function Pet (raining, noise) {
  this.raining = raining
  this.noise = noise
  this.makeNoise = function () {
    if (this.raining) {
      console.log(this.noise)
    }
  }
}

const dog = new Pet(true, 'Woof!')
const cat = new Pet(false, 'Meow!')

function Person (name, email, address, phone) {
  this.name = name
  this.email = email
  this.address = address
  this.phone = phone
}

const student = new Person('John Doe', 'student@school.com', '123 Fake St', '555-1212')
const teacher = new Person('Jane Doe', 'teacher@school.com', '456 Fake St', '222-3334')
