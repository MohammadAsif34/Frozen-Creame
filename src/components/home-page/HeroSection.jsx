export const HeroSection = () => {
  return (
    <>
      <section className="w-full h-[85vh] px-[12%] py-20 bg-gradient-to-br from-fuchsia-200 via-red-200 to-rose-200 flex flex-col lg:flex-row items-center justify-between ">
        {/* Text Content */}
        <div className="max-w-xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-red-500 to-fuchsia-400 leading-tight">
            Delicious Cakes <br /> Delivered With Love
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            Order your favorite cake with fast, secure checkout and smooth
            doorstep delivery.
          </p>
          <div className="mt-8">
            <button className="px-8 py-3  text-white bg-rose-400 text-lg rounded-full  hover:shadow-xl transition-all duration-300">
              Explore Flavors
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 lg:mt-0 max-sm:scale-50 max-sm:opacity-80 max-sm:-translate-y-50 max-sm:translate-25">
          <img
            src="/shipping/cake_img.png"
            alt="Hero Cake"
            className="w-[400px] lg:w-[500px] object-contain drop-shadow-xl scale-80"
          />
        </div>
      </section>
    </>
  );
};
