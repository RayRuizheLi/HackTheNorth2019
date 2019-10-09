import React, { Component } from "react";
import bar from "./res/bar.png";

const Bar = ({ type, value }) => {
    return(
        (type === "Chakra") ? <ChakraBar value={value} /> : 
        ((type === "Health") ? <HealthBar value={value} /> : <SpecialBar value={value} />)
    );
}

const ChakraBar = ({ value }) => {
  const width = (value / 100) * 540;
  return (
    <div>
      <img
        src={bar}
        style={{
          width: "560px",
          height: "40px",
          marginLeft: "280px",
        }}
      />

      <div
        style={{
          minWidth: `${width}px`,
          width: `${width}px`,
          height: "20px",
          marginLeft: "290px",
          marginTop: "-30px",
          backgroundColor: "blue"
        }}
      ></div>

      {/* <div style={{
                width: '400px',
                height: '40px',
                marginLeft: '95px',
                color: 'blue',
            }}>
            </div> */}
    </div>
  );
};

const HealthBar = ({ value }) => {
  const width = (value / 100) * 540;
  return (
    <div>
      <img
        src={bar}
        style={{
          width: "560px",
          height: "40px",
          marginLeft: "270px"
        }}
      />

      <div
        style={{
          minWidth: `${width}px`,
          width: `${width}px`,
          height: "20px",
          marginLeft: "285px",
          marginTop: "-30px",
          backgroundColor: "red"
        }}
      ></div>
    </div>
  );
};

const SpecialBar = ({ value }) => {
  const width = (value / 100) * 540;
  return (
    <div>
      <img
        src={bar}
        style={{
          width: "560px",
          height: "40px",
          marginLeft: "290px",
          marginTop: '-30px'
        }}
      />

      <div
        style={{
          minWidth: `${width}px`,
          width: `${width}px`,
          height: "20px",
          marginLeft: "305px",
          marginTop: "-30px",
          backgroundColor: "yellow",
        }}
      ></div>
    </div>
  );
};

export default Bar;
