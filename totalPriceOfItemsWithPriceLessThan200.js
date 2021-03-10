const items = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   }
];

const totalPriceOfItemsWithPriceLessThan200 = items.filter(item => item.price <= 200)
    .map(item => item.price)
    .reduce((currentTotal, item) => {
        return item += currentTotal;
    }, 0);

console.log(totalPriceOfItemsWithPriceLessThan200);