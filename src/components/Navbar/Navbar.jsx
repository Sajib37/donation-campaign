import logo from "../../../public/images/Logo.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
    
    return (
        <nav className=" flex flex-col items-center gap-4 md:flex-row justify-between px-2 py-4 z-30 relative mx-auto max-w-screen-xl">
            <div>
                <img className="w-28  md:w-48 " src={logo}></img>
            </div>
            <div className="">
                <ul className="flex gap-12 items-center h-full">
                    <li>
                        <NavLink to="/"className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/donation"className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/statistics"className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold" : ""}>
                            Statistics
                        </NavLink>
                    </li>
                </ul>
           </div>
        </nav>
    )
};

export default Navbar;
