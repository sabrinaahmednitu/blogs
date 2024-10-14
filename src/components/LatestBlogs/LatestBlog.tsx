import { Blog } from "@/types";
import LatestBlogCard from "../ui/LatestBlogCard";
import BlogCard from "../ui/BlogCard";

const LatestBlog = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-center my-5">
        Latest Blog from
        <span className="text-accent">Blogiz</span>{' '}
      </h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
          sit est nisi recusandae illum, molestiae omnis tempora eaque id
          deserunt a, temporibus exercitationem adipisci, dolorem animi.
        </i>
      </p>
      <div className="grid grid-cols-2 gap-5 mt-12">
        {
          blogs.slice(0,2).map(blog=> <LatestBlogCard key={blog.id} blog={blog}></LatestBlogCard> )
        }
      </div>
      <div className="grid grid-cols-3 gap-5 mt-12">
        {
          blogs.slice(2,5).map(blog=> <BlogCard key={blog.id} blog={blog}></BlogCard> )
        }
      </div>
    </div>
  );
};

export default LatestBlog;
