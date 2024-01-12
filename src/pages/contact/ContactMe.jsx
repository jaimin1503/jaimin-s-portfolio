import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import contact from "./assets/contact.svg";

const ContactMe = () => {
  const [state, handleSubmit] = useForm("mayrnnrj");

  if (state.succeeded) {
    return (
      <div className="bg-[#092635] flex justify-center">
        <h1 className="text-[#48b77a] text-3xl sm:text-5xl py-20">
          Your message sent!
        </h1>
      </div>
    );
  }

  return (
    <div id="contact" className="bg-[#092635]">
      <div className="heading flex justify-center items-center">
        <h1 className=" text-4xl md:text-5xl font-bold p-5 mb-10 text-center border-b-2 border-white max-w-xl text-white font-Montserrat">
          Say <span className=" text-purple-400">Hello</span> to Me!
        </h1>
      </div>
      <div className=" flex flex-col items-center md:flex-row md:justify-around py-10">
        <div className="image">
          <img className=" h-[40vh] lg:h-[60vh]" src={contact} alt="img" />
        </div>
        <div className="max-w-md pt-8 ">
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              type="name"
              name="name"
              className="mt-1 p-3 my-5 w-full border border-gray-300 rounded-md outline-none"
              placeholder="John Doe"
              required
            />
            <input
              id="email"
              type="email"
              name="email"
              className="mt-1 p-3 my-5 w-full border border-gray-300 rounded-md outline-none"
              placeholder="john@doe.com"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />

            <textarea
              id="message"
              name="message"
              className="mt-1 p-2 my-5 w-full border border-gray-300 rounded-md outline-none"
              defaultValue={"Hello Jaimin! 👋"}
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <button
              type="submit"
              disabled={state.submitting}
              className=" bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
