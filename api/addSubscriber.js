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

  return await response.json();
};
