const HomeDonation = ({ donation }) => {
    const { id, picture, title, category, card_bg, category_bg, text_color, description, price } = donation
    const cardBg = {
        backgroundColor:`${card_bg}`
    }
    const buttonBg = {
        backgroundColor: `${category_bg}`,
        color:`${text_color}`
    }
    const textColor = {
        color: `${text_color}`
    }
    return (
        <div className={`card card-compact bg-base-100 shadow-xl max-w-xs mx-auto rounded-md`} style={cardBg}>
            <figure><img src={picture} alt="Picture" /></figure>
            <div className="card-body">
                <button className="p-2 w-20 rounded-md py-1" style={buttonBg}>{category}</button>
                <h3 className="font-semibold text-lg" style={textColor}>{ title}</h3>
            </div>
        </div>
    );
};

export default HomeDonation;