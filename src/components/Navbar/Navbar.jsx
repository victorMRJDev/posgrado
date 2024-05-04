import { useState } from "react";
import {
    PaperAirplaneIcon,
    MoonIcon,
    SunIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import logo_itch from "../../assets/logo_itch.png";
import logo_sep_rojo from "../../assets/logo_sep_rojo.png";
import logo_azul_tecnm from "../../assets/logo_azul_tecnm.png";
import logo_MCI from "../../assets/logo_MCI.jpeg";

function NavbarM() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <>
         {/* <div className="sticky top-0 z-20"> */}
            <div className="bg-white flex justify-between gap-40 items-center max-sm:hidden sm:hidden md:hidden lg:flex">
                <img
                    className="h-28 w-28"
                    src={logo_itch}
                />
                <img
                    className="h-28 w-auto "
                    src={logo_sep_rojo}
                />
                <img
                    className="h-28 w-auto "
                    src={logo_azul_tecnm}
                />
                <img
                    className="h-28 w-auto "
                    src={logo_MCI}
                />
            </div>
            <div className="bg-blue-950 flex h-11"></div> 

            <header className="sticky overflow-hidden top-0 z-20 flex justify-between items-center shadow-2xl">
                <nav>
                    <div className="w-screen bg-white shadow-2xl">
                        <div className="flex mx-auto justify-center shadow-2xl">
                            {/* Primary menu and logo */}
                            <div className="flex items-center gap-16 my-4">
                                {/* primary */}
                                <div className="hidden lg:flex gap-8 content-center">
                                    <a href="/" className="text-blue-950 text-2xl">
                                        Inicio
                                    </a>
                                    <a href="/objetivos" className="text-blue-950 text-2xl text-center">Objetivos</a>
                                    <a href="/perfiles" className="text-blue-950 text-2xl">Perfiles</a>
                                    <a href="#" className="text-blue-950 text-2xl">Estudiantes</a>
                                    <a href="#" className="text-blue-950 text-2xl">NAB</a>
                                    <a href="#" className="text-blue-950 text-2xl">Plan de Estudios</a>
                                    <a href="#" className="text-blue-950 text-2xl">Convocatorias</a>
                                    <a href="#" className="text-blue-950 text-2xl">Vinculación</a>
                                    <a href="#" className="text-blue-950 text-2xl">LGAC</a>
                                </div>
                            </div>
                            {/* secondary */}
                            <div className="flex gap-6">
                                <div className="hidden xs:flex items-center gap-10">
                                    <div className="hidden lg:flex items-center gap-2">
                                        <MoonIcon className="h-6 w-6" />
                                        <SunIcon className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <button className="rounded-full border-solid border-2 border-red-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                                            Free Trial
                                        </button>
                                    </div>
                                </div>
                                {/* Mobile navigation toggle */}
                                <div className="lg:hidden flex items-center">
                                    <button onClick={() => setToggleMenu(!toggleMenu)}>
                                        <Bars3Icon className="h-6 bg-blue-950" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* mobile navigation */}
                    <div
                        className={`fixed z-40 w-full  bg-white overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-full"
                            }`}
                    >
                    <div className="px-8">
                        <div className="flex flex-col items-center gap-8 font-bold tracking-wider">
                            <a href="/" className="text-blue-950 text-2xl"> Inicio</a>
                            <a href="/objetivos" className="text-blue-950 text-2xl text-center">Objetivos</a>
                            <a href="/perfiles" className="text-blue-950 text-2xl">Perfiles</a>
                            <a href="#" className="text-blue-950 text-2xl">Estudiantes</a>
                            <a href="#" className="text-blue-950 text-2xl">NAB</a>
                            <a href="#" className="text-blue-950 text-2xl">Plan de Estudios</a>
                            <a href="#" className="text-blue-950 text-2xl">Convocatorias</a>
                            <a href="#" className="text-blue-950 text-2xl">Vinculación</a>
                            <a href="#" className="text-blue-950 text-2xl">LGAC</a>
                        </div>
                    </div>
                    </div>
                </nav>
            </header>
        {/* </div> */}
        </>
    );
}

export default NavbarM;