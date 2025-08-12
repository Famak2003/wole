'use client'

import { faExclamation, faMoon, faPencil, faSun } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Image from "next/image"
import { useEffect, useState } from "react"

const LogoBanner: React.FC<{edit?: boolean, handleEdit?: () => void}> = ({edit = false, handleEdit}) => {
    const [sidebarPos, setSidebarPos] = useState<string>('sidebar')
    const [darkmode, setDarkmode] = useState<boolean | null>(null)

     // // darkmode
    useEffect(() =>{
        if (darkmode === null) return;
        const root = window.document.documentElement
        if (darkmode){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }
    
        //save dark-mode preference
        localStorage.setItem("dark-mode", `${darkmode}`);
    }, [darkmode])

    useEffect(() => {
        const storedDarkmode = localStorage.getItem('dark-mode') === "true"
        setDarkmode(storedDarkmode)
    }, [])

    console.log("darkmood", darkmode)

    return (
        <div className="ring-2 flex justify-between items-center w-full h-fit p-[12px] ">
            <Image className=" bg-dark_side rounded-2xl " width={50} height={50} src={'/assets/wole-logo.png'} alt="Logo" />
            <div onClick={() => setDarkmode(!darkmode)} className=" flex justify-center items-center rounded-xl overflow-hidden bg-light_grey ring-2 ring-light_grey ">
                <FontAwesomeIcon className={` ${darkmode ? "bg-[#e9e9e9] text-dark" : "bg-white text-light_grey"}  p-1 text-[15px] rounded-lg`} 
                    icon={faMoon} 
                />
                <FontAwesomeIcon className={` ${darkmode ? "bg-white text-light_grey" : "bg-light_grey text-dark"} p-1 text-[15px] rounded-lg `} 
                    icon={faSun} 
                />
            </div>
            {
                edit ? (
                    <FontAwesomeIcon className=" text-[15px] shadow-custom_shad7 p-2 rounded-xl bg-white text-dark ring-2 ring-light_grey " onClick={() => handleEdit} icon={faPencil} />
                ) : (
                    <FontAwesomeIcon className=" text-[15px] shadow-custom_shad7 p-2 rounded-xl " icon={faExclamation} />
                )
            }
        </div>
    )
}

export default LogoBanner