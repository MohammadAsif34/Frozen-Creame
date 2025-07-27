export const SpecialOfferSection = () => {
  return (
    <section className="w-full bg-gradient-to-tr from-fuchsia-200 via-rose-50 to-rose-200 py-20 px-[10%]">
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
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
          <h3 className="text-xl font-semibold text-pink-600">
            Buy 1 Get 1 Free
          </h3>
          <p className="mt-2 text-gray-500">
            On all 500g chocolate cakes this weekend only!
          </p>
          <span className="inline-block mt-4 px-4 py-1 bg-pink-100 text-pink-600 text-sm rounded-full">
            Valid: June 28–30
          </span>
        </div>

        {/* Offer Card 2 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
          <h3 className="text-xl font-semibold text-purple-600">
            20% Off First Order
          </h3>
          <p className="mt-2 text-gray-500">
            Sign up now and enjoy a sweet discount on your first cake.
          </p>
          <span className="inline-block mt-4 px-4 py-1 bg-purple-100 text-purple-600 text-sm rounded-full">
            Use Code: WELCOME20
          </span>
        </div>

        {/* Offer Card 3 */}
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-6 transition duration-300">
          <h3 className="text-xl font-semibold text-yellow-600">
            Free Delivery
          </h3>
          <p className="mt-2 text-gray-500">
            Enjoy free doorstep delivery on orders above ₹999.
          </p>
          <span className="inline-block mt-4 px-4 py-1 bg-yellow-100 text-yellow-600 text-sm rounded-full">
            No Coupon Required
          </span>
        </div>
      </div>
    </section>
  );
};
