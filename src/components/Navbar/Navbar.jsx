import { NavLink } from "react-router-dom";

const Navbar = () => {
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/Jobs'>Jobs</NavLink></li>
        <li><NavLink to='/Applied'>Applied Jobs</NavLink></li>
        <li><NavLink to='/Statistics'>Statistics</NavLink></li>
        <li><NavLink to='/Blogs'>Blogs</NavLink></li>
    </>
    return (
        <div className="navbar bg-base-100 lg:px-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <NavLink to='/' className="font-bold text-lg md:text-2xl lg:text-2xl">Career Hub</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn hover:bg-indigo-600 hover:text-white font-bold rounded-lg px-4 py-2.5   text-sm border border-indigo-500 text-indigo-500  dark:border-indigo-300 dark:text-indigo-400  focus:outline-none ">Star Applying</a>
            </div>
        </div>
    );
};

export default Navbar;