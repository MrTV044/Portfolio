import "./home.css";
import profilePic from "../assets/headshot.png";

export default function First_Page() {
  return (
    <>
      <div>
        {/* Hero section */}
        <div className="hero">
          {/* introduction */}
          <div>
            <h1 className="text-6xl font-medium mt-5">Arifin Santoso</h1>
            <p className="mt-4 text-lg ml-4">
              Indonesian based Fullstack Developer creating user focused
              websites
            </p>
            <div className="space-x-4 flex justify-end">
              <button className=" p-1">
                <a href="#contact-me-id" aria-label="link to contact me page">
                  Contact Me
                </a>
              </button>
              <button className="flex items-center gap-0 p-1">
                <a
                  href="https://www.linkedin.com/in/arifincahyadisantoso/"
                  aria-label="my linkedin page"
                  target="_blank"
                >
                  Linkedin
                </a>
              </button>
              <button className="flex items-center gap-0 p-1">
                <a
                  href="https://github.com/MrTV044"
                  aria-label="my github page"
                  target="_blank"
                >
                  Github
                </a>
              </button>
            </div>
          </div>

          {/* picture */}
          <div className="overflow-hidden w-52 h-52 ml-5 rounded-2xl">
            <img src={profilePic} alt="Profile picture" />
          </div>
        </div>
        {/* about me */}
        <div className="section2 ">
          <h2 className="header">About Me</h2>
          <div className="flex justify-center gap-x-10 ">
            <p style={{ width: "fit-content" }}>
              I am a front-end developer based in Sydney looking for exciting
              opportunities. Has Mechanical Engineering background. Likes to
              focus on accessibility when developing. Passionate and curious
              about solving problems. Currently, I’m exploring Reactjs, Webflow
              and a bit of Designing. While I am not programming, I enjoy
              playing football, photography and playing Valorant. Learning more
              to improve skill
            </p>
          </div>
          <div className="core-key flex gap-x-36 justify-center mt-8">
            <div>
              <p className="mt-5">Core Skills:</p>
              <ul>
                <li>Javascript</li>
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Pindahkan Gunung</li>
              </ul>
            </div>
            <div>
              <p className="mt-5">Key Values:</p>
              <ul>
                <li>Timeliness</li>
                <li>Attention to Detail</li>
                <li>Clear Communication</li>
              </ul>
            </div>
          </div>
        </div>
        {/* skills section */}
        <div style={{ width: "content-fit" }} className="section2 mt-10 m-auto">
          <h3 className="header">Skills</h3>
          <ul className="m-auto">
            <li>
              Front-End Skills: Technologies like HTML, CSS, JavaScript, React,
              Angular
            </li>
            <li>
              Back-End Skills: Frameworks and languages like Node.js, Express,
              Django, or Ruby on Rails.
            </li>
            <li>
              DevOps & Tools: Tools used in development, such as Docker, Git,
              Jenkins, AWS, or CI/CD solutions.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
