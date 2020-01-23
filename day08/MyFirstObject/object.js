const laptop = {
  make: 'Apple',
  model: 'MacBook Pro',
  year: '2012',
  processor: 'Intel i7',
  storageGB: 500,
  storageFree: 400,
  storageType: 'SSD',
  batteryCycles: 200,
  takeToWork () {
    window.alert('Took laptop to work!')
    this.batteryCycles++
    this.storageFree--
    window.alert(`Battery cycles: ${this.batteryCycles}/nStorage remaining: ${this.storageFree}`)
  },
  replaceBattery () {
    window.alert(`Replaced battery! The old one had ${this.batteryCycles} cycles!`)
    this.batteryCycles = 0
  },
  replaceSSD () {
    window.alert(`Replaced with 500GB SSD! The old one had ${this.storageFree}GB free!`)
    this.storageGB = 500
    this.storageFree = 490
    this.storageType = 'SSD'
  },
  replaceHDD () {
    window.alert(`Replaced with 2TB HDD! The old one had ${this.storageFree}GB free!`)
    this.storageGB = 2000
    this.storageFree = 1990
    this.storageType = 'HDD'
  }
}
