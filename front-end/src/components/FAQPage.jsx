import React from 'react';
import FAQSection from './FAQSection';
import FAQItem from './FAQItem';
import Header from './Header';
import Footer from './Footer';
import ContactForm from './formulario';


function FAQPage() {
  return (
    <div className="faq-page">
      <Header />
      <FAQSection />
      <FAQItem />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default FAQPage;
