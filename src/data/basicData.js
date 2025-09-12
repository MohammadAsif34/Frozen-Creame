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
    q: "What is Flowbite?",
    a: "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    q: "Is there a Figma file available?",
    a: "Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.",
  },
  {
    q: "What are the differences between Flowbite and Tailwind UI?",
    a: "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product.",
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
