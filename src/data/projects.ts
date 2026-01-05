export interface Project {
  id: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  techStack: string[];
  link?: string;
  githubLink?: string;
  isPublic?: boolean;
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
    fullDescription: ' This system is built using Apache Net Beans I.D.E and provides a platform for managing schedules and attendance for different users and roles within an organization. It includes features like CRUD operations, data validation, and database integration.',
    image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Apache', 'Java', 'PostgreSQL'],
    link: '',
    githubLink: 'https://github.com/ChisomGbulie/Apache-Java-Scheduling-and-Attandance-System',
    problem: 'It provides a platform for managing schedules and attendance for different users and roles within an organization.',
    features: [ 
      'Create, Read, Update, and Delete operations for workers and departments',
      'Data validation and error handling',
      'Database integration with PostgreSQL'
    ],
    learnings: [
      'Understanding of Spring Boot framework',
      'RESTful API design principles',
      'Database integration with PostgreSQL'
    ],
    screenshots: [
   
    ]
  },
  {
    id: 'Spring Boot C.R.U.D API',
    name: 'Spring Boot C.R.U.D API',
    shortDescription: 'A Java Spring Boot powered RESTful API for managing resources between Workers and their Departments with full CRUD functionality.',
    fullDescription: 'This API is built using Spring Boot and provides a RESTful interface for managing workers and departments. It supports full CRUD operations and includes features like data validation, error handling, and database integration.',
    image: 'https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg',
    techStack: ['Spring Boot', 'Java', 'PostgreSQL'],
    link: 'https://github.com/ChisomGbulie/Spring-Boot-CRUD',
    problem: 'It provides a RESTful API for managing workers and departments with full CRUD functionality.',
    features: [ 
      'Create, Read, Update, and Delete operations for workers and departments',
      'Data validation and error handling',
      'Database integration with PostgreSQL'
    ],
    learnings: [
      'Understanding of Spring Boot framework',
      'RESTful API design principles',
      'Database integration with PostgreSQL'
    ],
    screenshots: [

    ]
  },
  {
    id: 'Cafeteria',
    name: 'Cafteria System',
    shortDescription: 'Inventory management system for a cafeteria powered by Streamlit utilizing Python for backend operations and SQLite for database management.',
    fullDescription: 'This is an inventory management system for a cafeteria built with Streamlit and Python. It uses SQLite for database operations and provides a user-friendly interface for managing cafeteria inventory.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['Python', 'Streamlit'],
    link: '',
    githubLink: 'https://github.com/ChisomGbulie/Cafeteria-Python-Streamlit-Project',
    problem: 'It provides an inventory management system for a cafeteria with a user-friendly interface built using Streamlit and Python.',
    features: [ 
      'Inventory tracking and management',
      'User-friendly interface built with Streamlit',
      'Database operations using SQLite'
    ],
    learnings: [
      'Understanding of Streamlit framework',
      'Python backend development',
      'Database integration with SQLite'
    ],
    screenshots: [
    
    ]
  }
];
