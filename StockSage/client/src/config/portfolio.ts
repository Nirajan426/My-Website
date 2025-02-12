export const portfolioConfig = {
  about: {
    name: "Nirajan Chaudhary",
    title: "Engineering Student & Aspiring Developer",
    email: "john@example.com", 
    phone: "+1 (555) 123-4567", 
    resumeUrl: "/path-to-your-resume.pdf",
    profileImage: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80",
    socialLinks: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "facebook", url: "https://facebook.com" }
    ]
  },

  projects: [
    {
      title: "Project One",
      description: "A modern web application built with React and Node.js",
      tags: ["React", "Node.js", "TypeScript"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80",
      projectUrl: "https://project1.com",
      githubUrl: "https://github.com/username/project1"
    },
    {
      title: "Project Two",
      description: "Mobile-first e-commerce platform",
      tags: ["Next.js", "Tailwind", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&q=80",
      projectUrl: "https://project2.com",
      githubUrl: "https://github.com/username/project2"
    }
  ],

  skills: [
    { name: "Python", category: "Languages", proficiency: 85 },
    { name: "C++", category: "Languages", proficiency: 80 },
    { name: "C", category: "Languages", proficiency: 80 },
    { name: "JavaScript", category: "Languages", proficiency: 75 },
    { name: "HTML", category: "Frontend", proficiency: 85 },
    { name: "CSS", category: "Frontend", proficiency: 80 },
    { name: "Machine Learning", category: "Interests", proficiency: 60 }
  ]
};