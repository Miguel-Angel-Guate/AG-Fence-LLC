
import { Services } from "@/app/libs/types";
import SwiperContent from "./SwiperContent";
import Link from "next/link";


const getAGFenceHome = async () => {
    try {
        const apiUrl = process.env.API_URL;
        const res = await fetch(`${apiUrl}/api/agfencehome`);
        if (!res.ok) {
            throw new Error("Failed to fetch fencing");
        }

        return await res.json()

    } catch (error) {
        console.log("Error loading fencing: ", error);
    }
};


const AGFenceOurService = async () => {
    const { agfencedata } = await getAGFenceHome()
    const { services } = agfencedata[0].home;

    return (
        <>
            <div className="w-full flex justify-center bg-[#F3F4F4]">
                <h2 className="text-2xl flex font-bold text-center sm:text-left sm:text-3xl mb-6">Our Services</h2>
            </div>
            <div className="sm:hidden bg-[#F3F4F4]">
                <SwiperContent services={services} />
            </div>

            <div className="hidden sm:flex sm:flex-wrap sm:justify-around items-center w-full h-[60vh] bg-[#F3F4F4] p-4">
                {Object.entries(services as Services).map(([key, service]) => (
                    <div
                        key={key}
                        className="border flex flex-col justify-between p-4 m-2 bg-white rounded-lg shadow-sm transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-100"
                        style={{ width: 'calc(25% - 1rem)', cursor: 'pointer', height: 'calc(100% - 2rem)' }}  // Adjusted height here
                    >
                        <h3 className="font-semibold flex self-center text-lg">{service.title}</h3>
                        <p className="flex justify-center text-sm mb-2 mt-2">{service.subtitle}</p>
                        <div className="w-[90%] md:w-[95%] flex-grow">
                            <p className="text-base mb-4">{service.description}</p>
                        </div>
                        <div className="bg-primary h-[7vh] flex items-center justify-center rounded">
                            <Link href={service.link} passHref>
                                <button className="text-white flex justify-center items-center  h-full hover:text-indigo-800">
                                    {service.button}
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>


        </>

    );
}

export default AGFenceOurService;