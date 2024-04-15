import AGFenceAboutExtraInformation from "@/app/components/aboutsection/AGAboutExtraInformation";
import AGContactForm from "@/app/components/contact/ContactForm";
import Image from "next/image";
import { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { id: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

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


export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {


    const { contactsections } = await getContactData()
    const { seo } = contactsections[0];
    /* console.log("🚀 ~ seo:", seo) */

    const metadataBase = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`)

    return {
        title: seo?.title,
        description: seo?.description,
        keywords: seo?.keywords,
        alternates: {
            canonical: metadataBase.toString(),
        },
        robots: {
            index: true, // Allow search engines to index the page
            follow: true, // Instruct search engines to follow the links on the page
            nocache: false, // Allow caching of the page for efficiency (unless there's a specific reason to prevent caching)
            googleBot: {
                index: true, // Allow Google to index the page
                follow: true, // Allow Google to follow the links on the page
                noimageindex: false, // Allow images on the page to be indexed unless you have a reason to prevent it
                'max-video-preview': -1, // Use the default video preview size set by Google
                'max-image-preview': 'large', // Suggest to Google that large image previews can be used
                'max-snippet': -1, // Use the default snippet length set by Google
            },
        },
    }

}

const AGFenceContact = async () => {
    const { contactsections } = await getContactData();
    const { contactFormSection, formFields, formLeyends } = contactsections[0];

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