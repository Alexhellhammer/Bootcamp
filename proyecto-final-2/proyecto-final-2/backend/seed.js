const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  productType: String,
  quantity: Number,
  price: Number,
  latitude: Number,
  longitude: Number
}));

const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  firstname: String,
  lastname: String,
  phone: String,
  status: Boolean,
  password: String
}));

const seedDatabase = async () => {
  await Product.deleteMany({});
  await User.deleteMany({});

  await Product.insertMany([
    {
      name: "Producto 1",
      productType: "Tipo 1",
      quantity: 10,
      price: 100,
      latitude: 40.7128,
      longitude: -74.0060
    },
    {
      name: "Producto 2",
      productType: "Tipo 2",
      quantity: 5,
      price: 200,
      latitude: 34.0522,
      longitude: -118.2437
    }
  ]);

  await User.insertMany([
    {
      email: "user1@example.com",
      firstname: "User",
      lastname: "One",
      phone: "1234567890",
      status: true,
      password: "password1"
    },
    {
      email: "user2@example.com",
      firstname: "User",
      lastname: "Two",
      phone: "0987654321",
      status: false,
      password: "password2"
    }
  ]);

  console.log('Datos insertados correctamente');
  mongoose.connection.close();
};

seedDatabase().catch(err => console.log(err));
