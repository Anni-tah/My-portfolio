import { useState } from "react";
import { motion } from "framer-motion";

function About() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-32 bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-16"
    >
      {/* Left side: Tabs */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <motion.button
            className={`p-4 rounded-lg text-lg font-medium w-full transition-all duration-300 ${
              activeTab === "about"
                ? "bg-[#9C4DFF] text-white"
                : "bg-transparent text-gray-400 hover:bg-[#9C4DFF] hover:text-white"
            }`}
            onClick={() => setActiveTab("about")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            About Me
          </motion.button>
          <motion.button
            className={`p-4 rounded-lg text-lg font-medium w-full transition-all duration-300 ${
              activeTab === "experience"
                ? "bg-[#9C4DFF] text-white"
                : "bg-transparent text-gray-400 hover:bg-[#9C4DFF] hover:text-white"
            }`}
            onClick={() => setActiveTab("experience")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Experience
          </motion.button>
          <motion.button
            className={`p-4 rounded-lg text-lg font-medium w-full transition-all duration-300 ${
              activeTab === "skills"
                ? "bg-[#9C4DFF] text-white"
                : "bg-transparent text-gray-400 hover:bg-[#9C4DFF] hover:text-white"
            }`}
            onClick={() => setActiveTab("skills")}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            Skills
          </motion.button>
        </div>

        {/* Tab content */}
        {activeTab === "about" && (
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-[#9C4DFF] mb-4">About Me</h2>
            <p className="mb-4">
              I'm a passionate Full-Stack Engineer focused on web development, problem-solving, and creating user-centric experiences.
            </p>
            <p className="mb-4">
              With expertise in React, Node.js, and Python, I aim to deliver scalable, efficient, and beautiful web applications.
            </p>
            <p>
              Outside of work, I enjoy exploring new technologies, collaborating with other developers, and staying updated with the latest trends.
            </p>
          </motion.div>
        )}

        {activeTab === "experience" && (
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-[#9C4DFF] mb-4">Experience</h2>
            <p className="mb-4">
              I've worked on a variety of projects, from responsive front-end interfaces to backend services and APIs.
            </p>
            <p>
              Technologies I work with include React, Node.js, Express, MongoDB, and more, always striving to build high-quality solutions.
            </p>
          </motion.div>
        )}

        {activeTab === "skills" && (
          <motion.div
            className="text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-semibold text-[#9C4DFF] mb-4">Skills</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Front-End: HTML, CSS, JavaScript, React, Tailwind CSS</li>
              <li>Back-End: Node.js, Express, Python</li>
              <li>Databases: MongoDB, MySQL</li>
              <li>Version Control: Git, GitHub</li>
              <li>Tools: VS Code, Postman, Docker, Figma</li>
            </ul>
          </motion.div>
        )}
      </motion.div>

      {/* Right side: Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative w-3/4 md:w-3/5 overflow-hidden rounded-xl shadow-xl">
          <motion.img
            src="/IMG_1796.JPG"
            alt="Profile Picture"
            className="w-full h-auto object-cover transition-transform duration-500 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 border-4 border-[#9C4DFF] rounded-xl"></div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
