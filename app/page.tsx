"use client"
import { faArrowUpFromBracket, faPrint, faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import QRCode from "react-qr-code";



export default function Home() {
  const qrRef = useRef<SVGSVGElement | null>(null);
  const qrValue = "https://your-link.com";


  const shareQR = () => {
    console.log("Share clicked")
    if (!qrRef.current) return;

    const svg = qrRef.current;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);
      canvas.toBlob((blob) => {
        if (!blob) return;

        if (navigator.share && navigator.canShare?.({ files: [] })) {
          const file = new File([blob], "qrcode.png", { type: "image/png" });
          navigator.share({
            files: [file],
            title: "My QR Code",
            text: "Here is your QR Code",
          }).catch((err) => console.log("Share canceled", err));
        } else {
          // Fallback to WhatsApp link share
          const url = encodeURIComponent(qrValue);
          window.open(`https://wa.me/?text=${url}`, "_blank");
        }
      }, "image/png");
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };


  // const qrcode = new QRCode
  return (
    <div className=" flex justify-start items-start ring-2 h-full w-full bg-blue-300 ring-red-400 ">
        <div className=" ring-2 flex flex-1 flex-col gap-5 justify-between items-center w-full bg-red-700 ">
            <h1 className="largeText text-white">
                Your QR-code
            </h1>
            <div className=" rounded-3xl ring-4 ring-red-500 w-fit h-fit overflow-hidden p-7 bg-white ">
              <QRCode
                size={10}
                style={{ height: "300px", maxWidth: "100%", width: "100%" }}
                value={"www.famakinde.com"}
              />
            </div>
            
            <div className=" self-end flex w-full h-fit justify-between items-center ">
              <span className=" rounded-xl p-2 shadow-custom_shad7 ">
                  <FontAwesomeIcon onClick={shareQR} className=" text-[15px] text-white " icon={faArrowUpFromBracket} />
              </span>
              <span className=" rounded-xl p-2 shadow-custom_shad7 ">
                  <FontAwesomeIcon onClick={shareQR} className=" text-[15px] text-white " icon={faPrint} />
              </span>
            </div>
        </div>
    </div>
  );
}
