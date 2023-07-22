"use client";

import Link from 'next/link'
import React, { useRef } from 'react';



export default function SignUp() {
  const form = useRef(null);
  
  const sendEmail = (e: React.ChangeEvent<HTMLFormElement>) => {

    e.preventDefault();
    const data = new FormData(e.target)

    const moparEmail = "moparinsanityrgv@gmail.com";
    const subject = "New Member Alert";
    const fullName = data.get('fullName');
    const email = data.get('email');
    const instagramTag = data.get('instagramTag');
    const body = "New user " +fullName+ " wants to join MI!, contact them at Instagram: "+instagramTag+" or email at "+email;

    window.open('mailto:"'+moparEmail+'"?subject='+subject+'&body='+body);

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
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="fullName">Full Name <span className="text-red-600">*</span></label>
                  <input name="fullName" id="fullName" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="instagramTag">Instagram Username <span className="text-red-600">*</span></label>
                  <input name="instagramTag" id="instagramTag" type="text" className="form-input w-full text-gray-300" placeholder="@instagramTag" required />
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

