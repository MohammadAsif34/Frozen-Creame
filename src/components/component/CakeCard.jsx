import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CakeCard = ({ cake }) => {
  const [imgUrl, setImgUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  // const baseURL1 = "https://images.unsplash.com/photo-";
  // const baseURL2 = "https://plus.unsplash.com/premium_photo-";

  // useEffect(() => {
  //   const func = async () => {
  //     try {
  //       const url1 = `${baseURL1}${cake.image}`;
  //       const res1 = await fetch(url1, { method: "HEAD" });

  //       if (res1.ok) {
  //         setImgUrl(url1);
  //       } else {
  //         const url2 = `${baseURL2}${cake.image}`;
  //         const res2 = await fetch(url2, { method: "HEAD" });

  //         if (res2.ok) {
  //           setImgUrl(url2);
  //         } else setImgUrl("images/default_cake.png");
  //       }
  //     } catch (err) {
  //       // console.error("Image resolution failed:", err);
  //     }
  //   };
  //   func();
  // }, []);
  // if (loading) () => setImgUrl("/image/default_cake.png");

  return (
    <>
      <div
        key={cake.id}
        className="bg-rose-50 rounded-xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <Link to={`/cake/${cake._id}`}>
          <img
            src={"/images/default_cake.png"}
            alt={cake.name}
            className="h-48 w-full object-cover"
          />
        </Link>

        <div className="p-4 text-center">
          <h3 className="font-semibold text-lg">{cake.name}</h3>
          <p className="text-pink-600 font-bold mt-2">
            ₹{cake?.pricing?.basePrice}
          </p>

          <Link
            to={`/cake/${cake._id}`}
            className="inline-block mt-4 px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default CakeCard;
