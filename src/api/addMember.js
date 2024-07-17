export const addMember = async (email) => {
  try {
    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Server error:', errorData);
      throw new Error(errorData.error || 'Something went wrong');
    }

    return await response.json();
  } catch (error) {
    console.error('Error adding member:', error);
    throw error;
  }
};

