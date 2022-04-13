import React from "react";

function NavBar() {
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-light bg-light" style= {{backgroundcolor: "yellow"}}>
				<a className="navbar-brand" href="#">
					<img
						src="https://s03.s3c.es/imag/_v0/770x420/5/7/a/japon-iconos-770.jpg"
						style={{ width: "80px", height: "40px" }}
						alt=""
					/>
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav">
						<li className="nav-item active">
							<a className="nav-link" href="#">
								Home <span className="sr-only">(current)</span>
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Features
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">
								Pricing
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link disabled" href="#">
								Disabled
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
