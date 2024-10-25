import React, {useState} from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setlight] = useState('') ;
	
	return (
		<>
			<div className="container bg-dark">
				<div onClick={()=>setlight('red')} className={`first-color-light ${light === 'red' ? 'traffic-shadow' : ''} my-3`}></div>
				<div onClick={()=>setlight('yellow')} className={`second-color-light ${light === 'yellow' ? 'traffic-shadow' : ''} mb-3`}></div>
				<div onClick={()=>setlight('green')} className={`third-color-light ${light === 'green' ? 'traffic-shadow' : ''} mb-3`}></div>
			</div>
		</>
	);
};

export default Home;
