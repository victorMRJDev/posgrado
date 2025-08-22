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
    // <header className="flex justify-between items-center shadow-2xl bg-white">
     <header className="sticky top-0 z-20 flex justify-between items-center shadow-2xl bg-white">
      <nav className="w-screen lg:flex lg:justify-center">
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
          <div className="flex flex-col lg:flex-row justify-center items-center gap-2 w-full mx-auto my-4 px-5">
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
// src/components/NavBar.js
// src/components/NavBar.js

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { HiMenu, HiOutlineX } from "react-icons/hi";

// const NavBar = () => {
//   const location = useLocation();
//   const currentPath = location.pathname;
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { title: "Inicio", to: "/" },
//     { title: "Objetivos", to: "/objetivos" },
//     { title: "Perfiles", to: "/perfiles" },
//     { title: "Estudiantes", to: "/estudiantes" },
//     { title: "Núcleo Académico", to: "/nucleoacademico" },
//     { title: "Plan de Estudios", to: "/planestudios" },
//     { title: "Convocatorias", to: "/convocatorias" },
//   ];

//   return (
//     <div className="sticky top-0 z-50 bg-transparent">
//       <header
//         className="max-w-7xl mx-auto
//                    bg-white backdrop-blur-md
//                    p-3 px-10 rounded-full shadow-lg"
//       >
//         <nav className="flex justify-center items-center">
//           {/* Botón para móviles */}
//           <div className="lg:hidden">
//             <button
//               className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <HiOutlineX size={32} /> : <HiMenu size={32} />}
//             </button>
//           </div>

//           {/* Menú para desktop y móvil */}
//           <div
//             className={`lg:flex ${
//               isOpen
//                 ? "absolute top-full left-1/2 -translate-x-1/2 mt-4"
//                 : "hidden"
//             }`}
//           >
//             <ul
//               className={`lg:flex lg:space-x-6 lg:m-0 lg:p-0
//                            ${
//                              isOpen
//                                ? "flex flex-col items-center p-4 bg-gray-200/90 rounded-lg shadow-lg"
//                                : ""
//                            }`}
//             >
//               {menuItems.map((item, index) => (
//                 <li key={index} className="m-2 lg:m-0">
//                   <Link
//                     to={item.to}
//                     className={`text-gray-700 font-medium transition-colors
//                                   hover:text-blue-600
//                                   ${
//                                     currentPath === item.to
//                                       ? "text-blue-600 font-semibold"
//                                       : ""
//                                   }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.title}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default NavBar;