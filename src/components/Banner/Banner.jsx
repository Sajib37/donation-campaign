import './banner.css'
import bg_1 from './../../../public/images/bg_image.png'
const Banner = () => {
    const bg_style = {
        backgroundImage: `url(${bg_1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }
    const setOverlay = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
    }
    return (
        <div className='w-full h-[40vh] md:h-[50vh] lg:h-[65vh]'>
            <div >

            </div>
            <div className="w-full h-[50vh] md:h-[60vh] lg:h-[75vh]   absolute top-0 left-0 z-10 ">
                <div className="w-full h-full  flex flex-col gap-2 items-center justify-center border-teal-400 absolute bottom-0 left-0 bg-orange-400" style={bg_style}>
                    <h1 className='text-3xl text-center md:text-4xl lg:text-5xl font-bold z-20'>I Grow By Helping People In Need</h1>
                    <div className='z-20 w-[90%] md:w-1/2 lg:w-1/3 flex  border-2 gap-0 relative'>
                        <input type="text" placeholder="Search here..." className="p-3 rounded-lg w-full z-20 mx-auto border-black" />
                        <button className='text-white bg-[#FF444A] absolute top-0 right-0 z-30 p-3 w-24 rounded-r-lg'>Search</button>
                    </div>
                </div>
                <div style={setOverlay}></div>
            </div>
            
            
        </div>
    );
};

export default Banner;