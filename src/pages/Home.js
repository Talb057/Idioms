import { Box, Typography, Button } from "@mui/material";
import Navbar from "../Navbar";
import { useIsMobile } from "../components/utils/isMobile";
import { Link } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Home() {
  const isMobile = useIsMobile();
  return (
    <>
      <Box className="body-box home">
        <Navbar />
        <Box className="main-container">
          <Box className="main-container-center">
            <Box className="center-text">
              <h1>
                We have developed the best methods for language learning
              </h1>
            </Box>
            <Box className="center-buttons">
              <Link to="/TRIAL" className="tRIAL-button">
                <Box class="btn btn-book">
                  <span>FREE TRIAL</span>
                </Box>
              </Link>
              <a href="#languages" className="languages-button">
                <Box class="btn btn-languages">
                  <span> LANGUAGES </span>
                </Box>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="languages" id="languages">
        <Box className="languages-title">
          <h1>Languages</h1>
        </Box>
        <Box className="languages-cards">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="card d-flex mx-auto">
                  <div className="card-image">
                    <img
                      class="img-fluid d-flex mx-auto"
                      src= "./images/library.jpg"// 
                      className="test-profile"
                    ></img>
                  </div>
                  <div className="card-text">
                    <div className="card-title">Japanese</div>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Nam quam
                    nunc, blandit vel, luctus pulvinar
                  </div>
                  <div className="footer">
                    <span id="name">Get Started</span>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card d-flex mx-auto">
                  <div className="card-image">
                    <img
                      class="img-fluid d-flex mx-auto"
                      src="./images/italy.jpg"
                      className="test-profile"
                    ></img>
                  </div>
                  <div className="card-text">
                    <div className="card-title">Italian</div>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Nam quam
                    nunc, blandit vel, luctus pulvinar
                  </div>
                  <div className="footer">
                    <span id="name">Get Started</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box className="body-box center">
        <Box className="About">
          <h1>About Me</h1>
        </Box>
        <div class="bg-white pt-16 lg:py-24">
          <div class="pb-16 bg-gold-100 lg:pb-0 lg:z-10 lg:relative">
            <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
              <div class="relative lg:-my-8">
                <div
                  aria-hidden="true"
                  class="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"
                ></div>
                <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                  <div class="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                    <img
                      class="object-cover lg:h-full lg:w-full"
                      alt=""
                    ></img>
                  </div>
                </div>
              </div>
              <div class="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                <div class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                  <blockquote>
                    <div>
                      <svg
                        class="h-12 w-12 text-white opacity-25"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p class="mt-6 text-xl font-medium text-white">
                      At Idioms, we believe that learning a new language is an exhilarating adventure that opens doors to new cultures, 
                      connections, and opportunities. Our mission is to empower language learners of all levels, from beginners to advanced speakers,
                      by providing a comprehensive and immersive language learning experience.
                      We understand that each individual has unique goals, learning styles, and preferences. That's why we offer a diverse range of resources,
                       tools, and interactive lessons to cater to your specific needs. Whether you're aiming to enhance your language skills for personal growth, academic pursuits, or professional development, we have you covered. Our team of experienced linguists, language enthusiasts, and dedicated educators have meticulously designed our curriculum to ensure a seamless and enjoyable learning process. We leverage the latest advancements in technology to offer an interactive platform that engages and motivates learners at every step.
                      </p>
                    </div>
                    <footer class="mt-6">
                      <p class="text-base font-medium text-white">
                        IDIOMS
                      </p>
                      <p class="text-base font-medium text-indigo-100">
                        LANGUAGES MADE EASIER
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
}

export default Home;
