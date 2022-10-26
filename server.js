
const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const domainUrl = "https://magofna68.github.io/eCommerce-FrontEnd";
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
    success_url: `${domainUrl}/success`,
    cancel_url: `${domainUrl}/cancel`,
  });


  // Once session is created, going to send session to Front end via URL 
  res.send(JSON.stringify({
    url: session.url
  }));
});

app.listen(4000, () => console.log("Success: listening on port 4000"))
