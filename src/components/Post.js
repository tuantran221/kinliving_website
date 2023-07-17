import React, { useState } from "react";
import PostCard from "../components/PostCard";
import FilterBar from "./FilterBar";
import "../Styles/Post.css";
import data from "../data/PostData";
const Post = () => {
  const [filteredPosts, setFilteredPosts] = useState(data);

  const handleFilter = (district) => {
    if (district === "") {
      setFilteredPosts(data); // Show all posts if no district selected
    } else {
      const filtered = data.filter((post) => post.district === district);
      setFilteredPosts(filtered);
    }
  };
  return (
    <div className="post-wrapper">
     <div className="post-wrapper-sub">
     <div className="post-location">
        Location
      </div>
      <div className="post-filter">
        <FilterBar onFilter={handleFilter} />
      </div>
     </div>
        <div className="post-wrapper-all-post">
          {filteredPosts.map((post) => (
            <PostCard 
              key={post.id}
              id={post.id}
              cover_image={post.cover_image}
              title={post.title}
              subtitle={post.subtitle}
              price={post.price}
            />
          ))}
        </div>  
    </div>
  );
};

export default Post;
