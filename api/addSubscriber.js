import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post(
      "https://us22.api.mailchimp.com/3.0/lists/2d92e6abf1D/members",
      {
        email_address: req.body.email,
        status: "subscribed",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(
            `apikey:${process.env.MAILCHIMP_API_KEY}`
          ).toString("base64")}`,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
}
