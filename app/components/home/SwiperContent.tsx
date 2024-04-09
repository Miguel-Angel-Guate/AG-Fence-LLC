"use client"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Services } from '@/app/libs/types';



const SwiperContent = ({services}:{services: Services}) => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
    };
    return (
        <Slider {...settings} >
            {Object.entries(services as Services).map(([key, service]) => (
                <div key={key} className="flex flex-wrap justify-center w-full">
                    <div className="mb-4 p-4 border flex flex-wrap justify-center border-gray-300 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm mb-4">{service.description}</p>
                        <button className="bg-primary flex items-center justify-center w-48 h-11 text-white rounded hover:bg-indigo-800">
                            {service.button}
                        </button>
                    </div>
                </div>
            ))}
        </Slider>
    );
}

export default SwiperContent