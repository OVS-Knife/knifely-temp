import React from "react"
import { graphql } from "gatsby"
import MyHelmet from "../components/MyHelmet"
import FAQPageTemplate from "./FAQPageTemplate"

const FAQPage = ({ data }) => {
  const { frontmatter: fm } = data.markdownRemark
  const { edges: faqs } = data.allMarkdownRemark

  return (
    <>
      <MyHelmet title={fm.title} description={fm.subheading} />
      <FAQPageTemplate
        heading={fm.heading}
        subheading={fm.subheading}
        faqs={faqs}
      />
    </>
  )
}

export default FAQPage

export const faqPageQuery = graphql`
  query FaqPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        heading
        subheading
        team {
          name
          title
          image {
            childImageSharp {
              gatsbyImageData(
                width: 640
                placeholder: BLURRED
                aspectRatio: 1.5
                transformOptions: { fit: COVER, cropFocus: CENTER }
              )
            }
          }
        }
      }
    }
  }
`
