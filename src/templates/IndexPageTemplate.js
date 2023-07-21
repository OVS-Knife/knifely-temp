import React, { useState, useEffect } from 'react';
import { Link } from "gatsby"
import { SectionHeading, TextImageSplit } from "../components/Sections"
import { PrimaryButton, SecondaryButton } from "../components/Buttons"
import { Container, CardSet } from "../components/Sections"
import Image from "../components/Image"
import mobile from "../img/hero-image-mobile.png"
import debounce from 'lodash/debounce';

const IndexPageTemplate = ({
  heading,
  subheading,
  image,  // This is the desktop image.
  posts = [],
  about,
}) => {
  const [currentImage, setCurrentImage] = useState(image);
  
  useEffect(() => {
    const updateImage = debounce(() => {  // Debouncing the function
      if (window.innerWidth <= 942) {  // This is a common breakpoint for tablets/mobiles.
        setCurrentImage(mobile);
      } else {
        setCurrentImage(image);
      }
    }, 200);  // 200ms delay for debouncing

    // Set the image on initial load
    updateImage();
    
    // Add the event listener for window resize
    window.addEventListener('resize', updateImage);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', updateImage);
  }, [image, mobile]); 

  return (
    <div>
      {/* Header */}
      <div className="relative bg-blue-600 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pt-16 pb-8 bg-blue-600 sm:pt-20 sm:pb-10 md:pt-24 md:pb-12 lg:w-1/2 lg:pt-44 lg:pb-24 xl:pt-48 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-blue-600 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div className="relative z-20 mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-md mx-auto lg:max-w-lg lg:mx-0 lg:text-left">
                <h1 className="text-2xl font-bold text-white sm:text-3xl lg:text-5xl">
                  {heading}
                </h1>
                <p className="mt-2 text-blue-100 sm:mt-3 lg:mt-4 lg:text-xl">
                  {subheading}
                </p>
                <PrimaryButton to="/contact" className="mt-4 lg:mt-10 text-blue-100">
                  Contact us
                </PrimaryButton>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-48 w-full object-cover sm:h-64 md:h-80 lg:w-full lg:h-full"
            image={currentImage}
            alt="Knife Sharpening"
          />
        </div>
      </div>


      {/* Featured projects */}
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-baseline">
          <SectionHeading>Check out our Knife Sharpening Blog</SectionHeading>
          <Link className="text-blue-600 underline hover:text-blue-800 mt-2 sm:mt-0" to="/projects">
            View all
          </Link>
        </div>
        <div className="mt-6">
          <CardSet posts={posts} />
        </div>
      </Container>

      {/* About section */}
      <TextImageSplit image={about.image}>
        <SectionHeading>{about.heading}</SectionHeading>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          {about.description}
        </p>
        <SecondaryButton to={about.button.url} className="mt-4 lg:mt-8">
          {about.button.label}
        </SecondaryButton>
      </TextImageSplit>
    </div>
  )
}

export default IndexPageTemplate;
