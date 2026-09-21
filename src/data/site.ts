export const site = {
  name: "Shari Mae Repdos",
  location: "Butuan City, Philippines",
  tagline: " IT/IS Student| Web Developer |UI Designer",
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

export const about =  `I am a 4th-year Information Systems student from Butuan City, Philippines, with an interest in web development, programming, UI/UX design, and information systems. I enjoy learning new technologies and creating practical digital solutions through hands-on projects.

My hobbies include exploring new technologies, improving my programming skills, designing user interfaces, and working on creative digital projects. I also enjoy learning through school projects and collaborating with others.

My academic background in Information Systems has helped me develop skills in web development, database management, UI/UX design, and system analysis. My goal is to build useful, user-friendly, and efficient systems that can help solve real-world problems.`;

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