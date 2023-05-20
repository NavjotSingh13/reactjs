import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement("h1", {id: "Parent"}, 
[ React.createElement("h2", {id: "h2"}, 
[ React.createElement("h3", {id: "h3"}, "I am Child"),
React.createElement("h3", {id: "h3"}, "I am Child")]),

React.createElement("h2", {id: "h2"}, 
[ React.createElement("h3", {id: "h3"}, "I am Child"),
React.createElement("h3", {id: "h3"}, "I am Child")])]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

