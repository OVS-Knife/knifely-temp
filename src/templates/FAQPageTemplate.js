import React from "react"
import Image from "../components/Image"
import Content from "../components/Content"
import { FAQHeader } from "../components/Header" // Assuming you might have a different header for FAQs
import { Container } from "../components/Sections"

function FAQPageTemplate({ title, faqs }) {
  return (
    <>
      <FAQHeader heading={title} />
      <Container className="text-center">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 className="faq-question">{faq.question}</h3>
            <Content html={faq.answer} className="faq-answer" />
            {/* Optionally, you can add an image for each FAQ if you have it */}
            {faq.image && <Image className="rounded-md" image={faq.image.image} alt={faq.image.alt || faq.question} />}
          </div>
        ))}
      </Container>
    </>
  )
}

export default FAQPageTemplate
