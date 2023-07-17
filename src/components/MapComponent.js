import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../assets/icon/icons8-location-48.png";

const MapComponent = ({ address }) => {
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);

  useEffect(() => {
    const initializeMap = () => {
      if (!mapContainerRef.current) {
        console.error("Map container element not found.");
        return;
      }

      if (!mapRef.current) {
        mapRef.current = L.map(mapContainerRef.current).setView([0, 0], 13);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "Map data &copy; OpenStreetMap contributors",
          maxZoom: 18,
        }).addTo(mapRef.current);
      }

      const geocodeUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        address
      )}`;

      fetch(geocodeUrl)
        .then((response) => response.json())
        .then((data) => {
          if (data.length > 0) {
            const { lat, lon } = data[0];

            if (mapRef.current) {
              mapRef.current.setView([lat, lon], 13);

              const customIcon = L.icon({
                iconUrl: markerIcon,
                iconSize: [41, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41],
              });

              L.marker([lat, lon], { icon: customIcon }).addTo(mapRef.current);
            }
          }
        });
    };

    initializeMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [address]);

  return (
    <div
      ref={mapContainerRef}
      style={{
        height: "300px",
        width: "33.1%",
        display: "flex",
        float: "right",
        // marginRight: "4.7rem",
        borderRadius: "20px",
      }}
    ></div>
  );
};

export default MapComponent;
