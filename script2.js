const items = [
    {
        name: 'Bike',
        price: 750,
    },
    {
        name: 'TV',
        price: 200,
    },
    {
        name: 'Album',
        price: 12,
    },
    {
        name: 'Book',
        price: 20,
    },
    {
        name: 'Pen',
        price: 5,
    },
    {
        name: 'Laptop',
        price: 250,
    },
    {
        name: 'Phone',
        price: 150,
    },
    {
        name: 'Bedsheets',
        price: 25
    }
]

const filteredItems = items.filter(item => {
    return item.price >= 100
})

const itemName = items.map(item => {
    return item.price
})

const foundItem = items.find(item => {
    return item.name === 'Phone'
})

const hasInexpensiveItems = items.some(item => item.price < 50);
const total = items.reduce((currentPrice, item) => {
    return currentPrice+= item.price
  }, 0) 

const hasPrice = items.every(item => item.price)
console.log(filteredItems);
console.log(itemName);
console.log(foundItem.price);
console.log(hasInexpensiveItems);
console.log("has price: " + hasPrice);
console.log("Total: " + total);