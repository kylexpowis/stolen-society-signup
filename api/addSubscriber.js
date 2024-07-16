export const addMember = async (email) => {
  const response = await fetch('/api/mailchimp/members', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${import.meta.env.VITE_MAILCHIMP_API_KEY}`, 
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Failed to add member');

  try {
    const response = await fetch(
      `https://stolensociety-mailchimp-server-7v8m-di8k5amg2.vercel.app/api/addSubscriber`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        email_address: email,
        status: "subscribed",
      },
      {
        headers: {
          Authorization: `Basic ${API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error(error);

  }

  return await response.json();
};
