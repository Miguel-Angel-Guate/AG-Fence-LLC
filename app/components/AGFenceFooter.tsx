import Image from 'next/image';
import Link from 'next/link';
import {  FaEnvelope, FaPhoneAlt, FaInstagramSquare } from 'react-icons/fa';
import { FaAngleRight, FaFacebookF, FaLocationPin } from "react-icons/fa6";
import { IoMailUnreadSharp } from "react-icons/io5";
import { SiTrustpilot } from "react-icons/si";



async function getFooterDAta() {
    try {
        const apiUrl = process.env.API_URL
        const res = await fetch(`${apiUrl}/api/footerapi`, /* {cache: "no-cache"} */ );

        if (!res.ok) {
            throw new Error("Failed to fetch footer data");
        }
        const data = await res.json()
        return data

    } catch (error) {
        console.log("Error loading navs data: ", error);
        return []
    }
};


const AGFooter = async () => {
    const { footerdata } = await getFooterDAta()
    const { explore, professional, contact, footerDescription, copyright } = footerdata[0];

    return (
        <footer className="bg-white w-full flex-wrap flex text-gray-700 body-font sm:mt-5">
            <div className="w-full ml-2 flex flex-wrap md:flex-row flex-col mb-3 ">
                <div className='flex w-full sm:w-1/4 flex-wrap sm:overflow-hidden  items-center justify-center'>
                    <Image src="/assets/home/logo.webp" alt="AG Fencing Logo" className=" flex flex-wrap h-[70] sm:w-[145] sm:h-[90] mb-3" width={90} height={70} />
                    <p className="text-sm text-gray-500  w-full">
                        {footerDescription}
                    </p>
                </div>

                <div className="flex  sm:w-1/4 w-full flex-col items-center">
                    <h2 className="title-font font-medium w-full sm:justify-center flex text-left text-gray-900 tracking-widest">
                        {explore.title}
                    </h2>
                    <nav className='flex flex-col w-full items-start sm:w-auto'>
                        {explore.menu.map((item:any) => (
                            <Link key={item.id} href={item.link} className="text-gray-600 hover:text-gray-800 flex items-center justify-start cursor-pointer py-1">
                                <FaAngleRight className="mr-2 text-primary" />{item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className=" flex sm:w-1/4 w-full flex-col items-center">
                    <h2 className="title-font font-medium w-full sm:justify-center flex text-left text-gray-900 tracking-widest">
                        {professional.title}
                    </h2>
                    <nav className='flex flex-col w-full items-start sm:w-auto'>
                        {professional.menu.map((item:any, index:any) => (
                            <Link key={index.id} href={item.link} className="text-gray-600 hover:text-gray-800 flex sm:justify-center items-center justify-start cursor-pointer py-1">
                                <FaAngleRight className="mr-2 text-primary " />{item.title}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div className="flex w-full sm:w-1/4 flex-col items-start">
                    <h2 className="title-font font-medium w-full justify-start text-gray-900 tracking-widest text-sm mb-3">
                        Contact
                    </h2>
                    <div className='flex flex-col w-full items-start'>
                        <div className="flex items-center  justify-start w-full py-1">
                            <FaPhoneAlt className="text-primary mr-2" aria-hidden="true" />
                            <a href={`tel:${contact?.phone}`}>
                            <span className="text-gray-600 hover:text-gray-800">{contact.phone}</span>
                            </a>
                        </div>
                        <div className="flex items-center justify-start w-full py-1">
                            <FaEnvelope className="text-primary mr-2" aria-hidden="true" />
                            <span className="text-gray-600 hover:text-gray-800">{contact.mail}</span>
                        </div>
                        <div className="flex items-center justify-start w-full py-1">
                            <FaLocationPin  className="text-primary mr-2" aria-hidden="true" />
                            <span className="text-sm sm:text-base text-gray-600 hover:text-gray-800">{contact.address}</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-primary text-white flex w-full flex-wrap sm:flex-nowrap">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center sm:text-left">
                    &copy;{copyright}
                    </p>
                </div>
                <div className='flex w-full justify-center items-center'>
                <FaFacebookF className='w-[60px] h-[40px] cursor-pointer' />
                <FaInstagramSquare className='w-[60px] h-[40px] cursor-pointer' />
                <SiTrustpilot className='w-[60px] h-[40px] cursor-pointer' />

                </div>
            </div>
        </footer>
    );
}

export default AGFooter;