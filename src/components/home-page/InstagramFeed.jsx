import React from "react";

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1601972599720-b4b0b3b3f5b3",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1542826438-8b4a97c5c6b5",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c",
  },
];

const InstagramFeed = () => {
  return (
    <section className="py-16 bg-rose-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-700">
            Follow Us on Instagram
          </h2>
          <p className="mt-3 text-gray-600">
            Real moments. Real cakes. Loved by our customers.
          </p>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={post.image}
                alt="Frozen Kreme Instagram post"
                className="h-40 w-full object-cover hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com/frozenkreme"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            @frozenkreme
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
