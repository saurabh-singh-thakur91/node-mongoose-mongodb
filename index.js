const mongoose = require('mongoose');
const Dish = require('./models/dishes');

const url = 'mongodb://localhost:27017/confusion';
const connect = mongoose.connect(url);

connect.then((db) => {
  console.log('Connected to server');

  var newDish = Dish({
    name: 'Omlette',
    description: 'Just have it'
  });

  newDish.save()
  .then((dishRet) => {
    console.log('Saved dish: ', dishRet);

    return Dish.find({}).exec();
  })
  .then((dishesRet) => {
    console.log('All dishes in collection', dishesRet);

    return Dish.remove({});
  })
  .then(() => {
    return mongoose.connection.close();

  })
  .catch((err) => {
    console.log(err);
  });
});
