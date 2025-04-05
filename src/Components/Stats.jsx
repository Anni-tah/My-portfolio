import React from "react";
import CountUp from "react-countup";
import { FaLaptopCode, FaProjectDiagram, FaUserFriends, FaClock } from "react-icons/fa";

function Stats() {
  const stats = [
    {
      icon: <FaLaptopCode size={28} className="text-[#9C4DFF]" />,
      end: 5,
      suffix: "+",
      label: "Years of Coding",
    },
    {
      icon: <FaProjectDiagram size={28} className="text-[#9C4DFF]" />,
      end: 20,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <FaUserFriends size={28} className="text-[#9C4DFF]" />,
      end: 15,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: <FaClock size={28} className="text-[#9C4DFF]" />,
      end: 1000,
      suffix: "+",
      label: "Hours of Experience",
    },
  ];

  return (
    <section className="py-16 px-8 md:px-32 bg-[#f7f7f7] text-gray-800" id="stats">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center items-center">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center w-40 h-40 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-[#9C4DFF]">
              <CountUp end={stat.end} duration={2.5} suffix={stat.suffix} />
            </div>
            <div className="text-sm text-gray-700 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
