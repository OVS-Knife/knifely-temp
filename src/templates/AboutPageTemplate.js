import React from "react"
import Header from "../components/Header"
import Content from "../components/Content"
import { Container, SectionHeading } from "../components/Sections"
import Image from "../components/Image"

function AboutPageTemplate({ heading, subheading, html, team }) {
  return (
    <>
      <Header heading={heading} subheading={subheading} />
      <Content html={html} />
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {team.map((member, idx) => {
              return (
                <div key={idx}>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </>
  )
}

export default AboutPageTemplate
