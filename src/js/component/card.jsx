import React from "react";

function Card(props) {
	return (
		<div
			className=" col-md-3 d-flex justify-content-center"
			style={{ minHeight: "500px" }}>
			<div className=" card" style={{ marginTop: "5px" }}>
				<img
					className="card-img-top"
					src={props.src}
					alt="Card image cap"
				/>
				<div className="row d-flex justify-content-between">
					<div className="col">
						<div className="row">
							<div className="col-1"></div>
							<div className="col-1">
								<i className="far fa-heart"></i>
							</div>
							<div className="col-1">
								<i className="far fa-comment"></i>
							</div>

							<div className="col-6">
								<i className="far fa-paper-plane"></i>
							</div>
							<div className="col-1 ps-5">
								<i className="far fa-bookmark"></i>
							</div>
						</div>
					</div>
				</div>

				<div className="card-body">
					<h5 className="card-title">{props.titulo}</h5>
					<p className="card-text">{props.text}</p>
					<a className="btn btn-primary" href="">
						Go SomeWhere
					</a>
				</div>
			</div>
		</div>
	);
}

export default Card;
