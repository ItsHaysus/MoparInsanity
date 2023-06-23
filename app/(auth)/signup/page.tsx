"use client";

import Link from 'next/link'
import emailjs from 'emailjs-com'
import { useRef } from 'react';



export default function SignUp() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_b4qmiqc",
        "template_h9rzd14",
        form.current,
        "user_UHpNJFij8MtQD1aAfs38X"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...");
        }
      );
  };

  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Welcome. Please fill out fields below to apply.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
                  <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Instagram Username <span className="text-red-600">*</span></label>
                  <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center">
                I agree to be contacted by Mopar Insanity staff <Link href="#" className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out">Privacy Policy</Link>.
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button  type="submit" value="Send" className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Sign up</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

