import Stripe from 'stripe'
const stripe=new Stripe(process.env.SECRETSTRIPEKEY);

const createVenta=async(req,res)=>{
    return res.status(200).send("test ok createVenta")
}
//Admin controllers
const allVenta=async(req,res)=>{
    return res.status(200).send("test ok allVenta")    
}
const updateVenta=async(req,res)=>{
    return res.status(200).send("test ok updateVenta")    
}
const createSecreteIDClient=async(req,res)=>{
    const intent = // ... Fetch or create the PaymentIntent
    res.json({client_secret: intent.client_secret});
}
const checkout=async(req,res)=>{
    //const session=await stripe.Checkout.SessionsResource
}
export {createVenta,allVenta,updateVenta,checkout}