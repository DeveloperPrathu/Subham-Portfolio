import { useForm, ValidationError } from "@formspree/react";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="pt-32 container" id="Contact">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl" data-aos="zoom-in-up">
            Get in touch
          </h2>
          <p className="text-gray-600 text-[18px] pt-2" data-aos="zoom-in-up">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>

          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <AiOutlineMail size={30} /> subham@gmail.com
          </div>
          <div className="flex gap-3 items-center" data-aos="zoom-in-up">
            <BsTelephone size={30} /> +91 9540142600
          </div>
        </div>

        <form action="https://formspree.io/f/xbjvdzbg" method="POST">
          <div className="space-y-8">
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="h-[40px] bg-transparent border border-accent"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="h-[40px] bg-transparent border border-accent"
                id="email"
                name="email"
              />
            </div>
            <div className="flex flex-col gap-1" data-aos="zoom-in-up">
              <label htmlFor="msg">Message</label>
              <textarea
                className="bg-transparent border border-accent"
                id="msg"
                rows={8}
                name="message"
              ></textarea>
            </div>

            <button
              className="bg-accent p-2 px-6"
              data-aos="zoom-in-up"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
