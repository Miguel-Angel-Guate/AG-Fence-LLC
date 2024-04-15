import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGContactForm from "@/app/components/contact/ContactForm";
import Image from "next/image";

const getContactData = async () => {
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/api/contactservice`/* , { next: { revalidate: 3600 }} */);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error loading aboutservice:", error);
        return []
    }
};


const AGFenceContact = async () => {
    const { contactsections } = await getContactData();
    const { contactFormSection, formFields, formLeyends } = contactsections[0];
    /* const { hero } = contactsections[0]; */
    return (
        <>
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left">
                <div className="sm:flex-1 px-4 py-8">
                    <h2 className="text-2xl font-bold mb-4">{contactFormSection.title}</h2>
                    <p className="mb-4">{contactFormSection.subtitle}</p>

                </div>
                <div className="sm:flex-1 px-4 py-8">
                    <div className="relative w-full h-64 sm:h-auto">

                        <Image
                            src={"/assets/contact/contactus.webp"}
                            alt="Decorative Image"
                            width={640}
                            height={360}
                        />
                    </div>
                </div>
            </div>
            <AGContactForm formFields={formFields} formLeyends={formLeyends} />
            <AGFenceAboutExtraInformation />
        </>
    );
}

export default AGFenceContact;