import { coupons } from "../../data/basicData";

export const SpecialOfferSection = () => {
  return (
    <section className="ks bg-gradient-to-tr from-fuchsia-200 via-rose-50 to-rose-200 py-20 px-[10%]">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-fuchsia-400">
          Special Offers Just for You
        </h2>
        <p className="mt-3 text-gray-600 text-lg">
          Celebrate sweet moments with amazing deals on your favorite cakes.
        </p>
      </div>

      {/* Offer Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Offer Card 1 */}
        {coupons?.map((item) => (
          <div
            key={item?._id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300"
          >
            <h3 className="text-xl font-semibold text-pink-600">
              {item?.title}
            </h3>
            <p className="mt-2 text-gray-500">{item?.info}</p>
            <span className="inline-block mt-4 px-4 py-1 bg-pink-100 text-pink-600 text-sm rounded-full">
              {item?.tips}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
