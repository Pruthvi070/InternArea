import React from "react";
import Chatbot from "../chatbot/chatbot";

function Footer() {
  return (
    <div>
      <footer className="bg-gray-800 text-white">
        <div className="container px-6 py-12 mx-auto">
          {/* Grid structure for responsiveness */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
            {/* Internship by places */}
            <div>
              <h3 className="text-base font-bold">Internship by places</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                {[
                  "New York",
                  "Los Angeles",
                  "Chicago",
                  "San Francisco",
                  "Miami",
                  "Seattle",
                ].map((place) => (
                  <p
                    key={place}
                    className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                  >
                    {place}
                  </p>
                ))}
              </div>
            </div>

            {/* Internship by stream */}
            <div>
              <h3 className="text-base font-bold">Internship by stream</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                {[
                  "About us",
                  "Careers",
                  "Press",
                  "News",
                  "Media kit",
                  "Contact",
                ].map((stream) => (
                  <p
                    key={stream}
                    className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                  >
                    {stream}
                  </p>
                ))}
              </div>
            </div>

            {/* Job Places */}
            <div>
              <h3 className="text-base font-bold">Job Places</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                {[
                  "Blog",
                  "Newsletter",
                  "Events",
                  "Help center",
                  "Tutorials",
                  "Supports",
                ].map((job) => (
                  <a
                    key={job}
                    href="/"
                    className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                  >
                    {job}
                  </a>
                ))}
              </div>
            </div>

            {/* Jobs by streams */}
            <div>
              <h3 className="text-base font-bold">Jobs by streams</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                {[
                  "Startups",
                  "Enterprise",
                  "Government",
                  "Saas",
                  "Marketplaces",
                  "Ecommerce",
                ].map((jobStream) => (
                  <a
                    key={jobStream}
                    href="/"
                    className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                  >
                    {jobStream}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          {/* Bottom section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {/* About us */}
            <div>
              <h3 className="text-base font-bold">About us</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                {["Startups", "Enterprise"].map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Team diary */}
            <div>
              <h3 className="text-base font-bold">Team diary</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                {["Startups", "Enterprise"].map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Terms and conditions */}
            <div>
              <h3 className="text-base font-bold">Terms and conditions</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                {["Startups", "Enterprise"].map((item) => (
                  <a
                    key={item}
                    href="/"
                    className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Sitemap */}
            <div>
              <h3 className="text-base font-bold">Sitemap</h3>
              <div className="flex flex-col items-start mt-4 space-y-3">
                <a
                  href="/"
                  className="transition-colors duration-200 hover:underline hover:text-blue-600 text-sm md:text-base"
                >
                  Startups
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between mt-8 space-y-4 sm:flex-row sm:space-y-0">
            {/* App Link */}
            <p className="flex items-center space-x-2 text-sm md:text-base">
              <i className="bi bi-google-play text-lg"></i>
              <span>Get Android App</span>
            </p>

            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <i className="fab fa-facebook text-lg md:text-xl"></i>
              <i className="fab fa-twitter text-lg md:text-xl"></i>
              <i className="fab fa-instagram text-lg md:text-xl"></i>
            </div>

            {/* Footer Text */}
            <p className="text-sm md:text-base text-center sm:text-right">
              © Copyright 2023. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}

export default Footer;
