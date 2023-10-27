import Image from "next/image";

import aboutImage from "../../public/assets/about.jpg";
import signatureImage from "../../public/assets/signature.png";

const page = () => {
  return (
    <div className="py-10">
      <div className="wrapper flex flex-col gap-5 justify-center items-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Our story:
        </h1>
        <Image
          src={aboutImage}
          height={600}
          width={600}
          alt="About us"
          className="rounded-md"
        />
        <p className="max-w-[600px] text-center text-gray-600 dark:text-white">
          Founding Principles It all started with a vision to create a platform
          where technology aficionados, beginners, and experts alike could
          converge to learn, discuss, and explore the dynamic realm of tech. Our
          founders, a group of tech enthusiasts, envisioned a space that would
          not only report on the latest advancements but also serve as a
          collaborative hub for knowledge-sharing and inspiration.
        </p>
        <Image
          src={signatureImage}
          height={300}
          width={300}
          alt="tech pulse logo"
        />
      </div>
    </div>
  );
};

export default page;
