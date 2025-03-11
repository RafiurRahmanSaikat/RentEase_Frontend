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
// export const BASE_URL = "http://127.0.0.1:8000/api"
export const BASE_URL = "https://rent-ease-backend-livid.vercel.app/api";

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
