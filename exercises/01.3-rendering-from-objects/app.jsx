import React from "react";
import ReactDOM from "react-dom";

const customer = {
	first_name: "Bob",
	last_name: "Dylan"
};

//              your code inside these <div> tags
const output = <div>
    <h1>My name is
    console.log(customer.first_name);</h1>
    <h2>My last name is
     console.log(customer.last_name);</h2>
</div>;


//              what     where
ReactDOM.render(output, document.querySelector("#myDiv"));
