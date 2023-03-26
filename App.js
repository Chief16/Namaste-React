import React from "react";
import ReactDOM from "react-dom/client";


//React Element
const TitleComponent = () => (
  <h1 id="heading" className="headingClass">Namaste React 🚀</h1>
)

const title = React.createElement("h1", {}, "Akash is here!")


//Functional Component
const HeadingComponent = () => (
  <div>
    {/* <TitleComponent></TitleComponent> Adding another component in a component is called component composition */}
    {title}
    <h1>Printing from h1 functional component</h1>
  </div>
)

//Creating root
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent/>);