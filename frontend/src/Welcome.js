import React, { Component } from "react";

import loadingScren from "./res/loading_screen.gif";

import music from "./res/music2.mp3";

export default function Welcome() {
  return (
    <div>
      <audio autoPlay loop>
        <source src={music} type="audio/mp3" />
      </audio>
      <img
        src={loadingScren}
        style={{
          width: "100vw",
          height: "100vh",
          transform: "rotate(180deg)"
        }}
      />
    </div>
  );
}
