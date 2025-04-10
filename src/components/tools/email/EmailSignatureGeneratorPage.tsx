
import React from "react";
import EmailSignatureGenerator from "./EmailSignatureGenerator";

const EmailSignatureGeneratorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-b from-white to-gray-100">
      <div className="w-full max-w-5xl pt-10 pb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
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
