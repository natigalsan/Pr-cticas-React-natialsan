import React from "react";

function Header() {
	return (
		<>
			<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
				<ol className="carousel-indicators">
					<li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img className="d-block w-100" src="https://pangea-public-content.s3-eu-west-1.amazonaws.com/files/Country/71/viaje-a-japon.jpg" alt="First slide"/>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://static.amazon.jobs/locations/31/images/tokyo-banner.jpg?1617654113" alt="Second slide"/>
					</div>
					<div className="carousel-item">
						<img className="d-block w-100" src="https://media.traveler.es/photos/61377e40c6202df7591613ff/master/w_1600%2Cc_limit/79297.jpg" alt="Third slide"/>
					</div>
				</div>
				<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true"></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</>
	);
}

export default Header;