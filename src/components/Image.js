import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import currentImage from "../../src/img/hero-image-mobile.png"

function Image({ image, alt, ...rest }) {
  if (!image) {
    // If image is not provided, use the fallback image
    return <img src={currentImage} {...rest} alt={alt} />;
  } else if (image && image.url) {
    // this is an image coming from Netlify CMS
    return <img src={image.url} {...rest} alt={alt} />;
  } else if (image && image.childImageSharp) {
    // this should be an image processed by gatsby-plugin-image
    const imageRef = getImage(image);
    return <GatsbyImage image={imageRef} alt={alt} {...rest} />;
  } else {
    // Handle any other case by returning null
    return <img src={currentImage} {...rest} alt={alt} />;
  }
}

export default Image
