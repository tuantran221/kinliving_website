import React from "react";
import { Link } from "react-router-dom";
import "../Styles/PostCard.css";
const PostCard = ({ title, subtitle, address, price, cover_image, id }) => {
  return (
    <div className="post-card">
      <Link className="post-card-route" to={`/post/${id}`}>
        <img src={cover_image} alt="post" />
        <div className="post-card-text">
          <div className="post-card-title">{title}</div>
          <div className="post-card-subtitle">{subtitle}</div>
          <div className="post-card-address">{address}</div>
          <div className="post-card-book">
            <div className="post-card-price">
              <span>Price:</span>
              <p style={{ fontWeight: "bolder", fontSize: "14px" }}>{price}</p>
            </div>
            <button className="post-btn">Select room</button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostCard;
