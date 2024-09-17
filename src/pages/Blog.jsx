import React, { useEffect, useState } from 'react'
import './blog.css'
import BlogCard from '../components/BlogCard';


function Blog() {
    const [blogs, setBlogs] = useState([]);

    const fetchData = async () => {
        const baseUrl = import.meta.env.VITE_API_URL || 'https://bytebox-byteslasher.vercel.app';
        try {
            const api = await fetch(`${baseUrl}/data/blogData.json`);
            const data = await api.json();
            setBlogs(data);
        } catch (error) {
            console.error(`Error fetching data: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section id="blogs" className='blogs'>
            <div className="container-fluid">
                <div className="row">
                    <h4 className='section-title'> Our Blogs</h4>
                </div>
                <div className="row mt-5">
                    {
                        blogs && blogs.length > 0 && blogs.map(blog => (
                            <BlogCard key={blog._id} blog={blog} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Blog
