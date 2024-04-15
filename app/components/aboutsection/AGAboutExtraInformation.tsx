import { FaEnvelope, FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';
const iconMapping:any = {
    FaMapMarkerAlt: <FaMapMarkerAlt className="text-green-500" />,
    FaPhoneAlt: <FaPhoneAlt className="text-green-500" />,
    FaEnvelope: <FaEnvelope className="text-green-500" />,
    FaRegClock: <FaRegClock className="text-green-500" />,
  };


const getEstimated = async () => {
    try {
        const apiUrl = process.env.API_URL;
        const response = await fetch(`${apiUrl}/api/aboutservice`);
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

const AGFenceAboutExtraInformation = async () => {
    const { aboutsections } = await getEstimated();
    const { contactInformation } = aboutsections[0] || {};
    
    return (
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mt-4 sm:mb-4">
            {contactInformation && contactInformation.length > 0 && contactInformation?.map((info:any) => (
                <div key={info.id} className="h-auto w-full flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center h-auto sm:h-10 w-full">
                    {iconMapping[info.icon]}
                    </div>
                    <h3 className="text-xl  font-bold flex h-auto sm:h-10 w-full justify-center items-center">{info.title}</h3>
                    {info.href ? (
                        <a href={info.href} className="hover:underline text-center flex h-auto sm:h-10 w-full justify-center items-center">
                            {info.description}
                        </a>
                    ) : (
                        <p className="text-center flex w-full items-center  justify-center">{info.description}</p>
                    )}
                </div>
            ))}
        </div>


    );
}

export default AGFenceAboutExtraInformation;