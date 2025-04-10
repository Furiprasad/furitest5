
import React from "react";
import QRCodeGenerator from "./QRCodeGenerator";

const GoogleReviewsQRGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-red-50 pb-16">      
      <div className="container py-8 flex-1">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-3">
            Google Reviews QR Code Generator
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create a custom QR code that encourages customers to leave a Google review.
            Perfect for businesses looking to boost their online reputation.
          </p>
        </div>
        
        <QRCodeGenerator />
        
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 7 7 17"/>
                  <path d="M7 7h10v10"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Generate</h3>
              <p className="text-sm text-muted-foreground">Enter your business name and Google Map Link to create a custom QR code</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" x2="12" y1="15" y2="3"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Download</h3>
              <p className="text-sm text-muted-foreground">Download your QR code in high resolution PNG format</p>
            </div>
            <div className="p-4">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                  <polyline points="14 2 14 8 20 8"/>
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Print & Display</h3>
              <p className="text-sm text-muted-foreground">Print and display your QR code to collect more reviews</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewsQRGeneratorPage;
