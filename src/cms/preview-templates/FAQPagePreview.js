import React from 'react'
import FAQPageTemplate from '../../templates/FAQPageTemplate'

const FAQPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <FAQPageTemplate
        heading={data.heading}
        subheading={data.subheading}
        image={getAsset(data.image)}
        faqs={data.faqs || []} 
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

export default FAQPagePreview
