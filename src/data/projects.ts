export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  problem: string;
  features: string[];
  learnings: string[];
  screenshots: string[];
}

export const projects: Project[] = [
  {
    id: 'Sheduling and Attendance System',
    name: 'Sheduling and Attendance System',
    shortDescription: 'Apache Net Beans I.D.E utilized system used for Scheduling and Attendance keeping for Various users and roles.',
    fullDescription: '',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Apache', 'Java', 'PostgreSQL'],
    link: '',
    githubLink: 'https://github.com/ChisomGbulie/Apache-Java-Scheduling-and-Attandance-System',
    problem: '',
    features: [
 
    ],
    learnings: [

    ],
    screenshots: [
   
    ]
  },
  {
    id: 'Spring Boot C.R.U.D API',
    name: 'Spring Boot C.R.U.D API',
    shortDescription: 'A Java Spring Boot powered RESTful API for managing resources between Workers and their Departments with full CRUD functionality.',
    fullDescription: '',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
    techStack: ['Spring Boot', 'Java', 'PostgreSQL'],
    link: 'https://github.com/ChisomGbulie/Spring-Boot-CRUD',
    problem: '',
    features: [

    ],
    learnings: [
     
    ],
    screenshots: [

    ]
  },
  {
    id: 'Cafeteria',
    name: 'Cafteria System',
    shortDescription: 'Inventory management system for a cafeteria powered by Streamlit utilizing Python for backend operations and SQLite for database management.',
    fullDescription: '',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Python', 'Streamlit'],
    link: '',
    githubLink: 'https://github.com/ChisomGbulie/Cafeteria-Python-Streamlit-Project',
    problem: '',
    features: [
    
    ],
    learnings: [
  
    ],
    screenshots: [
    
    ]
  }
];
