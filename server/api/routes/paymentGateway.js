const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('your_stripe_secret_key'); // Replace with your Stripe secret key
const app = express();

app.use(bodyParser.json());

const LOCAL_DOMAIN = "http://localhost:5173";

// Create Checkout Session
app.get('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${LOCAL_DOMAIN}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${LOCAL_DOMAIN}/payment/cancel`,
    });

    res.redirect(303, session.url);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Payment Success
app.get('/payment/success', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    const email = session.customer_details.email;
    const status = session.payment_status;

    res.json({ message: 'Payment success', email: email, status: status });
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// Payment Cancel
app.get('/payment/cancel', (req, res) => {
  res.json({ message: 'Payment canceled' });
});

// Webhook
const endpointSecret = 'whsec_836640342177dac3c5ad49e3de212244deb6f90a7c669b7abb436f5a2ff5f8f4'; // Replace with your endpoint secret

app.post('/webhook', bodyParser.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`⚠️  Webhook signature verification failed.`, err.message);
    return res.sendStatus(400);
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object;
      console.log('PaymentIntent was successful!', paymentIntent);
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});