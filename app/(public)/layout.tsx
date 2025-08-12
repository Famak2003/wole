// import Footer from "./component/Footer";
// import NavBar from "./component/NavBar";
// import BreadCrumbs from "./component/reusables/BreadCrumbs";

import NavBar from "@/components/NavBar";

export default function PublicLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div className=" min-h-[100dvh] overflow-hidden " >
            <div className=" relative flex flex-col justify-center items-center text-black bg-primary_light_grey " >
                <NavBar/>
                {/* <BreadCrumbs/> */}
                {children}
                {/* <Footer/> */}
            </div>
        </div>
    );
  }
  