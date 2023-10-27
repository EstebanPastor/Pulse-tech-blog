import Hero from "./components/ui/hero/Hero";
import LatestPost from "./components/ui/latest-posts/LatestsPosts"
import Newsletter from "./components/ui/newsletter/Newsletter"

function Home() {
  return (
    <>
      <div className="dark:text-white">
        <Hero />
        <LatestPost />
        <Newsletter />
      </div>
    </>
  );
}

export default Home;
