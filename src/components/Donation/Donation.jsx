import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import SingleDonated from "../SingleDonated/SingleDonated";

const Donation = () => {
    const allDonation = useLoaderData();
    const [donated, setDonated] = useState([]);
    const [dataLength, setdataLength] = useState(4);

    useEffect(() => {
        const storedDonationID = getStoredDonation();
        const storedDonation = [];
        for (const donate of allDonation) {
            const isStore = storedDonationID.find((ID) => ID == donate.id);
            console.log(donate.id)
            if (isStore) {
                storedDonation.push(donate);
            }
        }
        setDonated(storedDonation);

    }, [])

    const handlShowAll = () => {
        let dl = donated.length;
        setdataLength(dl);
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 px-2 lg:grid-cols-2 gap-4">
                {
                    donated.slice(0,dataLength).map((don,idx)=><SingleDonated key={idx} don={don}></SingleDonated>)
                }
                
            </div>
            <div className="flex justify-center mt-4">
                <button className={`mx-auto border-2 bg-green-800 p-2 px-4 text-white rounded-lg ${dataLength === donated.length ||dataLength >= donated.length? 'hidden' : ''}`} onClick={handlShowAll}>Show all</button>
            </div>
        </div>
        
    );
};

export default Donation;