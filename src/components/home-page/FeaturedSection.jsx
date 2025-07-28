import { Link } from "react-router-dom";
import ProductCard from "../products/ProductCard";

const FeaturedSection = () => {
  return (
    <>
      <section className="w-full h-fit px-[10%] mmax-sm:px-5   ">
        <div className=" py-6 border-b border-gray-300">
          <div>
            <h1 className=" text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-l from-rose-400 to-fuchsia-400">
              Featured Collection: Top Pick
            </h1>
          </div>

          {/* products card  */}
          <div className="mx-auto py-6 border grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-8 justify-center">
            {[...Array(12)].slice(0, 4).map((item, idx) => (
              <div key={idx}>
                <ProductCard item={item} />
              </div>
            ))}
          </div>

          <div className=" text-center">
            <Link to={"/search"}>
              <button className="inline-block px-8 py-2 bg-gradient-to-l from-rose-400 to-fuchsia-400 text-white font-medium rounded-md hover:rounded-full hover:shadow-lg transition-all duration-500 ease-in-out">
                See More
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default FeaturedSection;
