const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  product_id:  Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: String,
  features: [{
    feature: String,
    value: String,
  }],
  related: Array,
});

const styleSchema = new Schema({
  style_id: Number,
  name: String,
  original_price: String,
  sale_price: String,
  'default?': Boolean,
  photos: [{
    thumbnail_url: String,
    url: String,
  }],
});

const skuSchema = new Schema({
  sku_id: Number,
  product_id: Number,
  quantity: Number,
  size: String,
})