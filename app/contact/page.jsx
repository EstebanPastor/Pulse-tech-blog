import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const page = () => {
  return (
    <div
      className="sm:mx-auto sm:w-full sm:max-w-[1200px] py-10
  "
    >
      <div className="wrapper bg-gray-50 py-8 shadow-lg rounded-md sm:px-10">
        <div className="mb-10 text-gray-900 w-full">
          <h1 className="text-3xl font-bold uppercase">Get in touch!</h1>
          <span>Please allow 24 hours for a response</span>
          <div className="flex gap-3 w-full items-center mt-2">
            <FaTwitter className="text-2xl text-sky-400" />
            <FaYoutube className="text-2xl text-red-600" />
            <FaFacebook className="text-2xl text-blue-600" />
            <AiFillInstagram className="text-2xl text-pink-600" />
          </div>
        </div>
        <form className="space-y-6">
          <div className="flex gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400"
            />
            <input
              type="email"
              placeholder="Your email"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400"
            />
          </div>
          <input
              type="text"
              placeholder="Subject"
              className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400"
            />
            <textarea   className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 p-2 focus:outline-sky-400" placeholder="Your message"
            style={{resize: "none"}}
            cols={5}
            rows={10}
            />
            <button className="w-full bg-sky-400 p-2 rounded-md text-gray-50 shadow-lg hover:bg-sky-300 duration-500">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default page;
