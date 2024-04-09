
const getAGFenceHome = async () => {
  
    try {
      const apiUrl = process.env.API_URL;
      const res = await fetch(`${apiUrl}/api/agfencehome`);
      if (!res.ok) {
        throw new Error("Failed to fetch fencing");
      }
      
      return  await res.json()
  
    } catch (error) {
      console.log("Error loading fencing: ", error);
    }
  };

const Hero = async() => {
    const { agfencedata } = await getAGFenceHome()
    const { hero } = agfencedata[0].home;
    
    const { title, subtitle, description, subDescription } = hero;
    return (
        <div className="h-[30vh]  sm:h-[500px] w-full justify-center flex items-center sm:justify-start bg-cover   bg-center"  style={{ backgroundImage: `url('/assets/home/hero.webp')` }}>
            <div className="sm:w-[50vw] sm:h-[50vh] sm:ml-14 flex sm:items-center sm:justify-center sm:bg-white sm:bg-opacity-70 rounded-lg shadow-md">
                <div className='sm:w-[48vw]'>
                <h2 className="text-lg text-white text-center sm:text-primary  font-semibold">{subtitle}</h2>
                <h1 className="text-4xl tex sm:text-4xl text-center text-primary sm:text-black font-bold mt-2 mb-4">{title}</h1>
                <p className="hidden sm:block text-base text-white sm:text-black mb-4">{description}</p>
                <p className="hidden sm:block text-base text-white sm:text-black">{subDescription}</p>
                </div>

            </div>
        </div>
    );
}

export default Hero;