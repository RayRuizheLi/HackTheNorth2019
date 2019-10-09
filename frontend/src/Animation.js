import React, { Component } from "react";
import dragon from "./res/dragon.gif";
import dragonone from "./res/durgun-once.gif";
import rasenshuriken from "./res/rasen2-once.gif";
import hit from "./res/hit-once.gif";
import black from "./res/black.png";
import rasengan from "./res/rasengan-once.gif";
import fire from './res/fire2-once.gif';
import shark from './res/shark-once.gif';

const images = [black, hit, dragonone, fire, rasengan, rasenshuriken, shark];

class Animation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.animation = props.a;
    if (this.animation !== 0){ 
      setTimeout(() => {
        this.setState({
          display: true
        });
      }, props.d);
    }
  }

  componentWillReceiveProps(newProps) {
    this.animation = newProps.a;
    this.setState({
      display: false
    })
      setTimeout(() => {
        this.setState({
          display: true
        });
      }, newProps.d);
  }

  render() {
    return <img
        src={images[this.animation]}
        style={{
          width: "960px",
          height: "600px",
          marginTop: "350px",
          transform: "rotate(180deg)",
          opacity: this.state.display? "1" : "0"
        }}
      />
  }
}

export default Animation;
