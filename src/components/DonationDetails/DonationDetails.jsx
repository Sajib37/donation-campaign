import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BsCurrencyDollar } from "react-icons/bs";

const DonationDetails = () => {
    const allDonation = useLoaderData();
    const { id } = useParams();
    
    const singleDonation = allDonation.filter((don) => don.id == id);
    const { picture, title, category, card_bg, category_bg, text_color,price,description } = singleDonation[0];
    const buttonBg = {
        backgroundColor: `${text_color}`,
    }
    return (
        <div className="max-w-screen-xl mx-auto md:mt-2 px-1">
            <div className=" h-[50vh] md:h-[75vh] relative">
                <img src={picture} className="w-full h-full rounded-none "></img>
                <div className="bg-black opacity-60 absolute w-full h-20 md:h-24 bottom-0 z-10 right-0 "></div>
                <button className="absolute bottom-4 left-2 md:bottom-6 ml-8 z-20 px-4  py-2 text-white font-semibold flex items-center opacity-100" style={buttonBg}>Donate <BsCurrencyDollar></BsCurrencyDollar>{ price}</button>
            </div>

            <div className="my-10">
                <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                <p className="text-justify mt-4 md:mt-6">{ description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;