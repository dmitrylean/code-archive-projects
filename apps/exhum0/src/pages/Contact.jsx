import React, { useEffect } from "react";
import ContactSection from "../components/ContactSection";

function Contact() {
  useEffect(() => {
    document.title = "exhum0 | Contact";
  }, []);

  return (
    <ContactSection />
  );
}

export default Contact;