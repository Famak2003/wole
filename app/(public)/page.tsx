import NavBar from "@/components/NavBar";
import { faChartSimple, faCreditCard, faEnvelope, faQrcode, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <main className=" min-h-[100dvh] ">
        <div className=" flex flex-col justify-between items-center h-[100dvh] ">
            <div className=" h-[85dvh] ">
                <div>
                    <Image className=" rounded-2xl " width={70} height={70} src={'/assets/wole-logo.png'} alt="Logo" />                    
                </div>
            </div>
        </div>
    </main>
  );
}
