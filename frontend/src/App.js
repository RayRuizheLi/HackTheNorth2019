import React, { useState, useEffect } from "react";

import Game from "./Game";
import Welcome from "./Welcome";
import End from "./End";

export default function() {
  const [welcome, setWelcome] = useState(true);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    let eventSource = new EventSource("http://localhost:5000/meta");
    eventSource.onmessage = e => {
      // console.log(e.data);
      let data = JSON.parse(e.data);
      if (data.start && welcome) {
        setWelcome(false);
      }
      if (data.end && !end) {
        setEnd(true);
      }
    };
  }, []);

  return <div>{welcome ? <Welcome /> : end ? <End /> : <Game />}</div>;
}
