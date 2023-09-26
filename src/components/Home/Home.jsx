import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import HomeDonation from "../HomeDonation/HomeDonation";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [homeDonations, setHomeDonations] = useState([]);
    const [displayDonation, setDisplayDonation ] = useState([]);
    useEffect(() => {
        fetch('../Data/data.json')
            .then(res => res.json())
            .then(data => {
                setHomeDonations(data);
                setDisplayDonation(data);
            });
        
    }, [])
    const notify = () => toast("Opps!! Please, enter correct Category..");
    const handleSearch = (value) => {
        const lowerValue = value.toLowerCase();
        if (lowerValue === '') {
            setDisplayDonation(homeDonations)
        }
        else if (lowerValue === 'health') {
            const filterDonate = homeDonations.filter(don => don.category.toLowerCase() === lowerValue);
            setDisplayDonation(filterDonate)
        }
        else if (lowerValue === 'food') {
            const filterDonate = homeDonations.filter(don => don.category.toLowerCase() === lowerValue);
            setDisplayDonation(filterDonate)
        }
        else if (lowerValue === 'education') {
            const filterDonate = homeDonations.filter(don => don.category.toLowerCase() === lowerValue);
            setDisplayDonation(filterDonate)
        }
        else if (lowerValue === 'clothing') {
            const filterDonate = homeDonations.filter(don => don.category.toLowerCase() === lowerValue);
            setDisplayDonation(filterDonate)
        }
        else {
            notify();
        }

    }
    return (
        <div>
            <Banner handleSearch={handleSearch}></Banner>
            <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 my-4 md:my-12 lg:my-26 gap-4 max-w-screen-xl mx-auto p-2 ">
                {
                    displayDonation.map((donation,idx)=><HomeDonation key={idx} donation={donation}></HomeDonation>)
                }
            </div>
            <ToastContainer />
        </div>
    );
};

export default Home;