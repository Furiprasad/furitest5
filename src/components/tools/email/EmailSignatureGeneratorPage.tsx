
import React from "react";
import EmailSignatureGenerator from "./EmailSignatureGenerator";

const EmailSignatureGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-red-50">
      <div className="w-full max-w-5xl pt-10 pb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-red-600">
          Email Signature Generator
        </h1>
        <p className="text-center text-muted-foreground mt-2">
          Create a professional email signature in seconds
        </p>
      </div>
      
      <main className="w-full max-w-5xl flex-grow px-4 pb-12">
        <EmailSignatureGenerator />
      </main>
    </div>
  );
};

export default EmailSignatureGeneratorPage;
