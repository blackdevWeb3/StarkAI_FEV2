import { useState, useEffect } from "react";
import { Loader, NewBlur } from "../../assets";
import { const_hashtags } from "../../utils/constants";
import butter from "../../hooks/butter-client";
import BlogItem from "./BlogItem";

interface Category {
  name: string;
  slug: string;
}

interface Post {
  status: string;
  slug?: string;
  title?: string;
  summary?: string;
  featured_image?: string;
  categories?: Category[];
}

const categoriesToExclude = [
  "Case Studies",
  "Community Events",
  "HowTo",
  "Releases",
];

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loaderState, setLoaderState] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [hashtagSelected, setHashtagSelected] = useState<string>("All");

  const handleHashtagClick = (name: string) => {
    setHashtagSelected(name);
  };

  const filterPostsByHashtag = (posts: Post[], hashtag: string): Post[] =>
    hashtag === "All"
      ? posts
      : posts.filter((post) =>
          hashtag === "Uncategorized"
            ? post.categories?.every(
                (category) => !categoriesToExclude.includes(category.name)
              )
            : post.categories?.some((category) => category.name === hashtag)
        );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await butter.post.list({ page: 1, page_size: 10 });
        if (!resp?.data?.data) throw new Error("No data received");
        setPosts(filterPostsByHashtag(resp.data.data, hashtagSelected));
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoaderState(false);
      }
    };

    fetchData();
  }, [hashtagSelected]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full bg-[#1c1b1b] font-chakra relative overflow-hidden">
      <div className="pt-32 px-10 text-white flex flex-col w-full">
        <div className="flex flex-col max-w-[960px] mx-auto w-full items-center gap-3">
          <span className="text-[42px] font-semibold">Latest News</span>
          <div className="max-w-[800px] text-[#d1d4e2] text-center leading-[28px]">
            Explore the Latest in News, Trends, and Community Events with{" "}
            <span className="text-[#9a5cf7]">Stark AI</span>
            <br />
            Your Source for Creativity and Industry Insights
          </div>
        </div>
        <div className="max-w-[1180px] w-full px-5 flex flex-col mx-auto items-start">
          <div className="relative min-h-[705px] w-full max-w-full">
            <div className="min-h-[600px]">
              <div className="flex items-center justify-center pt-10 z-50">
                <ul className="flex flex-wrap p-0 nav-filter justify-center">
                  {const_hashtags.map((item) => (
                    <li
                      key={item.name}
                      className={hashtagSelected === item.name ? "active" : ""}
                    >
                      <button onClick={() => handleHashtagClick(item.name)}>
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="pt-[85px] w-full relative">
                {loaderState === true && (
                  <div className="overlay-loader ml-8 sm:ml-6">
                    <Loader />
                  </div>
                )}
                {posts.length > 0 ? (
                  <div className="w-full items-stretch gap-[30px] grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {posts.map((post, index) => (
                      <BlogItem key={index} post={post} />
                    ))}
                  </div>
                ) : (
                  <div className="w-full">
                    <h2 className="text-center w-full font-medium text-[32px]">
                      No posts to display.
                    </h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <NewBlur />
    </div>
  );
};

export default Blog;
