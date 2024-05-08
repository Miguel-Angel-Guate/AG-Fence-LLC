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
    

    const url = new URL('/contact', process.env.NEXT_PUBLIC_BASE_URL);

    return {
        title: seo?.title,
        description: seo?.description,
        keywords: seo?.keywords,
        alternates: {
            canonical:url.toString(),
        },
        robots: {
            index: true,
            follow: true,
            nocache: false,
            googleBot: {
                index: true,
                follow: true,
                noimageindex: false,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    }

}

const AGFenceContact = async () => {
    const { contactsections } = await getContactData();
    const { contactFormSection, formFields, formLeyends } = contactsections[0];
    

    return (
        <>
            <div className="flex justify-center flex-col sm:flex-row items-center sm:items-center text-center sm:text-left">
                <div className="sm:flex-1  flex flex-col justify-center flex-wrap items-center px-4 py-8">
                    <h2 className="text-2xl text-primary font-bold mb-4">{contactFormSection.title}</h2>
                    <p className="mb-4 flex">{contactFormSection.subtitle}</p>
                    <a href={contactFormSection.href} className="w-auto rounded-sm p-2 text-white justify-center flex bg-primary">{contactFormSection.button}</a>

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