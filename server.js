
const express = require('express');
var cors = require('cors');
// const Stripe = require('stripe');
const stripe = require('stripe')('sk_test_51Lv4UmKFRYyirzJ3VCUlJect3Pyb1RNVSAaZTzoO0aC4HggEPYoaw6wSXzwZmgnqzBqu67sAXsiOgMtpJiRoUwDO00UMJSTZ2w');

const domainUrl = "http://magofna68.github.io/eCommerce-FrontEnd/";
const app = express();
app.use(cors({
  // origin: 'https://e-commerce-backend.onrender.com',
  // origin: 'https://magofna68.github.io/eCommerce-FrontEnd',
  // origin: 'http://localhost:4000/checkout'
}));
app.use(express.static("public"));  //recommended by Stripe documentation
app.use(express.json());
// app.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// })


// send POST request to /checkout Route
app.post('/checkout', async (req, res) => {

// set ACAO so that any client can request resource
  // res.set('Access-Control-Allow-Origin', 'htpp://localhost:3000/');

  console.log("#Server.js", req.body);
  // items to send to POST request
  const items = req.body.items;

  // Format lineItems for data to sent to Stripe
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push(
      {
        price: item.id,
        quantity: item.quantity
      }
    )
  });

  // Awaits Stripe to create a checkout session with our object parameters 
  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: `${domainUrl}/#/success`,
    cancel_url: `${domainUrl}/#/cancel`,
    // cancel_url: 'http://localhost:3001/#/cancel',
    // success_url: 'http://localhost:3001/#/success',
  });


  // Once sessions is created, going to send session to Front end via URL 
  res.send(JSON.stringify({
    url: session.url
  }));
});

app.listen(4000, () => console.log("Success: listening on port 4000"))
