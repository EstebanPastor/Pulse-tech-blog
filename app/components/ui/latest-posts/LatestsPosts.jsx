
import { posts } from "../../../../constants/Posts.jsx";

import PostCard from "../post-card/PostCard";

const LatestsPosts = () => {
  return (
   
      <section className="w-full mt-10">
        <div className="wrapper">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-gray-100 px-3 text-gray-900 text-2xl dark:bg-medium dark:text-gray-50">
                Latest posts
              </span>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 grid-cols-2 max-sm:grid-cols-1 mt-10">
            {posts.slice(7, 13).map((post, index) => (
              <PostCard post={post} key={index} index={index} />
            ))}
          </div>
        </div>
      </section>
   
  );
};

export default LatestsPosts;
