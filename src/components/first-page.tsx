import React from "react";

export default function First_Page() {
  return (
    <>
      <div>
        {/* nav */}
        <nav>
          <div>
            <ul>
              <a href="">Home</a>
              <a href="">Portfolio</a>
              <a href="">Experience</a>
              {/* Experience will include testimonials */}
              <a href="">Contact Us</a>
            </ul>
          </div>
        </nav>

        {/* Hero section */}
        <div>
          {/* introduction */}
          <div>
            <h1 className="text-red-900">Arifin Santoso</h1>
            <p>
              Indonesian based Fullstack Developer creating user focused
              websites
            </p>
            <a href="">Contact Me</a>
            <a href="">LinkedIn</a>
            <a href="">Github</a>
          </div>
          {/* picture */}
          <div>
            {/* <img src="src/assets/headshot.png" alt="Profile picture" /> */}
          </div>
        </div>

        {/* about me */}
        <h2>About Me</h2>
        <div>
          <p>Brief Biography: </p>
          <p>
            I am a front-end developer based in Sydney looking for exciting
            opportunities. Has Mechanical Engineering background. Likes to focus
            on accessibility when developing. Passionate and curious about
            solving problems. Currently, I’m exploring Reactjs, Webflow and a
            bit of Designing. While I am not programming, I enjoy playing
            football, photography and playing Valorant. Learning more to improve
            skill
          </p>
          <div>
            <p>Core Skills</p>
            <ul>
              <li>Javascript</li>
              <li>React.js</li>
              <li>Tailwind CSS</li>
              <li>Pindahkan Gunung</li>
            </ul>
            <p>Key Values</p>
            <ul>
              <li>Timeliness</li>
              <li>Attention to Detail</li>
              <li>Clear Communication</li>
            </ul>
          </div>
        </div>

        {/* skills section */}
        <div>
          <h3>Skills</h3>
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
      </div>
    </>
  );
}
