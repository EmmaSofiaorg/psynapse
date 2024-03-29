import { customAlphabet } from "nanoid";
const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvxyz", 10);

const API_URL = process.env.VIPPS_API_URL;

const SITE_URL = "https://psynapse.no";

const client_id = process.env.VIPPS_CLIENT_ID;
const client_secret = process.env.VIPPS_CLIENT_SECRET;
const subscription_key = process.env.VIPPS_SUBSCRIPTION_KEY;
const merchant_serialnumber = process.env.VIPPS_MERCHANT_SERIALNUMBER;

function genereateAuthHeaders(access_token) {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${access_token}`,
    "Vipps-System-Name": "psynapse",
    "Vipps-System-Version": "1.0",
    "Merchant-Serial-Number": merchant_serialnumber,
    "Ocp-Apim-Subscription-Key": subscription_key,
  };
}

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

async function donateOnce({ amount }) {
  const { access_token } = await getToken();
  return fetch(`${API_URL}/ecomm/v2/payments`, {
    headers: genereateAuthHeaders(access_token),
    method: "POST",
    body: JSON.stringify({
      customerInfo: {
        mobileNumber: null,
      },
      merchantInfo: {
        authToken: access_token,
        callbackPrefix: `${SITE_URL}`,
        consentRemovalPrefix: `${SITE_URL}/vilkar`,
        fallBack: `${SITE_URL}/vipps/takk`,
        isApp: false,
        merchantSerialNumber: merchant_serialnumber,
        paymentType: "Regular Donation",
      },
      transaction: {
        amount: amount ? amount * 100 : 20000,
        orderId: nanoid(),
        timeStamp: new Date(),
        transactionText: "Donation",
        skipLandingPage: false,
        scope: "name email",
        useExplicitCheckoutFlow: false,
      },
    }),
  }).then((response) => response.json());
}

async function donateMonthly({ amount }) {
  const { access_token } = await getToken();

  return fetch(`${API_URL}/recurring/v2/agreements`, {
    headers: genereateAuthHeaders(access_token),
    method: "POST",
    body: JSON.stringify({
      initialCharge: {
        amount: amount ? amount * 100 : 20000,
        currency: "NOK",
        description: "Donasjon til Psynapse",
        transactionType: "DIRECT_CAPTURE",
        orderId: nanoid(),
      },
      currency: "NOK",
      customerPhoneNumber: null,
      interval: "MONTH",
      intervalCount: 1,
      isApp: false,
      merchantRedirectUrl: `${SITE_URL}`,
      merchantAgreementUrl: `${SITE_URL}/vipps/vilkar`,
      price: amount ? amount * 100 : 20000,
      productDescription: "Takk for støtten!",
      productName: "Fast donasjon til Psynapse",
      scope: "name email",
    }),
  }).then((response) => response.json());
}

export default async function handler(req, res) {
  const { amount, method } = req.body;

  console.log("tying  to call" + API_URL);

  if (method === "once") {
    donateOnce({ amount })
      .then((response) => {
        console.log(response);
        res.end(JSON.stringify({ url: response.url }));
      })
      .catch((e) => {
        console.log(e.message);
        const error = new Error();
        error.message = "Unable to fetch!";
        res.status(500).end(error.toString());
      });
  } else if (method === "monthly") {
    donateMonthly({ amount })
      .then((response) => {
        console.log(response);
        res.end(JSON.stringify({ url: response.vippsConfirmationUrl }));
      })
      .catch((e) => {
        console.log(e.message);
        const error = new Error();
        error.message = "Unable to fetch!";
        res.status(500).end(error.toString());
      });
  } else {
    const error = new Error();
    error.message = "Something wrong happened!";
    res.status(500).end(error.toString());
  }
}
