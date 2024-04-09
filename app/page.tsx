
import AGFenceCompany from "./components/home/AGFenceCompanyInfo";
import AGFenceOurIntro from "./components/home/AGFenceOurIntro";
import AGFenceOurService from "./components/home/AGFenceOurService";
import AGPoints from "./components/home/AGFencePoints";
import AGRecentProject from "./components/home/AGFenceRecentProject";

import Hero from "./components/home/Hero";
import AGTrustBy from "./components/shared/AGFenceTrusBy";

import Head from 'next/head';

// In your component's render method:

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