import Form from "../assets/Screen Shot 2024-12-03 at 9.24.26 AM.png";
import contactCard from "../assets/Screen Shot 2024-12-03 at 9.24.56 AM.png";

export default function Portfolio() {
  return (
    <>
      <h1 className="mb-11 text-4xl font-manrope ml-20 mt-11 font-bold">
        Portfolio
      </h1>

      {/* /* ---------------------------------- forms --------------------------------- */}

      <div className=" flex gap-x-36 items-center ml-24">
        <a href="https://formpurwa.vercel.app/" aria-label="my portfolio">
          <img className="overflow-hidden mb-10" src={Form} alt="Form" />
        </a>
        <a
          className=" hover:text-green-600 text-xl pb-5"
          href="https://formpurwa.vercel.app/"
          aria-label="my portfolio"
        >
          Forms
        </a>
        <p className="mr-5 mb-5">
          Teamed up with a designer to breathe life into a promotional webpage
          for our beloved show, Adventure Time. Delivered a fully responsive
          design with dynamic content capabilities, seamlessly integrating a
          newsletter feature to keep fans updated with the latest adventures.
        </p>
      </div>
      {/* /* ------------------------------ contact card ------------------------------ */}

      <div className="border border-solid border-neutral-200"></div>
      <div className="flex gap-x-28  mt-10 items-center ml-24">
        <a href="https://profile-arifin.vercel.app" aria-label="my portfolio">
          <img
            className="overflow-hidden mb-10 w-full"
            src={contactCard}
            alt="Contact-Card"
          />
        </a>

        <a
          className="hover:text-green-600 :"
          href="https://profile-arifin.vercel.app"
          aria-label="my portfolio"
        >
          <p className="min-w-max text-xl"> Contact Card</p>
        </a>
        <p className="mr-5">
          Mastered CSS Grid complexities in building an innovative news
          homepage, navigating intricate design decisions for a seamless user
          experience. Leveraged the challenge to enhance skills in front-end
          development.
        </p>
      </div>
    </>
  );
}
