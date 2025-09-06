import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className=" w-full px-[15%] max-sm:px-5 py-10 text-gray-600 flex max-sm:flex-col justify-between items-center bg-gradient-to-br from-fuchsia-100 via-red-50 to-rose-100 ">
        <div className="w-full flex max-md:flex-col max-md:px-10">
          {/* address  */}
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-rose-400 ">Frozen Creme</h1>
            <ul className=" text-lg max-sm:text-sm px-3 py-1">
              <li className="flex items-center gap-5 my-3">
                <i className="bi bi-telephone text-2xl"></i>
                <p>
                  <strong>Telephone </strong>
                  <span className="font-medium">( 10am - 12am ) </span>
                  <br />
                  +00 12345 67890
                </p>
              </li>
              <li className="flex items-center gap-5 my-3">
                <i className="bi bi-whatsapp text-2xl"></i>
                <p>
                  <strong>Whatsapp </strong>
                  <span className="font-medium">( 10am - 12am ) </span>
                  <br />
                  +00 12345 67890
                </p>
              </li>
              <li className="flex items-center gap-5 my-3">
                <i className="bi bi-envelope text-2xl"></i>
                <p>
                  <strong>Email </strong>
                  <br />
                  +00 12345 67890
                </p>
              </li>
              <li className="flex items-center gap-5 my-3">
                <i className="bi bi-building text-3xl"></i>
                <p>
                  <strong>Address </strong>
                  <br />
                  +00 12345 67890
                </p>
              </li>
            </ul>
          </div>

          {/* important links  */}
          <div className="  flex-1 flex justify-between max-sm:pt-5">
            <div>
              <h1 className="text-2xl max-sm:text-xl font-semibold">
                Information
              </h1>
              <ul className="capitalize text-lg max-sm:text-sm my-3 ">
                <li className="py-1.5 max-sm:py-0.5 text-shadow-purple-500">
                  <Link to={'/contact-us'}>about us</Link>
                </li>
                <li className="py-1.5 max-sm:py-0.5">
                  <Link>Order</Link>
                </li>
                <li className="py-1.5 max-sm:py-0.5">
                  <Link>shipping</Link>
                </li>
                <li className="py-1.5 max-sm:py-0.5">
                  <Link to={"/faqs"}>FAQs</Link>
                </li>
                <li className="py-1.5 max-sm:py-0.5">
                  <Link to={"/privacy-policy"}>Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-2xl  max-sm:text-xl font-semibold">
                <Link>Shopping</Link>
              </h1>
              <ul className="capitalize text-lg  max-sm:text-sm my-3">
                <li className="py-1.5 max-sm:py-0.5">
                  <Link>Flavours</Link>
                </li>
                <li className="py-1.5 max-sm:py-0.5">
                  <Link>trending</Link>
                </li>
                <li className="py-1.5  max-sm:py-0.5">
                  <Link>best seller</Link>
                </li>
                <li className="py-1.5 max-sm:py-0.5">
                  <Link>offers</Link>
                </li>
                <li className="py-1.5 max-sm:py-0.5">
                  <Link>special</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* copy right section  */}
      <div className="px-[15%] max-sm:px-5 py-2 bg-rose-300 text-white flex  max-sm:flex-col items-center gap-2 justify-between">
        <p>&copy; 2025 | Frozen Creme</p>
        <p>
          <i className="bi bi-instagram mx-2"></i>
          <i className="bi bi-facebook mx-2"></i>
          <i className="bi bi-youtube mx-2"></i>
        </p>
        <p>Developed By: Mohammad Asif</p>
      </div>
    </>
  );
};
