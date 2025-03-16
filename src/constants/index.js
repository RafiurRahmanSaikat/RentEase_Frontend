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
export const PRICE_RANGES = [
  { label: "Under $1,000", min: 0, max: 1000 },
  { label: "$1,000 - $2,000", min: 1000, max: 2000 },
  { label: "$2,000 - $5,000", min: 2000, max: 5000 },
  { label: "$5,000 - $10,000", min: 5000, max: 10000 },
  { label: "Above $10,000", min: 10000, max: 1000000 },
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

// Sort Options
export const SORT_OPTIONS = [
  { value: "newest", label: "Newest First" },
  { value: "oldest", label: "Oldest First" },
  { value: "price_low", label: "Price: Low to High" },
  { value: "price_high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
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

// Testimonials
export const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Tenant",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "HomeRental made finding my dream apartment so easy! The platform is intuitive, and I was able to filter properties based on my exact requirements. Within a week, I had secured a beautiful place.",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Property Owner",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "As a property owner, I've tried several platforms to list my rentals. HomeRental stands out with its user-friendly interface and excellent support. I've found reliable tenants quickly.",
    rating: 4,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Tenant",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "The verification process gave me peace of mind when renting through HomeRental. I knew the property would match the description, and it did! The secure payment system was also a big plus.",
    rating: 5,
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Property Owner",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    content:
      "The dashboard for property owners is comprehensive and makes managing my listings effortless. The analytics help me understand what renters are looking for.",
    rating: 4,
  },
];

// Statistics
export const STATISTICS = [
  { id: "1", value: "10,000+", label: "Properties Listed", icon: Building },
  { id: "2", value: "25,000+", label: "Happy Tenants", icon: Smile },
  { id: "3", value: "5,000+", label: "Property Owners", icon: Users },
  { id: "4", value: "98%", label: "Satisfaction Rate", icon: Award },
];

// FAQs
export const FAQS = [
  {
    id: "1",
    question: "How do I search for a rental property?",
    answer:
      "You can search for rental properties by using the search bar at the top of the homepage. Filter results by location, price range, number of bedrooms, and more to find properties that match your requirements.",
  },
  {
    id: "2",
    question: "How do I make a rental request?",
    answer:
      'Once you find a property you like, click on "Request to Rent" on the property details page. Fill in the required information, including your desired rental period, and submit your request. The property owner will review your request and respond accordingly.',
  },
  {
    id: "3",
    question: "Is my payment secure?",
    answer:
      "Yes, all payments on HomeRental are processed through our secure payment gateway. We use industry-standard encryption to protect your financial information. Payments are only released to property owners after you have confirmed your satisfaction with the property.",
  },
  {
    id: "4",
    question: "How do I list my property for rent?",
    answer:
      'To list your property, create an account and click on "Add Property" in your dashboard. Fill in the details about your property, upload high-quality photos, set your rental price, and submit for approval. Our team will review your listing before it goes live.',
  },
  {
    id: "5",
    question: "What happens if I need to cancel my booking?",
    answer:
      "Our cancellation policy varies depending on the property and the timing of your cancellation. Generally, cancellations made more than 7 days before check-in receive a full refund minus service fees. Please check the specific cancellation policy for each property before booking.",
  },
  {
    id: "6",
    question: "How are the properties verified?",
    answer:
      "All properties listed on HomeRental go through a verification process. Our team reviews the property details, checks the ownership documentation, and ensures that the photos accurately represent the property. We also collect and display reviews from previous tenants to help you make informed decisions.",
  },
  {
    id: "7",
    question: "What should I do if I have issues during my stay?",
    answer:
      "If you encounter any issues during your stay, you can contact the property owner directly through our messaging system. If the issue remains unresolved, our customer support team is available 24/7 to assist you and mediate if necessary.",
  },
  {
    id: "8",
    question: "How long does the approval process take for rental requests?",
    answer:
      "Property owners typically respond to rental requests within 24-48 hours. If you haven't received a response after 48 hours, you can contact our support team, and we'll follow up with the property owner on your behalf.",
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

// Missing icon definitions
// const Search = MapPin; // Using MapPin as a substitute for Search
// const Calendar = Clock; // Using Clock as a substitute for Calendar
// const Bell = Smartphone; // Using Smartphone as a substitute for Bell
// const Camera = Smartphone; // Using Smartphone as a substitute for Camera
// const Download = Smartphone; // Using Smartphone as a substitute for Download

// Newsletter content
export const NEWSLETTER = {
  title: "Stay Updated",
  description:
    "Subscribe to our newsletter to receive the latest property listings, rental tips, and exclusive offers.",
  placeholder: "Enter your email address",
  buttonText: "Subscribe",
};

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
