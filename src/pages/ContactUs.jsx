import React from "react";
import ContactUsForm from "../components/form/ContactUsForm";
import LocationMap from "../components/component/LocationMap";

const ContactUs = () => {
  return (
    <>
      <div className="px-[12%] max-sm:px-2 py-20 flex max-sm:flex-col max-sm:items-center bg-gray-50   gap-x-5">
        <div className=" flex-1 max-sm:mx-auto">
          <h1 className="text-4xl font-semibold text-rose-400">
            We’d love to hear from you!
            <br />
            <span className="text-gray-500 text-xl">
              Let’s connect and make things happen. 👋
            </span>
          </h1>
          <div className="w-4/5 max-sm:w-full  ">
            <picture>
              <img
                src="/image-1.svg"
                alt=""
                className="w-full h-full object-center object-cover"
              />
            </picture>
          </div>

          {/* address  */}
          <Address />
        </div>
        <div className=" flex-1 p-2">
          <ContactUsForm />
        </div>
      </div>

      <div className="w-full h-96 ">
        <LocationMap />
      </div>
    </>
  );
};

export default ContactUs;

const Address = () => {
  const add = [
    {
      _id: 1,
      title: "TelePhone ( 10am - 12am )",
      value: "+91 00000 000000",
      icon: "telephone",
    },
    {
      _id: 1,
      title: "WhatsApp ( 10am - 12am",
      value: "91 00000 00000",
      icon: "whatsapp",
    },
    {
      _id: 1,
      title: "Email",
      value: "google.email@gmail.com",
      icon: "envelope",
    },
  ];
  return (
    <>
      <div className="flex-1">
        <div></div>
        <p className=" py-3 text-xl italic max-sm:text-lg font-semibold text-neutral-500">
          <i className="bi bi-geo-alt-fill mr-2 text-rose-500"></i>
          92, West Chowbhaga, Gulshan Colony, <br />
          Uttar Panchannogram, West Bengal - 700100
        </p>
        <ul className=" text-lg max-sm:text-sm px-3 py-1">
          {add?.map((item, idx) => (
            <>
              <li className="flex items-center gap-5 my-1">
                <i className={`bi bi-${item?.icon} text-2xl`}></i>
                <p>
                  <strong className="text-rose-400">{item?.title} </strong>
                  <span className="font-medium"></span>
                  <br />
                  {item?.value}
                </p>
              </li>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};
