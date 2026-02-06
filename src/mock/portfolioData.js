// Mock portfolio data
export const portfolioData = {
  personal: {
    name: "Alex Morgan",
    title: "Creative Developer & Designer",
    tagline: "Crafting digital experiences with purpose and precision",
    bio: "I'm a passionate creative developer with 5+ years of experience building beautiful, functional web applications. I bridge the gap between design and development, creating seamless user experiences that tell compelling stories.",
    location: "San Francisco, CA",
    email: "alex@example.com",
    phone: "+1 (555) 123-4567",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face&q=80"
  },
  
  skills: [
    { name: "React & Next.js", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Node.js", level: 85, category: "Backend" },
    { name: "GSAP & Three.js", level: 88, category: "Animation" },
    { name: "MongoDB", level: 80, category: "Database" },
    { name: "AWS & Docker", level: 75, category: "DevOps" },
    { name: "Figma & Design", level: 92, category: "Design" },
    { name: "Python", level: 70, category: "Language" }
  ],
  
  projects: [
    {
      id: 1,
      title: "EcoTrack - Sustainability Platform",
      description: "A comprehensive platform for tracking and reducing carbon footprint with AI-powered insights and gamification.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&q=80",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Chart.js"],
      liveUrl: "https://ecotrack-demo.com",
      githubUrl: "https://github.com/alex/ecotrack",
      featured: true
    },
    {
      id: 2,
      title: "Mindful - Meditation App",
      description: "Mobile-first meditation app with 3D visualizations, progress tracking, and personalized guided sessions.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop&q=80",
      technologies: ["React Native", "Three.js", "Firebase", "GSAP"],
      liveUrl: "https://mindful-app.com",
      githubUrl: "https://github.com/alex/mindful",
      featured: true
    },
    {
      id: 3,
      title: "Portfolio Studio",
      description: "Creative portfolio builder with drag-and-drop interface and real-time collaboration features.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&q=80",
      technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind"],
      liveUrl: "https://portfolio-studio.com",
      githubUrl: "https://github.com/alex/portfolio-studio",
      featured: false
    }
  ],
  
  education: [
    {
      degree: "Master of Computer Science",
      school: "Stanford University",
      year: "2019-2021",
      description: "Specialized in Human-Computer Interaction and Machine Learning"
    },
    {
      degree: "Bachelor of Design",
      school: "Art Center College of Design",
      year: "2015-2019",
      description: "Digital Media Design with honors, Dean's List"
    }
  ],
  
  certifications: [
    {
      name: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2023",
      credentialId: "AWS-SAA-123456"
    },
    {
      name: "Google UX Design Certificate",
      issuer: "Google",
      year: "2022",
      credentialId: "GUX-789012"
    },
    {
      name: "React Advanced Patterns",
      issuer: "React Training",
      year: "2023",
      credentialId: "RT-345678"
    }
  ],
  
  social: {
    github: "https://github.com/alexmorgan",
    linkedin: "https://linkedin.com/in/alexmorgan",
    instagram: "https://instagram.com/alexmorgan",
    email: "alex@example.com"
  }
};

// Mock AI responses
export const mockAIResponses = [
  {
    question: "What technologies does Alex work with?",
    answer: "Alex specializes in React, Next.js, TypeScript, Node.js, and GSAP for animations. He also has experience with MongoDB, AWS, and design tools like Figma."
  },
  {
    question: "Tell me about Alex's experience",
    answer: "Alex is a creative developer with 5+ years of experience. He has a Master's in Computer Science from Stanford and has worked on various projects including EcoTrack and Mindful app."
  },
  {
    question: "What makes Alex unique?",
    answer: "Alex bridges the gap between design and development, combining technical expertise with creative vision to build beautiful, functional applications."
  }
];