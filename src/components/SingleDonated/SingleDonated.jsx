import { BsCurrencyDollar } from "react-icons/bs";
import { NavLink } from "react-router-dom";
const SingleDonated = ({ don }) => {
    const { id,picture, title, category, card_bg, category_bg, text_color, price, description } = don;
    const cardBg = {
        backgroundColor: `${card_bg}`
    }
    const buttonBg = {
        backgroundColor: `${category_bg}`,
        color: `${text_color}`
    }
    const viewButton = {
        backgroundColor: `${text_color}`,
    }
    const priceP = {
        color: `${text_color}`
    }
    return (
        <div className="flex flex-col items-center md:flex-row gap-4" style={cardBg}>
            <div><img className="max-w-[250px] max-h-[250px]" src={picture}></img></div>
            <div className="py-2 flex flex-col items-center md:items-start gap-2">
                <button className="p-2 w-20 rounded-md py-1" style={buttonBg}>{category}</button>
                <h1 className="text-lg font-bold">{title}</h1>
                <p className="flex items-center" style={priceP}><BsCurrencyDollar></BsCurrencyDollar>{price}</p>
                <NavLink to={`/donationDetails/${id}`}>
                    <button className=" px-4  py-2 text-white font-semibold w-36" style={viewButton}>View Details</button>
                </NavLink>
            </div>
        </div>
    );
};

export default SingleDonated;