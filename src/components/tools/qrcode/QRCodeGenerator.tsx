
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const QRCodeGenerator = () => {
  const [businessName, setBusinessName] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.target.value);
  };

  const handleMapLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMapLink(e.target.value);
  };

  const generateQRCode = () => {
    if (!mapLink) {
      toast.error("Please enter your Google Maps Link");
      return;
    }

    if (!mapLink.includes("maps.google.com") && !mapLink.includes("goo.gl/maps")) {
      toast.warning("Please enter a valid Google Maps link");
    }

    setIsLoading(true);
    
    // Create a review URL from the map link
    // We're using the map link directly as the QR code content
    const reviewUrl = mapLink;
    
    // Generate QR code using Google Charts API
    const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(
      reviewUrl
    )}&chs=300x300&chco=000000&chf=bg,s,FFFFFF`;
    
    // Simulate loading
    setTimeout(() => {
      setQrCodeUrl(qrUrl);
      setIsLoading(false);
      toast.success("QR code generated successfully!");
    }, 800);
  };

  const downloadQRCode = () => {
    if (!qrCodeUrl) {
      toast.error("Please generate a QR code first");
      return;
    }

    const link = document.createElement("a");
    link.href = qrCodeUrl;
    link.download = `${businessName || "google-review"}-qr-code.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("QR code downloaded successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden border border-red-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 border-r border-red-100">
          <h2 className="text-xl font-semibold mb-4 text-red-600">Generate Your Review QR Code</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <Input
                id="businessName"
                placeholder="Your Business Name"
                value={businessName}
                onChange={handleBusinessNameChange}
                className="border-red-200 focus:border-red-400 focus:ring-red-400"
              />
            </div>
            
            <div>
              <label htmlFor="mapLink" className="block text-sm font-medium text-gray-700 mb-1">
                Google Maps Link <span className="text-red-500">*</span>
              </label>
              <Input
                id="mapLink"
                placeholder="e.g., https://goo.gl/maps/xyz123"
                value={mapLink}
                onChange={handleMapLinkChange}
                required
                className="border-red-200 focus:border-red-400 focus:ring-red-400"
              />
              <p className="text-xs text-gray-500 mt-1">
                Paste your Google Maps link here. You can get this by searching for your business on Google Maps and clicking "Share".
              </p>
            </div>
            
            <Button
              onClick={generateQRCode}
              className="w-full bg-red-600 hover:bg-red-700"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate QR Code"}
            </Button>
          </div>
        </div>

        <div className="p-6 flex flex-col items-center justify-center" ref={qrRef}>
          <h3 className="text-lg font-medium mb-4 text-center text-red-600">Your Review QR Code</h3>
          
          <div className="border border-red-200 rounded-lg p-4 w-[250px] h-[250px] flex items-center justify-center mb-4">
            {isLoading ? (
              <Skeleton className="w-[200px] h-[200px]" />
            ) : qrCodeUrl ? (
              <img src={qrCodeUrl} alt="QR Code" className="max-w-full" />
            ) : (
              <div className="text-gray-400 text-center text-sm">
                Fill in the form and generate your QR code
              </div>
            )}
          </div>
          
          {qrCodeUrl && (
            <Button
              onClick={downloadQRCode}
              variant="outline"
              className="mt-2 border-red-200 text-red-600 hover:bg-red-50"
            >
              Download QR Code
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
