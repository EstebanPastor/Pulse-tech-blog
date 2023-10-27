import Hero from "./components/ui/hero/Hero";
import LatestPost from "./components/ui/latest-posts/LatestsPosts"

function Home() {
  return (
    <>
      <div className="dark:text-white">
        <Hero />
        <LatestPost />
      </div>
    </>
  );
}

export default Home;
