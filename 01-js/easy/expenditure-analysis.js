/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
  
*/


const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  },
  {
    id: 2,
    timestamp: 1656259600000,
    price: 20,
    category: 'Food',
    itemName: 'Burger',
  },
  {
    id: 3,
    timestamp: 1656019200000,
    price: 15,
    category: 'Clothing',
    itemName: 'T-Shirt',
  },
  {
    id: 4,
    timestamp: 1656364800000,
    price: 30,
    category: 'Electronics',
    itemName: 'Headphones',
  },
  {
    id: 5,
    timestamp: 1656105600000,
    price: 25,
    category: 'Clothing',
    itemName: 'Jeans',
  },
];

function calculateTotalSpentByCategory(transactions) {
  let totalSpending = {}
  transactions.forEach(transaction => {
    if(totalSpending[transaction.category]){
      totalSpending[transaction.category] = totalSpending[transaction.category] + transaction.price 
    } else {
      totalSpending[transaction.category] = transaction.price
    }       
  });

  answer = []

  var keys = Object.keys(totalSpending)
  keys.forEach( key => {
    let category = key
    answer.push({
      category : category,
      totalSpent : totalSpending[category]
    })
  })

  return answer
}

calculateTotalSpentByCategory(transactions)

module.exports = calculateTotalSpentByCategory;
