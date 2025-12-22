'use client'

import AccountDetails from "../../components/landing/AccountDetails";
import ContactForm from "../../components/landing/ContactForms";
import Customers from "../../components/landing/Customers";
import Features from "../../components/landing/Features";
import FloatingChat from "../../components/landing/FloatingChat";
import Hero from "../../components/landing/Hero";
import Testimonials from "../../components/landing/Testimonials";
  
export default function LandingPage() {

  return (
    <>
      <Hero />
      <AccountDetails />
      <Features />
      <Customers />
      <Testimonials />
      <ContactForm />
      <FloatingChat />
    </>
  );
}
