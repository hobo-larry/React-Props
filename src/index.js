import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" className="img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <Card
      name="beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="john wick"
      img="https://imgs.search.brave.com/Q_ezgfpJbHVyYFbhAGOt73oeQd7n6FbnnDSu0yzmhHM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly92YXJp/ZXR5LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMy8wMy9K/b2huLVdpY2stMy5q/cGc_dz0xMDAwJmg9/NTYyJmNyb3A9MQ"
      phone="+99999999"
      email="john@wick.com"
    />
  </div>,
  document.getElementById("root")
);
