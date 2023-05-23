import React from 'react';
import ReactDOM from 'react-dom';


const Heading2 =()=>  (
    <div id="container">
        <h1>This is Heading 2</h1>
     </div>
)



const abc = 1000;

const Heading = () => (
    <div id="container">
        {Heading2()}
        <Heading2></Heading2>
        <h1>{abc}</h1>
        <h1>This is Functional component</h1>
     </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading />);

