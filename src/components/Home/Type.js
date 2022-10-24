import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "MERN Stack Developer",
          "Competitive Programmer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
