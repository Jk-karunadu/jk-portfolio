import React from "react";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold ">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
      <ProjectsCard
  title="Meeting AI"
  main={[
    "AI-based meeting summarizer",
    "Real-time transcription and summary",
    "Built using OpenAI Whisper and GPT",
    "User-friendly dashboard with meeting history",
    "Secure and fast processing"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_ai-meetings-productivity-activity-7297499386064855041-CoHi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/Meeting_AI"
/>

<ProjectsCard
  title="MediCare"
  main={[
    "Online doctor appointment system",
    "Role-based dashboard for doctors & patients",
    "Prescription generator and medicine tracker",
    "Secure login and medical history",
    "Built with React, Node.js, and MongoDB"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_bringing-faster-smarter-medicare-solutions-activity-7313929061506945025-fa5S?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/medicare-frontend"
/>

<ProjectsCard
  title="Nutriomen"
  main={[
    "Nutrition and calorie tracking app",
    "User diet planner and daily goals",
    "Interactive charts and progress tracking",
    "Backend built with Firebase",
    "Mobile responsive using React.js"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_ai-powered-nutrition-guidance-for-women-activity-7313926318448906240-QXkE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/Nutriomen"
/>

      <ProjectsCard
  title="E-commerce Website (Angular)"
  main={[
    "Product listings with filtering options",
    "User and seller logins",
    "Shopping cart functionality",
    "Search functionality with instant results",
    "Responsive UI for seamless experience"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_im-happy-to-share-this-angularjs-user-side-activity-7251289053789114368-RmAH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/angular-project"
/>

<ProjectsCard
  title="Tech-Educational App (Flutter)"
  main={[
    "Educational content delivery",
    "Interactive learning features",
    "Responsive design across devices",
    "Built with Flutter and Dart"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_im-happy-to-share-this-flutter-tech-edu-activity-7251286485792948224-_Ogf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/flutter_project"
/>

<ProjectsCard
  title="E-commerce Website (MERN Stack)"
  main={[
    "Product catalog with real-time updates",
    "User authentication with JWT",
    "Shopping cart and payment integration",
    "Built using MongoDB, Express, React, Node.js"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_just-launched-my-mern-stack-e-commerce-activity-7249689192673296388-xdZb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/mangodb-express-react-nodejs"
/>

<ProjectsCard
  title="Frontend Projects (Tic-Tac-Toe, Stone Paper Scissors)"
  main={[
    "Interactive games built using HTML, CSS, and JavaScript",
    "User-friendly UI with responsive design",
    "Focus on essential frontend skills"
  ]}
  demo="https://drive.google.com/file/d/1kXijF9w5OhlL0Sw6Utx309CTaJuUJvMY/view?usp=sharing"
  sourcecode="https://github.com/Jk-karunadu/webdev"
/>

<ProjectsCard
  title="E-commerce Website (MySQL, React.js, Laravel)"
  main={[
    "MySQL database integration",
    "React.js for dynamic frontend",
    "Laravel for backend and API management",
    "Secure transactions and user management"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_just-launched-my-mern-stack-e-commerce-activity-7249689192673296388-xdZb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/mysql-reactjs-laravel"
/>

<ProjectsCard
  title="Event Management System (Django)"
  main={[
    "User registration and event creation",
    "Event scheduling and ticket booking",
    "Admin dashboard for event management",
    "Payment integration",
    "Responsive UI for easy navigation"
  ]}
  demo="https://github.com/Jk-karunadu/Event-management-django"
  sourcecode="https://github.com/Jk-karunadu/Event-management-django"
/>

<ProjectsCard
  title="DevOps Bootcamp"
  main={[
    "CI/CD pipeline setup using Jenkins",
    "Containerization with Docker and Kubernetes",
    "Cloud automation with AWS",
    "Infrastructure as Code (IaC) using Terraform",
    "Monitoring and logging with ELK Stack"
  ]}
  demo="https://github.com/Jk-karunadu/Devops-Bootcamp"
  sourcecode="https://github.com/Jk-karunadu/Devops-Bootcamp"
/>

<ProjectsCard
  title="DSA Bootcamp"
  main={[
    "Data Structures and Algorithms learning",
    "Competitive coding challenges",
    "Practice problems with solutions",
    "Mastering problem-solving techniques",
    "Weekly progress assessments"
  ]}
  demo="https://github.com/Jk-karunadu/DSA-Bootcamp"
  sourcecode="https://github.com/Jk-karunadu/DSA-Bootcamp"
/>

<ProjectsCard
  title="AI Model (Human Fall Detection & Face Recognition)"
  main={[
    "Human fall detection using OpenPose",
    "Face recognition with deep learning models",
    "Real-time detection with webcam feed",
    "Model optimization for accuracy",
    "Implementation using Python and OpenCV"
  ]}
  demo="https://www.linkedin.com/posts/jashwanth-jk-071725310_ai-falldetection-computervision-activity-7264632274929766401-JUrw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAE8hGBUBY3xGgyY7gY1ejA2Vu-v19HQOFd4"
  sourcecode="https://github.com/Jk-karunadu/Fall-Detection"
/>

      </div>
    </div>
  );
};

export default Projects;


