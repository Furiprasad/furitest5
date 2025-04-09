
import React from "react";

const ContactMap = () => {
  return (
    <section className="section-padding bg-gray-50">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03605924656!2d-74.25987368715491!3d40.69767006766623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1650274783975!5m2!1sen!2sin" 
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
