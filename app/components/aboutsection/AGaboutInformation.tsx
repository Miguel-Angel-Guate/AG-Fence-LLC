const getAboutInformation = async () => {
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
const AGFenceAboutInformation = async () => {
    const { aboutsections } = await getAboutInformation();
    
    const { information } = aboutsections[0];
    
    return (
        <div className="flex w-full flex-wrap sm:h-[50vh] bg-[#F3F4F4]">
            <div className="text-center w-full justify-center flex-wrap sm:text-left flex-1">
                <h2 className="font-semibold flex justify-center text-base text-primary">{information.subtitle}</h2>
                <p className="font-medium flex justify-center text-3xl">{information.title}</p>
            </div>
            <div className="w-full flex justify-center">
                <p className="text-gray-700 w-[80%]">{information.description}</p>
            </div>
            <div className="w-full hidden sm:flex justify-center">
                <p className="text-gray-600 flex justify-center w-[80%]">{information.subDescription}</p>
            </div>
        </div>
    );
}

export default AGFenceAboutInformation
