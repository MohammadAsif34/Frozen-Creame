export const Collection = () => {
  const collections = [
    {
      _id: 1,
      title: "Celebration Cake",
      sub_title: "Celebrate Every Moment",
      quote:
        "From birthdays to victories, make your celebrations unforgettable with our handcrafted cakes.",
      picture: "/banner/banner-101.png",
      link: "",
    },
    {
      _id: 3,
      title: "Wedding Cake",
      sub_title: "Elegance & Love in Every Bite",
      quote:
        "Crafted to match your forever — stunning designs and timeless flavors.",
      picture: "/banner/banner-102.png",
      link: "",
    },
    {
      _id: 3,
      title: "Aniversary Cake",
      sub_title: "Mark the Milestone with Sweet Memories",
      quote:
        "Celebrate love, laughter, and years together with a cake that says it all.",
      picture: "/banner/banner-103.png",
      link: "",
    },
  ];
  return (
    <>
      <section className="w-full px-[12%]  pt-6 pb-12">
        <div className="text-center py-6">
          <h1 className="py-2 capitalize font-bold text-4xl max-sm:text-3xl text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-fuchsia-400">
            Shop Our collections
          </h1>
          <p className=" py-2 text-gray-400 max-sm:text-xs">
            Discover our exclusive collection, crafted with timeless elegance.
          </p>
        </div>
        <div className="flex max-sm:flex-col gap-5">
          {collections?.map((item, idx) => (
            <CollectionCard item={item} key={idx} />
          ))}
        </div>
      </section>
    </>
  );
};

const CollectionCard = ({ item, idx }) => {
  return (
    <div
      key={idx}
      className="flex-1 min-w-52 max-sm:w-full rounded-xl relative overflow-hidden border border-gray-300"
    >
      {/* Background Image */}
      <div className="w-full h-full absolute top-0 left-0 z-0">
        <picture>
          {/* <source srcSet="/banner/banner-101.webp" type="image/webp" /> */}
          <img
            src={item?.picture}
            alt={item?.title || "Banner"}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Content Overlay */}
      <div className="w-full h-full px-2 py-4 text-center text-white bg-gradient-to-l from-transparent to-black/50 flex flex-col justify-center gap-y-2 relative z-10">
        <h1 className="w-2/3 text-2xl font-semibold">{item?.title}</h1>
        <p className="w-2/3">{item?.sub_title}</p>
        <p className="w-2/3 text-xs italic">{`"${item?.quote}"`}</p>
      </div>
    </div>
  );
};
