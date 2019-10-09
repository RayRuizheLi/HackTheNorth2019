import React, { Component } from "react";

export default function Special(props) {
  return <video height="100vh" width="100vw" autoPlay src={props.vid}></video>;
}
