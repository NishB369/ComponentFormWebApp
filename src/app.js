import React from "react";
import ReactDOM from "react-dom/client";
import Widget from "./Components/Widget/Widget";

const App = () => {
  return (
    <div className="h-lvh w-[100%] flex items-center justify-center">
      <div className="w-[90%]">
        <Widget />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
