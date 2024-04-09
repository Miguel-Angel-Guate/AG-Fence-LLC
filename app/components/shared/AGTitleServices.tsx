const AGTitleServices = ({title}:{title:string}) => {
    return (
        <>
        <div className="flex w-full justify-center sm:mb-5">
            <h1 className="font-extrabold text-4xl">{title}</h1>
        </div>
        <hr className="h-px text-primary" />
        </> 
     );
}
 
export default AGTitleServices;