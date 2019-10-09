import React, { Component, useState, useEffect } from "react";
import "./Player.css";
import Bar from "./Bar";
import Animation from "./Animation";

const Player = ({ h, s, c, a, d }) => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "960px",
        height: "1080px"
      }}
    >
      <Animation a={a} d={d} />
      <Bar type="Special" value={s} />
      <Bar type="Chakra" value={c} />
      <Bar type="Health" value={h} />
    </div>
  );
};

export default Player;
