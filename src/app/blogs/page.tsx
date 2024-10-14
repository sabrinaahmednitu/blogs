import BlogCard from '@/components/ui/BlogCard';
import { Blog } from '@/types';
import React from 'react';

const BlogsPage = async() => {
    const res = await fetch('http://localhost:5000/blogs', {
        cache:"no-store",
    });
    const blogs = await res.json();
    return (
      <div className='container mx-auto'>
        <h1 className="text-4xl text-center my-5">
          All Blogs from
          <span className="text-accent">Blogiz</span>{' '}
        </h1>
        <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
          <i>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium
            sit est nisi recusandae illum, molestiae omnis tempora eaque id
            deserunt a, temporibus exercitationem adipisci, dolorem animi.
          </i>
        </p>
        <div className="grid grid-cols-3 gap-5 my-12">
          {blogs.map((blog:Blog) => (
            <BlogCard key={blog.id} blog={blog}></BlogCard>
          ))}
        </div>
      </div>
    );
};

export default BlogsPage;