import React, { useEffect, useRef, useState } from "react";

import MiddleBanner from "../components/MiddleBanner";
import PostCard from "../components/PostCard";
import MapComponent from "../components/MapComponent";
import PostData from "../data/PostData";
import { useParams } from "react-router-dom";
import L from "leaflet";
import "../Styles/PostDetail.css";
import AddressIcon from "../assets/icon/icons8-address-50.png";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
const PostDetail = () => {
  const { id } = useParams();
  const [postId] = useState(parseInt(id));
  const post = PostData.find((post) => post.id === postId);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (index) => {
    setLightboxOpen(true);
    setLightboxIndex(index);
  };
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!mapContainerRef.current) {
      console.error("Map container element not found.");
      return;
    }

    const map = L.map(mapContainerRef.current).setView([0, 0], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "Map data &copy; OpenStreetMap contributors",
      maxZoom: 18,
    }).addTo(map);

    const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      post.address
    )}`;

    fetch(geocodeUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const { lat, lon } = data[0];
          L.marker([lat, lon]).addTo(map);
          map.setView([lat, lon], 13);
        }
      });

    return () => {
      map.remove();
    };
  }, [post.address]);

  return (
    <div className="post-detail-wrapper">
      <div className="post-detail-images">
        <div className="post-image01-wrapper">
          <img
            className="image01"
            src={post.images.image02}
            alt="detail 2"
            onClick={() => handleImageClick(1)}
          />
        </div>

        <div className="post-image02-wrapper">
          <img
            className="image02"
            src={post.images.image01}
            alt="detaul 1"
            onClick={() => handleImageClick(0)}
          />
          <img
            className="image03"
            src={post.images.image03}
            alt="detail 3"
            onClick={() => handleImageClick(2)}
          />
        </div>

        {lightboxOpen && (
          <Lightbox
            mainSrc={post.images[`image0${lightboxIndex + 1}`]}
            nextSrc={post.images[`image0${((lightboxIndex + 1) % 3) + 1}`]}
            prevSrc={post.images[`image0${((lightboxIndex + 2) % 3) + 1}`]}
            onCloseRequest={() => setLightboxOpen(false)}
            onMovePrevRequest={() => setLightboxIndex((lightboxIndex + 2) % 3)}
            onMoveNextRequest={() => setLightboxIndex((lightboxIndex + 1) % 3)}
          />
        )}
      </div>
      <div className="post-detail-each">
        <div className="post-detail-each-left">
          <div className="post-detail-title">
            {post.title} {post.subtitle}
          </div>
          <div className="post-detail-address">
            <img
              className="post-detail-address-icon"
              src={AddressIcon}
              alt="address"
            />
            {post.address}
          </div>
          <div className="post-detail-content">{post.content}</div>
        </div>
        <div className="post-detail-each-right">
          <MapComponent address={post.address} />
        </div>
      </div>
      <div className="post-detail-headline">Other options</div>
      <div className="post-detail-explore">
        {PostData.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            cover_image={post.cover_image}
            title={post.title}
            subtitle={post.subtitle}
            price={post.price}
            address={post.address}
          />
        ))}
      </div>
      <div className="post-detail-banner">
        <MiddleBanner />
      </div>
    </div>
  );
};

export default PostDetail;
