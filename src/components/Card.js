import React from "react";

export default function Card(props) {
  console.log(props);
  return (
    <div className="card">
      <div>
        <img src={props.card.imageUrl} />
      </div>
      <div className="card-container">
        <div>
          <h4>{props.card.location}</h4>
          <a href="https://goo.gl/maps/1DGM5WrWnATgkSNB8">View on map</a>
        </div>
        <h3>Mount Fuji</h3>
        <div date>
          <p>12 Jan, 2021</p>
          <p>24 Jan, 2021</p>
        </div>
        <div>
          <small>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776
            meters (12,380 feet). Mount Fuji is the single most popular tourist
            site in Japan, for both Japanese and foreign tourists.
          </small>
        </div>
      </div>
    </div>
  );
}
