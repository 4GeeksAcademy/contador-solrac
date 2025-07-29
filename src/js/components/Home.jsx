import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Unidad } from "./Unidad";
import { Emoticono } from "./Emoticono";

//create your first component
function Home() {

	const [count, setCount] = useState(0);

	let unidad = count % 10
	let decena = Math.floor((count / 10) % 10)
	let centena = Math.floor((count / 100 % 10))
	let milesima = Math.floor((count / 1000) % 10)
	let diezmilesima = Math.floor((count / 10000) % 10)
	let cienmilesima = Math.floor((count / 100000) % 10)
	let millonesima = Math.floor((count / 1000000) % 10)

	const clockOn = () => {
		setCount(prev => prev + 1)
		console.log(count);

	}

	useEffect(() => {
		const interval = setInterval(clockOn, 1000);
		return () => clearInterval(interval);
	}, [])

	return (
		<div className="container-fluid justify-content-center align-content-center bg-dark p-4 mt-3">
			<div className="row">
				<Emoticono />
				<Unidad count={millonesima} ></Unidad>
				<Unidad count={cienmilesima} ></Unidad>
				<Unidad count={diezmilesima} ></Unidad>
				<Unidad count={milesima} ></Unidad>
				<Unidad count={centena} ></Unidad>
				<Unidad count={decena} ></Unidad>
				<Unidad count={unidad} ></Unidad>
			</div>
		</div>
	);
}

export default Home;