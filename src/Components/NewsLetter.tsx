import React from "react";

export default function NewsLetter() {
  return (
    <>
      <div id="newsletter" className=" my-10 text-center">
        <div className="mx-auto bg-peach py-10  ">
          <div className="mx-auto max-w-screen-md pt-5 sm:text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-darkGray dark:text-darkGray sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-2xl font-light text-darkGray dark:text-darkGray sm:text-xl md:mb-12">
              Stay up to date with all the fashion trends, new releases and
              exclusive discounts, feel free to sign up with your email.
            </p>
            <form action="#">
              <div className="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label className="mb-2 hidden text-sm font-medium text-darkGray dark:text-darkGray">
                    Email address
                  </label>
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-darkGray dark:text-darkGray"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block w-full rounded-lg border border-darkGray bg-gray-50 p-3 pl-10 text-sm text-darkGray outline-none focus:border-gray-400 focus:ring-gray-300 sm:rounded-none sm:rounded-l-lg"
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="font-darkGray w-full cursor-pointer rounded-lg border  border-btnMain bg-btnMain px-5 py-3 text-center text-sm text-white hover:bg-btnMain/95 focus:ring-4 focus:ring-peach sm:rounded-none sm:rounded-r-lg"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <div className="newsletter-form-footer mx-auto flex max-w-screen-sm flex-row justify-center gap-1 text-center text-sm text-gray-200 dark:text-gray-50">
                We care about the protection of your data.{" "}
                <span className="relative block w-fit after:absolute after:block after:h-[3px] after:w-full after:origin-left after:scale-x-0 after:bg-gray-50 after:transition after:duration-300 after:content-[''] after:hover:scale-x-100">
                  <a
                    href="#"
                    className="text-primary-600 dark:text-primary-500 text-center"
                  >
                    Read our Privacy Policy
                  </a>
                  .
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
