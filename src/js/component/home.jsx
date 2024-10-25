import React, {useState} from "react";

//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [light, setlight] = useState('') ;
	const [showLight, setShowLight] = useState(false);
	const getToggle = ()=>setShowLight(prev => prev=!prev);
	return (
		<>
			<div className="container bg-dark">
				<div onClick={()=>setlight(prev => prev='red')} className={`first-color-light ${light === 'red' ? 'traffic-shadow' : ''} my-3`}></div>
				<div onClick={()=>setlight(prev => prev='yellow')} className={`second-color-light ${light === 'yellow' ? 'traffic-shadow' : ''} mb-3`}></div>
				<div onClick={()=>setlight(prev => prev='green')} className={`third-color-light ${light === 'green' ? 'traffic-shadow' : ''} mb-3`}></div>
				{showLight && <div onClick={()=>setlight(prev => prev='purple')} className={`fourth-color-light ${light === 'purple' ? 'traffic-shadow' : ''} mb-3`}></div>}
				<div onClick={getToggle} className="btn btn-outline-light my-3">Add Light</div>
			</div>
		</>
	);
};

export default Home;
