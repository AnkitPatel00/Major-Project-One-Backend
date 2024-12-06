const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const orderSchema = new mongoose.Schema({
  user: { type: ObjectId, ref: "clothusers" },
  address: { type: ObjectId, ref: "clothusersaddress" },
  cloths: [{ clothId: { type: ObjectId, ref: "ClothStore" }, quantity: { type: Number }, size: { type: String } }],
  date: { type: Date, default: new Date().toDateString() },
  totalPrice: {type: Number}
},{timestamps:true})



const OrderModel = mongoose.model('clothsorders', orderSchema)

module.exports = OrderModel
