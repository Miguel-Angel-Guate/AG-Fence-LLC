
import Image from 'next/image';
import Link from 'next/link';
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";


const navData = {
    menu: [
        { title: "Home", link: "/" },
        { title: "About", link: "/about" },
        { title: "contac", link: "/contact" },
        { title: "Fence", link: "/services/fence" },
        { title: "Deck", link: "/services/deck" },
        { title: "review", link: "/reviews" },
    ],
};

const MobileNav = ({ isOpen, toggleMenu }: any) => {

    return (
        <div className='relative sm:hidden'>
            <button className={` ${isOpen ? 'hidden' : ''}`} onClick={toggleMenu}>
                <FaBars className="w-8 h-8" />
            </button>

            {isOpen && (
                <div className='fixed inset-0  flex items-center justify-end'>
                    <button className='fixed inset-0 bg-black opacity-50' onClick={toggleMenu} onKeyDown={toggleMenu} role="button" tabIndex={0}></button>
                    <div className='relative w-3/5  h-screen flex flex-col  shadow-lg'>
                        <nav className="flex flex-col   justify-start items-center bg-white h-3/5"> 
                            <div className='bg-white w-full flex flex-wrap justify-between items-center mt-14'>
                                <div className="flex w-1/2 flex-wrap justify-between items-center">
                                    <Link href="/" passHref>
                                        <Image src="/assets/home/logo.webp" alt="AG Fencing Logo" className="w-[90] h-[70] sm:w-[145] sm:h-[90]" width={90} height={70} />
                                    </Link>
                                </div>
                                <button className='w-1/2 flex justify-around' onClick={toggleMenu}>
                                    <MdClose className="w-8 h-8" />
                                </button>
                            </div>
                            {/* Menu items... */}
                            {navData.menu.map((item, index) => (

                                <Link
                                    className='w-full flex justify-center items-center hover:bg-blue-500hover:underline focus:underline active:underline'
                                    key={index}
                                    href={item.link}
                                    passHref
                                    onClick={toggleMenu}
                                >
                                    <span className="text-black flex justify-center text-xl w-full hover:text-red-300 hover:underline focus:underline active:underline font-medium my-2">
                                        {item.title}
                                    </span>
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileNav;