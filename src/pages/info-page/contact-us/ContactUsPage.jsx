import React from "react";
import LocationMap from "../../../components/component/LocationMap";
import { ContactUsForm } from "../../../components/info-page/contact-us/ContactUsForm";
import { ContactInfo } from "../../../components/info-page/contact-us/ContactInfo";

const ContactUsPage = () => {
  return (
    <>
      <div className="px-[12%] max-sm:px-2 pt-5 pb-20  bg-gray-50   gap-x-5">
        <div className="text-center flex-1 max-sm:mx-auto ">
          <h1 className="text-4xl font-semibold text-rose-400 ">
            We’d love to hear from you!
            <br />
            <span className="text-gray-500 text-xl">
              Let’s connect and make things happen. 👋
            </span>
          </h1>
          <div className="w-3/5 max-sm:w-full mx-auto ">
            <picture>
              <img
                src="/image-1.svg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </picture>
          </div>
        </div>
        <div className=" flex max-md:flex-col p-2">
          <div className="flex-1">
            <ContactInfo />
          </div>
          <div className="flex-1">
            <ContactUsForm />
          </div>
        </div>
      </div>

      <div className="w-full h-80 ">
        <LocationMap />
      </div>
    </>
  );
};

export default ContactUsPage;
