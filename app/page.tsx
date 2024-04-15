
import AGFenceCompany from "./components/home/AGFenceCompanyInfo";
import AGFenceOurIntro from "./components/home/AGFenceOurIntro";
import AGFenceOurService from "./components/home/AGFenceOurService";
import AGPoints from "./components/home/AGFencePoints";
import AGRecentProject from "./components/home/AGFenceRecentProject";

import Hero from "./components/home/Hero";
import AGTrustBy from "./components/shared/AGFenceTrusBy";

import { Metadata, ResolvingMetadata } from 'next'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}


const getAGFenceHome = async () => {

  try {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`${apiUrl}/api/agfencehome`/* , { next: { revalidate: 3600 }} */);
    if (!res.ok) {
      throw new Error("Failed to fetch fencing");
    }

    return await res.json()

  } catch (error) {
    console.log("Error loading fencing: ", error);
  }
};


export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  
  const { agfencedata } = await getAGFenceHome()
  
  const { seo } = agfencedata[0].home;
  const metadataBase = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`)

  return {
    title: seo?.title,
    description: seo?.description,
    keywords: seo?.keywords,
    alternates: {
      canonical: metadataBase,
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



const AGFence = () => {
  return (
    <>
      <Hero />
      <AGFenceOurIntro />
      <AGFenceOurService />
      <AGPoints />
      <AGFenceCompany />
      <AGRecentProject />
      <AGTrustBy sectionTitle="Trusted by this companies" />

    </>
  );
}

export default AGFence;