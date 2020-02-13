const dogs = {
  raining: true,
  noise: 'Woof!',
  makeNoise () {
    if (this.raining) console.log(this.noise)
  }
}

const cats = {
  raining: false,
  noise: 'Meow!',
  makeNoise () {
    if (this.raining) {
      console.log(this.noise)
    }
  }
}

dogs.makeNoise()
cats.makeNoise()

const massHysteria = (x, y) => {
  if (x.raining && y.raining) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!')
  }
}

massHysteria(dogs, cats)
