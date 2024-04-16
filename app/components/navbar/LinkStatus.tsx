"use client"
import { MenuItem, Navs } from "@/app/libs/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaCirclePlus } from "react-icons/fa6";
import MobileNav from "../shared/MobileNav";
import { useState } from "react";


const NavLinkStatus = ({ navData }: { navData: Navs }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }
    const pathname = usePathname()
    return (
        <>
            {!isOpen && (
                <div className="flex items-center ">
                    <Link href="/" passHref>
                        <Image 
                        src="/assets/home/logo.webp" 
                        alt="AG Fencing Logo" 
                        className="w-[90] h-[70] sm:w-[145] sm:h-[90]" 
                        width={90} 
                        height={70}
                        priority
                        />
                    </Link>
                </div>
            )}

            <nav className="hidden sm:flex space-x-4">
                {navData?.menu?.map((item: MenuItem) => {
                    if (item.submenu) {
                        return (
                            <div key={item.title} className="group relative">
                                <span className="text-black text-base hover:text-red-300 font-medium flex items-center cursor-pointer">
                                    {item.title}
                                    <FaCirclePlus className="ml-1" />
                                </span>
                                <div className="absolute left-0 hidden text-white group-hover:block bg-black  shadow-lg">
                                    {item.submenu.map((subItem) => (
                                        <Link key={subItem.title} href={subItem.link} passHref>
                                            <span className={`block p-2 hover:underline ${pathname === subItem.link ? 'text-primary' : ''}`}>
                                                {subItem.title}
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    } else {
                        return (
                            <Link key={item.title} href={item.link!} passHref>
                                <span className={`text-black text-base hover:text-red-300 font-medium flex items-center ${pathname === item?.link ? 'text-primary' : ''}`}>
                                    {item?.title}
                                </span>
                            </Link>
                        );
                    }
                })}
            </nav>
            <MobileNav isOpen={isOpen} toggleMenu={toggleMenu} />
        </>
    );
}

export default NavLinkStatus;