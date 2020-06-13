import React from 'react';

const Card = (props) => {
	return(
		
		<div style={{ float: "left" }}>
			<div className="card" style={{ width: "18rem" }}>
				{/* <img src="..." class="card-img-top" alt="..." /> */}
				<div className="container">
					<ul className="cities">
						<li>
							<h2>
								CityName
					<sup>IN</sup>
							</h2>
							<div className="city-temp">
								34
					<sup>°C</sup>
							</div>
							<figure>
								<img src="#" />
								<figcaption>An elephant at sunset</figcaption>
							</figure>
						</li>
					</ul>
					{/* <h5 className="card-title"></h5> */}
					{/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
				</div>
			</div>
		</div>

	);
}
export default Card;