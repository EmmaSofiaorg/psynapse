import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvxyz", 10);

const API_URL = "https://apitest.vipps.no";

const SITE_URL = "https://psynapse.no";

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const subscription_key = process.env.SUBSCRIPTION_KEY;
const merchant_serialnumber = process.env.MERCHANT_SERIALNUMBER;

async function getToken() {
  return fetch(`${API_URL}/accesstoken/get`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      client_id,
      client_secret,
      "Ocp-Apim-Subscription-Key": subscription_key,
    },
    method: "POST",
  }).then((response) => response.json());
}

export default async function handler(req, res) {
  const { amount } = req.body;

  const { access_token } = await getToken();

  const paymentDetails = await fetch(`${API_URL}/ecomm/v2/payments`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${access_token}`,
      "Vipps-System-Name": "psynapse",
      "Vipps-System-Version": "1.0",
      "Merchant-Serial-Number": merchant_serialnumber,
      "Ocp-Apim-Subscription-Key": "878ea4a3561f4ca19a48c8c318b8eb95",
    },
    method: "POST",
    body: JSON.stringify({
      customerInfo: {
        mobileNumber: null,
      },
      merchantInfo: {
        authToken: access_token,
        callbackPrefix: `${SITE_URL}/vipps/callbacks-for-payment-updates`,
        consentRemovalPrefix: `${SITE_URL}/vipps`,
        fallBack: `${SITE_URL}/vipps/fallback-order-result-page/order123abc`,
        isApp: false,
        merchantSerialNumber: merchant_serialnumber,
        paymentType: "eComm Regular Payment",
      },
      transaction: {
        amount: amount ? amount * 100 : 20000,
        orderId: nanoid(),
        timeStamp: new Date(),
        transactionText: "Donation",
        skipLandingPage: false,
        scope: "name address email",
        useExplicitCheckoutFlow: true,
      },
    }),
  }).then((response) => response.json());

  res.end(JSON.stringify(paymentDetails));
}
