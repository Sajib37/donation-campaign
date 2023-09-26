import { NavLink } from "react-router-dom";

const HomeDonation = ({ donation }) => {
    const { id, picture, title, category, card_bg, category_bg, text_color } = donation;
    const cardBg = {
        backgroundColor: `${card_bg}`
    }
    const buttonBg = {
        backgroundColor: `${category_bg}`,
        color: `${text_color}`
    }
    const textColor = {
        color: `${text_color}`
    }
    return (
        <NavLink to={`/donationDetails/${id}`}>
            <div className={`card card-compact bg-base-100 shadow-xl max-w-xs mx-auto rounded-md`} style={cardBg} >
                <figure><img src={picture} alt="Picture" /></figure>
                <div className="card-body h-28">
                    <button className="p-2 w-20 rounded-md py-1 font-medium" style={buttonBg}>{category}</button>
                    <h3 className="font-semibold text-lg" style={textColor}>{ title}</h3>
                </div>
            </div>
        </NavLink>
    );
};

export default HomeDonation;