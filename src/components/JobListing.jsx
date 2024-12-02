import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import JobPage from "../pages/JobPage";

const JobListing = ({job}) => {
	const [fullDescription, setDescriptionState] = useState(false);

	const displayJob = () => {
		return <JobPage key={job.id} job={job} />;
	};
	
	const styles = {
		cursor: 'pointer',
	};

	let description = job.description;

	if (!fullDescription) {
		description = description.substring(0, 90) + '...';
	}
	// else {
	// 	description = job.description;
	// }

	return ( 
		<div className="bg-white rounded-xl shadow-md relative">
			<div className="p-4">
				<div className="mb-6">
					<div className="text-gray-600 my-2">{job.type}</div>
					<h3 className="text-xl font-bold">{job.title}</h3>
				</div>

				<div className="mb-5">{description}</div>
				<button onClick={() => setDescriptionState(previousState => !previousState)} style={styles} className="text-indigo-500 hover:text-indigo-600 mb-3">{fullDescription ? 'Less' : 'More'}</button>

				<h3 className="text-indigo-500 mb-2">{job.salary} / Year</h3>

				<div className="border border-gray-100 mb-5"></div>

				<div className="flex flex-col lg:flex-row justify-between mb-4">
					<div className="text-orange-700 mb-3">
						<i className="fa-solid fa-location-dot text-lg"></i>
						<FaMapMarker className="inline text-lg mb-1 mr-1" />
						{job.location}
					</div>
					<Link
						onClick={() => (displayJob)}
						to={`/job/${job.id}`}
						className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
					>
						Read More
					</Link>
				</div>
			</div>
		</div>
	)
};

export default JobListing;