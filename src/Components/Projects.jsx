import React from "react";

function Projects() {
  const projects = [
    {
      title: "Scrabble Game Application (React)",
      description:
        "Led a team in building an interactive Scrabble game with drag-and-drop functionality using React. Implemented realistic tile distribution and dynamic gameplay logic for an engaging experience.",
    },
    {
      title: "Chess Game Application (HTML, CSS, JavaScript)",
      description:
        "Created a functional and responsive chess game with smooth gameplay using JavaScript, HTML, and CSS. Prioritized UX and visual clarity.",
    },
    {
      title: "Dynamic Task List App (Javascript, CSS and HTML)",
      description:
        "Developed a modern task manager with state management, filtering, and intuitive UI using React and Bootstrap. Designed for clarity and speed.",
    },
    {
      title: "Portfolio Website (React and Tailwind CSS)",
      description:
        "Designed and built a personal portfolio to showcase my projects and skills. Focused on responsive layouts, clean design, and navigation.",
    },
    {
      title: "Safari Website (React)",
      description:
        "Built a visually rich safari and travel-themed site with React and CSS. Designed for mobile responsiveness and immersive experience.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-24 bg-gradient-to-r from-gray-900 to-[#2e0d37] text-white"
    >
      <h2 className="text-4xl font-bold text-center text-[#9C4DFF] mb-14">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] rounded-3xl p-8 shadow-xl border border-[#9C4DFF]/30 hover:shadow-purple-500/30 hover:scale-[1.015] transition-all duration-300 group"
          >
            <h3 className="text-2xl font-semibold text-[#9C4DFF] mb-4 group-hover:underline">
              {project.title}
            </h3>
            <p className="text-gray-300 text-[16px] leading-relaxed tracking-wide">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
