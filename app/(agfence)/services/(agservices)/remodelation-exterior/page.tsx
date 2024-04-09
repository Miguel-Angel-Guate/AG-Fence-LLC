import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGTitleServices from "@/app/components/shared/AGTitleServices";
import RequestFreeEstimate from "@/app/components/shared/FreeEstimates";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";

const contactDetails = [
    {
        id: 'description',
        content: `Our exterior remodeling service focuses on improving the appearance and functionality of the exterior areas of your property. Our team of exterior remodeling experts handles every aspect of the project, ensuring the results are visually stunning and resistant to the wear and tear of time.`
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

const AGRemodelationExterior = () => {
    return (
        <>
        <AGTitleServices title="AG Remodelation Exterior Services" />
        <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start py-8">
                <div className="lg:w-1/2 p-4">
                    <h2 className="text-2xl font-bold mb-4">Remodelation exterior</h2>
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
                        src="/assets/exterior/exterior.webp"
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

export default AGRemodelationExterior;