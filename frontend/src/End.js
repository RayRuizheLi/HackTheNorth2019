import React, { Component } from "react";

import loadingScren from "./res/loading_screen.gif";

import end from "./res/end.png";

import music from "./res/music3.mp3";

export default function Welcome() {
  return (
    <div>
      <img
        src={end}
        style={{
          width: "100vw",
          height: "100vh",
          transform: "rotate(180deg) scaleX(-1)"
        }}
      />
      <audio autoPlay loop>
        <source src={music} type="audio/mp3" />
      </audio>
    </div>
  );
}
