export interface Profile {
  name: string
  handle: string
  role: string
  tagline: string
  status: string
  location: string
  email: string
  github: string
  linkedin: string
  stack: string[]
}

export interface Project {
  file: string
  title: string
  description: string
  tags: string[]
  repo: string
  demo?: string
}

export interface ExperienceEntry {
  experience: string
  title: string
  period: string
  notes?: string[]
}

export const profile: Profile = {
  name: 'Adhitya',
  handle: 'Au-Revoir5',
  role: 'Full Stack Developer',
  tagline: 'Building, learning, and creating with code.',
  status: 'open to work',
  location: 'Jakarta',
  email: 'adhityakr275@gmail.com',
  github: 'Au-Revoir5',
  linkedin: 'adhitya-kusuma-ridwan',
  stack: ['React', 'TypeScript', 'Laravel'],
}

export const about: string[] = [
  "I'm a Computer Science student at BINUS University and a full stack developer who enjoys turning ideas into practical applications. I work with React, TypeScript, and Laravel, always looking for opportunities to learn, build, and improve.",
  'Outside of development, I enjoy hanging out with friends, gaming, and working on personal projects that let me experiment with new technologies.',
]

export const projects: Project[] = [
  {
    file: 'Air-Hockey.tsx',
    title: 'Air Hockey',
    description:
      'Webcam-based air hockey using MediaPipe hand tracking and an MLP gesture classifier. Each players control the paddle with their index finger.',
    tags: ['Python', 'CV', 'MediaPipe'],
    repo: 'https://github.com/Au-Revoir5/Air-Hockey',
  },
  {
    file: 'RentCar.tsx',
    title: 'RentCar',
    description:
      'Built an ASP.NET car rental website with guest, user, and admin roles based on bootcamp requirements.',
    tags: ['ASP.NET', 'C#', "SQL-Server"],
    repo: 'https://github.com/Au-Revoir5/RentCar',
  },
  {
    file: 'EduQuest.ts',
    title: 'EduQuest',
    description:
      'A web-based UTBK preparation platform with a gamification system.',
    tags: ['React', 'TypeScript', 'Firebase'],
    repo: 'https://github.com/k41ts/EduQuest',
  },
]

export const hardSkills: Record<string, string[]> = {
  frontend: ['React', 'TypeScript', 'CSS', 'Accessibility'],
  tooling: ['Git', 'VS Code', 'SSMS', 'DBeaver'],
  backend: ['Laravel'],
  language: ['C/C++', 'Java', 'Python', '.NET', 'JS', 'SQL'],
}

export const softSkills: string[] = [
  'Communication',
  'Teamwork',
  'Problem solving',
  'Adaptability',
  'English Proficiency',
]

export const experience: ExperienceEntry[] = [
  {
    experience: 'Bina Nusantara University',
    title: 'Undergraduate Student',
    period: '2024 - 2028',
  },
  {
    experience: 'S-Class Kemanggisan',
    title: 'Sigma Lab Member',
    period: 'March 2025 - Present',
    notes: [
      'Built a strong foundation in software engineering concepts from the ground up.',
      'Developed a mobile note-taking application with a focus on intuitive organization and a clean user experience.',
    ],
  },
  {
    experience: 'Binus IT Division',
    title: 'Associate Member',
    period: 'March 2026 - January 2027',
    notes: [
      'Developed internal web applications using React.js, Laravel, and MySQL.',
      'Collaborated with the team to optimize system performance and UX through modern frameworks and clean code practices.',
    ],
  },
]