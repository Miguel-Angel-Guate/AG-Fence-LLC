import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGTitleServices from "@/app/components/shared/AGTitleServices";
import RequestFreeEstimate from "@/app/components/shared/FreeEstimates";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const contactDetails = [
    {
        id: 'description',
        content: `Our interior remodelling service is designed to transform the look and functionality of your home's interior spaces. We focus on quality materials and workmanship to ensure your remodel is durable and aesthetically appealing.`
    },
    {
        id: 'telephone',
        icon: <FaRegCheckCircle className="text-green-500 mr-2" />,
        content: 'Tel: (443) 628-9734',
        href: 'tel:+14436289734'
    },
    {
        id: 'email',
        icon: <FaRegCheckCircle className="text-green-500 mr-2" />,
        content: 'Mail: aglfences4@gmail.com',
        href: 'mailto:aglfences4@gmail.com'
    },
    {
        id: 'working-hours',
        icon: <FaRegCheckCircle className="text-green-500 mr-2" />,
        content: 'Sunday to Friday 8:00am - 5:00pm'
    },
    {
        id: 'languages',
        icon: <FaRegCheckCircle className="text-green-500 mr-2" />,
        content: 'We Speak English & Spanish'
    }
];
const AGRemodelation = () => {
    return (
        <>
            <AGTitleServices title="AG Remodeling Interior" />
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start py-8">
                <div className="lg:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">Remodelation Interior</h2>
                    {contactDetails.map((detail) => (
                        <div key={detail.id} className={`flex ${detail.id === 'description' ? 'flex-col' : 'items-center'} mb-4`}>
                            {detail.icon && <div className="flex-shrink-0">{detail.icon}</div>}
                            {detail.href ? (
                                <a href={detail.href} className="ml-2 hover:underline" target="_blank" rel="noopener noreferrer">
                                    {detail.content}
                                </a>
                            ) : (
                                <p className={`${detail.id === 'description' ? '' : 'ml-2'}`}>{detail.content}</p>
                            )}
                        </div>
                    ))}
                </div>
                <div className="lg:w-1/2 p-4">
                    <Image
                        src="/assets/interior/interior.webp"
                        alt="Fencing"
                        width={640} // Adjust the size as necessary
                        height={360} // Adjust the size as necessary
                        layout="responsive"
                    />
                </div>
            </div>
            <RequestFreeEstimate />
            <AGFenceAboutExtraInformation />
        </>
    );
}

export default AGRemodelation;