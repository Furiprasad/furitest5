
import React, { useEffect } from "react";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

const ContactPage = () => {
  useEffect(() => {
    // Add IDs to contact sections for direct linking
  }, []);

  return (
    <main>
      <ContactHeader />
      <ContactForm />
      <ContactMap />
    </main>
  );
};

export default ContactPage;
