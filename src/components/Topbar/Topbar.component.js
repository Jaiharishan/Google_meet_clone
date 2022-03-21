import React from "react";
import { useState } from "react";
import "./Topbar.css";

const Topbar = () => {
  const [joinUrl, setJoinUrl] = useState("");
  const placeHolderText = "Enter the meet url to join the meet";
  return (
    <div className="topbar">
      {/* join a meet */}
      <div className="join">
        <input
          type={"text"}
          value={joinUrl}
          placeholder={placeHolderText}
          onChange={(e) => setJoinUrl(e.target.value)}
        />
        <a href={joinUrl}>
          <button className="btn">Join</button>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
