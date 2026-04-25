export const site = {
  name: "Shari Mae Repdos",
  location: "Butuan City, Philippines",
  tagline: " Researcher| Web Developer |UI Designer",
  /** Optional: URL to profile image (e.g. /avatar.jpg). Leave empty for initials placeholder. */
  avatarUrl: "" as string | undefined,
  /** Show verified checkmark next to name */
  verified: true,
  /** Optional: Facebook profile URL – verified badge links here when set */
  facebookUrl: "" as string | undefined,
  email: "sharimae@gmail.com",
  calendlyUrl: "https://calendly.com/your-link",
  blogUrl: "https://blog.yoursite.com",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/Bross Stack",
  instagram: "https://instagram.com/yourprofile",
};

export const heroBadges: { label: string; href: string; subtitle?: string }[] = [];

export const about = `I am a passionate Student Researcher and Developer based in Butuan City, dedicated to bridging the gap between environmental science and modern technology. My expertise lies at the intersection of field research and digital innovation, where I apply my skills in UI/UX design and web development to solve real-world problems.

Currently, I am actively involved in environmental studies, specifically focusing on riparian classification and the impact of plastic pollution in local creek systems. This analytical background complements my technical proficiency in database management using PostgreSQL and full-stack development. 

As a UI Designer, I prioritize creating intuitive and user-centric interfaces that make complex data accessible and engaging. Whether I am conducting field research on sediment accumulation or architecting a student enrollment system, my goal remains the same: to deliver data-driven solutions with a focus on efficiency, sustainability, and impactful design.`;

export const experience = [
  { role: "Student Researcher", company: "Caraga State University", year: "2026" },
  { role: "UI Designer / Web Developer", company: "Academic Projects", year: "2025" },
  { role: "Field Data Analyst", company: "Environmental Science Study", year: "2026" },
];

export const projects = [
  { 
    name: "Creek Microplastics Study", 
    description: "Research on the condition of microplastics in local creeks.", 
    url: "#", 
    domain: "Environmental Science" 
  },
  { 
    name: "Enrollment Management System", 
    description: "A student database system built with PostgreSQL.", 
    url: "#", 
    domain: "Software Development" 
  },
];
export const techStack = {
  frontend: [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Figma",
    "TypeScript",
  ],
  backend: [
    "PostgreSQL", 
    "Node.js", 
    "Python", 
    "SQL"
  ],
 
  devops: [
    "Field Data Collection",
    "Riparian Assessment",
    "Statistical Analysis",
    "Technical Writing",
  ],
  modeling: [
    "Database Schema Design",
    "ER Diagrams",
    "UI/UX Prototyping",
  ],
};

export const project = [
  { name: "ISySS-CDM", description: "CSU & PNP collaborative system platform", url: "https://isyss-cdm.web.app/", domain: "isyss-cdm.web.app" },
  { name: "ABEMIS 3.0", description: "Agricultural & Biosystems Engineering Management Information System", url: "https://abemis-front.vercel.app/", domain: "abemis-front.vercel.app" },
  { name: "MARVEL Technologies", description: "AR/VR technology initiative and simulation platform", url: "https://chci.carsu.edu.ph/marvel-technologies/", domain: "chci.carsu.edu.ph" },
  { name: "DYNAMIS Workout Tracker", description: "AI-powered workout tracker", url: "https://dynamis-app.online", domain: "dynamis-app.online" },
];

export const certifications: {
  name: string;
  issuer: string;
  href: string;
  year?: string;
}[] = [
  {
    name: "Environmental Data Analysis Workshop",
    issuer: "Caraga State University",
    href: "#",
    year: "2026",
  },
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google (Coursera)",
    href: "#",
    year: "2025",
  },
  {
    name: "Database Management System (PostgreSQL) Specialist",
    issuer: "Academic Certification",
    href: "#",
    year: "2025",
  },
];

export const recommendations = [
  { 
    quote: "Exhibited great attention to detail during our field research at the creek, especially in the classification of riparian zones and sediment analysis.", 
    author: "Research Lead", 
    title: "Environmental Science Department" 
  },
  { 
    quote: "A very capable developer who successfully implemented a working enrollment database using PostgreSQL. Shows great potential in system architecture.", 
    author: "IT Instructor", 
    title: "College of Computing and Information Sciences" 
  },
  { 
    quote: "The presentation on Lateral Plate Mesoderm was clear, concise, and very well-researched. One of the best reports in our biology class.", 
    author: "Classmate / Peer Review", 
    title: "Biological Science Student" 
  },
];

export const memberships = [
  {
    name: "Philippine Society of IT Educators (PSITE) – Student Chapter",
    href: "https://psite.org/",
  },
  {
    name: "CSU Environmental Research Group",
    href: "#",
  },
];