import React from "react";

const AnnouncementBar = () => {
  return (
    <div className="announcement-bar">
      <div className="announcement">
        <h1>Sorry, no results were found for "cakescasca"</h1>
      </div>

      <div className="announcement-box">
        <img src="../img/fault.PNG" alt="Fault" />
        <p>We have all your independence Day sweets covered</p>

        <div className="list">
          <ul>
            <li><a href="">Sweet Cake</a></li>
            <li><a href="">Black Cake</a></li>
            <li><a href="">Pozole Verde</a></li>
            <li><a href="">Healthy food</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
