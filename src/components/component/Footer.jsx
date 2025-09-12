import { Link } from "react-router-dom";
import { basicInfo } from "../../data/basicData";

export const Footer = () => {
  const links = [
    { _id: 1, label: "About us", link: "" },
    { _id: 1, label: "contact us", link: "" },
    { _id: 1, label: "franchise", link: "" },
    { _id: 1, label: "T&C", link: "" },
    { _id: 1, label: "Privacy policy", link: "" },
  ];
  return (
    <>
      <footer className=" w-full px-[8%] max-sm:px-5 border py-10 text-gray-600 bg-gradient-to-br from-fuchsia-100 via-red-50 to-rose-100 ">
        <div className="w-full h-full  grid grid-cols-[1fr_0.5fr_1fr] max-lg:grid-cols-1 max-lg:items-center gap-8">
          {/* important links  */}
          <div className="flex-1 px-4">
            <div className=" py-4 flex  items-center gap-4">
              <div className="w-16 h-16">
                <img src="/logo.png" alt="" className="w-full h-full" />
              </div>
              <p className="text-3xl text-rose-400">Frozen Kreme</p>
            </div>
            <p className="text-sm text-gray-500">{basicInfo?.about}</p>
          </div>
          {/* <div className=" flex-1 flex justify-between max-sm:pt-5">
            <div>
              <h1 className="mb-2 text-2xl max-sm:text-xl font-semibold">
                Links
              </h1>
              <ul className="px-2 capitalize  max-sm:text-sm flex flex-col ">
                {links?.map((item) => (
                  <Link
                    to={"/privacy-policy"}
                    className="py-1 max-sm:py-0.5 hover:text-rose-400 transition-all duration-500"
                  >
                    {item?.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div> */}

          <div className="flex-1 flex justify-between max-sm:pt-5">
            <div>
              <h1 className="mb-2 text-2xl max-sm:text-xl font-semibold">
                Links
              </h1>
              <ul className="px-2 capitalize  max-sm:text-sm flex flex-col ">
                {links?.map((item) => (
                  <Link
                    to={"/privacy-policy"}
                    className="py-1 max-sm:py-0.5 hover:text-rose-400 transition-all duration-500"
                  >
                    {item?.label}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          {/* address  */}
          <Address />
        </div>
        <SocialLink />
      </footer>

      {/* copy right section  */}
      <Copyrights />
    </>
  );
};

const Address = () => {
  return (
    <>
      <div className="flex-1">
        <h1 className="mb-4 text-3xl font-bold text-rose-400  leading-5 tracking-wider">
          Information
        </h1>
        <ul className=" px-3 py-1">
          <li className="py-0.5">
            <i className="bi bi-clock mr-4"></i>
            {basicInfo?.open_time}
          </li>
          <li className=" py-0.5">
            <i className="bi bi-telephone mr-4 "></i>
            <a href={`tel:${basicInfo}`}>{basicInfo?.phone_1}</a>
          </li>
          <li className=" py-0.5">
            <i className="bi bi-whatsapp mr-4 "></i>
            <a
              href={`https://wa.me/91${basicInfo.phone_2}?text=Hello%2C%20I%20want%20to%20order%20cake%2C%20flavour%20}`}
              target="_blank"
            >
              {basicInfo?.phone_2}
            </a>
          </li>
          <li className=" py-0.5">
            <i className="bi bi-envelope mr-4 "></i>
            <a href={`mailto:${basicInfo?.email}`}>{basicInfo?.email}</a>
          </li>
          <li className=" py-0.5">
            <i className="bi bi-building mr-4 "></i>
            {basicInfo?.address}
          </li>
        </ul>
        <div className=" flex-1 flex my-8 items-center ">
          <h1 className="text-xl  font-semibold">Follow On :</h1>
          <ul className="px-4 flex gap-x-4 ">
            {basicInfo?.social_links.map((item) => (
              <li className="w-8 h-8">
                <img src={item?.icon} alt="" />
              </li>
            ))}
          </ul>
        </div>
        <div className="flex  items-center">
          <h1 className="text-xl font-semibold">Delivery Partners :</h1>
          <div>
            <ul className=" px-10 flex gap-4 ">
              {basicInfo?.delivery_partner.map((item) => (
                <li className="w-16 h-16">
                  <img
                    src={item?.icon}
                    alt=""
                    className="w-full h-full object-cover rounded-xl"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const SocialLink = () => {
  return (
    <>
      <div className=""></div>
    </>
  );
};
const Copyrights = () => {
  return (
    <>
      <div className="px-[8%] max-sm:px-5 py-2 bg-rose-300 text-white flex  max-sm:flex-col items-center gap-2 justify-between">
        <p>&copy; 2025 | Frozen Creme</p>
        {/* <p>
          <i className="bi bi-instagram mx-2"></i>
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-youtube mx-2"></i>
        </p> */}
        <p>Developed By: Mohammad Asif</p>
      </div>
    </>
  );
};
