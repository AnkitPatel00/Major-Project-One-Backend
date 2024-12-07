const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const orderSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "clothusers" },
  address: { type: ObjectId, ref: "clothusersaddress" },
  cloths: [{ clothsId: { type: ObjectId, ref: "ClothStore" }, quantity: { type: Number }, size: { type: String } }],
  date: { type: String, default: new Date().toLocaleDateString() },
  priceDetails: {type: Object}
},{timestamps:true})



const OrderModel = mongoose.model('clothsorders', orderSchema)

module.exports = OrderModel
