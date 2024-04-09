import { FaEnvelope, FaPhoneAlt, FaRegClock, FaMapMarkerAlt } from 'react-icons/fa';

const contactInformation = [
    {
        id: 'address',
        icon: <FaMapMarkerAlt className="text-green-500" />,
        title: 'Address',
        description: 'Our friendly team is here to help. 7828 woodside terrace, glen burnie, md 21061'
    },
    {
        id: 'phone',
        icon: <FaPhoneAlt className="text-green-500" />,
        title: 'Phone',
        description: 'Mon-Fri from 8am to 5pm. (443) 628-9734',
        href: 'tel:+14436289734'
    },
    {
        id: 'email',
        icon: <FaEnvelope className="text-green-500" />,
        title: 'Email',
        description: 'Our friendly team is here to help. aglfences4@gmail.com',
        href: 'mailto:aglfences4@gmail.com'
    },
    {
        id: 'working-hours',
        icon: <FaRegClock className="text-green-500" />,
        title: 'Working Hours',
        description: 'Sunday to Friday 8:00am - 5:00pm'
    }
];



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
    const { additionalinfo } = aboutsections[0] || {};

    return (
        <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center sm:mt-4 sm:mb-4">
            {contactInformation.map((info) => (
                <div key={info.id} className="h-auto w-full flex flex-col justify-center items-center">
                    <div className="flex justify-center items-center h-auto sm:h-10 w-full">
                        {info.icon}
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