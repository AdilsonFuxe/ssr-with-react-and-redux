import React from "react";

const HomePage = () => (
  <div>
    <div>Hello Worlds</div>
    <button onClick={() => console.log("Hello World")}>Please Press Me!</button>
  </div>
)

export default {
  component: HomePage
}