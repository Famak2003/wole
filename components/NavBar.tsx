import { faChartSimple, faCreditCard, faEnvelope, faQrcode, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"

const navItems = [
    {
        name: 'Profile',
        link: '/profile',
        icon: () => <FontAwesomeIcon className=" text-[18px] text-white group-hover:text-red-500 " icon={faUser}/>
    },
    {
        name: 'Credit Card',
        link: '/cardInfo',
        icon: () => <FontAwesomeIcon className=" text-[18px] text-white group-hover:text-red-500 " icon={faCreditCard}/>
    },
    {
        name: 'Qr-Code',
        link: '/',
        icon: () => <FontAwesomeIcon className=" text-[30px] text-black group-hover:text-red-500 " icon={faQrcode}/>
    },
    {
        name: 'Statistics',
        link: '/stats',
        icon: () => <FontAwesomeIcon className=" text-[18px] text-white group-hover:text-red-500 " icon={faChartSimple}/>
    },
    {
        name: 'Message',
        link: '/message',
        icon: () => <FontAwesomeIcon className=" text-[18px] text-white group-hover:text-red-500 " icon={faEnvelope}/>
    },
]

const NavBar = () => {
    return(
        <nav className=" ring-2 flex justify-center items-center w-[100%] h-[10dvh] rounded-t-[40px] bg-dark ">
                <ul className=" relative flex gap-5 justify-between items-center w-full h-full px-6 ">
                    {
                        navItems?.map((obj, idx) => {
                            if (obj?.name === 'Qr-Code'){
                                return (
                                    <Link key={idx} className=" relative group w-[70px] aspect-square " href={obj?.link}>
                                        <div className=" absolute top-[-30px] right-[50%] translate-x-[50%] w-full aspect-square rounded-full bg-white flex flex-col justify-center items-center shadow-custom_shad5 ">
                                            {obj?.icon()}
                                            {/* <p className=" text-[12px] text-black ">
                                                {obj.name}
                                            </p>                                     */}
                                        </div>
                                    </Link>
                                )
                            }
                            return(
                                <Link key={idx} className=" group flex flex-col gap-2 justify-center items-center " href={obj.link}>
                                    {obj?.icon()}
                                    <p className=" group-hover:text-white text-light_grey text-[12px] font-semibold ">
                                        {obj.name}
                                    </p>                                    
                                </Link>
                            )
                        })
                    }
                </ul>
            </nav>
    )
}

export default NavBar