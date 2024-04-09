import { AdvantageProp } from "@/app/libs/types";
import Carousel from "./Carrousel";

const AGAdvantage = ({ advantage }: AdvantageProp) => {
        
    return (
    <div className="bg-white p-4 shadow rounded-lg text-center">
            <Carousel items={advantage} />
        </div>
    
        );
}
 
export default AGAdvantage;