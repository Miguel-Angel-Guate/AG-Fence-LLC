import { AGFencePoints } from "@/app/libs/types";
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


const AGPoints = async() => {
  const { agfencedata } = await getAGFenceHome()
  const {  points } = agfencedata[0].home;
    
    return (
        <div className="bg-white p-4">
      <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row justify-between items-center">
        {Object.entries(points as AGFencePoints).map(([pointKey, pointValue]) => (
          <div key={pointKey} className="text-center">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">{pointValue.value}</p>
            <p className="text-xs sm:text-sm lg:text-xl text-black">{pointValue.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
    );
}

export default AGPoints;