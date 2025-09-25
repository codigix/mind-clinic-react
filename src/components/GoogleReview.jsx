import React, { useEffect, useState } from "react";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);
  const [clinicName, setClinicName] = useState("");
  const [rating, setRating] = useState(0);

  // Replace with your real API key
  const API_KEY = "AIzaSyD3kER4kKXygAEB1peI9LbKDMWowJYaxRY";

  // Replace with your place_id once you fetch it
  const PLACE_ID = "ChIJxxxxxxxxxxxxxx";

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews&key=${API_KEY}`
        );
        const data = await res.json();

        if (data.result) {
          setClinicName(data.result.name);
          setRating(data.result.rating);
          setReviews(data.result.reviews || []);
        } else {
          console.error("No reviews found", data);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>{clinicName} — ⭐ {rating}</h2>
      {reviews.map((r, i) => (
        <div key={i} style={{ borderBottom: "1px solid #ddd", padding: "10px 0", marginBottom: "10px" }}>
          <strong>{r.author_name}</strong>
          <p>Rating: {r.rating} ⭐</p>
          <p>{r.text}</p>
          <small>{new Date(r.time * 1000).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}
