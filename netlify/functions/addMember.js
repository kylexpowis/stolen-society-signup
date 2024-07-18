const fetch = require('node-fetch');

exports.handler = async function (event) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const { email } = JSON.parse(event.body);
  const API_KEY = process.env.VITE_MAILCHIMP_API_KEY;
  const LIST_ID = process.env.VITE_MAILCHIMP_LIST_ID;
  const REGION = process.env.VITE_MAILCHIMP_REGION;

  const url = `https://${REGION}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
