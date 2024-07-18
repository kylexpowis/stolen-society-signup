export const addMember = async (email) => {
  const response = await fetch('/.netlify/functions/addMember', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  return await response.json();
};
