import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

const data = {
	image: "../../.learn/assets/Dylan.png?raw=true",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia",
	},
};


let content = <img src={data.image} />;



/**
 * define the variable 'content' here and fill it with the
 * needed code to render the bootstrap card
 **/
 
 content = <div className="card m-5">
  <img className="card-img-top" src="../../.learn/assets/Dylan.png?raw=true" alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">Bob Dylan</h5>
    <p className="card-text">Bob Dylan (born Robert Allen Zimmerman, May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.</p>
    <a href="#" class="btn btn-primary">Go to wikipedia</a>
  </div>
</div>

ReactDOM.render(content, document.querySelector("#myDiv"));
