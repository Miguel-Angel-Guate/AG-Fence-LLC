import Link from "next/link";

const getAGFenceHome = async () => {

  try {
    const apiUrl = process.env.API_URL;
    const res = await fetch(`${apiUrl}/api/agfencehome`/* , { cache: 'no-store' } */);
    if (!res.ok) {
      throw new Error("Failed to fetch fencing");
    }

    return await res.json()

  } catch (error) {
    console.log("Error loading fencing: ", error);
  }
};

const Hero = async () => {
  const { agfencedata } = await getAGFenceHome()
  const { hero } = agfencedata[0].home;

  const { title, subtitle, description, subDescription, button, link } = hero;
  return (
    <div className="h-[30vh]  sm:h-[500px] w-full justify-center flex items-center sm:justify-start bg-cover   bg-center" style={{ backgroundImage: `url('/assets/home/hero.webp')` }}>
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="sm:w-[50vw] sm:h-[50vh] sm:ml-14 flex sm:items-center sm:justify-center sm:bg-white sm:bg-opacity-70 rounded-lg shadow-md">
        <div className='sm:w-[48vw] flex flex-wrap justify-center'>
        <h2 className="sm:text-lg text-base mt-3 text-white sm:bg-opacity-25 bg-opacity-50 text-center sm:text-primary font-semibold bg-black sm:bg-transparent">{subtitle}</h2>
          <h1 className="text-xl tex sm:text-4xl text-center text-primary sm:text-black font-bold mt-2 mb-4">{title}</h1>
          <p className="hidden sm:block text-base text-white sm:text-black mb-4">{description}</p>
          <p className="hidden sm:block text-base text-white sm:text-black">{subDescription}</p>
          <Link href={link}>
          <button className=" bg-black w-28  sm:bg-primary flex justify-center sm:w-24  rounded-sm  text-white cursor-pointer">{button}</button>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Hero;