import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="bg-gray-100">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="lg:flex">
          <div className="w-full -mx-4 sm:-mx-6 lg:-mx-8 lg:w-2/5">
            <div className="px-4 sm:px-6 lg:px-8">
              <Link className="flex items-center gap-1" to="/">
                <StaticImage
                  src="../img/urbangarden-icon.png"
                  alt="Knifely Logo"
                  layout="fixed"
                  width={300}
                  height={70}
                  backgroundColor="transparent"
                  placeholder="blurred"
                />
              </Link>

              <p className="max-w-md mt-2 text-gray-600 dark:text-gray-400"> Nobody likes cutting with a dull knife. 
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  About
                </h3>
                <Link
                  to="/about"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Company
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Blog
                </h3>
                <Link
                  to="/projects/2021-07-27-rooftop-gardens-with-view-of-syndey-skyline-1/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  How it works
                </Link>
                <Link
                  to="/projects/2021-07-27-new-entry-and-lobby-of-palace-district-hotel/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Benefits
                </Link>
                <Link
                  to="/projects/2021-07-27-new-entry-and-lobby-of-palace-district-hotel-1/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Longevity
                </Link>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Pricing
                </a>
                <a
                  href="/"
                  className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline"
                >
                  Packages
                </a>
              </div>

              <div>
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Contact
                </h3>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  (330) 617-5125
                </span>
                <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">
                  info@ovsknife.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

        <div>
          <p className="text-center text-gray-800 dark:text-white">
            © Knifely 2023 - All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
