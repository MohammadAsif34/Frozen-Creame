export const basicInfo = {
  name: "Frozen Kreme",
  logo: "https://example.com/logo.png",
  picture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbaWBOy-mT9TQkuDT9b5I-w9X5Xs_mr6PJRg&s",
  phone_1: "9874744147",
  phone_2: "9331299745",
  whatsapp: "",
  address: "92, West Chowbhaga, Gulshan Colony, Kolkata - 700100",
  location_link: "https://goo.gl/maps/your-google-map-link",
  email: "frozenkreme.official@gmail.com",
  //   password: "frozen1234", // 🔐 For demo only – use hashed passwords in production!
  website: "",
  about:
    "Frozen Kreme is your go-to destination in Kolkata for handcrafted cakes, desserts, and frozen treats. We specialize in custom birthday cakes, late-night deliveries, and unique flavor combinations.",
  open_time: "10:00 AM - 2:00 AM | Mon - Sun",
  why_choose_us: [
    {
      title: "Freshly Baked Daily",
      description:
        "All cakes are baked on the same day to ensure maximum freshness and flavor.",
    },
    {
      title: "Late Night Delivery",
      description:
        "Order anytime! We deliver till 2 AM so you never miss a midnight surprise.",
    },
    {
      title: "100% Eggless Options",
      description:
        "Delicious eggless cakes for vegetarians without compromising on taste.",
    },
    {
      title: "Custom Designs & Themes",
      description:
        "From birthdays to weddings, get cakes styled exactly how you want.",
    },
  ],

  social_links: [
    {
      name: "Instagram",
      link: "https://www.instagram.com/frozenkreme.official/",
      icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/frozenkremeofficial/",
      icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
    },
    {
      name: "YouTube",
      link: "https://www.youtube.com/@frozenkreme",
      icon: "https://cdn-icons-png.flaticon.com/512/1384/1384060.png",
    },
  ],

  delivery_partner: [
    {
      name: "Swiggy",
      //   picture: "https://example.com/swiggy-logo.png",
      icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png?20201024153532",
      link: "https://www.swiggy.com/restaurants/frozen-kreme-kolkata",
    },
    {
      name: "Zomato",
      icon: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png?20210726145438",
      //   picture: "https://example.com/zomato-logo.png",
      link: "https://www.zomato.com/kolkata/frozen-kreme-order-online",
    },
  ],
};

export const coupons = [
  {
    _id: 1,
    title: "Buy 1 Get 1 Free",
    info: "On all 500g chocolate cakes this weekend only!",
    tips: "Valid: June 28–30",
  },
  {
    _id: 2,
    title: "20% Off First Order",
    info: " Sign up now and enjoy a sweet discount on your first cake.",
    tips: "Use Code: WELCOME20",
  },
  {
    _id: 3,
    title: "Free Delivery",
    info: "Enjoy free doorstep delivery on orders above ₹999.",
    tips: "No Coupon Required",
  },
];
// export const coupons = [];

export const collections = [
  {
    _id: 1,
    title: "Celebration Cake",
    // sub_title: "Celebrate Every Moment",
    quote:
      "From birthdays to victories, make your celebrations unforgettable with our handcrafted cakes.",
    picture: "/banner/banner-101.png",
    link: "",
  },
  {
    _id: 3,
    title: "Wedding Cake",
    // sub_title: "Elegance & Love in Every Bite",
    quote:
      "Crafted to match your forever — stunning designs and timeless flavors.",
    picture: "/banner/banner-102.png",
    link: "",
  },
  {
    _id: 3,
    title: "Aniversary Cake",
    // sub_title: "Mark the Milestone with Sweet Memories",
    quote:
      "Celebrate love, laughter, and years together with a cake that says it all.",
    picture: "/banner/banner-103.png",
    link: "",
  },
];
export const faqs = [
  {
    q: "Do you offer eggless cakes?",
    a: "Yes! Most of our cakes are available in eggless variants. You can select 'Eggless' when placing your order.",
  },
  {
    q: "How far in advance should I place my order?",
    a: "We recommend placing your order at least 24 hours in advance. For custom or large orders, 48-72 hours is ideal.",
  },
  {
    q: "Can I customize the design of my cake?",
    a: "Absolutely! You can share your design idea or photo reference, and our team will make it for you.",
  },
  {
    q: "Do you cater for corporate or bulk orders?",
    a: "Yes, we offer bulk orders for events, offices, and parties. Please contact us at least a week in advance.",
  },
  {
    q: "How far in advance should I place an order?",
    a: "For regular cakes, same-day orders are possible depending on availability. For custom cakes, we recommend placing an order at least 1–2 days in advance.",
  },
  {
    q: "Do you offer home delivery?",
    a: "Yes, we deliver within our service area. Delivery charges may vary depending on the location. Same-day and midnight delivery options are available.",
  },
  {
    q: "What payment options do you accept?",
    a: "We accept cash, debit/credit cards, UPI, and popular wallets. Cash on delivery is available for select areas.",
  },
  {
    q: "Do you provide eggless or vegan cakes?",
    a: "Yes, we offer both eggless and vegan cake options. Please specify your preference when placing an order.",
  },
  {
    q: "Can I cancel or modify my order?",
    a: "Orders can be modified or canceled within 2 hours of placing them. Custom cake cancellations may not be refundable.",
  },
  {
    q: "Do you provide birthday decorations with cakes?",
    a: "Yes! We provide candles, cake toppers, and other decorations on request. Some items may have additional charges.",
  },
  {
    q: "Is midnight delivery available?",
    a: "Yes, we offer midnight and early-morning delivery in select areas for an extra charge.",
  },
  {
    q: "How do I store my cake after delivery?",
    a: "We recommend refrigerating cream-based cakes. Fondant cakes should be kept in a cool, dry place. Always consume within 24–48 hours for best taste.",
  },
  {
    q: "Do you provide bulk or corporate cake orders?",
    a: "Yes, we handle bulk and corporate cake orders for events, parties, and offices. Please contact us in advance for special pricing.",
  },
];

export const statsData = [
  { value: "150+", label: "Cakes Baked Daily", iconClass: "bi bi-cake" },
  {
    value: "50+",
    label: "Flavors Available",
    iconClass: "bi bi-fork-knife",
  },
  {
    value: "2000+",
    label: "Happy Customers",
    iconClass: "bi bi-emoji-smile",
  },
  {
    value: "25+",
    label: "Skilled Bakers",
    iconClass: "bi bi-person-fill",
  },
  {
    value: "500+",
    label: "Custom Orders Completed",
    iconClass: "bi bi-truck",
  },
];
export const testimonials = [
  {
    name: "John Doe",
    role: "CEO, Company",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    message: "This service is amazing! Highly recommend to everyone.",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    message: "Great experience, very satisfied with the product.",
  },
  {
    name: "Mike Johnson",
    role: "Developer",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    rating: 5,
    message: "Exceptional quality and fast delivery!",
  },
];
