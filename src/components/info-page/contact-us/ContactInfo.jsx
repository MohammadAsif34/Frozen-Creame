import React from "react";
import { basicInfo } from "../../../data/basicData";

export const ContactInfo = () => {
  const address = [
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
      <div>
        <div className="flex-1">
          <div></div>
          <p className=" py-3 text-xl italic max-sm:text-lg font-semibold text-neutral-500">
            <i className="bi bi-geo-alt-fill mr-2 text-rose-500"></i>
            92, West Chowbhaga, Gulshan Colony, <br />
            Uttar Panchannogram, West Bengal - 700100
          </p>
          <ul className=" text-lg max-sm:text-sm px-3 py-1">
            <li className="flex items-center gap-5 my-1">
              <i className={`bi bi-clock text-2xl`}></i>
              <p>
                <strong className="text-rose-400">Mon - Sun </strong>
                <span className="font-medium"></span>
                <br />
                {basicInfo?.open_time}
              </p>
            </li>
            <li className="flex items-center gap-5 my-1">
              <i className={`bi bi-telephone text-2xl`}></i>
              <p>
                <strong className="text-rose-400">Phone </strong>
                <span className="font-medium"></span>
                <br />
                <a href={`tel:${basicInfo?.email}`}>{basicInfo?.phone_1}</a>
              </p>
            </li>
            <li className="flex items-center gap-5 my-1">
              <i className={`bi bi-whatsapp text-2xl`}></i>
              <p>
                <strong className="text-rose-400">Whatsapp </strong>
                <span className="font-medium"></span>
                <br />
                <a href={`https://wa.me/91${basicInfo?.email}/text=Hello`}>
                  {basicInfo?.phone_2}
                </a>
              </p>
            </li>
            <li className="flex items-center gap-5 my-1">
              <i className={`bi bi-envelope text-2xl`}></i>
              <p>
                <strong className="text-rose-400">Email </strong>
                <span className="font-medium"></span>
                <br />
                <a href={`mailto:${basicInfo?.email}`}>{basicInfo?.email}</a>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
