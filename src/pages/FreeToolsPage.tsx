import React from "react";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import WhatsAppLinkGeneratorPage from "@/components/tools/whatsapp/WhatsAppLinkGeneratorPage";
import GoogleReviewsQRGeneratorPage from "@/components/tools/qrcode/GoogleReviewsQRGeneratorPage";
import EmailSignatureGeneratorPage from "@/components/tools/email/EmailSignatureGeneratorPage";
const FreeToolsPage = () => {
  return <main className="pt-20">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-red-600">Marketing Tools</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
          Boost your marketing efforts with our collection of free, powerful tools designed to help your business grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-red-100">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-red-600">WhatsApp Link Generator</h2>
              <p className="text-gray-600 mb-4">
                Create custom WhatsApp links with pre-filled messages for easy customer communication.
              </p>
              <Link to="/free-tools/whatsapp-link-generator">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Open Tool
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-red-100">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-red-600">Google Reviews QR Code</h2>
              <p className="text-gray-600 mb-4">
                Generate QR codes that direct customers to leave Google reviews for your business.
              </p>
              <Link to="/free-tools/google-reviews-qr">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Open Tool
                </Button>
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-red-100">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-red-600">Email Signature Generator</h2>
              <p className="text-gray-600 mb-4">
                Create professional email signatures that leave a lasting impression on your recipients.
              </p>
              <Link to="/free-tools/email-signature">
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Open Tool
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="whatsapp-link-generator" element={<WhatsAppLinkGeneratorPage />} />
        <Route path="google-reviews-qr" element={<GoogleReviewsQRGeneratorPage />} />
        <Route path="email-signature" element={<EmailSignatureGeneratorPage />} />
        <Route path="/" element={<></>} />
      </Routes>
    </main>;
};
export default FreeToolsPage;