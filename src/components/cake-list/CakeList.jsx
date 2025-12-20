import React from "react";
import { Link } from "react-router-dom";
import CakeCard from "../component/CakeCard";
import cakes from "../../assets/data/cakes.json";

const CakeList = () => {
  // Temporary static data (replace with API later)
  // const cakes = [
  //   {
  //     id: 1,
  //     name: "Chocolate Truffle Cake",
  //     price: 799,
  //     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 2,
  //     name: "Red Velvet Cake",
  //     price: 899,
  //     image: "https://images.unsplash.com/photo-1601972599720-b4b0b3b3f5b3",
  //     category: "Classic",
  //   },
  //   {
  //     id: 3,
  //     name: "Black Forest Cake",
  //     price: 749,
  //     image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 4,
  //     name: "Butterscotch Cake",
  //     price: 699,
  //     image: "https://images.unsplash.com/photo-1542826438-8b4a97c5c6b5",
  //     category: "Special",
  //   },
  //   {
  //     id: 1,
  //     name: "Chocolate Truffle Cake",
  //     price: 799,
  //     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 2,
  //     name: "Red Velvet Cake",
  //     price: 899,
  //     image: "https://images.unsplash.com/photo-1601972599720-b4b0b3b3f5b3",
  //     category: "Classic",
  //   },
  //   {
  //     id: 3,
  //     name: "Black Forest Cake",
  //     price: 749,
  //     image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 4,
  //     name: "Butterscotch Cake",
  //     price: 699,
  //     image: "https://images.unsplash.com/photo-1542826438-8b4a97c5c6b5",
  //     category: "Special",
  //   },
  //   {
  //     id: 1,
  //     name: "Chocolate Truffle Cake",
  //     price: 799,
  //     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 2,
  //     name: "Red Velvet Cake",
  //     price: 899,
  //     image: "https://images.unsplash.com/photo-1601972599720-b4b0b3b3f5b3",
  //     category: "Classic",
  //   },
  //   {
  //     id: 3,
  //     name: "Black Forest Cake",
  //     price: 749,
  //     image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 4,
  //     name: "Butterscotch Cake",
  //     price: 699,
  //     image: "https://images.unsplash.com/photo-1542826438-8b4a97c5c6b5",
  //     category: "Special",
  //   },
  //   {
  //     id: 1,
  //     name: "Chocolate Truffle Cake",
  //     price: 799,
  //     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 2,
  //     name: "Red Velvet Cake",
  //     price: 899,
  //     image: "https://images.unsplash.com/photo-1601972599720-b4b0b3b3f5b3",
  //     category: "Classic",
  //   },
  //   {
  //     id: 3,
  //     name: "Black Forest Cake",
  //     price: 749,
  //     image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 4,
  //     name: "Butterscotch Cake",
  //     price: 699,
  //     image: "https://images.unsplash.com/photo-1542826438-8b4a97c5c6b5",
  //     category: "Special",
  //   },
  //   {
  //     id: 1,
  //     name: "Chocolate Truffle Cake",
  //     price: 799,
  //     image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 2,
  //     name: "Red Velvet Cake",
  //     price: 899,
  //     image: "https://images.unsplash.com/photo-1601972599720-b4b0b3b3f5b3",
  //     category: "Classic",
  //   },
  //   {
  //     id: 3,
  //     name: "Black Forest Cake",
  //     price: 749,
  //     image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  //     category: "Chocolate",
  //   },
  //   {
  //     id: 4,
  //     name: "Butterscotch Cake",
  //     price: 699,
  //     image: "https://images.unsplash.com/photo-1542826438-8b4a97c5c6b5",
  //     category: "Special",
  //   },
  // ];

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-pink-700 mb-8">Our Cakes</h1>

        {/* Filters (Basic) */}
        <div className="flex gap-4 mb-10 text-sm text-rose-400">
          <button className="px-4 py-2 border  rounded hover:bg-rose-100 cursor-pointer">
            All
          </button>
          <button className="px-4 py-2 border rounded hover:bg-rose-100 cursor-pointer">
            Chocolate
          </button>
          <button className="px-4 py-2 border rounded hover:bg-rose-100 cursor-pointer">
            Classic
          </button>
          <button className="px-4 py-2 border rounded hover:bg-rose-100 cursor-pointer">
            Special
          </button>
        </div>

        {/* Cake Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cakes.map((cake, idx) => (
            <CakeCard key={cake.id || idx} cake={cake} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CakeList;
