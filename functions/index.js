/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len 
const stripe = require("stripe")("sk_test_51O1tvNSCZeiwYfAAX3mMzVwktR9HVNdNaM2NOzbyCUVGa4YCsu0jQVtQxDwWobFTGWst2HXxmrIL2jgSzZ7r8t8Y00VNXSmVdD");

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request recieved>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

exports.api = functions.https.onRequest(app);
