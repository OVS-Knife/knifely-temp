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
    </>
  )
}

export default AboutPageTemplate
