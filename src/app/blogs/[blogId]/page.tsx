import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
  params: {
    blogId: string;
  };
}

const BlogDetailPage = async ({ params }: BlogId) => {
  console.log(params);
    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
      cache:"no-store",
  });
    const blog = await res.json();
    console.log(blog)
    return <div>
      <BlogDetails blog={blog}></BlogDetails>
  </div>;
};

export default BlogDetailPage;
