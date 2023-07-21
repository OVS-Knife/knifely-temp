import React from "react";
import Header from "../components/Header";
import { Container, SectionHeading } from "../components/Sections";
import Image from "../components/Image";

function FAQPageTemplate({ heading, subheading, faqs }) {
  return (
    <>
      <Header heading={heading} subheading={subheading} />

      <Container>
        <div className="max-w-3xl mx-auto mt-8">
          {faqs.map((faq, idx) => {
            return (
              <div key={idx} className="mb-6">
                <h2 className="text-xl font-bold mb-3">{faq.question}</h2>
                <p>{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}

export default FAQPageTemplate;
