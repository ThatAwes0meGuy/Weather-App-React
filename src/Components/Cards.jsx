import React from "react";
import Card from "./Card";
const Cards = (props) =>{
	return(
		<div style={{ float: "left" }}>
			<div className="card" style={{ width: "18rem" }}>
				{/* <img src="..." class="card-img-top" alt="..." /> */}
				<div className="container">						
								<h2> 
								{props.City}
								<sup className="country">
								{props.country}
								
								</sup>
								</h2>
							<div className="city-temp">
								{Math.round(props.Temp)}
								<sup>°C</sup>
							</div>
							<figure>
								<img src={props.icon}/>
								<figcaption>{props.description.toUpperCase()}</figcaption>
							</figure>
						
					
					{/* <h5 className="card-title"></h5> */}
					{/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
				</div>
			</div>
		</div>
	);
} 
export default Cards;