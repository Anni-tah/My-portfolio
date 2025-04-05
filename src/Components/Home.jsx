import { TypeAnimation } from 'react-type-animation';
import { FiMail, FiSearch, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi'; // Importing GitHub icon

function Home() {
    return (
        <div 
            id="home" 
            className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32 bg-gradient-to-r from-black via-blue-900 to-purple-900">
            
            <div className="flex flex-col items-center justify-center gap-10 text-white">
                
                <div className="animate-slide-in-left">
                    <img 
                        src="/IMG_1782.JPG" 
                        alt="Profile picture of Anne Nabwire" 
                        className="w-[300px] cursor-pointer rounded-full shadow-2xl shadow-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-600/50 md:w-[350px]" 
                    />
                </div>
                
                <div className="flex flex-col items-center justify-center gap-3 text-center max-w-[600px] animate-slide-in-right">
                    <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-semibold md:text-7xl">
                        Anne Nabwire
                    </h1>
                    
                    <TypeAnimation
                        sequence={[
                            "Full-Stack Engineer", 2000,
                            "Software Developer", 2000,
                            "Front-End Developer", 2000,
                            "Python Developer", 2000,
                            "React & Node.js Enthusiast", 2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        style={{
                            background: "linear-gradient(to right, #ec4899, #3b82f6)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            fontSize: "2em",
                            fontWeight: "300",
                            display: "inline-block"
                        }}
                        repeat={Infinity}
                    />
                    
                    <p className="text-sm md:text-base text-gray-300 text-center overflow-hidden mt-4">
                        Passionate about building intuitive, scalable web applications using modern technologies. Let's build something great together!
                    </p>

                    <div className="flex flex-row items-center gap-4 mt-6">
                        <button className="bg-white text-[#9C4DFF] font-semibold py-2 px-6 rounded-lg border-2 border-[#9C4DFF] hover:bg-[#9C4DFF] hover:text-white transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                            <FiMail size={20} /> 
                            Hire Me
                        </button>
                        <button className="bg-[#9C4DFF] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#7e3aec] transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                            <FiSearch size={20} /> 
                            See My Work
                        </button>
                    </div>
                    
                    {/* Social Media Icons Section */}
                    <div className="flex gap-6 mt-8">
                        {/* Email Icon */}
                        <a href="mailto:nabanne96@gmail.com" className="text-white hover:text-[#9C4DFF] transition duration-300">
                            <FiMail size={30} />
                        </a>
                        
                        {/* Phone Icon */}
                        <a href="tel:+254712930270" className="text-white hover:text-[#9C4DFF] transition duration-300">
                            <FiPhone size={30} />
                        </a>
                        
                        {/* Updated LinkedIn Icon */}
                        <a href="https://www.linkedin.com/in/anne-nabwire-6ba41b1b8" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9C4DFF] transition duration-300">
                            <FiLinkedin size={30} />
                        </a>
                        
                        {/* GitHub Icon */}
                        <a href="https://github.com/Anni-tah" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#9C4DFF] transition duration-300">
                            <FiGithub size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
