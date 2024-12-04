import "./contact-me.css";

export default function Contact_me() {
  return (
    <>
      <div className="contact-me" id="contact-me-id">
        <div>
          <h1 className="text-3xl text-green-600 pb-2">Let's Connect!</h1>
          <p>
            Say hello at <a href="">arifincahyadisantoso@gmail.com</a>
          </p>
          <p>
            For more info, here's my <a href="">resume</a>
          </p>
        </div>
        <div>
          <form action="">
            <p>Name</p>
            <input className="rounded" type="text" required />
            <p className="mt-3">Email</p>
            <input className="rounded" type="email" required />
            <p className="mt-3">
              {" "}
              <label htmlFor="subject">Subject</label>
            </p>

            <input className="rounded subject" type="text" required />
            <p className="mt-3">Message</p>
            <textarea
              className="rounded w-150 l-150"
              name=""
              id=""
              required
            ></textarea>
            <br />
            <button className="border-solid border w-20 h-8 border-white rounded-full mt-5">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
