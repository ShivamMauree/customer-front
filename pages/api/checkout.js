import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import {model, models} from "mongoose";
import {Order} from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method not allowed, POST request expected' });
        return;
    }

    const { name, email, city, zipcode, streetAddress, country, products } = req.body;

        await mongooseConnect();
        const productsIds = products.split(',');
        const uniqueIds = [...new Set(productsIds)];

        const productsInfos = await Product.find({ _id: { $in: uniqueIds } });

        let line_items = [];
        for (const productId of uniqueIds) {
            const productInfo = productsInfos.find(p => p._id.toString() === productId);
            const quantity = productsIds.filter(id => id === productId).length;
            if (quantity > 0 && productInfo) {
                line_items.push({
                    quantity,
                    price_data: {
                        currency: 'USD',
                        product_data: { name: productInfo.title },
                        unit_amount: productInfo.price * 100,
                    },
                });
            }
        }

        const orderDoc = await Order.create({
            line_items,name,email,city,zipcode,
            streetAddress,country,paid:false,
        });

        const stripeSession = await stripe.checkout.sessions.create({
            line_items,
            mode: 'payment',
            customer_email: email,
            success_url: process.env.PUBLIC_URL +'/cart?success=true',
            cancel_url: process.env.PUBLIC_URL +'/cart?canceled=true',
            metadata:{orderId:orderDoc._id.toString()}
        })

        res.json({
            url:stripeSession.url,
        })

}