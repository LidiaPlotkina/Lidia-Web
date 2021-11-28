import React from "react";
import SectionHeading from "./SectionHeading";
import BlogCard from "./BlogCard";
import blogData from "../data/BlogData";


export default function BlogSection() {
    
    return (
        <>
            <section className="relative py-20 bg-gray-100" id="blog-section">
                <div className="container mx-auto px-4">
                    <SectionHeading name={"Lidia's Qualifications"} />
                    <hr className="mb-5" />
                    <div className="flex flex-wrap items-center">
                    {blogData.map(({ post_id, post_name, post_img, post_descrip }) => (
                        <BlogCard key={post_id} image={ post_img} postHead={post_name} postDesc={post_descrip}/>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}