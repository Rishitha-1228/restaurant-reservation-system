const Razorpay =
require("razorpay");

const razorpay =
new Razorpay({

 key_id:
 process.env.RAZORPAY_KEY_ID,

 key_secret:
 process.env.RAZORPAY_KEY_SECRET

});

exports.createOrder =
async(req,res)=>{

 const options = {

  amount: 50000,

  currency: "INR"

 };

 const order =
 await razorpay.orders.create(
  options
 );

 res.json(order);

};