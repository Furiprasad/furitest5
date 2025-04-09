
import React from 'react';

interface WhatsAppPreviewProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppPreview = ({ phoneNumber, message }: WhatsAppPreviewProps) => {
  return (
    <div className="max-w-[280px] w-full">
      <div className="border-[8px] border-black rounded-[32px] relative bg-[#E5DDD5] overflow-hidden shadow-xl">
        {/* Phone Header */}
        <div className="bg-[#075E54] text-white px-4 py-3">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            
            <div className="ml-6 flex items-center">
              <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-[#075E54] font-bold">
                {phoneNumber ? phoneNumber.substring(0, 1) : "?"}
              </div>
              <div className="ml-2 truncate">
                {phoneNumber ? `+${phoneNumber}` : "Phone Number"}
              </div>
            </div>
          </div>
        </div>
        
        {/* Chat Interface */}
        <div className="h-[400px] px-3 py-2 overflow-y-auto relative bg-[url('https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png')] bg-repeat">
          {message && (
            <div className="max-w-[85%] bg-white rounded-lg p-2 my-1 ml-auto relative shadow">
              <div className="text-sm break-words">{message}</div>
              <div className="text-right text-xs text-gray-500 mt-1">
                {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                <span className="ml-1 text-[#34B7F1]">✓✓</span>
              </div>
              {/* Triangle */}
              <div className="absolute right-[-6px] top-0 w-3 h-3 overflow-hidden">
                <div className="absolute transform rotate-45 bg-white w-4 h-4 right-[-2px] top-[6px]"></div>
              </div>
            </div>
          )}
        </div>
        
        {/* Input Area */}
        <div className="bg-[#F0F0F0] px-2 py-2 flex items-center">
          <div className="bg-white rounded-full flex-grow flex items-center px-3 py-2">
            <span className="text-gray-500 truncate">
              {message ? message : "Type a message"}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#25D366] ml-2 flex items-center justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-4 text-sm text-gray-600">
        Preview how your message will appear
      </div>
    </div>
  );
};

export default WhatsAppPreview;
