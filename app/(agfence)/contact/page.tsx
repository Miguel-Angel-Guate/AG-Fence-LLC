import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGContactForm from "@/app/components/contact/ContactForm";
import Image from "next/image";


const pageContent = {
    title: 'Get In Touch With Us',
    subtitle: 'If you are looking to improve your home or property, AG Fencing LLC is the perfect choice. Our experience, range of services and dedication make us your ideal partner for fencing, decking and remodelling projects both inside and out.... Call us Now!!!',
    image: '/assets/contact/contactus.webp' // replace with the path to your image
};
const AGFenceContact = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="sm:flex-1 px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">{pageContent.title}</h2>
                    <p className="mb-4">{pageContent.subtitle}</p>
                    {/* Add additional content here if necessary */}
                </div>
                <div className="sm:flex-1 px-4 py-8">
                    <div className="relative w-full h-64 sm:h-auto">
                        {/* Adjust the size as necessary for your design */}
                        <Image
                            src={pageContent.image}
                            alt="Decorative Image"
                            width={640}
                            height={360}
                        />
                    </div>
                </div>
            </div>
            <AGContactForm />
            <AGFenceAboutExtraInformation />
        </>
    );
}

export default AGFenceContact;