
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
            {/* Flexbox layout for sm screens and up */}
            <div className="hidden sm:w-full sm:h-[60vh] items-center sm:items-center sm:flex sm:flex-wrap sm:justify-around bg-[#F3F4F4] ">
                {Object.entries(services as Services).map(([key, service]) => (
                    <div
                        key={key}
                        className="border w-[25%] h-[50vh] justify-center flex flex-wrap border-gray-300 rounded-lg bg-white shadow-sm transition duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-100"
                        style={{ cursor: 'pointer', position: 'relative' }}
                    >
                        <h3 className="font-semibold flex self-center text-lg">{service.title}</h3>
                        <div className="w-[90%] md:w-[95%]">
                            <p className="text-sm mb-4">{service.description}</p>
                        </div>
                        <div className="bg-primary h-[7vh] flex items-center justify-center w-32 rounded">
                            <Link href={service.link}>
                            <button className="text-white flex justify-center hover:text-indigo-800">{service.button}</button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

        </>

    );
}

export default AGFenceOurService;