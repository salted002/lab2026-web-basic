interface Item {
  name: string
  price: number
  quantity: number
}

const cart: Item[] = [
  { name: '기계식키보드', price: 1000000, quantity: 1 },
  { name: '헤드폰', price: 50000, quantity: 3 },
]

const names = cart.map((i) => i.name)

const cheap: Item[] = cart.filter((it) => it.price > 20000)
