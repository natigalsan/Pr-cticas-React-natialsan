import React from "react";

function Header() {
	return (
		<>
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-bs-ride="carousel">
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"></button>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"></button>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://pangea-public-content.s3-eu-west-1.amazonaws.com/files/Country/71/viaje-a-japon.jpg"
							className="d-block w-100"
							alt="..."
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://media.traveler.es/photos/61377e40c6202df7591613ff/master/w_1600%2Cc_limit/79297.jpg"
							className="d-block w-100"
							alt="JAPAN"
						/>
					</div>
					<div className="carousel-item">
						<img
							src="https://static.amazon.jobs/locations/31/images/tokyo-banner.jpg?1617654113
								"
							className="d-block w-100"
							alt="..."
						/>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</>
	);
}

export default Header;
