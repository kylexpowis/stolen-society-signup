import axios from "axios";

export const addMember = async (email) => {
  const API_KEY = import.meta.env.VITE_MAILCHIMP_API_KEY;
  const LIST_ID = import.meta.env.VITE_MAILCHIMP_AUDIENCE_ID;
  const DATACENTER = import.meta.env.VITE_MAILCHIMP_API_SERVER;

  try {
    const response = await axios.post(
      `https://stolensociety-mailchimp-server-7v8m-di8k5amg2.vercel.app/api/addSubscriber`,
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
    );
  } catch (error) {
    console.error(error);
  }
};
