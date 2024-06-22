import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { HiOutlineX } from "react-icons/hi";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Inicio", to: "/" },
    { title: "Objetivos", to: "/objetivos" },
    { title: "Perfiles", to: "/perfiles" },
    { title: "Estudiantes", to: "/estudiantes" },
    { title: "Núcleo Académico", to: "/nucleoacademico" },
    { title: "Plan de Estudios", to: "/planestudios" },
    { title: "Convocatorias", to: "/convocatorias" },
  ];

  return (
    <header className="sticky top-0 z-20 flex justify-between items-center shadow-2xl">
      <nav className="w-screen shadow-2xl lg:flex lg:justify-center bg-white">
        <div className="flex justify-end items-center my-4">
          <button
            className="lg:hidden text-3xl justify-end mr-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiOutlineX size={32} color="#001A5F" />
            ) : (
              <HiMenu size={32} color="#001A5F" />
            )}
          </button>
        </div>

        <div className={`lg:flex ${isOpen ? "block" : "hidden"} w-full`}>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full mx-auto my-4 md:gap-4 sm:gap-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className={`flex-grow hover:text-blue-700 text-2xl hover:shadow-sm transition-all duration-300 px-2 text-center ${
                  currentPath === item.to
                    ? "text-blue-900 font-semibold"
                    : "text-blue-900"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
