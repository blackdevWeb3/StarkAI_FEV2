import { Link } from "react-router-dom";

interface BlogItemProps {
  hashtag?: string;
  title?: string;
  content?: string; // You can specify the correct type for content here
  src?: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  src,
  hashtag,
  title,
  content,
}) => {
  return (
    <>
      <article className="flex flex-col items-start w-full overflow-hidden">
        <Link to="" className="w-full">
          <div className="overflow-hidden rounded-[6px] w-full max-w-full">
            <img
              src={src || "https://cdn.buttercms.com/f9vWMDrTRPWCi7LWim2w"}
              alt="blog"
              className="w-[360px] h-[225px] overflow-hidden object-cover aspect-custom-16-10"
            ></img>
          </div>
          <div className="py-[17px] px-0 max-w-full flex flex-col w-full items-start">
            <div className="text-[#6b66ff] text-[14px] font-semibold leading-[20px] pb-[5px]">
              {hashtag}
            </div>
            <header>
              <h3 className=" font-normal leading-8 text-[24px]">{title}</h3>
            </header>
            <div className="leading-[1.4] text-[#d1d4e2] pt-5">{content}</div>
          </div>
        </Link>
      </article>
    </>
  );
};
export default BlogItem;
