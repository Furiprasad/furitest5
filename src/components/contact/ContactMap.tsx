
import React from "react";

const ContactMap = () => {
  return (
    <section className="section-padding bg-gray-50" id="map">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Visit Our Office</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We'd love to meet you in person. Stop by our office to discuss your marketing needs.
          </p>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="aspect-video w-full h-full rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0657707833793!2d83.30976799999999!3d17.7415399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3943e78e23e907%3A0xddb7a1ef64b5f256!2sFuri%20Media%20Services!5e0!3m2!1sen!2sin!4v1744179498773!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Furi Media Services Office Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
