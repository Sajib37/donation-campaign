import { useRouteError,Link } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div className="flex items-center justify-center h-[100vh]">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl md:text-4xl text-center font-bold">Opps!! There is a wrong route</h1>
                <div className="flex justify-center items-center text-red-600 font-medium text-lg">
                    <h2>{ error.status}</h2> <span className="">-</span>
                    <h2>{error.statusText}</h2>
                </div>
                <p>{ error.data}</p>
                <Link><button className="btn btn-outline btn-primary">Go back Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;