import { CompanyInfo } from "@/app/libs/types";
import MobileCarousel from "./AGFenceCompanyCarrousel";
import Link from "next/link";

const getAGFenceHome = async () => {

    try {
        const apiUrl = process.env.API_URL;
        const res = await fetch(`${apiUrl}/api/agfencehome`/* , {cache: "no-cache"} */);
        if (!res.ok) {
            throw new Error("Failed to fetch fencing");
        }

        return await res.json()

    } catch (error) {
        console.log("Error loading fencing: ", error);
    }
};

const AGFenceCompany = async() => {
    const { agfencedata } = await getAGFenceHome()
    const {  companyInfo } = agfencedata[0].home;
    
    return (
        <>

            {/* Desktop view */}
            <div className="hidden sm:block bg-[#F3F4F4]">
                <div className="container mx-auto px-4 py-8">
                    <p className="text-primary">{companyInfo.subtitle}</p>
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">{companyInfo.title}</h2>
                    <p className="text-gray-600 text-center mb-8">{companyInfo.description}</p>
                    <div className="flex flex-col md:flex-row md:items-start space-y-6 md:space-y-0 md:space-x-6">
                        <div className="w-px bg-primary self-stretch"></div> {/* Vertical line */}

                        <div className="flex-1 space-y-6">
                            {/* Work Hours */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{companyInfo.workHours.title}</h3>
                                <p className="mb-4">{companyInfo.workHours.description}</p>
                                <Link href={companyInfo.workHours.link} className="text-indigo-600 hover:underline">
                                    {companyInfo.workHours.detailcontact}
                                    </Link>
                            </div>

                            {/* Location */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{companyInfo.location.title}</h3>
                                <p className="mb-4">{companyInfo.location.description}</p>
                                <Link href={companyInfo.location.link} className="text-indigo-600 hover:underline">
                                    {companyInfo.location.detailcontact}
                                </Link>
                            </div>
                        </div>

                        <div className="w-px bg-primary self-stretch"></div> {/* Vertical line */}

                        <div className="flex-1 space-y-6">
                            {/* Estimates */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{companyInfo.estimates.title}</h3>
                                <p className="mb-4">{companyInfo.estimates.description}</p>
                                <span className="text-indigo-600 hover:underline">{companyInfo.estimates.detailcontact}</span>
                            </div>

                            {/* Service Area */}
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{companyInfo.serviceArea.title}</h3>
                                <p className="mb-4">{companyInfo.serviceArea.description}</p>
                                <Link href={companyInfo.serviceArea.link} className="text-indigo-600 hover:underline">{companyInfo.serviceArea.detailcontact}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile view */}
            <div className="sm:hidden bg-[#F3F4F4]">
                <MobileCarousel companyInfo={companyInfo} />
            </div>
        </>
    );
}

export default AGFenceCompany;