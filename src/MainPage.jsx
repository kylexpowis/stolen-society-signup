import React from 'react';
import EmailForm from './EmailForm';

const MainPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-black text-white">
      <h1 className="text-4xl mb-8">Stolen Society</h1>
      <EmailForm />
    </div>
  );
};

export default MainPage;
