import Image from "next/image"


const profileData = [
    {
        writeup: "Love",
        name: "Fine boii"
    },
    {
        writeup: "Good day",
        name: "Comrade Power"
    },
    {
        writeup: "Inevitable",
        name: "Change"
    },
    {
        writeup: "Tinubu",
        name: "Fuck you tinubu"
    },
     {
        writeup: "Pionieer",
        name: "Future"
    },
]

const Profile: React.FC <{mary: string}> = ({mary}) => {
    return (
        <div>
            <div className=" flex flex-col gap-[20px] justify-center items-center ">
                <div className=" flex flex-col justify-center items-center ">
                    <h1 className="largeText text-white">
                        Famakinde Oluwapelumi
                    </h1>
                    <span className=" text-[10px] text-gray-500 italic ">
                        Developer
                    </span>
                </div>
                <Image className="rounded-full ring-4 ring-red-500" width={100} height={100} src={'/assets/me.png'} alt="avatar" />
                <ul className=" flex flex-col gap-3">
                    {
                        profileData.map((obj, idx) => {
                            return(
                                <li key={idx} className=" flex flex-col justify-center items-center ">
                                    <span className=" text-[10px] text-gray-500 italic ">
                                        {obj.writeup}
                                    </span>
                                    <p className=" text-[15px] ">
                                        {obj.name}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default Profile