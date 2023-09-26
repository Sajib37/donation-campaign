const getStoredDonation = () => {
    const storedDonation = localStorage.getItem('donation');
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    else {
        return [];
    }
}

const setStoredDonation = (id) => {
    const storedDonation = getStoredDonation();
    const isExist = storedDonation.find((storeID) => storeID == id);
    if (!isExist) {
        storedDonation.push(id);
        localStorage.setItem('donation',JSON.stringify(storedDonation))
    }
}
export{getStoredDonation, setStoredDonation}