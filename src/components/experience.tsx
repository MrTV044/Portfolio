import "./home.css";

export default function Experience() {
  return (
    <>
      {/* experience */}
      <div className="flex gap-52 m-auto w-fit mt-10">
        <div className="mb-11 text-4xl font-manrope  font-bold">Experience</div>
        <div className="experience flex-col flex gap-10">
          <div>
            <p className="experience-title">Web3 Business Development</p>
            <p>Cyra Exchange</p>
            <p>2023 - 2024</p>

            <ul className="core-key">
              <li>
                Negotiating strategic partnerships with key vendors for business
                growth.
              </li>
              <li>
                Developing comprehensive marketing plans to drive market
                penetration.
              </li>
              <li>
                Establishing a network of over 100 influential Key Opinion
                Leaders
              </li>
              <li>
                Ensuring a synergistic and Collaborative ecosystem between
                partners.
              </li>
              <li>
                Creating and implementing marketing campaigns to generate brand
                awareness
              </li>
              <li>
                Coordinating efficient cross-departmental collaboration and{" "}
                <br />
                optimizing internal processes, achieving operational excellence
              </li>
            </ul>
          </div>
          <div className="border border-solid border-neutral-200"></div>
          <div className="experience">
            <p className="experience-title">Blockchain Analyst & Researcher</p>
            <p>Bitrue Exchange</p>
            <p>2022 - 2023</p>
            <ul className="core-key">
              <li>Spearheaded upcoming token listing strategies.</li>
              <li>Onboarded new users amidst market downturn.</li>
              <li>Authored research articles for company blog.</li>
              <li>Co-listed tokens through strategic partnerships.</li>
              <li>Tracked emerging marketing & industry trends.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonials */}

      <h1
        style={{ width: "fit-content" }}
        className="m-auto mt-16 mb-10 text-4xl font-manrope font-bold min-w-fit"
      >
        Testimonials
      </h1>

      {/* <div className="flex ml-24 mr-24 justify-center gap-x-28">
        <div className="experience-testi ">
          <h1>
            John Smith, <br /> Binance Head of Engineering
          </h1>
          <p>
            "Arifin is an exceptional Web3 engineer with deep expertise in
            JavaScript, React.js, and Node.js. His problem-solving skills and
            ability to integrate dApps make him an invaluable team member."
          </p>
        </div>

        <div className="experience-testi">
          <h1>
            John Smith, <br /> Smart Contract Manager
          </h1>
          <p>
            "I've worked with Arifin for two years. His versatility across
            technologies like Go, PHP, and C++ and his expertise in Web3 make
            him a key asset to any team."
          </p>
        </div>

        <div className="experience-testi">
          <h1>
            Sarah Lee, <br /> CEO of Decentralized Solutions
          </h1>
          <p>
            "Working with Arifin on our Web3 platform was fantastic. His
            expertise in React.js, Node.js, and blockchain integration delivered
            a high-quality product. Highly skilled and reliable!"
          </p>
        </div>
      </div> */}
    </>
  );
}
