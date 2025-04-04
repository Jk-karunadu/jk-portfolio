import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import pic from '../../assets/about1.jpg';

const About = () => {
  return (
    <div id="About" className="text-white bg-black bg-opacity-30 shadow-xl rounded-lg mx-0 md:mx-20 p-6 md:p-12">
      <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left">About Me</h2>
      
      <div className="md:flex md:gap-12 items-center mb-10">
        {/* Image Section */}
        <img
          className="hidden md:block w-1/3 md:w-1/4 border-black border-2 rounded-3xl"
          src={pic}
          alt="About image"
        />
        
        {/* Biography Section */}
        <div className="w-full">
          <p className="text-base md:text-lg leading-relaxed mb-6">
            I am a passionate open-source contributor with a strong track record in the community. I have contributed to <strong>20+ open-source projects</strong>, earning a <strong>top rank of 85</strong> in <strong>GirlScript Summer of Code (GSSOC)</strong> and successfully making <strong>20+ pull requests</strong> during <strong>Hacktoberfest</strong>. My dedication extends beyond contributions, as I have built <strong>10+ projects</strong> on diverse problem statements using various tech stacks.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Alongside my contributions, I have completed an <strong>internship as a Full-Stack Developer and AI Model Trainer</strong> at Medicloq Pvt Ltd and as a <strong>Web Developer</strong> at Goatek Inc, showcasing my skills in both <strong>software development and artificial intelligence</strong>. My commitment to <strong>continuous learning and innovation</strong> makes me a valuable asset in the tech community.
          </p>
          
          {/* Links Section */}
          <div className="flex flex-wrap gap-5 mb-6 justify-center md:justify-start">
            <a href="https://github.com/Jk-karunadu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors py-3 px-5 rounded-lg text-base">
              <FaGithub size={22} /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/jashwanth-jk-071725310/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors py-3 px-5 rounded-lg text-base">
              <FaLinkedin size={22} /> LinkedIn
            </a>
            <a href="https://jk-karunadu.github.io/jk-portfolio/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 transition-colors py-3 px-5 rounded-lg text-base">
              <FaGlobe size={22} /> Portfolio
            </a>
          </div>
        </div>
      </div>
      
      {/* Combined Skills Section */}
      <div className="flex flex-col gap-10">
        {/* Full Professional Summary */}
        <div className="flex gap-4 items-start">
          <IoArrowForward size={36} className="mt-1 flex-shrink-0 text-purple-400" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold leading-normal mb-4">Professional Summary</h3>
            <p className="text-base md:text-lg leading-relaxed">
              I am a full-stack web developer with expertise in Angular, Django, React.js, Node.js, Laravel, and databases like MySQL and MongoDB. My portfolio includes diverse projects like e-commerce websites, showcasing robust, scalable applications. In addition to web development, I am a machine learning enthusiast experienced in libraries like NumPy, Pandas, and TensorFlow, applying AI techniques to solve complex problems using Python. I have a solid background in data analysis, working with tools like Excel, NumPy, and Power BI to turn raw data into actionable insights. I have also ventured into app development using Flutter, Dart, and React Native, showcasing cross-platform mobile apps like a Tech-Educational App.
            </p>
          </div>
        </div>
        
        {/* Projects and Contributions */}
        <div className="flex gap-4 items-start">
          <IoArrowForward size={36} className="mt-1 flex-shrink-0 text-purple-400" />
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold leading-normal mb-4">Projects and Contributions</h3>
            <p className="text-base md:text-lg leading-relaxed">
              I have built <strong>10+ projects</strong> addressing different problem statements using multiple tech stacks, ranging from full-stack web applications to AI-driven solutions. I have contributed to <strong>20+ open-source projects</strong>, ranked <strong>85</strong> in GirlScript Summer of Code, and successfully made <strong>20+ pull requests</strong> during Hacktoberfest. Throughout my career, I've completed internships as a <strong>Full-Stack Developer & AI Model Trainer</strong> at Medicloq Pvt Ltd and as a <strong>Web Developer</strong> at Goatek Inc, where I developed valuable industry experience in creating solutions that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;