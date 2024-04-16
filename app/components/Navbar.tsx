import { PhoneIcon } from "@heroicons/react/16/solid";
import NavLinkStatus from "./navbar/LinkStatus";


async function getNavDAta() {
  try {
    const apiUrl = process.env.API_URL
    const res = await fetch(`${apiUrl}/api/navs`);

    if (!res.ok) {
      throw new Error("Failed to fetch navs data");
    }
    const data = await res.json()
    return data

  } catch (error) {
    console.log("Error loading navs data: ", error);
    return []
  }
};


export default async function Navbar() {
  const { navs } = await getNavDAta()
  const navData = navs[0]

  return (
    <header className="bg-white shadow-md py-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
        <NavLinkStatus navData={navData} />
        <div className="hidden sm:flex items-center space-x-2">
          <PhoneIcon className="h-6 w-6 text-green-600" />
          <div>
            <span className="text-black text-sm">{navData?.call}</span><br />
            <span className="text-black font-bold">
              <a href={`tel:${navData?.phone}`}>
                {navData?.phone}
              </a>
            </span>
          </div>
        </div>
      </div>
    </header>


  );
}
