import React from "react";

//include images into your bundle

//create your first component
import Card from "./card.jsx";
import NavBar from "./navbar.jsx";
import Header from "./header.jsx";
const Home = () => {
	return (
		<>
		<div className="container-fluid">
			<NavBar />
			<Header/>

			<div className="d-flex" style = {{margin: "auto"}}>
				<Card
					src="https://us.123rf.com/450wm/pitinan/pitinan1904/pitinan190404410/121655857-hermosa-ma%C3%B1ana-en-la-pagoda-yasaka-y-sannen-zaka-street-en-verano-kyoto-jap%C3%B3n-la-pagoda-de-yasaka-es.jpg?ver=6"
					titulo="Paisaje de Japón"
					text="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual ..."
				/>
				<Card
					src="https://res.cloudinary.com/jnto/image/upload/w_914,h_516,c_fill,f_auto,fl_lossy,q_auto/v1/media/filer_public/c6/d2/c6d23c96-fc5d-42a4-8e36-0d852102367d/fushimi_lnwdef"
					titulo="Travel Japan"
					text="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual ..."
				/>
				<Card
					src="https://www.vuelaviajes.com/wp-content/2019/06/Tokio.jpg"
					titulo="Ciudades más hermosas del mundo"
					text="Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual ..."
				/>
			</div>


		</div>
			
		</>
	);
};

export default Home;
