// src/api/addSubscriber.js
export const addMember = async (email) => {
  const response = await fetch('/api/mailchimp', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email_address: email,
      status: 'subscribed',
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.detail || 'Failed to add member');
  }

  return await response.json();
};
