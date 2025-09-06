import React from "react";

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
            {address?.map((item, idx) => (
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
      </div>
    </>
  );
};
