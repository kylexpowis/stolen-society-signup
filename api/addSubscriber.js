import axios from "axios";

export const addMember = async (email) => {
  const API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;
  const LIST_ID = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = import.meta.env.VITE_MAILCHIMP_API_SERVER;

  try {
    const response = await axios.post(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        email_address: email,
        status: "subscribed",
      },
      {
        headers: {
          Authorization: `Basic ${API_KEY}`,
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      }
      //   console.log(response)
    );
  } catch (error) {
    console.error(error);
  }
};
