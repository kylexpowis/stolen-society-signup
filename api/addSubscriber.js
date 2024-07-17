import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;

  const REGION = process.env.VITE_MAILCHIMP_REGION;
  const LIST_ID = process.env.VITE_MAILCHIMP_LIST_ID;
  const API_KEY = process.env.MAILCHIMP_API_KEY;

  if (!REGION || !LIST_ID || !API_KEY) {
    console.error('Missing Mailchimp environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const data = {
    email_address: email,
    status: 'subscribed',
  };

  try {
    const response = await fetch(`https://${REGION}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `apikey ${API_KEY}`,
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      res.status(200).json({ message: 'Subscription successful' });
    } else {
      const errorData = await response.json();
      console.error('Mailchimp API error:', errorData);
      res.status(response.status).json({ error: errorData });
    }
  } catch (error) {
    console.error('Request to Mailchimp failed:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
