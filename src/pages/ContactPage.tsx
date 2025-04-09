
import React from "react";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";

const ContactPage = () => {
  return (
    <main>
      <ContactHeader />
      <ContactForm />
      <ContactMap />
    </main>
  );
};

export default ContactPage;
