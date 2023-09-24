import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job)
    return (
        <div>
            <h2 className="text-center text-3xl font-bold ">Job Details</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="2xl">Details coming soon...</h2>
                </div>
                <div className="">
                    <div className="border rounded-md"><h2 className="2xl font-semibold">Job Details</h2></div>

                    <a className="btn hover:bg-indigo-600 hover:text-white font-bold rounded-lg px-4 py-2.5   text-sm border border-indigo-500 text-indigo-500  dark:border-indigo-300 dark:text-indigo-400  focus:outline-none ">Apply Now</a>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;
