import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import butter from "../../hooks/butter-client";
import { NewBlur } from "../../assets";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { changeDateFormat } from "../../utils/changeDateFormat";

const BlogPost = () => {
  const [post, setPost] = useState<any>({});
  const { post: postId } = useParams<{ post?: string }>();

  useEffect(() => {
    const fetchPost = async () => {
      // Ensure that postId is defined before making the call
      if (!postId) {
        console.error("postId is undefined");
        return;
      }
      try {
        const response = await butter.post.retrieve(postId);
        setPost(response.data?.data);
      } catch (error) {
        console.error("There was an issue fetching the post:", error);
      }
    };

    fetchPost();
  }, []); // Empty dependencies array ensures this effect runs only once when the component mounts

  return (
    <div className="w-full bg-[#1c1b1b] font-chakra relative overflow-hidden min-h-screen">
      <div className="pt-32 px-10 text-white flex flex-col w-full">
        <div className="max-w-[900px] mx-auto px-5 flex flex-col items-start w-full">
          <div className="w-full text-[15px] z-50 text-[#d1d2e4]">
            <span className="">
              <Link to="/">Home</Link>
            </span>
            <span className="px-2 font-bold text-[15px]">/</span>
            <span className="">
              <Link to="/news">News</Link>
            </span>
            <span className="px-2 font-bold text-[15px]">/</span>
            <span>{post?.title}</span>
          </div>
          <div className="flex flex-col items-start w-full max-w-full pt-6 pb-8 gap-3">
            <h1 className="text-[44px] leading-[1.2]">{post?.title}</h1>
            <div className="inline-flex max-w-full gap-5 items-center">
              <span className="blog_item_color">{post?.slug}</span>
              <span className="px-[5px] inline-block text-[#26272c] text-center text-[15px] font-bold">
                |
              </span>
              <span className="blog_item_color text-[#D1D4E2]">
                Published on &nbsp;
                {post && post.published
                  ? changeDateFormat(post?.published)
                  : "Date unavailable"}
              </span>
            </div>
          </div>
          <img src={post?.featured_image} alt="featured_image" />
          <div className="pb-20 pt-10">
            <div dangerouslySetInnerHTML={{ __html: post?.body }} />
          </div>

          <div className="border-t-[1px] border-primary max-w-full w-full flex flex-col items-end text-[#a8aab5] pb-16">
            <Link
              to="/news/"
              className="pt-4 pb-2 underline transition-all duration-150 ease-in-out inline-flex items-center hover:opacity-70"
            >
              <span className="px-2">
                <Icon icon="ep:back" />
              </span>
              <span className="">Back to the list</span>
            </Link>
          </div>
        </div>
      </div>
      <NewBlur />
    </div>
  );
};

export default BlogPost;
