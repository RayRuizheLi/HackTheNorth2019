import React, { Component } from "react";
import Player from "./Player";
import music1 from "./res/music1.mp3";

import Special from "./Special";

import Naruto from "./res/Naruto Ult.mp4";
import Sasuke from "./res/Sasuke Ult.mp4";

const delay = [0, 0, 2000, 1950, 3000, 4000, 1050];

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p1h: 100,
      p1c: 100,
      p1s: 0,
      p1a: 0,
      p2h: 100,
      p2c: 100,
      p2s: 0,
      p2a: 0
    };

    this.eventSource = new EventSource("http://localhost:5000/stream");
  }

  componentDidMount() {
    this.eventSource.onmessage = e => {
      const data = JSON.parse(e.data);
      console.log(data);
      if (data.length !== 0) {
        this.setState({
          p1h: data[0].hp,
          p1c: data[0].chakra,
          p1s: data[0].specials,
          p1a: data[0].attack + 1,
          p2h: data[1].hp,
          p2c: data[1].chakra,
          p2s: data[1].specials,
          p2a: data[1].attack + 1
        });
      }
    };
  }

  render() {
    let { p1h, p1c, p1s, p1a, p2h, p2c, p2s, p2a } = this.state;
    let p1d = 0;
    let p2d = 0;

    if (p1a !== -1 && p1a !== 0) {
      p2a = 1;
      p2d = delay[p1a];
      p1d = 0;
    } else if (p2a !== -1 && p2a !== 0) {
      p1a = 1;
      p1d = delay[p2a];
      p2d = 0;
    }

    if (p1a === 8) {
      setTimeout(() => this.setState({ p1a: 0 }), 7000);
    }
    if (p2a === 8) {
      setTimeout(() => this.setState({ p2a: 0 }), 7000);
    }
    return (
      <div
      >
        <audio autoPlay loop>
          <source src={music1} type="audio/mp3" />
        </audio>
        {p1a === 8 || p2a === 8 ? (
          <Special vid={p1a === 8 ? Naruto : Sasuke}></Special>
        ) : (
          <div style={{
            backgroundColor: "black",
            minWidth: "100vw",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "row"
          }}>
            <Player h={p1h} c={p1c} s={p1s} a={p1a} d={p1d}></Player>
            <Player h={p2h} c={p2c} s={p2s} a={p2a} d={p2d}></Player>
          </div>
        )}
      </div>
    );
  }
}

export default Game;
