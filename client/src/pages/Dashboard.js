import React from "react";
import Card from "../components/Card";
import { useRecoilValue } from "recoil";
import { userAtom } from "../global/globalState";

const services = [

	{
		title: "General Name of Medicines",
		image: require("../assets/icons/medicine.png"),
		imageAlt: "Medicine Icon",
		desc:
			"Making brand names of medicines available to the patient by providing a generic name of the medicine, which are far cheaper and easily available.",
		link: "/dashboard/medicine",
	},
	{
		title: "Book An Appointment",
		image: require("../assets/icons/doctor.png"),
		imageAlt: "Doctor Icon",
		desc:
			"Patients can book online appointments with a specific doctor and can get prescription afterwards.",
		link: "/dashboard/doctor",
	},

];

const Dashboard = () => {
	const user = useRecoilValue(userAtom);
	return (
		<div className="Dashboard">
			<div className="container">
				<h1>Hi {user.name}</h1>
				<div className="cards">
					{services.map(({ imageAlt, title, image, desc, link }) => (
						<Card
							key={title}
							title={title}
							image={image}
							imageAlt={imageAlt}
							desc={desc}
							link={link}
						/>
					))} 
					<div
						className="card"
						onClick={() => window.open("https://ambulance-on-demand.vercel.app")}>
						<div className="image">
							<img
								src={require("../assets/icons/ambulance.png")}
								alt="Ambulance"
							/>
						</div>
						<div className="content">
							<h4>Ambulance</h4>
							<p>
								A service to provide low latency and live location based ambulance service on demand.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
