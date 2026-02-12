// Site configuration
export const SITE_CONFIG = {
  name: "DailysFlash Technologies",
  description:
    "We craft high-performance digital experiences that transform businesses. From strategy to execution, we deliver web development, mobile apps, AI solutions, and digital transformation services.",
  tagline: "Lightning-Fast Digital Solutions",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://dailysflash.com",
  ogImage: "/images/og-image.png",
  email: "hello@dailysflash.com",
  phone: "+234 813 870 1686",
  address: "Ile Ife, Osun State, Nigeria.",
  socials: {
    twitter: "https://twitter.com/DailysFlash1",
    linkedin: "https://linkedin.com/company/dailysflash",
    github: "https://github.com/damilolajohn6",
    instagram: "https://instagram.com/dailysflash1",
  },
} as const;

// Navigation links
export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  {
    href: "/products",
    label: "Products",
    children: [
      {
        href: "/products/naijaride",
        label: "NaijaRide",
        description: "Modern ride-hailing platform for Nigeria",
      },
      {
        href: "/products/lazarus-system",
        label: "Lazarus System",
        description: "Enterprise resource management solution",
      },
    ],
  },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

// Comprehensive Services Data
export const SERVICES = [
  {
    id: "web-mobile-development",
    slug: "web-mobile-development",
    title: "Web & Mobile App Development",
    shortDescription:
      "Build fast, scalable, and beautiful applications that users love and businesses rely on.",
    description:
      "We create high-performance web and mobile applications that deliver exceptional user experiences and drive business growth. Our full-stack expertise spans from responsive websites to complex enterprise applications and native mobile apps.",
    icon: "Code2",
    color: "from-blue-500 to-cyan-500",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    
    // Detailed overview for the service page
    overview: {
      headline: "Transform Your Digital Presence with Cutting-Edge Development",
      paragraphs: [
        "In today's digital-first world, your web and mobile applications are often the first touchpoint between your business and your customers. At DailysFlash Technologies, we understand that these applications need to do more than just function—they need to captivate, convert, and retain users.",
        "Our development team combines technical excellence with creative problem-solving to build applications that stand out in crowded markets. We don't just write code; we architect solutions that scale with your business, perform under pressure, and evolve with changing user needs.",
        "Whether you're a startup looking to launch your MVP or an enterprise seeking to modernize legacy systems, our approach remains the same: understand your business deeply, design with your users in mind, and build with technologies that ensure long-term success."
      ],
    },

    // Key features with detailed descriptions
    features: [
      {
        title: "Custom Web Applications",
        description: "From single-page applications to complex enterprise platforms, we build custom web solutions using React, Next.js, Vue.js, and other modern frameworks. Our applications are fast, secure, and built to scale.",
        icon: "Globe",
      },
      {
        title: "Progressive Web Apps (PWA)",
        description: "Bridge the gap between web and mobile with PWAs that offer offline functionality, push notifications, and app-like experiences without the need for app store distribution.",
        icon: "Smartphone",
      },
      {
        title: "Native Mobile Development",
        description: "Build truly native experiences for iOS and Android using Swift, Kotlin, or cross-platform solutions like React Native and Flutter. We optimize for performance, battery life, and platform-specific features.",
        icon: "Tablet",
      },
      {
        title: "API Development & Integration",
        description: "Design and build robust RESTful and GraphQL APIs that power your applications. We also specialize in integrating third-party services, payment gateways, and enterprise systems.",
        icon: "Link",
      },
      {
        title: "Real-Time Applications",
        description: "Create engaging real-time experiences with WebSocket implementations, live chat systems, collaborative tools, and streaming applications that keep users connected.",
        icon: "Radio",
      },
      {
        title: "Performance Optimization",
        description: "We obsess over milliseconds. Our performance optimization services include code splitting, lazy loading, CDN configuration, and database query optimization to ensure blazing-fast load times.",
        icon: "Zap",
      },
    ],

    // Technologies used
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "React", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "Node.js", category: "Backend" },
      { name: "React Native", category: "Mobile" },
      { name: "Flutter", category: "Mobile" },
      { name: "PostgreSQL", category: "Database" },
      { name: "MongoDB", category: "Database" },
      { name: "Redis", category: "Caching" },
      { name: "AWS", category: "Cloud" },
      { name: "Docker", category: "DevOps" },
      { name: "GraphQL", category: "API" },
    ],

    // Development process
    process: [
      {
        phase: "Discovery & Planning",
        duration: "1-2 weeks",
        description: "We start by understanding your business goals, target audience, and technical requirements. This phase includes stakeholder interviews, competitive analysis, and technical feasibility assessment.",
        deliverables: ["Project brief", "Technical specification", "Timeline & milestones", "Resource allocation plan"],
      },
      {
        phase: "UX Research & Design",
        duration: "2-4 weeks",
        description: "Our designers create user flows, wireframes, and high-fidelity prototypes. We conduct user testing to validate designs before development begins.",
        deliverables: ["User personas", "Wireframes", "Interactive prototypes", "Design system"],
      },
      {
        phase: "Development Sprints",
        duration: "8-16 weeks",
        description: "Using agile methodology, we develop your application in two-week sprints. You'll receive regular demos and have opportunities to provide feedback throughout the process.",
        deliverables: ["Sprint reviews", "Working software increments", "Code documentation", "Progress reports"],
      },
      {
        phase: "Quality Assurance",
        duration: "2-3 weeks",
        description: "Our QA team conducts comprehensive testing including unit tests, integration tests, performance testing, and security audits to ensure your application is production-ready.",
        deliverables: ["Test reports", "Bug fixes", "Performance benchmarks", "Security audit report"],
      },
      {
        phase: "Launch & Support",
        duration: "Ongoing",
        description: "We handle deployment, monitor performance, and provide ongoing maintenance and support. Our team remains available for updates, optimizations, and new feature development.",
        deliverables: ["Deployment", "Monitoring setup", "Documentation", "Support & maintenance"],
      },
    ],

    // Case studies / Portfolio items
    caseStudies: [
      {
        title: "E-Commerce Platform Redesign",
        client: "FashionHub",
        industry: "Retail",
        challenge: "FashionHub's legacy platform was slow, difficult to maintain, and losing customers to faster competitors.",
        solution: "We rebuilt their platform using Next.js with server-side rendering, implemented a headless commerce architecture, and optimized their checkout flow.",
        results: [
          { metric: "Page Load Time", improvement: "3.2s → 0.8s" },
          { metric: "Conversion Rate", improvement: "+47%" },
          { metric: "Mobile Revenue", improvement: "+62%" },
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      },
      {
        title: "Healthcare Patient Portal",
        client: "MediCare Plus",
        industry: "Healthcare",
        challenge: "Patients struggled to book appointments, access records, and communicate with healthcare providers through the outdated system.",
        solution: "We developed a HIPAA-compliant patient portal with appointment scheduling, secure messaging, and integration with existing EHR systems.",
        results: [
          { metric: "Patient Satisfaction", improvement: "+85%" },
          { metric: "Support Tickets", improvement: "-60%" },
          { metric: "Appointment No-shows", improvement: "-35%" },
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
      },
    ],

    // Frequently Asked Questions
    faqs: [
      {
        question: "How long does it take to build a web or mobile application?",
        answer: "Development timelines vary based on complexity. A simple MVP typically takes 2-3 months, while complex enterprise applications may take 6-12 months. During our discovery phase, we'll provide a detailed timeline based on your specific requirements.",
      },
      {
        question: "Do you provide ongoing maintenance and support?",
        answer: "Yes, we offer flexible maintenance and support packages. This includes bug fixes, security updates, performance monitoring, and feature enhancements. We typically recommend a minimum 6-month support agreement for new applications.",
      },
      {
        question: "How do you ensure the security of applications you build?",
        answer: "Security is built into our development process from day one. We follow OWASP guidelines, conduct regular security audits, implement proper authentication and authorization, encrypt sensitive data, and perform penetration testing before launch.",
      },
      {
        question: "Can you work with our existing development team?",
        answer: "Absolutely. We often work alongside in-house teams, either leading development efforts or providing specialized expertise. We can adapt to your existing workflows, tools, and communication preferences.",
      },
      {
        question: "What's your approach to project communication?",
        answer: "Transparency is key. You'll have a dedicated project manager, access to our project management tools, and regular status updates. We typically hold weekly progress meetings and provide demos at the end of each sprint.",
      },
    ],

    // Pricing information
    pricing: {
      startingAt: "$25,000",
      note: "Project costs vary based on scope, complexity, and timeline. Contact us for a detailed quote.",
      factors: [
        "Application complexity and features",
        "Design requirements",
        "Number of platforms (web, iOS, Android)",
        "Third-party integrations",
        "Ongoing support needs",
      ],
    },

    // Related services
    relatedServices: ["ui-ux-design", "cloud-devops", "ai-machine-learning"],

    // Stats
    stats: [
      { value: "200+", label: "Apps Delivered" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "4.9/5", label: "Client Rating" },
      { value: "< 24h", label: "Response Time" },
    ],
  },

  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design & Branding",
    shortDescription:
      "Create memorable experiences with stunning, user-centered design that converts visitors into customers.",
    description:
      "Our design team crafts beautiful, intuitive interfaces that delight users and strengthen your brand. We combine aesthetics with functionality to create experiences that not only look amazing but also drive measurable business results.",
    icon: "Palette",
    color: "from-pink-500 to-rose-500",
    heroImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    
    overview: {
      headline: "Design That Connects, Converts, and Captivates",
      paragraphs: [
        "Great design is invisible—it simply works. Users don't notice the hours of research, iteration, and refinement that go into creating seamless experiences. They just know that your product feels right, looks professional, and helps them accomplish their goals effortlessly.",
        "At DailysFlash Technologies, we believe design is a strategic business tool, not just decoration. Our design process is rooted in research and data, ensuring every decision—from color choices to button placement—serves your business objectives and user needs.",
        "Whether you're launching a new product, refreshing an existing brand, or optimizing conversion rates, our design team brings the expertise and creativity needed to make your digital presence unforgettable."
      ],
    },

    features: [
      {
        title: "User Experience (UX) Research",
        description: "We conduct comprehensive user research including interviews, surveys, usability testing, and analytics analysis to understand your users' needs, behaviors, and pain points.",
        icon: "Search",
      },
      {
        title: "User Interface (UI) Design",
        description: "Our designers create pixel-perfect interfaces that balance beauty with usability. Every element is purposefully designed to guide users toward their goals and your business objectives.",
        icon: "Layout",
      },
      {
        title: "Design Systems",
        description: "We build comprehensive design systems with reusable components, style guides, and documentation that ensure consistency across all touchpoints and speed up future development.",
        icon: "Grid",
      },
      {
        title: "Brand Identity Design",
        description: "From logo design to complete brand guidelines, we create visual identities that communicate your values, differentiate you from competitors, and resonate with your target audience.",
        icon: "Sparkles",
      },
      {
        title: "Prototyping & Testing",
        description: "We create interactive prototypes that let you experience your product before development begins. User testing validates our designs and identifies opportunities for improvement.",
        icon: "MousePointer",
      },
      {
        title: "Motion Design",
        description: "Thoughtful animation and micro-interactions make interfaces feel alive and responsive. We design motion that guides attention, provides feedback, and enhances the overall experience.",
        icon: "Play",
      },
    ],

    technologies: [
      { name: "Figma", category: "Design" },
      { name: "Adobe Creative Suite", category: "Design" },
      { name: "Sketch", category: "Design" },
      { name: "Principle", category: "Animation" },
      { name: "After Effects", category: "Animation" },
      { name: "Framer", category: "Prototyping" },
      { name: "Maze", category: "Testing" },
      { name: "Hotjar", category: "Analytics" },
      { name: "Miro", category: "Collaboration" },
      { name: "Notion", category: "Documentation" },
    ],

    process: [
      {
        phase: "Research & Discovery",
        duration: "1-2 weeks",
        description: "We immerse ourselves in your business, industry, and users. This includes stakeholder interviews, competitive analysis, user research, and analytics review.",
        deliverables: ["Research report", "User personas", "Journey maps", "Competitive analysis"],
      },
      {
        phase: "Strategy & Information Architecture",
        duration: "1-2 weeks",
        description: "We define the product strategy, content structure, and user flows that will guide the design process. This creates a solid foundation for all design decisions.",
        deliverables: ["Content strategy", "Site/app architecture", "User flows", "Feature prioritization"],
      },
      {
        phase: "Wireframing & Prototyping",
        duration: "2-3 weeks",
        description: "We create low and high-fidelity wireframes to establish layout, hierarchy, and functionality before investing in visual design.",
        deliverables: ["Wireframes", "Interactive prototypes", "User testing results", "Iteration documentation"],
      },
      {
        phase: "Visual Design",
        duration: "3-4 weeks",
        description: "Our designers bring wireframes to life with color, typography, imagery, and motion. We create designs that align with your brand and resonate with your audience.",
        deliverables: ["UI designs", "Design system", "Asset library", "Animation specifications"],
      },
      {
        phase: "Handoff & Implementation Support",
        duration: "Ongoing",
        description: "We prepare comprehensive documentation for developers and remain available throughout implementation to ensure design integrity is maintained.",
        deliverables: ["Developer handoff", "Design specs", "QA support", "Design iterations"],
      },
    ],

    caseStudies: [
      {
        title: "Banking App Redesign",
        client: "First National Bank",
        industry: "Finance",
        challenge: "The existing mobile banking app had low engagement and poor user reviews, with customers frequently calling support for basic tasks.",
        solution: "We conducted extensive user research, redesigned the entire app experience, and created a comprehensive design system for consistent updates.",
        results: [
          { metric: "App Store Rating", improvement: "2.1 → 4.7" },
          { metric: "Daily Active Users", improvement: "+156%" },
          { metric: "Support Calls", improvement: "-45%" },
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      },
      {
        title: "SaaS Platform UX Overhaul",
        client: "ProjectFlow",
        industry: "Technology",
        challenge: "Users found the project management platform overwhelming and confusing, leading to high churn rates and low feature adoption.",
        solution: "We simplified the interface, improved onboarding, and redesigned key workflows based on user behavior data and feedback.",
        results: [
          { metric: "User Onboarding", improvement: "+78% completion" },
          { metric: "Feature Adoption", improvement: "+92%" },
          { metric: "Customer Churn", improvement: "-34%" },
        ],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80",
      },
    ],

    faqs: [
      {
        question: "What's the difference between UI and UX design?",
        answer: "UX (User Experience) design focuses on the overall feel of the product—how easy and pleasant it is to use. UI (User Interface) design focuses on the visual elements—colors, typography, buttons, and layout. Both are essential for successful products, and our team excels at both.",
      },
      {
        question: "How do you ensure designs will work for our users?",
        answer: "We base every design decision on research and data. This includes user interviews, usability testing, analytics analysis, and A/B testing. We never design based on assumptions—every choice is validated with real user feedback.",
      },
      {
        question: "Can you work with our existing brand guidelines?",
        answer: "Absolutely. We often work within established brand systems, extending them thoughtfully for digital applications. If your guidelines need updating for digital use, we can help with that too.",
      },
      {
        question: "What deliverables will we receive?",
        answer: "Typical deliverables include user research reports, wireframes, interactive prototypes, high-fidelity designs, design system documentation, and developer handoff files. We customize deliverables based on your needs.",
      },
      {
        question: "How long does a typical design project take?",
        answer: "A focused product design project typically takes 6-10 weeks. Brand identity projects usually take 4-8 weeks. Complex design systems or multi-product design can take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      },
    ],

    pricing: {
      startingAt: "$15,000",
      note: "Design project costs vary based on scope and complexity. We offer both project-based and retainer pricing models.",
      factors: [
        "Scope of user research",
        "Number of unique screens/pages",
        "Design system requirements",
        "Brand identity needs",
        "Prototyping and testing depth",
      ],
    },

    relatedServices: ["web-mobile-development", "digital-marketing", "ecommerce-software"],

    stats: [
      { value: "500+", label: "Projects Designed" },
      { value: "35", label: "Design Awards" },
      { value: "98%", label: "Client Satisfaction" },
      { value: "12", label: "Senior Designers" },
    ],
  },

  {
    id: "digital-marketing",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    shortDescription:
      "Grow your online presence and reach your target audience with data-driven marketing strategies.",
    description:
      "We help businesses grow through strategic digital marketing campaigns and SEO optimization. Our data-driven approach combines creative content with technical expertise to maximize ROI and drive sustainable growth.",
    icon: "TrendingUp",
    color: "from-green-500 to-emerald-500",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    
    overview: {
      headline: "Growth Marketing That Delivers Measurable Results",
      paragraphs: [
        "In the noisy digital landscape, getting noticed requires more than just being present—it requires being strategic. At DailysFlash Technologies, we combine creativity with analytics to create marketing campaigns that cut through the noise and reach the right people at the right time.",
        "Our approach goes beyond vanity metrics. We focus on the numbers that matter to your business: qualified leads, conversion rates, customer acquisition costs, and lifetime value. Every campaign we run is designed to move these needles in the right direction.",
        "Whether you're looking to dominate search rankings, build a social media presence, or create content that converts, our marketing team has the expertise and tools to make it happen. We become an extension of your team, invested in your success."
      ],
    },

    features: [
      {
        title: "Search Engine Optimization (SEO)",
        description: "We improve your organic visibility through technical SEO, content optimization, link building, and local SEO strategies. Our approach follows white-hat practices that deliver sustainable, long-term results.",
        icon: "Search",
      },
      {
        title: "Content Marketing",
        description: "From blog posts and whitepapers to videos and infographics, we create content that educates, entertains, and converts. Our content strategies are designed to attract, engage, and retain your target audience.",
        icon: "FileText",
      },
      {
        title: "Paid Advertising (PPC)",
        description: "We manage high-performing campaigns across Google Ads, Meta Ads, LinkedIn, and other platforms. Our data-driven approach maximizes ROAS while minimizing wasted spend.",
        icon: "DollarSign",
      },
      {
        title: "Social Media Marketing",
        description: "Build your brand presence across social platforms with strategic content, community management, and targeted advertising that drives engagement and conversions.",
        icon: "Share2",
      },
      {
        title: "Email Marketing",
        description: "We design and execute email campaigns that nurture leads, retain customers, and drive revenue. From automation workflows to newsletter strategy, we've got you covered.",
        icon: "Mail",
      },
      {
        title: "Analytics & Reporting",
        description: "We provide transparent reporting with actionable insights. Track your ROI, understand user behavior, and make data-driven decisions with our comprehensive analytics dashboards.",
        icon: "BarChart3",
      },
    ],

    technologies: [
      { name: "Google Analytics 4", category: "Analytics" },
      { name: "SEMrush", category: "SEO" },
      { name: "Ahrefs", category: "SEO" },
      { name: "Google Ads", category: "Advertising" },
      { name: "Meta Business Suite", category: "Social" },
      { name: "HubSpot", category: "Automation" },
      { name: "Mailchimp", category: "Email" },
      { name: "Hootsuite", category: "Social" },
      { name: "Google Search Console", category: "SEO" },
      { name: "Data Studio", category: "Reporting" },
    ],

    process: [
      {
        phase: "Audit & Analysis",
        duration: "1-2 weeks",
        description: "We conduct a comprehensive audit of your current digital presence, analyze competitors, and identify opportunities for growth.",
        deliverables: ["Digital audit report", "Competitive analysis", "Opportunity assessment", "Keyword research"],
      },
      {
        phase: "Strategy Development",
        duration: "1-2 weeks",
        description: "Based on our analysis, we develop a customized marketing strategy aligned with your business goals, budget, and timeline.",
        deliverables: ["Marketing strategy", "Channel recommendations", "Content calendar", "KPI framework"],
      },
      {
        phase: "Implementation",
        duration: "Ongoing",
        description: "We execute the strategy across chosen channels, creating content, launching campaigns, and optimizing your digital presence.",
        deliverables: ["Campaign launches", "Content creation", "Technical optimizations", "Ad management"],
      },
      {
        phase: "Optimization",
        duration: "Ongoing",
        description: "We continuously monitor performance, run A/B tests, and optimize campaigns based on data to improve results over time.",
        deliverables: ["Performance analysis", "A/B test results", "Optimization recommendations", "Strategy adjustments"],
      },
      {
        phase: "Reporting & Insights",
        duration: "Monthly",
        description: "We provide detailed reports on campaign performance, ROI, and actionable recommendations for continued growth.",
        deliverables: ["Monthly reports", "ROI analysis", "Insights & recommendations", "Strategy review"],
      },
    ],

    caseStudies: [
      {
        title: "B2B Lead Generation Campaign",
        client: "TechSolutions Inc.",
        industry: "Technology",
        challenge: "The company struggled to generate qualified leads and had high customer acquisition costs from outdated marketing tactics.",
        solution: "We implemented an integrated strategy combining SEO, content marketing, and LinkedIn advertising with a focus on thought leadership.",
        results: [
          { metric: "Qualified Leads", improvement: "+340%" },
          { metric: "Cost Per Lead", improvement: "-65%" },
          { metric: "Organic Traffic", improvement: "+280%" },
        ],
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      },
      {
        title: "E-commerce SEO Transformation",
        client: "HomeStyle Furnishings",
        industry: "Retail",
        challenge: "Despite having quality products, the company was virtually invisible in search results and relied heavily on paid advertising.",
        solution: "We restructured their site architecture, optimized product pages, and built a content hub that attracted high-intent organic traffic.",
        results: [
          { metric: "Organic Revenue", improvement: "+425%" },
          { metric: "Keyword Rankings", improvement: "1,200+ in top 10" },
          { metric: "Ad Dependency", improvement: "-50%" },
        ],
        image: "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=800&q=80",
      },
    ],

    faqs: [
      {
        question: "How long does it take to see results from SEO?",
        answer: "SEO is a long-term investment. You'll typically start seeing improvements in 3-6 months, with significant results in 6-12 months. However, some quick wins can be achieved earlier through technical fixes and content optimization.",
      },
      {
        question: "What's a realistic marketing budget for a growing business?",
        answer: "Marketing budgets vary widely based on industry and goals. We typically recommend allocating 7-15% of revenue to marketing for growth-stage companies. We can work with various budget levels and prioritize activities with the highest potential ROI.",
      },
      {
        question: "Do you guarantee specific results?",
        answer: "We don't guarantee specific rankings or results—anyone who does is likely using risky tactics. What we do guarantee is transparent reporting, ethical practices, and a data-driven approach designed to deliver the best possible outcomes.",
      },
      {
        question: "How do you measure marketing success?",
        answer: "We define KPIs based on your business goals—whether that's leads, sales, brand awareness, or engagement. We track metrics like organic traffic, conversion rates, cost per acquisition, ROAS, and ultimately, revenue impact.",
      },
      {
        question: "Can you work with our internal marketing team?",
        answer: "Yes! We often collaborate with in-house teams, filling capability gaps and providing specialized expertise. We can work as an extension of your team or handle specific channels while your team focuses on others.",
      },
    ],

    pricing: {
      startingAt: "$3,000/month",
      note: "Marketing retainers vary based on scope and channels. Project-based work is also available.",
      factors: [
        "Number of marketing channels",
        "Content production volume",
        "Advertising budget management",
        "Reporting frequency",
        "Campaign complexity",
      ],
    },

    relatedServices: ["ui-ux-design", "web-mobile-development", "ecommerce-software"],

    stats: [
      { value: "$50M+", label: "Revenue Generated" },
      { value: "2.5M+", label: "Leads Delivered" },
      { value: "15x", label: "Average ROAS" },
      { value: "150+", label: "Clients Served" },
    ],
  },

  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud Solutions & DevOps",
    shortDescription:
      "Scale your infrastructure with modern cloud architecture and DevOps practices that ensure reliability.",
    description:
      "We architect and manage cloud infrastructure that scales with your business. Our DevOps practices ensure fast, reliable deployments, optimal performance, and robust security—so you can focus on building great products.",
    icon: "Cloud",
    color: "from-sky-500 to-blue-500",
    heroImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80",
    
    overview: {
      headline: "Infrastructure That Scales When You Do",
      paragraphs: [
        "The cloud has revolutionized how businesses operate, but realizing its full potential requires expertise. Misconfigured infrastructure leads to security vulnerabilities, cost overruns, and performance issues. At DailysFlash Technologies, we help you get the cloud right from the start.",
        "Our cloud architects design infrastructure that's secure, scalable, and cost-optimized. We implement DevOps practices that enable your development team to ship faster with confidence. From container orchestration to CI/CD pipelines, we build the foundation that lets your engineering team thrive.",
        "Whether you're migrating from on-premise, optimizing existing cloud infrastructure, or building cloud-native applications, our team brings the expertise to ensure your infrastructure becomes a competitive advantage, not a bottleneck."
      ],
    },

    features: [
      {
        title: "Cloud Architecture Design",
        description: "We design scalable, secure, and cost-efficient cloud architectures on AWS, Google Cloud, or Azure. Our solutions are built for high availability and disaster recovery.",
        icon: "Box",
      },
      {
        title: "Cloud Migration",
        description: "Migrate your existing applications and data to the cloud with minimal downtime and risk. We handle assessment, planning, execution, and optimization.",
        icon: "ArrowRightLeft",
      },
      {
        title: "Kubernetes & Container Orchestration",
        description: "Deploy and manage containerized applications at scale with Kubernetes. We handle cluster setup, networking, security, and ongoing management.",
        icon: "Boxes",
      },
      {
        title: "CI/CD Pipeline Implementation",
        description: "Automate your development workflow from code commit to production deployment. We build pipelines that enable rapid, reliable releases.",
        icon: "GitBranch",
      },
      {
        title: "Infrastructure as Code",
        description: "We codify your infrastructure using Terraform, CloudFormation, or Pulumi—enabling version control, reproducibility, and disaster recovery.",
        icon: "FileCode",
      },
      {
        title: "24/7 Monitoring & Support",
        description: "We implement comprehensive monitoring, alerting, and incident response procedures. Our team is available around the clock to keep your systems running.",
        icon: "Activity",
      },
    ],

    technologies: [
      { name: "AWS", category: "Cloud" },
      { name: "Google Cloud", category: "Cloud" },
      { name: "Microsoft Azure", category: "Cloud" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "Docker", category: "Containers" },
      { name: "Terraform", category: "IaC" },
      { name: "GitHub Actions", category: "CI/CD" },
      { name: "Jenkins", category: "CI/CD" },
      { name: "Prometheus", category: "Monitoring" },
      { name: "Grafana", category: "Monitoring" },
      { name: "Datadog", category: "Observability" },
      { name: "ArgoCD", category: "GitOps" },
    ],

    process: [
      {
        phase: "Assessment & Planning",
        duration: "1-2 weeks",
        description: "We evaluate your current infrastructure, understand your requirements, and develop a detailed migration or implementation plan.",
        deliverables: ["Infrastructure audit", "Requirements document", "Architecture proposal", "Cost analysis"],
      },
      {
        phase: "Architecture Design",
        duration: "2-3 weeks",
        description: "Our architects design your cloud infrastructure with a focus on scalability, security, cost optimization, and operational excellence.",
        deliverables: ["Architecture diagrams", "Security design", "Cost projections", "Disaster recovery plan"],
      },
      {
        phase: "Implementation",
        duration: "4-12 weeks",
        description: "We build out your infrastructure using infrastructure as code, ensuring reproducibility and documentation at every step.",
        deliverables: ["Deployed infrastructure", "IaC repositories", "CI/CD pipelines", "Runbooks"],
      },
      {
        phase: "Migration & Testing",
        duration: "2-6 weeks",
        description: "For migration projects, we carefully move workloads with thorough testing to ensure everything works correctly in the new environment.",
        deliverables: ["Migration execution", "Testing reports", "Performance validation", "Rollback procedures"],
      },
      {
        phase: "Operations & Optimization",
        duration: "Ongoing",
        description: "We provide ongoing management, monitoring, and optimization to ensure your infrastructure remains secure, performant, and cost-effective.",
        deliverables: ["Monitoring dashboards", "Incident response", "Cost optimization", "Capacity planning"],
      },
    ],

    caseStudies: [
      {
        title: "Enterprise Cloud Migration",
        client: "Global Insurance Co.",
        industry: "Insurance",
        challenge: "The company's aging on-premise infrastructure was costly to maintain, difficult to scale, and lacked disaster recovery capabilities.",
        solution: "We migrated 200+ applications to AWS over 18 months, implementing modern architecture patterns, auto-scaling, and multi-region redundancy.",
        results: [
          { metric: "Infrastructure Costs", improvement: "-40%" },
          { metric: "Deployment Frequency", improvement: "Monthly → Daily" },
          { metric: "System Availability", improvement: "99.9% → 99.99%" },
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      },
      {
        title: "Kubernetes Platform Implementation",
        client: "FinTech Startup",
        industry: "Finance",
        challenge: "The startup needed a scalable platform to deploy microservices but lacked the in-house expertise to implement and manage Kubernetes.",
        solution: "We built a production-ready Kubernetes platform with automated deployments, service mesh, and comprehensive observability.",
        results: [
          { metric: "Deployment Time", improvement: "Hours → Minutes" },
          { metric: "Resource Utilization", improvement: "+65%" },
          { metric: "Developer Productivity", improvement: "+80%" },
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      },
    ],

    faqs: [
      {
        question: "Which cloud provider do you recommend?",
        answer: "It depends on your specific needs. AWS offers the broadest service catalog, Google Cloud excels in data analytics and machine learning, and Azure integrates well with Microsoft ecosystems. We'll recommend the best fit based on your requirements, team expertise, and existing investments.",
      },
      {
        question: "How do you ensure cloud security?",
        answer: "Security is built into every layer of our implementations. We follow the principle of least privilege, implement proper network segmentation, encrypt data at rest and in transit, enable comprehensive logging, and conduct regular security reviews.",
      },
      {
        question: "Can you help optimize our current cloud costs?",
        answer: "Absolutely. Cloud cost optimization is one of our specialties. We analyze your current usage, identify waste, right-size resources, implement reserved capacity where appropriate, and set up ongoing cost monitoring and alerts.",
      },
      {
        question: "Do you provide 24/7 support?",
        answer: "Yes, we offer 24/7 support packages for production infrastructure. This includes monitoring, alerting, and incident response with defined SLAs. We also provide on-call coverage for critical issues.",
      },
      {
        question: "How do you handle knowledge transfer?",
        answer: "We believe in empowering your team. Throughout the engagement, we provide documentation, training sessions, and pair programming opportunities. Our goal is to leave your team confident in managing the infrastructure we build.",
      },
    ],

    pricing: {
      startingAt: "$10,000",
      note: "Cloud projects are typically priced based on scope. Ongoing management is billed monthly.",
      factors: [
        "Infrastructure complexity",
        "Number of environments",
        "Migration scope",
        "Support level (9x5 vs 24x7)",
        "Cloud spend under management",
      ],
    },

    relatedServices: ["web-mobile-development", "ai-machine-learning", "ecommerce-software"],

    stats: [
      { value: "$10M+", label: "Cloud Costs Saved" },
      { value: "99.99%", label: "Uptime Achieved" },
      { value: "500+", label: "Deployments/Month" },
      { value: "50+", label: "Migrations Completed" },
    ],
  },

  {
    id: "ai-machine-learning",
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDescription:
      "Leverage artificial intelligence to automate processes, gain insights, and create competitive advantages.",
    description:
      "We integrate artificial intelligence and machine learning into your products and workflows. From chatbots to predictive analytics, we help you harness the power of AI to automate processes, personalize experiences, and make better decisions.",
    icon: "Brain",
    color: "from-violet-500 to-purple-500",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=80",
    
    overview: {
      headline: "AI-Powered Solutions for Real Business Impact",
      paragraphs: [
        "Artificial intelligence is no longer a futuristic concept—it's a practical tool that's reshaping industries today. But the hype around AI can make it difficult to separate genuine opportunities from unrealistic promises. At DailysFlash Technologies, we focus on AI applications that deliver real, measurable business value.",
        "Our AI team combines deep technical expertise with business acumen. We don't just build models—we build solutions. Whether you need to automate customer service, predict maintenance needs, personalize user experiences, or extract insights from unstructured data, we'll help you navigate the complexities of AI implementation.",
        "From initial proof of concept to production deployment, we guide you through every step of the AI journey. We'll help you understand what's possible, what's practical, and what will deliver the best return on your investment."
      ],
    },

    features: [
      {
        title: "Conversational AI & Chatbots",
        description: "Build intelligent chatbots and virtual assistants that understand natural language, handle complex queries, and integrate with your existing systems.",
        icon: "MessageSquare",
      },
      {
        title: "Predictive Analytics",
        description: "Use machine learning to forecast trends, predict customer behavior, optimize pricing, and make data-driven decisions with confidence.",
        icon: "LineChart",
      },
      {
        title: "Computer Vision",
        description: "Extract information from images and videos for applications like quality inspection, facial recognition, document processing, and visual search.",
        icon: "Eye",
      },
      {
        title: "Natural Language Processing",
        description: "Analyze text data at scale for sentiment analysis, content classification, entity extraction, and automated summarization.",
        icon: "Type",
      },
      {
        title: "Recommendation Engines",
        description: "Personalize user experiences with AI-powered recommendations that increase engagement, conversions, and customer lifetime value.",
        icon: "Sparkles",
      },
      {
        title: "Process Automation",
        description: "Automate repetitive tasks and workflows using AI, freeing your team to focus on high-value activities that require human creativity.",
        icon: "Workflow",
      },
    ],

    technologies: [
      { name: "OpenAI / GPT", category: "LLM" },
      { name: "LangChain", category: "Framework" },
      { name: "Python", category: "Language" },
      { name: "TensorFlow", category: "ML Framework" },
      { name: "PyTorch", category: "ML Framework" },
      { name: "Hugging Face", category: "Models" },
      { name: "Pinecone", category: "Vector DB" },
      { name: "AWS SageMaker", category: "MLOps" },
      { name: "Google Vertex AI", category: "MLOps" },
      { name: "Scikit-learn", category: "ML Library" },
    ],

    process: [
      {
        phase: "Discovery & Feasibility",
        duration: "1-2 weeks",
        description: "We evaluate your use case, assess data availability and quality, and determine the feasibility and potential ROI of an AI solution.",
        deliverables: ["Use case analysis", "Data assessment", "Feasibility report", "ROI projections"],
      },
      {
        phase: "Proof of Concept",
        duration: "2-4 weeks",
        description: "We build a quick proof of concept to validate the approach and demonstrate the potential value before committing to full development.",
        deliverables: ["Working prototype", "Performance metrics", "Technical assessment", "Go/no-go recommendation"],
      },
      {
        phase: "Development & Training",
        duration: "4-12 weeks",
        description: "We develop the production solution, train and fine-tune models, and build the necessary infrastructure for deployment.",
        deliverables: ["Trained models", "API endpoints", "Integration code", "Documentation"],
      },
      {
        phase: "Testing & Validation",
        duration: "2-3 weeks",
        description: "We rigorously test the solution for accuracy, performance, edge cases, and potential biases before production deployment.",
        deliverables: ["Test reports", "Accuracy metrics", "Bias assessment", "User acceptance testing"],
      },
      {
        phase: "Deployment & Monitoring",
        duration: "Ongoing",
        description: "We deploy the solution to production, implement monitoring for model performance, and provide ongoing maintenance and improvement.",
        deliverables: ["Production deployment", "Monitoring dashboards", "Retraining pipelines", "Performance reports"],
      },
    ],

    caseStudies: [
      {
        title: "Customer Service AI",
        client: "E-commerce Giant",
        industry: "Retail",
        challenge: "The company's support team was overwhelmed with repetitive queries, leading to long wait times and frustrated customers.",
        solution: "We built an AI-powered chatbot that handles 80% of queries automatically while seamlessly escalating complex issues to human agents.",
        results: [
          { metric: "Support Tickets", improvement: "-70%" },
          { metric: "Response Time", improvement: "Hours → Seconds" },
          { metric: "Customer Satisfaction", improvement: "+35%" },
        ],
        image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      },
      {
        title: "Predictive Maintenance System",
        client: "Manufacturing Corp",
        industry: "Manufacturing",
        challenge: "Unplanned equipment failures were causing costly production downtime and missed delivery deadlines.",
        solution: "We developed a machine learning system that analyzes sensor data to predict equipment failures before they occur.",
        results: [
          { metric: "Unplanned Downtime", improvement: "-85%" },
          { metric: "Maintenance Costs", improvement: "-40%" },
          { metric: "Equipment Lifespan", improvement: "+25%" },
        ],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      },
    ],

    faqs: [
      {
        question: "Do we need a lot of data to use AI?",
        answer: "It depends on the use case. Some AI applications require large datasets for training, while others can leverage pre-trained models and transfer learning. We'll assess your data situation and recommend the best approach during our discovery phase.",
      },
      {
        question: "How do you ensure AI systems are fair and unbiased?",
        answer: "We take AI ethics seriously. We evaluate training data for biases, implement fairness metrics, and conduct regular audits of model outputs. We also design systems with human oversight for sensitive decisions.",
      },
      {
        question: "Can AI integrate with our existing systems?",
        answer: "Yes, we design AI solutions to integrate seamlessly with your existing tech stack. Whether that's CRM systems, databases, or custom applications, we build APIs and connectors to ensure smooth data flow.",
      },
      {
        question: "What about data privacy with AI?",
        answer: "We implement privacy-preserving techniques and ensure compliance with regulations like GDPR. We can deploy models on your infrastructure, use data anonymization, and implement strict access controls.",
      },
      {
        question: "How long before we see ROI from AI investments?",
        answer: "ROI timelines vary by use case. Simple automation projects might show returns within weeks, while complex predictive systems might take 6-12 months to demonstrate full value. We focus on quick wins while building toward larger goals.",
      },
    ],

    pricing: {
      startingAt: "$30,000",
      note: "AI projects vary significantly in scope. We offer fixed-price projects and ongoing development retainers.",
      factors: [
        "Use case complexity",
        "Data preparation requirements",
        "Model development vs. API integration",
        "Infrastructure needs",
        "Ongoing monitoring requirements",
      ],
    },

    relatedServices: ["web-mobile-development", "cloud-devops", "ecommerce-software"],

    stats: [
      { value: "100+", label: "AI Solutions Deployed" },
      { value: "85%", label: "Avg. Efficiency Gain" },
      { value: "$25M+", label: "Client Savings" },
      { value: "15", label: "AI Engineers" },
    ],
  },

  {
    id: "ecommerce-software",
    slug: "ecommerce-software",
    title: "E-commerce & Custom Software",
    shortDescription:
      "Build powerful e-commerce platforms and custom software solutions tailored to your unique business needs.",
    description:
      "We develop custom e-commerce solutions and enterprise software that perfectly fit your business processes. From online stores to complex management systems, we create software that drives efficiency, revenue, and competitive advantage.",
    icon: "ShoppingCart",
    color: "from-orange-500 to-amber-500",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
    
    overview: {
      headline: "Software Built for Your Business, Not the Other Way Around",
      paragraphs: [
        "Off-the-shelf software forces you to adapt your business to its limitations. Custom software does the opposite—it adapts to your unique processes, workflows, and requirements. At DailysFlash Technologies, we build software that fits like a glove.",
        "Our e-commerce solutions go beyond basic online stores. We build platforms that integrate with your inventory systems, support complex pricing models, provide personalized shopping experiences, and scale with your growth. Whether you're B2C, B2B, or multi-channel, we've got you covered.",
        "For custom enterprise software, we take the time to understand your business deeply. We map your processes, identify inefficiencies, and design solutions that streamline operations and provide the insights you need to make better decisions."
      ],
    },

    features: [
      {
        title: "Custom E-commerce Platforms",
        description: "Build unique online shopping experiences tailored to your products, customers, and business model. We handle everything from catalog management to checkout optimization.",
        icon: "ShoppingBag",
      },
      {
        title: "Shopify & WooCommerce Development",
        description: "Get the most out of popular platforms with custom themes, apps, and integrations that extend functionality and differentiate your store.",
        icon: "Store",
      },
      {
        title: "Payment & Checkout Optimization",
        description: "Implement secure, frictionless payment experiences with multiple payment methods, one-click checkout, and abandoned cart recovery.",
        icon: "CreditCard",
      },
      {
        title: "Inventory & Order Management",
        description: "Build or integrate systems that manage inventory across channels, automate order processing, and provide real-time visibility into operations.",
        icon: "Package",
      },
      {
        title: "CRM & ERP Systems",
        description: "Develop custom CRM and ERP solutions that centralize data, automate workflows, and provide the insights you need to run your business effectively.",
        icon: "Users",
      },
      {
        title: "Business Process Automation",
        description: "Automate repetitive tasks and workflows with custom software that saves time, reduces errors, and frees your team for higher-value work.",
        icon: "Cog",
      },
    ],

    technologies: [
      { name: "Shopify", category: "E-commerce" },
      { name: "WooCommerce", category: "E-commerce" },
      { name: "Medusa", category: "E-commerce" },
      { name: "Stripe", category: "Payments" },
      { name: "PayPal", category: "Payments" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Caching" },
      { name: "Elasticsearch", category: "Search" },
      { name: "Next.js", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "GraphQL", category: "API" },
      { name: "Prisma", category: "ORM" },
    ],

    process: [
      {
        phase: "Business Analysis",
        duration: "1-2 weeks",
        description: "We map your business processes, understand your workflows, and identify requirements and opportunities for the software solution.",
        deliverables: ["Process documentation", "Requirements specification", "Gap analysis", "Solution proposal"],
      },
      {
        phase: "Solution Design",
        duration: "2-3 weeks",
        description: "We design the system architecture, user interfaces, and integration points based on your requirements and industry best practices.",
        deliverables: ["System architecture", "UI/UX designs", "Data models", "Integration specifications"],
      },
      {
        phase: "Development",
        duration: "8-20 weeks",
        description: "We build the solution using agile methodology, delivering working software incrementally and incorporating feedback throughout.",
        deliverables: ["Working software", "API documentation", "User guides", "Admin documentation"],
      },
      {
        phase: "Data Migration & Integration",
        duration: "2-4 weeks",
        description: "We migrate data from existing systems and integrate with third-party services like payment processors, shipping carriers, and accounting software.",
        deliverables: ["Data migration", "System integrations", "Validation testing", "Rollback procedures"],
      },
      {
        phase: "Launch & Support",
        duration: "Ongoing",
        description: "We handle deployment, provide training, and offer ongoing support and maintenance to ensure long-term success.",
        deliverables: ["Production deployment", "User training", "Support documentation", "Ongoing maintenance"],
      },
    ],

    caseStudies: [
      {
        title: "B2B E-commerce Platform",
        client: "Industrial Supplies Co.",
        industry: "Manufacturing",
        challenge: "The company relied on phone and email orders, leading to errors, slow processing, and limited visibility into customer buying patterns.",
        solution: "We built a custom B2B platform with customer-specific pricing, bulk ordering, approval workflows, and integration with their ERP system.",
        results: [
          { metric: "Order Processing Time", improvement: "-75%" },
          { metric: "Order Errors", improvement: "-95%" },
          { metric: "Online Revenue", improvement: "+180%" },
        ],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      },
      {
        title: "Custom Operations Management System",
        client: "Logistics Company",
        industry: "Logistics",
        challenge: "Disconnected systems and manual processes made it impossible to track shipments, manage inventory, and provide accurate delivery estimates.",
        solution: "We developed an integrated operations platform that unified data, automated workflows, and provided real-time visibility across the supply chain.",
        results: [
          { metric: "Operational Efficiency", improvement: "+60%" },
          { metric: "Customer Satisfaction", improvement: "+45%" },
          { metric: "Manual Data Entry", improvement: "-90%" },
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
      },
    ],

    faqs: [
      {
        question: "Should we build custom software or buy an existing solution?",
        answer: "It depends on how unique your requirements are. If off-the-shelf software meets 80%+ of your needs, it's often more cost-effective. If you have unique processes or competitive differentiation requirements, custom software may be the better investment.",
      },
      {
        question: "How much does custom software cost?",
        answer: "Custom software projects typically range from $50,000 to $500,000+, depending on complexity. We provide detailed estimates after understanding your requirements. We can also suggest MVP approaches that reduce initial investment.",
      },
      {
        question: "How do you handle changes during development?",
        answer: "We use agile methodology, which embraces change. We work in sprints, deliver working software frequently, and incorporate feedback throughout. While major scope changes may affect timeline and budget, we're flexible in accommodating evolving requirements.",
      },
      {
        question: "Can you integrate with our existing systems?",
        answer: "Yes, integration is a core part of what we do. We've integrated with hundreds of systems including ERPs, CRMs, accounting software, payment processors, shipping carriers, and custom legacy systems.",
      },
      {
        question: "Who owns the software you build?",
        answer: "You do. You own all custom code, designs, and intellectual property we create for you. We provide complete source code and documentation. You're never locked in to working with us.",
      },
    ],

    pricing: {
      startingAt: "$50,000",
      note: "Custom software projects are priced based on scope and complexity. We offer fixed-price and time & materials models.",
      factors: [
        "System complexity",
        "Number of integrations",
        "Data migration requirements",
        "Customization depth",
        "Training and support needs",
      ],
    },

    relatedServices: ["web-mobile-development", "ui-ux-design", "cloud-devops"],

    stats: [
      { value: "$100M+", label: "E-commerce GMV" },
      { value: "75+", label: "Custom Solutions" },
      { value: "99.9%", label: "Platform Uptime" },
      { value: "50+", label: "Integrations Built" },
    ],
  },
] as const;

// Products data
// Products data - Comprehensive content
export const PRODUCTS = [
  {
    id: "naijaride",
    slug: "naijaride",
    name: "NaijaRide",
    tagline: "The Future of Ride-Hailing in Nigeria",
    shortDescription:
      "A modern, feature-rich ride-hailing platform designed specifically for the Nigerian market with local payment options and safety features.",
    description:
      "NaijaRide is revolutionizing urban transportation in Nigeria. Built from the ground up to address the unique challenges of the Nigerian market, it combines cutting-edge technology with deep local understanding to create a ride-hailing experience that truly works for Nigerians.",
    heroImage: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
    logo: "/images/products/naijaride-logo.svg",
    color: "#10B981",
    status: "Active" as const,
    website: "https://naijaride.com",
    appStore: "https://apps.apple.com/app/naijaride",
    playStore: "https://play.google.com/store/apps/details?id=com.naijaride",
    launchDate: "2023",
    stats: [
      { value: "500K+", label: "Active Users" },
      { value: "2M+", label: "Rides Completed" },
      { value: "15K+", label: "Active Drivers" },
      { value: "25+", label: "Cities Covered" },
    ],
    overview: {
      title: "Built for Nigeria, Powered by Innovation",
      content: `Nigeria's transportation landscape is unique. From the bustling streets of Lagos to the growing cities of Abuja, Port Harcourt, and beyond, Nigerians face daily challenges in getting from point A to point B safely, affordably, and reliably.

NaijaRide was born from a simple observation: existing ride-hailing solutions weren't designed with Nigeria in mind. They struggled with local payment preferences, couldn't handle network connectivity issues gracefully, and didn't address the safety concerns that matter most to Nigerian riders.

We set out to build something different—a platform that embraces the reality of Nigerian infrastructure while delivering a world-class user experience. The result is NaijaRide: fast, reliable, and proudly Nigerian.

Today, NaijaRide serves over 500,000 active users across 25 Nigerian cities, completing more than 50,000 rides daily. Our drivers earn competitive incomes while providing safe, comfortable transportation to their communities.`,
    },
    features: [
      {
        title: "Real-Time GPS Tracking",
        description:
          "Track your ride in real-time with accurate GPS positioning. Share your trip with family and friends for added peace of mind.",
        icon: "MapPin",
      },
      {
        title: "Multiple Payment Options",
        description:
          "Pay the way you prefer—cash, card, bank transfer, or mobile money. We support all major Nigerian banks and payment providers.",
        icon: "CreditCard",
      },
      {
        title: "Safety First",
        description:
          "SOS button, driver verification, trip sharing, and 24/7 support. Your safety is our top priority on every ride.",
        icon: "Shield",
      },
      {
        title: "Offline Booking",
        description:
          "Poor network? No problem. Book rides even with limited connectivity—perfect for Nigeria's variable network conditions.",
        icon: "WifiOff",
      },
      {
        title: "Fair Pricing",
        description:
          "Transparent, upfront pricing with no hidden fees. Our smart algorithm ensures fair rates for riders and drivers alike.",
        icon: "Calculator",
      },
      {
        title: "Driver Ratings",
        description:
          "Rate your driver and see their ratings before booking. We maintain high standards through community feedback.",
        icon: "Star",
      },
    ],
    platforms: [
      {
        name: "Rider App",
        description:
          "The NaijaRide rider app makes booking a ride effortless. Available on iOS and Android with an intuitive interface designed for speed and ease of use.",
        features: [
          "One-tap booking",
          "Saved locations",
          "Ride history",
          "In-app messaging",
          "Multiple payment methods",
          "Trip sharing",
        ],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      },
      {
        name: "Driver App",
        description:
          "Our driver app helps partners maximize their earnings with smart features designed for the Nigerian market.",
        features: [
          "Earnings dashboard",
          "Heat maps for demand",
          "Navigation integration",
          "Daily/weekly payouts",
          "Performance analytics",
          "Support chat",
        ],
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
      },
      {
        name: "Admin Dashboard",
        description:
          "A powerful web-based dashboard for operations teams to manage the entire platform efficiently.",
        features: [
          "Real-time analytics",
          "Driver management",
          "Pricing controls",
          "Support ticketing",
          "Financial reporting",
          "City operations",
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      },
    ],
    technologies: [
      { name: "React Native", category: "Mobile" },
      { name: "Node.js", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Redis", category: "Cache" },
      { name: "Socket.io", category: "Real-time" },
      { name: "Google Maps API", category: "Maps" },
      { name: "AWS", category: "Cloud" },
      { name: "Paystack", category: "Payments" },
      { name: "Flutterwave", category: "Payments" },
      { name: "Firebase", category: "Push Notifications" },
    ],
    testimonials: [
      {
        name: "Adaeze Okafor",
        role: "Daily Commuter",
        location: "Lagos",
        content:
          "NaijaRide has completely changed how I get around Lagos. The drivers are professional, and I love that I can pay with my bank app directly. No more cash wahala!",
        image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80",
      },
      {
        name: "Emeka Nwosu",
        role: "NaijaRide Driver",
        location: "Abuja",
        content:
          "I've been driving with NaijaRide for 8 months now. The daily payouts help me manage my finances better, and the app is easy to use even when network is slow.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      },
      {
        name: "Funke Adeyemi",
        role: "Business Owner",
        location: "Port Harcourt",
        content:
          "For my business, reliable transportation is essential. NaijaRide's corporate account helps my team move around the city efficiently. The monthly billing is a lifesaver.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      },
    ],
    roadmap: [
      {
        quarter: "Q1 2025",
        title: "NaijaRide Business",
        description: "Corporate accounts with centralized billing and employee management.",
        status: "In Progress",
      },
      {
        quarter: "Q2 2025",
        title: "Intercity Rides",
        description: "Long-distance rides between major Nigerian cities.",
        status: "Planned",
      },
      {
        quarter: "Q3 2025",
        title: "NaijaRide Delivery",
        description: "Package delivery service for individuals and businesses.",
        status: "Planned",
      },
      {
        quarter: "Q4 2025",
        title: "West Africa Expansion",
        description: "Launching in Ghana and other West African markets.",
        status: "Planned",
      },
    ],
    faqs: [
      {
        question: "How do I become a NaijaRide driver?",
        answer:
          "Download the NaijaRide Driver app, complete the registration with your valid driver's license, vehicle documents, and pass our background check. The process typically takes 2-3 business days.",
      },
      {
        question: "What payment methods are accepted?",
        answer:
          "We accept cash, debit/credit cards, bank transfers (via Paystack), and mobile money. You can also add multiple payment methods and switch between them for each ride.",
      },
      {
        question: "Is NaijaRide safe?",
        answer:
          "Safety is our top priority. All drivers undergo background checks, vehicles are inspected, and every ride is GPS-tracked. Riders can share trip details with contacts and access an SOS button during rides.",
      },
      {
        question: "What cities is NaijaRide available in?",
        answer:
          "We currently operate in 25 cities including Lagos, Abuja, Port Harcourt, Ibadan, Kano, Kaduna, Enugu, and more. We're constantly expanding to new cities.",
      },
      {
        question: "How is pricing calculated?",
        answer:
          "Pricing is based on distance, time, and current demand. You'll always see the estimated fare before booking. We don't have hidden fees—what you see is what you pay.",
      },
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
        caption: "NaijaRide in action on Lagos streets",
      },
      {
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
        caption: "Driver using the NaijaRide app",
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        caption: "Admin dashboard analytics",
      },
    ],
  },
  {
    id: "lazarus-system",
    slug: "lazarus-system",
    name: "Lazarus System",
    tagline: "Enterprise Resource Management Redefined",
    shortDescription:
      "A comprehensive enterprise resource management platform that streamlines operations, enhances productivity, and provides real-time insights.",
    description:
      "Lazarus System is a next-generation enterprise resource management platform that brings together all aspects of business operations into one unified, intelligent system. Built for modern businesses that demand flexibility, scalability, and actionable insights.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
    logo: "/images/products/lazarus-logo.svg",
    color: "#6366F1",
    status: "Active" as const,
    website: "https://lazarus-system.com",
    appStore: null,
    playStore: null,
    launchDate: "2022",
    stats: [
      { value: "200+", label: "Enterprise Clients" },
      { value: "50K+", label: "Daily Active Users" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "$2B+", label: "Transactions Processed" },
    ],
    overview: {
      title: "One Platform. Infinite Possibilities.",
      content: `Modern enterprises juggle dozens of software tools—HR systems, project management, accounting, inventory, CRM, and more. This fragmentation leads to data silos, inefficiencies, and missed opportunities.

Lazarus System was built to solve this problem. We've created a unified platform that brings together all critical business functions into one cohesive system. No more switching between apps, no more manual data entry, no more information gaps.

But Lazarus is more than just integration. Our AI-powered analytics engine transforms your operational data into actionable insights. Predict demand, optimize resources, identify bottlenecks, and make data-driven decisions with confidence.

Whether you're a growing startup or an established enterprise, Lazarus adapts to your needs. Our modular architecture means you can start with what you need and expand as you grow. And with our enterprise-grade security and 99.9% uptime guarantee, you can trust Lazarus with your most critical operations.`,
    },
    features: [
      {
        title: "Resource Planning",
        description:
          "Optimize allocation of human resources, equipment, and materials across projects and departments with AI-powered recommendations.",
        icon: "Users",
      },
      {
        title: "Project Management",
        description:
          "Plan, execute, and monitor projects with Gantt charts, Kanban boards, time tracking, and automated progress reporting.",
        icon: "FolderKanban",
      },
      {
        title: "HR & Payroll",
        description:
          "Complete HR management including recruitment, onboarding, performance reviews, leave management, and integrated payroll processing.",
        icon: "UserCheck",
      },
      {
        title: "Financial Management",
        description:
          "Full accounting suite with invoicing, expense tracking, budgeting, financial reporting, and multi-currency support.",
        icon: "PiggyBank",
      },
      {
        title: "Inventory Control",
        description:
          "Real-time inventory tracking, automated reorder points, warehouse management, and supply chain visibility.",
        icon: "Package",
      },
      {
        title: "Custom Reporting",
        description:
          "Build custom dashboards and reports with our drag-and-drop report builder. Schedule automated reports to stakeholders.",
        icon: "BarChart3",
      },
    ],
    modules: [
      {
        name: "Lazarus Core",
        description:
          "The foundation of the Lazarus System, including user management, permissions, workflows, and basic reporting.",
        included: true,
        features: [
          "User & role management",
          "Workflow automation",
          "Basic reporting",
          "API access",
          "Mobile app",
          "Email integration",
        ],
      },
      {
        name: "Lazarus HR",
        description:
          "Complete human resource management from recruitment to retirement.",
        included: false,
        features: [
          "Applicant tracking",
          "Employee database",
          "Performance management",
          "Leave & attendance",
          "Training management",
          "Employee self-service",
        ],
      },
      {
        name: "Lazarus Finance",
        description:
          "Comprehensive financial management and accounting capabilities.",
        included: false,
        features: [
          "General ledger",
          "Accounts payable/receivable",
          "Budgeting & forecasting",
          "Multi-currency",
          "Tax management",
          "Financial reports",
        ],
      },
      {
        name: "Lazarus Projects",
        description:
          "Advanced project management for complex initiatives.",
        included: false,
        features: [
          "Project planning",
          "Resource allocation",
          "Time tracking",
          "Budget management",
          "Risk management",
          "Client portal",
        ],
      },
      {
        name: "Lazarus Inventory",
        description:
          "End-to-end inventory and supply chain management.",
        included: false,
        features: [
          "Stock management",
          "Warehouse operations",
          "Purchase orders",
          "Supplier management",
          "Barcode/RFID support",
          "Demand forecasting",
        ],
      },
      {
        name: "Lazarus Analytics",
        description:
          "AI-powered business intelligence and predictive analytics.",
        included: false,
        features: [
          "Custom dashboards",
          "Predictive analytics",
          "Data visualization",
          "Scheduled reports",
          "Data export",
          "API integration",
        ],
      },
    ],
    technologies: [
      { name: "Next.js", category: "Frontend" },
      { name: "TypeScript", category: "Language" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Prisma", category: "ORM" },
      { name: "tRPC", category: "API" },
      { name: "Redis", category: "Cache" },
      { name: "AWS", category: "Cloud" },
      { name: "TensorFlow", category: "AI/ML" },
      { name: "Docker", category: "DevOps" },
      { name: "Kubernetes", category: "Orchestration" },
    ],
    testimonials: [
      {
        name: "James Okonkwo",
        role: "CEO",
        location: "Manufacturing Corp",
        content:
          "Lazarus System transformed our operations. We went from using 8 different software tools to one unified platform. Our efficiency has improved by 40% and we finally have real visibility into our business.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      },
      {
        name: "Amara Obi",
        role: "HR Director",
        location: "Tech Solutions Ltd",
        content:
          "The HR module alone saved us countless hours. Payroll that used to take 3 days now takes 3 hours. And the employee self-service portal has dramatically reduced HR queries.",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
      },
      {
        name: "Daniel Mensah",
        role: "CFO",
        location: "Retail Group",
        content:
          "Real-time financial visibility across all our locations was a game-changer. The forecasting tools have improved our cash flow management significantly. Worth every penny.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
      },
    ],
    pricing: [
      {
        name: "Starter",
        description: "For small teams getting started",
        price: "299",
        currency: "USD",
        period: "month",
        features: [
          "Up to 25 users",
          "Lazarus Core",
          "5GB storage",
          "Email support",
          "Basic reporting",
          "Mobile app access",
        ],
        highlighted: false,
      },
      {
        name: "Professional",
        description: "For growing businesses",
        price: "799",
        currency: "USD",
        period: "month",
        features: [
          "Up to 100 users",
          "Lazarus Core + 2 modules",
          "50GB storage",
          "Priority support",
          "Advanced reporting",
          "API access",
          "Custom workflows",
        ],
        highlighted: true,
      },
      {
        name: "Enterprise",
        description: "For large organizations",
        price: "Custom",
        currency: "",
        period: "",
        features: [
          "Unlimited users",
          "All modules included",
          "Unlimited storage",
          "24/7 dedicated support",
          "Custom development",
          "On-premise option",
          "SLA guarantee",
          "Training & onboarding",
        ],
        highlighted: false,
      },
    ],
    roadmap: [
      {
        quarter: "Q1 2025",
        title: "AI Assistant",
        description: "Natural language interface for queries and commands.",
        status: "In Progress",
      },
      {
        quarter: "Q2 2025",
        title: "Mobile Offline Mode",
        description: "Full functionality even without internet connection.",
        status: "Planned",
      },
      {
        quarter: "Q3 2025",
        title: "Marketplace",
        description: "Third-party integrations and extensions marketplace.",
        status: "Planned",
      },
      {
        quarter: "Q4 2025",
        title: "Industry Templates",
        description: "Pre-configured setups for specific industries.",
        status: "Planned",
      },
    ],
    faqs: [
      {
        question: "Can Lazarus System integrate with our existing tools?",
        answer:
          "Yes! Lazarus offers extensive API access and pre-built integrations with popular tools like Slack, Microsoft 365, Google Workspace, QuickBooks, and more. Our team can also build custom integrations for your specific needs.",
      },
      {
        question: "Is our data secure?",
        answer:
          "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All data is encrypted at rest and in transit. We offer role-based access control, audit logs, and optional on-premise deployment for maximum security.",
      },
      {
        question: "How long does implementation take?",
        answer:
          "Basic implementation can be completed in 2-4 weeks. Complex enterprise deployments with data migration and custom configurations typically take 2-3 months. We provide dedicated implementation support throughout.",
      },
      {
        question: "Do you offer training?",
        answer:
          "Yes, we provide comprehensive training including live sessions, video tutorials, documentation, and ongoing webinars. Enterprise clients receive dedicated training programs customized to their needs.",
      },
      {
        question: "Can we start small and add modules later?",
        answer:
          "Absolutely! Our modular architecture is designed for exactly this. Start with Core and add modules as your needs grow. Your data flows seamlessly between modules.",
      },
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        caption: "Executive dashboard with real-time KPIs",
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        caption: "Project management Kanban view",
      },
      {
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
        caption: "HR module employee directory",
      },
    ],
  },
] as const;

// Stats data
export const STATS = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
] as const;

// Animation variants for Framer Motion
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
} as const;

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

export const STAGGER_CONTAINER = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
} as const;

// Type for services
export type Service = (typeof SERVICES)[number];


// Team Members Data
export const TEAM_MEMBERS = [
  {
    id: "1",
    name: "Esan Damilola John",
    role: "Founder & CEO",
    bio: "Visionary leader with 5+ years in tech. Previously led engineering teams at 30Century. Passionate about using technology to solve African challenges.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  {
    id: "2",
    name: "Tioluwanimi Zoey",
    role: "Chief Technology Officer",
    bio: "Full-stack architect with expertise in scalable systems. Leads our technical vision and ensures we stay at the cutting edge.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
    linkedin: "https://linkedin.com/in/",
    twitter: "https://twitter.com/",
  },
  // {
  //   id: "3",
  //   name: "David Mensah",
  //   role: "Chief Design Officer",
  //   bio: "Award-winning designer who believes in the power of human-centered design. Previously Design Lead at Spotify. Creates experiences that users love.",
  //   image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  //   linkedin: "https://linkedin.com/in/",
  //   twitter: "https://twitter.com/",
  // },
  // {
  //   id: "4",
  //   name: "Fatima Al-Hassan",
  //   role: "VP of Engineering",
  //   bio: "Engineering leader focused on building high-performing teams. 12+ years of experience shipping products used by millions. Champion of engineering excellence.",
  //   image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  //   linkedin: "https://linkedin.com/in/",
  //   twitter: "https://twitter.com/",
  // },
  // {
  //   id: "5",
  //   name: "Chidi Nwosu",
  //   role: "Head of Product",
  //   bio: "Product strategist who bridges business goals with user needs. Former PM at Amazon. Obsessed with building products that make a real difference.",
  //   image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
  //   linkedin: "https://linkedin.com/in/",
  //   twitter: "https://twitter.com/",
  // },
  // {
  //   id: "6",
  //   name: "Grace Adebayo",
  //   role: "Head of Operations",
  //   bio: "Operations expert who keeps everything running smoothly. MBA from Harvard Business School. Ensures we deliver excellence on every project.",
  //   image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&q=80",
  //   linkedin: "https://linkedin.com/in/",
  //   twitter: "https://twitter.com/",
  // },
  // {
  //   id: "7",
  //   name: "Emmanuel Osei",
  //   role: "Lead AI Engineer",
  //   bio: "AI/ML specialist with a PhD from MIT. Pioneering our AI initiatives and helping clients leverage machine learning for competitive advantage.",
  //   image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  //   linkedin: "https://linkedin.com/in/",
  //   twitter: "https://twitter.com/",
  // },
  // {
  //   id: "8",
  //   name: "Zainab Ibrahim",
  //   role: "Head of Client Success",
  //   bio: "Client advocate who ensures every partnership succeeds. 10+ years in client services. Builds lasting relationships based on trust and results.",
  //   image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  //   linkedin: "https://linkedin.com/in/",
  //   twitter: "https://twitter.com/",
  // },
] as const;

// Company Values
export const COMPANY_VALUES = [
  {
    title: "Excellence Without Compromise",
    description:
      "We don't cut corners. Every line of code, every pixel, every interaction is crafted with care. We believe that excellence is not a destination but a continuous journey.",
    icon: "Award",
  },
  {
    title: "Client Partnership",
    description:
      "We're not vendors—we're partners. Your success is our success. We invest deeply in understanding your business and become an extension of your team.",
    icon: "Handshake",
  },
  {
    title: "Innovation First",
    description:
      "We stay ahead of the curve, constantly exploring new technologies and approaches. We bring fresh thinking to every challenge and aren't afraid to pioneer new solutions.",
    icon: "Lightbulb",
  },
  {
    title: "Radical Transparency",
    description:
      "No surprises, no hidden agendas. We communicate openly about progress, challenges, and costs. Trust is built through honesty, even when the truth is uncomfortable.",
    icon: "Eye",
  },
  {
    title: "People Matter",
    description:
      "Behind every project is a team of real people. We invest in our team's growth, celebrate diversity, and create an environment where everyone can do their best work.",
    icon: "Heart",
  },
  {
    title: "Impact Driven",
    description:
      "We measure success by the impact we create—for our clients, their customers, and our community. We build things that matter and make a real difference.",
    icon: "Target",
  },
] as const;

// Company Milestones
export const COMPANY_MILESTONES = [
  {
    year: "2021",
    title: "The Beginning",
    description:
      "DailysFlash was founded in a small Lagos apartment with a simple mission: build digital products that work for Africa.",
  },
  {
    year: "2023",
    title: "First Major Client",
    description:
      "Landed our first enterprise client, a leading Nigerian bank. This project put us on the map and established our reputation for excellence.",
  },
  {
    year: "2026",
    title: "Product Launch",
    description:
      "Launched NaijaRide, our first internal product. Despite the pandemic, we adapted to remote work and continued to grow.",
  },
] as const;

// Office Locations
export const OFFICE_LOCATIONS = [
  {
    city: "Osun",
    country: "Nigeria",
    address: "Nasfat area, Ile Ife, Osun State",
    type: "Headquarters",
    image: "https://images.unsplash.com/photo-1618828665011-0abd973f7bb8?w=800&q=80",
    email: "contact@dailysflash.com",
    phone: "+234 704 890 3845",
  },
] as const;
