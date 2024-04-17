import { RecentProjects } from "@/app/libs/types";
import Image from "next/image";
import AGRecentCarrousel from "./AGRecentCarrouselSection";
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


const AGRecentProject = async () => {
    const { agfencedata } = await getAGFenceHome()
    const { recentProjects } = agfencedata[0].home;
    
    const imagePath = (index: number) => `/assets/recenproject/recent${index + 1}.webp`;
    return (
        <>
            <section className="py-12 bg-white hidden sm:block">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <p className="mt-2 text-sm text-primary sm:text-base">{recentProjects.subtitle}</p>
                        <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl">{recentProjects.title}</h2>
                    </div>
                    <div className="w-full flex flex-wrap justify-center">
                        {recentProjects.projects.map((project: RecentProjects, index: RecentProjects) => (
                            
                            <div key={index as any} className="w-full sm:w-1/3 p-4 relative group">
                                
                                <Image
                                    src={imagePath(index as any)}
                                    alt={project.imageAlt}
                                    width={375}
                                    height={491}
                                    className="object-cover"
                                    priority
                                />
                                
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                                    <div className="p-4">
                                        <h3 className="text-white text-lg font-semibold">{project.title}</h3>
                                        <Link key={project._id} href={project.link} passHref>
                                        <button className="mt-2 bg-primary py-2 px-4 text-white rounded hover:bg-indigo-700 transition">
                                            Visit
                                        </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            
                        ))}
                    </div>

                </div>
            </section>
            <div className="sm:hidden">

                <AGRecentCarrousel recentProjects={recentProjects} />
            </div>
        </>
    );
}

export default AGRecentProject;