import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [dataLength, setDataLength] = useState(4);

    const toggleJobs = () => {
        if (showAll) {
            setDataLength(4);
        } else {
            setDataLength(6);
        }
        setShowAll(!showAll);
    };
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div>
            <h2 className="text-2xl text-center font-bold">Featured Jobs</h2>
            <p className="text-center text-base font-medium text-slate-400">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:px-20 py-4 gap-6">
                {jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)}
            </div>
            <div className="flex justify-center items-center p-5">
                <button onClick={toggleJobs} className="btn mt-4 hover:bg-indigo-600 hover:text-white font-bold rounded-lg px-12 py-2.5 text-sm border border-indigo-500 text-indigo-500 dark:border-indigo-600 dark:text-indigo-400 focus:outline-none">
                    {showAll ? 'Show Less Jobs' : 'Show All Jobs'}
                </button>
            </div>
        </div>
    );
};

export default FeaturedJobs;
