const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  productType: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true }
});

module.exports = mongoose.model('Product', productSchema);
