import "./home.css";

export default function Experience() {
  return (
    <>
      <div className="flex gap-40 m-auto w-fit mt-10">
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
    </>
  );
}
