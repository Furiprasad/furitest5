
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface WhatsAppLinkGeneratorProps {
  onPhoneChange: (value: string) => void;
  onMessageChange: (value: string) => void;
}

const WhatsAppLinkGenerator = ({ onPhoneChange, onMessageChange }: WhatsAppLinkGeneratorProps) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [generatedLink, setGeneratedLink] = useState('');

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, '');
    setPhoneNumber(value);
    onPhoneChange(value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    onMessageChange(value);
  };

  const generateLink = () => {
    if (!phoneNumber) {
      toast.error("Please enter a phone number");
      return;
    }

    const encodedMessage = encodeURIComponent(message);
    const link = `https://wa.me/${phoneNumber}${encodedMessage ? `?text=${encodedMessage}` : ''}`;
    setGeneratedLink(link);
  };

  const copyToClipboard = () => {
    if (!generatedLink) {
      toast.error("Generate a link first");
      return;
    }

    navigator.clipboard.writeText(generatedLink)
      .then(() => {
        toast.success("Link copied to clipboard!");
      })
      .catch(() => {
        toast.error("Failed to copy link");
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-red-100">
      <h2 className="text-xl font-semibold mb-6 text-red-600">Create Your WhatsApp Link</h2>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number (with country code)
          </label>
          <Input
            id="phoneNumber"
            type="tel"
            placeholder="e.g., 917416992299"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="w-full border-red-200 focus:border-red-400 focus:ring-red-400"
          />
          <p className="text-xs text-gray-500 mt-1">Include country code without + or spaces (e.g., 917416992299)</p>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Pre-filled Message (optional)
          </label>
          <Textarea
            id="message"
            placeholder="Hello, I'd like to know more about your services."
            value={message}
            onChange={handleMessageChange}
            className="w-full h-32 border-red-200 focus:border-red-400 focus:ring-red-400"
          />
        </div>

        <Button 
          onClick={generateLink}
          className="w-full bg-red-600 hover:bg-red-700 text-white"
        >
          Generate Link
        </Button>

        {generatedLink && (
          <div className="mt-6 p-4 bg-red-50 rounded-md">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your WhatsApp Link:
            </label>
            <div className="flex">
              <Input
                readOnly
                value={generatedLink}
                className="flex-grow rounded-r-none border-red-200"
              />
              <Button 
                onClick={copyToClipboard}
                className="rounded-l-none bg-red-600 hover:bg-red-700"
              >
                Copy
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppLinkGenerator;
