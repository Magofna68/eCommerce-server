
// Mens Nike Dunk High: price_1Lv4dkKFRYyirzJ3scXKuUNb
// Air Jordan 6 Retro Low: price_1Lv4fDKFRYyirzJ3zo5SjNBm
// Womens Winter Warmer Coat | Insulated Jacket: price_1Lv4gBKFRYyirzJ3uwBrj6C1

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51Lv4UmKFRYyirzJ3VCUlJect3Pyb1RNVSAaZTzoO0aC4HggEPYoaw6wSXzwZmgnqzBqu67sAXsiOgMtpJiRoUwDO00UMJSTZ2w');

const app = express();
app.use(cors());
app.use(express.static("public"));  //recommended by Stripe documentation
app.use(express.json());

// send POST request to /checkout Route
app.post('/checkout', async (req, res) => {

  console.log(req.body);
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
    // success_url: 'http://localhost:3000/success',
    // cancel_url: 'http://localhost:3000/cancel'
    success_url: 'https://magofna68.github.io/eCommerce-FrontEnd/success',
    cancel_url: 'https://magofna68.github.io/eCommerce-FrontEnd/cancel',
  });


  // Once session is created, going to send session to Front end via URL 
  res.send(JSON.stringify({
    url: session.url
  }));
});

app.listen(4000, () => console.log("Success: listening on port 4000"))
