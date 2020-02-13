class Store {
  constructor (name, stock) {
    this.name = name
    this.stock = stock
    this.revenue = 0
  }

  processProductSale (name) {
    const prodId = this.stock.findIndex(item => item.name === name)
    if (this.stock[prodId].count === 0) {
      console.log('We are sold out of that item!')
    } else {
      this.stock[prodId].count--
      this.revenue += this.stock[prodId].price
    }
  }

  replenishStock (name, count) {
    const prodId = this.stock.findIndex(item => item.name === name)
    this.stock[prodId].count += count
  }

  printRevenue () {
    console.log(`The revenue so far is ${this.revenue}`)
  }

  welcome () {
    console.log(`Welcome to ${this.name}!`)
  }
}

module.exports = Store
