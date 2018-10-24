use bucketListItems;
db.dropDatabase();

db.toDo.insertMany([
  {
    activity: 'Skydive',
    location: 'New Zealand',
    cost: 150,
    date:"2018-06-01",
    completed: "Yes"
  },
  {
    activity: 'Bungee Jump',
    location: 'Queenstown',
    cost: 120,
    date:"2018-06-01",
    completed: "Yes"
  },
  {
    activity: 'Have a Baby',
    location: 'Home',
    cost: 1500000,
    date:"2022-08-01",
    completed: "No"
  },
  {
    activity: 'Get Married',
    location: 'Scotland',
    cost: 10000,
    date:"2021-07-01",
    completed: "No"
  },
  {
    activity: 'Run 100 miles in 24 Hours',
    location: 'Anywhere',
    cost: 100,
    date:"2020-10-29",
    completed: "No"
  },

]);
