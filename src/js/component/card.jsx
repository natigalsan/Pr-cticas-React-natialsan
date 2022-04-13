import React from "react";

function Card(props) {
	return (
		<div className="d-flex justify-content-center ">
			<div
				className="card "
				style={{
					width: "18rem",
					height: "80px",
					margin: "5px 30px auto 0",
				}}>
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
