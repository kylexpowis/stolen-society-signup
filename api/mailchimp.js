import fetch from "node-fetch";

export default async function handler(req, res) {
  const { email } = req.body;

  const REGION = import.meta.env.VITE_MAILCHIMP_REGION;
  const LIST_ID = import.meta.env.VITE_MAILCHIMP_LIST_ID;
  const API_KEY = import.meta.env.MAILCHIMP_API_KEY;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const response = await fetch(
    `https://${REGION}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `apikey ${API_KEY}`,
      },
      body: JSON.stringify(data),
    }
  );

  if (response.ok) {
    res.status(200).json({ message: "Subscription successful" });
  } else {
    const errorData = await response.json();
    res.status(response.status).json({ error: errorData });
  }
}
