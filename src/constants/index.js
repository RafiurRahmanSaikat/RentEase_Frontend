import {
  Award,
  Briefcase,
  Building,
  Car,
  CheckCircle,
  Clock,
  Coffee,
  CreditCard,
  Droplet,
  Headphones,
  Heart,
  Home,
  Key,
  MapPin,
  MessageCircle,
  Shield,
  Smartphone,
  Smile,
  Star,
  Sunset,
  Thermometer,
  Trash2,
  Tv,
  Users,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";

// API URLs
export const BASE_URL = "https://rent-ease-backend-livid.vercel.app/api";
// export const BASE_URL = "http://127.0.0.1:8000/api";

// API Endpoints
export const API_ENDPOINTS = {
  // Auth
  REGISTER: "/auth/register/",
  LOGIN: "/auth/login/",
  PROFILE: "/auth/profile/",
  EMAIL_VERIFY: "/auth/email-verify/",
  CHANGE_PASSWORD: "/auth/change-password/",
  RESET_PASSWORD: "/auth/reset-password/",
  RESET_PASSWORD_CONFIRM: "/auth/reset-password-confirm/",

  // Properties
  HOUSES: "/properties/houses/",
  CATEGORIES: "/properties/categories/",

  // Interactions
  RENT_REQUESTS: "/interactions/rent-requests/",
  REVIEWS: "/interactions/reviews/",
  FAVORITES: "/interactions/favorites/",

  // Admin
  ADMIN_USERS: "/admin/users/",
};

// Navigation Links
export const NAV_LINKS = [
  { name: "Houses", path: "/houses" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// User Navigation Links (when logged in)
export const USER_NAV_LINKS = [
  { name: "Profile", path: "/profile" },
  { name: "My Favorites", path: "/favorites" },
  { name: "My Rent Requests", path: "/rent-requests" },
];

// Admin Navigation Links
export const ADMIN_NAV_LINKS = [
  { name: "Dashboard", path: "/admin" },
  { name: "Manage Users", path: "/admin/users" },
  { name: "Manage Houses", path: "/admin/houses" },
  { name: "Manage Categories", path: "/admin/categories" },
  { name: "Manage Rent Requests", path: "/admin/rent-requests" },
];

// House Categories (for filters)

// Price ranges for filtering
export const PRICE_RANGES = [
  { label: "Under $100", min: 0, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $500", min: 200, max: 500 },
  { label: "$500 - $1000", min: 500, max: 1000 },
  { label: "Over $1000", min: 1000, max: 999999 },
];

// Page size for pagination
export const PAGE_SIZE = 12;

// Default sorting options
export const SORT_OPTIONS = [
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "newest", label: "Newest First" },
  { value: "rating", label: "Highest Rated" },
];

// Rent durations
export const RENT_DURATIONS = [
  { value: 7, label: "1 Week" },
  { value: 14, label: "2 Weeks" },
  { value: 30, label: "1 Month" },
  { value: 90, label: "3 Months" },
  { value: 180, label: "6 Months" },
  { value: 365, label: "1 Year" },
];

// Property Categories
export const PROPERTY_CATEGORIES = [
  { id: "1", name: "Residential", icon: Home },
  { id: "2", name: "Apartment", icon: Building },
  { id: "3", name: "Commercial", icon: Briefcase },
  { id: "4", name: "Vacation", icon: Sunset },
  { id: "5", name: "Luxury", icon: Star },
  { id: "6", name: "Shared", icon: Users },
];

// Amenities
export const AMENITIES = [
  { id: "1", name: "WiFi", icon: Wifi },
  { id: "2", name: "TV", icon: Tv },
  { id: "3", name: "Kitchen", icon: Coffee },
  { id: "4", name: "AC", icon: Thermometer },
  { id: "5", name: "Parking", icon: Car },
  { id: "6", name: "Security", icon: Shield },
  { id: "7", name: "Air Conditioning", icon: Wind },
  { id: "8", name: "Water Supply", icon: Droplet },
  { id: "9", name: "Electricity", icon: Zap },
  { id: "10", name: "Waste Disposal", icon: Trash2 },
];

// Popular Locations
export const POPULAR_LOCATIONS = [
  {
    id: "1",
    name: "New York",
    count: 245,
    image:
      "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "2",
    name: "Los Angeles",
    count: 189,
    image:
      "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "3",
    name: "Chicago",
    count: 145,
    image:
      "https://images.unsplash.com/photo-1494522855154-9297ac14b55f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hpY2Fnb3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "4",
    name: "Miami",
    count: 132,
    image:
      "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "5",
    name: "San Francisco",
    count: 120,
    image:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2FuJTIwZnJhbmNpc2NvfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "6",
    name: "Seattle",
    count: 98,
    image:
      "https://images.unsplash.com/photo-1502175353174-a7a70e73b362?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2VhdHRsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

// Homepage Features
export const FEATURES = [
  {
    id: "1",
    title: "Verified Listings",
    description:
      "All our properties are verified by our team to ensure quality and accuracy.",
    icon: CheckCircle,
    color: "bg-green-100 text-green-600",
  },
  {
    id: "2",
    title: "Secure Payments",
    description:
      "Our secure payment system ensures your money is safe throughout the rental process.",
    icon: Shield,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: "3",
    title: "Quality Ratings",
    description:
      "Honest reviews and ratings from real tenants help you make informed decisions.",
    icon: Star,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    id: "4",
    title: "24/7 Support",
    description:
      "Our customer support team is available around the clock to assist you.",
    icon: Headphones,
    color: "bg-purple-100 text-purple-600",
  },
];

// How It Works Steps
export const HOW_IT_WORKS = [
  {
    id: "1",
    title: "Find Your Property",
    description:
      "Browse through our extensive collection of rental properties and find the perfect match.",
    icon: MapPin,
    color: "bg-blue-500",
  },
  {
    id: "2",
    title: "Book Your Stay",
    description: "Submit a rental request for your desired property and dates.",
    icon: Clock,
    color: "bg-green-500",
  },
  {
    id: "3",
    title: "Make Payment",
    description:
      "Once your request is approved, make a secure payment to confirm your booking.",
    icon: CreditCard,
    color: "bg-purple-500",
  },
  {
    id: "4",
    title: "Enjoy Your Stay",
    description:
      "Receive the keys and enjoy your comfortable stay in your new rental home.",
    icon: Key,
    color: "bg-yellow-500",
  },
];

// Statistics
export const STATISTICS = [
  { id: "1", value: "10,000+", label: "Properties Listed", icon: Building },
  { id: "2", value: "25,000+", label: "Happy Tenants", icon: Smile },
  { id: "3", value: "5,000+", label: "Property Owners", icon: Users },
  { id: "4", value: "98%", label: "Satisfaction Rate", icon: Award },
];

// Footer links
export const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "About Us", url: "/about" },
      { name: "Careers", url: "/careers" },
      { name: "Press", url: "/press" },
      { name: "Blog", url: "/blog" },
      { name: "Contact Us", url: "/contact" },
    ],
  },
  {
    title: "Discover",
    links: [
      { name: "How It Works", url: "/how-it-works" },
      { name: "Featured Properties", url: "/featured" },
      { name: "Popular Locations", url: "/locations" },
      { name: "Property Types", url: "/property-types" },
      { name: "Resources", url: "/resources" },
    ],
  },
  {
    title: "Hosting",
    links: [
      { name: "List Your Property", url: "/add-property" },
      { name: "Responsible Hosting", url: "/hosting-guidelines" },
      { name: "Host Protection", url: "/host-protection" },
      { name: "Community Forum", url: "/community" },
      { name: "Host Resources", url: "/host-resources" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", url: "/help" },
      { name: "Safety Information", url: "/safety" },
      { name: "Cancellation Options", url: "/cancellation" },
      { name: "Trust & Safety", url: "/trust-safety" },
      { name: "Accessibility", url: "/accessibility" },
    ],
  },
];

// Social Media Links
export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
  { name: "Twitter", url: "https://twitter.com", icon: "twitter" },
  { name: "Instagram", url: "https://instagram.com", icon: "instagram" },
  { name: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
  { name: "YouTube", url: "https://youtube.com", icon: "youtube" },
];
// Demo user credentials for quick login
export const DEMO_USERS = [
  {
    username: "john_doe",
    password: "password123",
    role: "user",

    description: "Regular user with basic privileges",
  },
  {
    username: "adminuser",
    password: "password123",
    role: "admin",

    description: "Administrator with full access to all features",
  },
];

// Static content for homepage sections
export const HOME_HERO = {
  title: "Find Your Perfect Rental Home",
  subtitle:
    "Discover thousands of rental properties in top locations. Your dream home is just a few clicks away.",
  searchPlaceholder: "Search by location, property type, or features...",
  backgroundImage: "https://i.ibb.co/VWgQBg65/house.jpg",
};

export const FEATURED_CITIES = [
  {
    id: 1,
    name: "New York",
    image: "https://i.ibb.co/Lkn7rkf/new-york.jpg",
    properties: 1245,
    popular: true,
  },
  {
    id: 2,
    name: "Los Angeles",
    image: "https://i.ibb.co/G9qGXRV/los-angeles.jpg",
    properties: 853,
    popular: true,
  },
  {
    id: 3,
    name: "Chicago",
    image: "https://i.ibb.co/Jy1ghQJ/chicago.jpg",
    properties: 621,
    popular: false,
  },
  {
    id: 4,
    name: "Miami",
    image: "https://i.ibb.co/VWgQBg65/miami.jpg",
    properties: 932,
    popular: true,
  },
  {
    id: 5,
    name: "San Francisco",
    image: "https://i.ibb.co/Lkn7rkf/san-francisco.jpg",
    properties: 512,
    popular: false,
  },
  {
    id: 6,
    name: "Seattle",
    image: "https://i.ibb.co/G9qGXRV/seattle.jpg",
    properties: 385,
    popular: false,
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Tenant",
    avatar: "https://i.ibb.co/Lkn7rkf/testimonial-1.jpg",
    content:
      "RentEase made finding my dream apartment so simple! The interface is intuitive, and I was able to filter properties based on my exact needs. Within a week, I had signed a lease for a beautiful place.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Property Owner",
    avatar: "https://i.ibb.co/G9qGXRV/testimonial-2.jpg",
    content:
      "As a property owner, I've tried several platforms to list my rentals. RentEase stands out with its user-friendly dashboard and excellent support. I've found reliable tenants quickly every time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Tenant",
    avatar: "https://i.ibb.co/Jy1ghQJ/testimonial-3.jpg",
    content:
      "The virtual tours feature saved me so much time! I was relocating from another state and could view properties remotely. The process was seamless from search to signing the lease.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Property Manager",
    avatar: "https://i.ibb.co/VWgQBg65/testimonial-4.jpg",
    content:
      "Managing multiple properties is effortless with RentEase. The platform streamlines everything from listing to tenant communication. It's become an essential tool for our business.",
    rating: 5,
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    id: 1,
    title: "Search",
    description:
      "Browse our extensive collection of rental properties using filters to find your perfect match.",
    icon: "Search",
  },
  {
    id: 2,
    title: "Request",
    description:
      "Submit a rent request for your chosen property and communicate with the owner.",
    icon: "Home",
  },
  {
    id: 3,
    title: "Move In",
    description:
      "Once approved, complete the payment process and move into your new home.",
    icon: "Star",
  },
];

// Benefits
export const BENEFITS = [
  {
    id: "1",
    title: "Wide Selection",
    description:
      "Access thousands of verified rental properties across different locations and price ranges.",
    icon: Building,
  },
  {
    id: "2",
    title: "Verified Listings",
    description:
      "All properties are verified to ensure they match their descriptions and photos.",
    icon: CheckCircle,
  },
  {
    id: "3",
    title: "Secure Payments",
    description:
      "Our secure payment system protects both tenants and property owners.",
    icon: Shield,
  },
  {
    id: "4",
    title: "Detailed Information",
    description:
      "Comprehensive property details, high-quality photos, and accurate descriptions.",
    icon: MessageCircle,
  },
  {
    id: "5",
    title: "User Reviews",
    description:
      "Read honest reviews from previous tenants to make informed decisions.",
    icon: Star,
  },
  {
    id: "6",
    title: "Favorite Properties",
    description:
      "Save your favorite properties to revisit them later or compare options.",
    icon: Heart,
  },
];

export const FAQS = [
  {
    id: 1,
    question: "How do I search for a rental property?",
    answer:
      "You can search for rental properties by using the search bar at the top of the homepage. Filter results by location, price range, property type, and more to find your perfect match.",
  },
  {
    id: 2,
    question: "What is the process for renting a property?",
    answer:
      "After finding a property you like, submit a rent request through the platform. The property owner will review your request and either approve or reject it. If approved, you can proceed with the payment and move-in process.",
  },
  {
    id: 3,
    question: "How do I list my property for rent?",
    answer:
      "Sign up for an account, navigate to your dashboard, and click on 'Add Property'. Fill in the details about your property, upload photos, set your rental terms, and submit for approval.",
  },
  {
    id: 4,
    question: "Are the properties verified?",
    answer:
      "Yes, all properties listed on our platform go through a verification process to ensure the accuracy of the information provided and the quality of the listing.",
  },
  {
    id: 5,
    question: "How are payments handled?",
    answer:
      "We use a secure payment system that protects both tenants and property owners. Payments are held in escrow until the tenant confirms the property meets the described conditions.",
  },
  {
    id: 6,
    question: "What if I need to cancel my reservation?",
    answer:
      "Cancellation policies vary by property. Each listing includes the specific cancellation terms set by the property owner. Review these terms before making a reservation.",
  },
  {
    id: 7,
    question: "Is there a fee for using RentEase?",
    answer:
      "RentEase is free for tenants to search and request properties. Property owners pay a small commission on successful rentals, which helps us maintain and improve the platform.",
  },
  {
    id: 8,
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team through the 'Contact' page, by email at support@rentease.com, or by phone at +1 (555) 123-4567. We're available 24/7 to assist you.",
  },
];

export const PARTNERS = [
  {
    id: 1,
    name: "HomeFinance",
    logo: "https://i.ibb.co/Lkn7rkf/partner-1.png",
    description: "Leading mortgage provider",
  },
  {
    id: 2,
    name: "MoveRight",
    logo: "https://i.ibb.co/G9qGXRV/partner-2.png",
    description: "Professional moving services",
  },
  {
    id: 3,
    name: "SecureRent",
    logo: "https://i.ibb.co/Jy1ghQJ/partner-3.png",
    description: "Rental insurance specialists",
  },
  {
    id: 4,
    name: "CleanPro",
    logo: "https://i.ibb.co/VWgQBg65/partner-4.png",
    description: "Property cleaning services",
  },
  {
    id: 5,
    name: "FurnishNow",
    logo: "https://i.ibb.co/Lkn7rkf/partner-5.png",
    description: "Furniture rental solutions",
  },
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "10 Tips for First-Time Renters",
    excerpt:
      "Navigate the rental market with confidence using these essential tips for first-time renters.",
    image: "https://i.ibb.co/Lkn7rkf/blog-1.jpg",
    date: "2023-06-15",
    author: "Emma Wilson",
    category: "Advice",
  },
  {
    id: 2,
    title: "Understanding Rental Agreements: What to Look For",
    excerpt:
      "Learn about the key elements of rental agreements and what to watch out for before signing.",
    image: "https://i.ibb.co/G9qGXRV/blog-2.jpg",
    date: "2023-05-22",
    author: "Robert Chen",
    category: "Legal",
  },
  {
    id: 3,
    title: "Decorating Your Rental: Tips That Won't Lose Your Deposit",
    excerpt:
      "Personalize your rental space without making permanent changes that could affect your security deposit.",
    image: "https://i.ibb.co/Jy1ghQJ/blog-3.jpg",
    date: "2023-04-10",
    author: "Sophia Martinez",
    category: "Lifestyle",
  },
];

export const NEWSLETTER = {
  title: "Stay Updated",
  subtitle:
    "Subscribe to our newsletter for the latest property listings and rental tips.",
  buttonText: "Subscribe",
  placeholderText: "Enter your email address",
};

export const STATS = [
  {
    id: 1,
    value: "10,000+",
    label: "Properties Listed",
    icon: "Home",
  },
  {
    id: 2,
    value: "25,000+",
    label: "Happy Tenants",
    icon: "Users",
  },
  {
    id: 3,
    value: "5,000+",
    label: "Property Owners",
    icon: "Key",
  },
  {
    id: 4,
    value: "100+",
    label: "Cities Covered",
    icon: "MapPin",
  },
];

// App Features for Mobile Section
export const APP_FEATURES = [
  {
    id: "1",
    title: "Search On-the-Go",
    description:
      "Find and book rental properties from anywhere using our mobile app.",
    icon: Smartphone,
  },
  {
    id: "2",
    title: "Real-Time Notifications",
    description:
      "Receive instant updates on your rental requests and messages.",
    icon: Smartphone,
  },
  {
    id: "3",
    title: "Virtual Tours",
    description:
      "Take virtual tours of properties without leaving your current location.",
    icon: Smartphone,
  },
  {
    id: "4",
    title: "Offline Access",
    description:
      "Access saved properties and information even without an internet connection.",
    icon: Smartphone,
  },
];

// About Us Page Content
export const ABOUT_US = {
  hero: {
    title: "About RentEase",
    subtitle: "Transforming the way people find and rent properties",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
  },
  mission: {
    title: "Our Mission",
    description:
      "At RentEase, our mission is to make the rental process simple, transparent, and enjoyable for everyone. We believe that finding a place to call home should be an exciting journey, not a stressful experience. By connecting property owners with potential tenants through our innovative platform, we're creating a community built on trust, quality, and exceptional service.",
  },
  vision: {
    title: "Our Vision",
    description:
      "We envision a world where anyone can find their ideal rental property with just a few clicks. A world where property owners can confidently list their properties knowing they'll find reliable tenants. Our platform is designed to make this vision a reality by leveraging technology to streamline the rental process while maintaining the human connection that makes finding a home special.",
  },
  story: {
    title: "Our Story",
    description:
      "RentEase was founded in 2020 by a group of real estate professionals and tech enthusiasts who recognized the challenges in the traditional rental market. After experiencing firsthand the frustrations of finding quality rental properties and reliable tenants, our founders decided to create a solution that would benefit both sides of the rental equation. What started as a small idea has grown into a platform that serves thousands of users across the country, constantly evolving to meet the needs of our community.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },
  values: [
    {
      title: "Trust",
      description:
        "We build trust through verification processes, secure transactions, and transparent communication.",
      icon: Shield,
    },
    {
      title: "Quality",
      description:
        "We maintain high standards for all properties listed on our platform, ensuring accurate representations.",
      icon: CheckCircle,
    },
    {
      title: "Innovation",
      description:
        "We continuously improve our platform with new features and technologies to enhance user experience.",
      icon: Smartphone,
    },
    {
      title: "Community",
      description:
        "We foster a supportive community of property owners and tenants built on mutual respect.",
      icon: Users,
    },
  ],
  team: [
    {
      name: "Alex Johnson",
      role: "CEO & Co-Founder",
      bio: "With over 15 years in real estate and technology, Alex leads our vision and strategy.",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Sophia Chen",
      role: "COO",
      bio: "Sophia oversees our day-to-day operations, ensuring we deliver exceptional service.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Marcus Williams",
      role: "CTO",
      bio: "Marcus leads our technical team, developing innovative solutions for our platform.",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
    },
    {
      name: "Olivia Rodriguez",
      role: "Head of Customer Experience",
      bio: "Olivia ensures our users have the best possible experience on our platform.",
      image: "https://randomuser.me/api/portraits/women/75.jpg",
    },
  ],
  achievements: [
    {
      year: "2020",
      title: "Founded RentEase",
      description:
        "Launched our platform with the mission to transform the rental experience.",
    },
    {
      year: "2021",
      title: "Reached 5,000 Properties",
      description:
        "Celebrated our first major milestone with 5,000 verified properties.",
    },
    {
      year: "2022",
      title: "Expanded Nationwide",
      description:
        "Extended our services to cover all major cities across the country.",
    },
    {
      year: "2023",
      title: "Launched Mobile App",
      description:
        "Introduced our mobile application to make renting even more accessible.",
    },
  ],
};

// Contact Us Page Content
export const CONTACT_US = {
  hero: {
    title: "Contact Us",
    subtitle: "We're here to help with any questions or concerns",
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  },
  info: {
    address: {
      title: "Our Office",
      line1: "123 Rental Street",
      line2: "Suite 456",
      city: "San Francisco",
      state: "CA",
      zip: "94105",
      country: "United States",
      icon: MapPin,
    },
    phone: {
      title: "Phone",
      number: "+1 (555) 123-4567",
      hours: "Monday-Friday, 9AM-6PM EST",
      icon: Headphones,
    },
    email: {
      title: "Email",
      address: "support@renteaseapp.com",
      response: "We typically respond within 24 hours",
      icon: MessageCircle,
    },
  },
  form: {
    title: "Send Us a Message",
    subtitle:
      "Fill out the form below and we'll get back to you as soon as possible",
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "Enter your full name",
        required: true,
      },
      {
        name: "email",
        label: "Email Address",
        type: "email",
        placeholder: "Enter your email address",
        required: true,
      },
      {
        name: "phone",
        label: "Phone Number",
        type: "tel",
        placeholder: "Enter your phone number",
        required: false,
      },
      {
        name: "subject",
        label: "Subject",
        type: "text",
        placeholder: "What is your message about?",
        required: true,
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        placeholder: "How can we help you?",
        required: true,
      },
    ],
    submitText: "Send Message",
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Find quick answers to common questions",
    questions: [
      {
        question: "How quickly will I receive a response?",
        answer:
          "We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call our customer support line.",
      },
      {
        question: "Do you offer support on weekends?",
        answer:
          "Our email support team operates with limited availability on weekends. For immediate assistance, please use our live chat feature on the website.",
      },
      {
        question: "Can I visit your office in person?",
        answer:
          "Yes, our office is open for in-person visits Monday through Friday, 9AM to 5PM. We recommend scheduling an appointment in advance.",
      },
    ],
  },
  map: {
    title: "Find Us",
    subtitle: "Visit our office or send us mail",
    location: {
      lat: 37.7749,
      lng: -122.4194,
      zoom: 15,
    },
  },
};

// Carousel Images for Homepage
export const CAROUSEL_IMAGES = [
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Modern Homes",
    subtitle: "Contemporary designs for modern living",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Cozy Cottages",
    subtitle: "Charming retreats in peaceful locations",
  },
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80",
    title: "Luxury Apartments",
    subtitle: "Experience premium living spaces",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9zJTIwYW5nZWxlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Urban Lofts",
    subtitle: "Stylish spaces in the heart of the city",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Waterfront Properties",
    subtitle: "Breathtaking views with direct water access",
  },
];
