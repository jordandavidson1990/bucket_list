use bucketListItems;
db.dropDatabase();

db.toDo.insertMany([
  {
    activity: 'Skydive',
    location: 'New Zealand',
    cost: 150
  },
  {
    activity: 'Bungee Jump',
    location: 'Queenstown',
    cost: 120
  },
  {
    activity: 'Have a Baby',
    location: 'Home',
    cost: 1500000
  },
  {
    activity: 'Get Married',
    location: 'Scotland',
    cost: 10000
  }
]);
