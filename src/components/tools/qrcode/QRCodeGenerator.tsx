
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Skeleton } from "@/components/ui/skeleton";

const QRCodeGenerator = () => {
  const [businessName, setBusinessName] = useState("");
  const [placeId, setPlaceId] = useState("");
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleBusinessNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessName(e.target.value);
  };

  const handlePlaceIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlaceId(e.target.value);
  };

  const generateQRCode = () => {
    if (!placeId) {
      toast.error("Please enter your Google Place ID");
      return;
    }

    setIsLoading(true);
    
    // Create the review URL
    const reviewUrl = `https://search.google.com/local/writereview?placeid=${placeId}`;
    
    // Generate QR code using Google Charts API
    const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(
      reviewUrl
    )}&chs=300x300&chco=000000&chf=bg,s,FFFFFF`;
    
    // Simulate loading
    setTimeout(() => {
      setQrCodeUrl(qrUrl);
      setIsLoading(false);
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
    <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 border-r border-gray-100">
          <h2 className="text-xl font-semibold mb-4">Generate Your Review QR Code</h2>
          
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
              />
            </div>
            
            <div>
              <label htmlFor="placeId" className="block text-sm font-medium text-gray-700 mb-1">
                Google Place ID <span className="text-red-500">*</span>
              </label>
              <Input
                id="placeId"
                placeholder="e.g., ChIJN1t_tDeuEmsRUsoyG83frY4"
                value={placeId}
                onChange={handlePlaceIdChange}
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Find your Place ID at{" "}
                <a
                  href="https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Google's Place ID Finder
                </a>
              </p>
            </div>
            
            <Button
              onClick={generateQRCode}
              className="w-full bg-primary-600 hover:bg-primary-700"
              disabled={isLoading}
            >
              {isLoading ? "Generating..." : "Generate QR Code"}
            </Button>
          </div>
        </div>

        <div className="p-6 flex flex-col items-center justify-center" ref={qrRef}>
          <h3 className="text-lg font-medium mb-4 text-center">Your Review QR Code</h3>
          
          <div className="border border-gray-200 rounded-lg p-4 w-[250px] h-[250px] flex items-center justify-center mb-4">
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
              className="mt-2"
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
