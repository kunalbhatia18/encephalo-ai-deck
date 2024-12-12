// src/components/SlideContent.js

const SlideContent = [
  {
    id: 1,
    type: "intro",
    title: "Encephalo.ai",
    subtitle: "Democratizing Brain-Computer Interface Development",
    description:
      "Empowering innovators to prototype, test, and refine BCI applications effortlessly.",
    bgColor: "bg-gradient-to-r from-purple-900 via-indigo-900 to-gray-900",
    textColor: "text-white",
  },
  {
    id: 2,
    type: "problem",
    title: "The Problem",
    description:
      "Building BCIs today is expensive, time-consuming, and inaccessible. Developers need:",
    points: [
      {
        icon: "FaBrain",
        content: "Expensive EEG hardware.",
      },
      {
        icon: "FaGamepad",
        content: "Time-intensive data collection from participants.",
      },
      {
        icon: "FaChartLine",
        content:
          "Specialized knowledge to preprocess noisy and complex EEG signals.",
      },
    ],
    bgColor: "bg-gray-900",
    textColor: "text-white",
  },
  {
    id: 3,
    type: "solution",
    title: "Our Solution",
    description:
      "Encephalo.ai is an all-in-one platform that solves these challenges by:",
    points: [
      {
        title: "Synthetic EEG",
        content: "Simulate EEG signals without needing expensive hardware.",
        icon: "FaBrain",
      },
      {
        title: "3D Simulation",
        content:
          "Easily prototype and test BCI applications in virtual environments.",
        icon: "FaGamepad",
      },
      {
        title: "Integrated Analytics",
        content: "Refine algorithms with real-time performance metrics.",
        icon: "FaChartLine",
      },
    ],
    bgColor: "bg-gradient-to-b from-indigo-800 to-gray-900",
    textColor: "text-white",
  },
  {
    id: 4,
    type: "market",
    title: "Market Opportunity",
    description:
      "The Brain-Computer Interface (BCI) industry is rapidly growing, with diverse applications across multiple sectors.",
    points: [
      {
        title: "Healthcare",
        content: "Assistive technology, neurotherapy, and diagnostics.",
        icon: "FaHospital",
      },
      {
        title: "Gaming",
        content: "Immersive experiences and interactive entertainment.",
        icon: "FaGamepad",
      },
      {
        title: "Robotics",
        content: "Mind-controlled devices and automation.",
        icon: "FaRobot",
      },
    ],
    metrics: [
      {
        label: "BCI Market Size",
        value: "$3B by 2030",
      },
      {
        label: "TAM for Tools",
        value: "$300M+",
      },
    ],
    chartData: {
      labels: ["Healthcare", "Gaming", "Robotics"],
      datasets: [
        {
          label: "Market Segments",
          data: [1500, 1000, 500], // Example values in millions
          backgroundColor: ["#4ade80", "#818cf8", "#f472b6"],
        },
      ],
    },
    bgColor: "bg-gradient-to-tl from-purple-900 to-indigo-800",
    textColor: "text-white",
  },
  {
    id: 5,
    type: "demo",
    title: "Product Features",
    description:
      "Explore how encephalo.ai simplifies Brain-Computer Interface (BCI) development with cutting-edge features.",
    points: [
      {
        title: "Synthetic EEG Generation",
        content:
          "Simulate realistic EEG signals without the need for expensive hardware.",
        icon: "FaBrain",
      },
      {
        title: "3D Scenario Builder",
        content:
          "Design and test BCI applications in interactive virtual environments.",
        icon: "FaGamepad",
      },
      {
        title: "Integrated Analytics",
        content:
          "Analyze and refine your algorithms with real-time performance metrics.",
        icon: "FaChartLine",
      },
    ],
    mockup: "eeg_signal.png", // Replace with actual product mockup when ready
    bgColor: "bg-gradient-to-br from-blue-800 to-teal-700",
    textColor: "text-white",
  },
  {
    id: 6,
    type: "business",
    title: "Business Model",
    description:
      "Our revenue model is subscription-based, complemented by a marketplace for pre-trained models and scenarios.",
    points: [
      {
        title: "Free Tier",
        content: "Limited features for students and hobbyists.",
        icon: "FaGraduationCap",
      },
      {
        title: "Pro Tier",
        content: "Advanced analytics and 3D scenarios ($50/month).",
        icon: "FaBriefcase",
      },
      {
        title: "Enterprise Tier",
        content: "Collaboration tools and pre-trained models ($500/month).",
        icon: "FaBuilding",
      },
    ],
    bgColor: "bg-gradient-to-bl from-green-600 to-blue-700",
    textColor: "text-white",
  },
  {
    id: 7,
    type: "roadmap",
    title: "Roadmap",
    description:
      "A clear path to revolutionizing BCI development with key milestones.",
    points: [
      {
        title: "Q1 2025",
        content:
          "MVP launch with synthetic EEG generation and basic 3D simulation.",
        icon: "FaRocket",
      },
      {
        title: "Q2 2025",
        content: "Expanded simulation capabilities and pre-trained models.",
        icon: "FaCog",
      },
      {
        title: "Q4 2025",
        content: "Cloud-based collaboration and marketplace launch.",
        icon: "FaGlobe",
      },
    ],
    bgColor: "bg-gradient-to-r from-purple-700 to-indigo-700",
    textColor: "text-white",
  },
  {
    id: 8,
    type: "why-now",
    title: "Why Now?",
    description:
      "The convergence of advanced AI, increasing affordability of hardware, and growing demand for BCIs creates the perfect storm for innovation.",
    points: [
      {
        title: "Technological Advancements",
        content:
          "AI and synthetic data technologies are now mature enough for BCI applications.",
        icon: "FaCog",
      },
      {
        title: "Growing Awareness",
        content:
          "Increased focus on mental health and human performance optimization.",
        icon: "FaBrain",
      },
      {
        title: "Supportive Ecosystem",
        content:
          "Investments in neuroscience startups and supportive government initiatives.",
        icon: "FaRocket",
      },
    ],
    bgColor: "bg-gradient-to-tr from-teal-800 to-blue-900",
    textColor: "text-white",
  },
  {
    id: 9,
    type: "competition",
    title: "Competition",
    description:
      "No one provides all the tools: synthetic EEG, analytics, and 3D space—all in one platform. And existing tools aren't upto the mark.",
    competitors: [
      {
        name: "NeuroTech Solutions",
        feature: "Synthetic EEG Generation",
        advantage:
          "Our synthetic data will actually be real as it will be based on our foundation model of multiple EEGs.",
      },
      {
        name: "BCI Innovators",
        feature: "3D Simulation",
        advantage:
          "Offers virtual environments but lacks integrated analytics.",
      },
      {
        name: "MindWave Labs",
        feature: "Integrated Analytics",
        advantage:
          "Provides performance metrics but doesn't support synthetic data.",
      },
    ],
    bgColor: "bg-gradient-to-tr from-purple-800 to-indigo-700",
    textColor: "text-white",
  },
  {
    id: 10,
    type: "go-to-market",
    title: "Go-to-Market Strategy",
    description:
      "Our comprehensive strategy ensures rapid adoption and sustainable growth in the BCI market.",
    strategies: [
      {
        title: "Direct Sales",
        content:
          "Building a dedicated sales team to target universities and research institutions.",
        icon: "FaBullhorn",
      },
      {
        title: "Partnerships",
        content:
          "Collaborating with neuroscience labs and tech incubators to expand our reach.",
        icon: "FaHandshake",
      },
      {
        title: "Digital Marketing",
        content:
          "Leveraging SEO, content marketing, and social media to drive awareness and engagement.",
        icon: "FaGlobe",
      },
    ],
    bgColor: "bg-gradient-to-tr from-blue-600 to-indigo-600",
    textColor: "text-white",
  },
  {
    id: 11, // Ensure this ID follows your slide numbering
    type: "financials",
    title: "Financials",
    description:
      "Projected financial performance and funding requirements for the next 3 years.",
    financials: [
      {
        year: "2025",
        revenue: "$500K",
        expenses: "$300K",
        profit: "$200K",
      },
      {
        year: "2026",
        revenue: "$3M",
        expenses: "$1M",
        profit: "$2M",
      },
      {
        year: "2027",
        revenue: "$15M",
        expenses: "$5M",
        profit: "$10M",
      },
    ],
    bgColor: "bg-gradient-to-r from-purple-900 to-indigo-800",
    textColor: "text-white",
  },
  {
    id: 12, // New Slide ID
    type: "the-ask",
    title: "The Ask",
    description:
      "We're seeking $125K in pre-seed funding for 7.5% equity, with a cap at $1M, to accelerate product development, expand our team, and scale our marketing efforts.",
    askDetails: [
      {
        title: "Funding Required",
        content: "$1M in Seed Funding",
        icon: "FaDollarSign",
      },
      {
        title: "Use of Funds",
        content:
          "60% Product Development, 25% Marketing & Sales, 10% Operations, 5% Legal & Administrative.",
        icon: "FaChartPie",
      },
      {
        title: "Projected Milestones",
        content:
          "Launch MVP, Achieve 10K Users, Establish Key Partnerships within 12 months.",
        icon: "FaFlagCheckered",
      },
    ],
    bgColor: "bg-gradient-to-tr from-purple-800 via-purple-700 to-pink-600",
    textColor: "text-white",
  },
  {
    id: 13, // Ensure this ID follows your slide numbering
    type: "team",
    title: "Our Team",
    description:
      "Meet the passionate individuals driving Encephalo.ai forward.",
    members: [
      // {
      //   name: "Alice Johnson",
      //   role: "CEO & Co-Founder",
      //   bio: "With over 10 years in the tech industry, Alice leads the vision and strategy.",
      //   photo: "/images/alice.jpg", // Replace with actual image path
      // },
      {
        name: "Kunal Bhatia",
        role: "CEO & Founder",
        bio: "Kunal is a Software Engineer committed to building the next generation of tech tools which guide people toward safer, healthier, and happier lives",
        photo: "kunal.png", // Replace with actual image path
      },
      // {
      //   name: "Charlie Davis",
      //   role: "Head of Marketing",
      //   bio: "Charlie brings 8 years of experience in digital marketing and growth strategies.",
      //   photo: "/images/charlie.jpg", // Replace with actual image path
      // },
    ],
    bgColor: "bg-gradient-to-r from-indigo-700 to-purple-700",
    textColor: "text-white",
  },
  {
    id: 14, // Ensure this ID follows your slide numbering
    type: "closing",
    title: "Thank You!",
    description:
      "Join us in revolutionizing Brain-Computer Interface development. Let's build the future together.",
    contactInfo: {
      email: "kunal@kunalis.me",
      website: "https://kunalis.me/",
      social: {
        linkedin: "https://www.linkedin.com/in/kunalbhatia18/",
      },
    },
    bgColor:
      "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
    textColor: "text-white",
  },
];

export default SlideContent;
