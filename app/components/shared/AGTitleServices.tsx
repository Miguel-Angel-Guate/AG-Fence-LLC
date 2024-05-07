const AGTitleServices = ({title}:{title:string}) => {
    return (
        <>
        <div className="flex w-full mt-4 justify-center sm:mb-5">
            <h1 className="font-extrabold text-base sm:text-4xl">{title}</h1>
        </div>
        <hr className="h-px text-primary" />
        </> 
     );
}
 
export default AGTitleServices;