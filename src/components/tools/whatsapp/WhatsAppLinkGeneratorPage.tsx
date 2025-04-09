
import React, { useState } from 'react';
import WhatsAppLinkGenerator from './WhatsAppLinkGenerator';
import WhatsAppPreview from './WhatsAppPreview';

const WhatsAppLinkGeneratorPage = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handlePhoneChange = (value: string) => {
    setPhoneNumber(value);
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#25D366]/10 py-10">
      <div className="container px-4">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold text-[#075E54] mb-2">WhatsApp Link Generator</h1>
          <p className="text-gray-600">Create shareable WhatsApp links with custom messages</p>
        </header>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="w-full md:w-1/2 max-w-md">
            <WhatsAppLinkGenerator 
              onPhoneChange={handlePhoneChange} 
              onMessageChange={handleMessageChange} 
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <WhatsAppPreview phoneNumber={phoneNumber} message={message} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppLinkGeneratorPage;
