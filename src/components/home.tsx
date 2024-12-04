import "./home.css";

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
              <button>
                <a href="./contact-me">Contact Me</a>
              </button>
              <button className="flex items-center gap-0">
                <a href="https://www.linkedin.com/in/arifincahyadisantoso/">
                  {/*
                    <img
                      className="w-10"
                      src="src/assets/pngwing.com.png"
                      alt=""
                    />
                   */}
                </a>
                <div>LinkedIn</div>
              </button>
              <button className="flex items-center gap-0">
                <a href="https://github.com/MrTV044">
                  {/* <img
                    className="w-10"
                    src="src/assets/github-logo.png"
                    alt=""
                  /> */}
                </a>
                <div>Github</div>
              </button>
            </div>
          </div>

          {/* picture */}
          <div className="overflow-hidden w-52 h-52 ml-5 rounded-2xl">
            <img
              className=""
              src="src/assets/headshot.png"
              alt="Profile picture"
            />
          </div>
        </div>

        {/* about me */}
        <div className="section2">
          <h2 className="header">About Me</h2>
          <p className="mt-0">Brief Biography: </p>
          <p>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill
          </p>
          <div className="core-key">
            <p className="mt-5">Core Skills:</p>
            <ul>
              <li>Javascript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Pindahkan Gunung</li>
            </ul>
            <p className="mt-5">Key Values:</p>
            <ul>
              <li>Timeliness</li>
              <li>Attention to Detail</li>
              <li>Clear Communication</li>
            </ul>
          </div>
        </div>

        {/* skills section */}
        <div className="section2 ">
          <h3 className="header">Skills</h3>
          <ul>
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

        {/* Contact Me! */}
      </div>
    </>
  );
}
