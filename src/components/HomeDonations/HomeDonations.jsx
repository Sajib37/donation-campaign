import { useEffect, useState } from "react";
import HomeDonation from "../HomeDonation/HomeDonation";

const HomeDonations = () => {
    const [homeDonations, setHomeDonations] = useState([]);

    useEffect(() => {
        fetch('../Data/data.json')
            .then(res => res.json())
            .then(data => setHomeDonations(data));
        
    }, [])

    return (
        <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-4 md:my-12 lg:my-26 gap-4 max-w-screen-xl mx-auto p-2  ">
            {
                
                homeDonations.map((donation,idx)=><HomeDonation key={idx} donation={donation}></HomeDonation>)
            }
        </div>
    );
};

export default HomeDonations;