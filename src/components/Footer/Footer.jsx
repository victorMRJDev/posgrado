import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-8 mt-8">
      <div className="container mx-auto text-center">
        <p className="text-lg font-bold mb-4">INFORMES</p>
        <p className="text-base mb-2">Instituto Tecnológico de Chilpancingo</p>
        <p className="text-base mb-2">
          División de Estudios de Posgrado e Investigación
        </p>
        <div className="flex-wrap justify-center underline">
          <p className="text-base mb-2 mx-2">
            <a
              href="mailto:posgrado.mci@chilpancingo.tecnm.mx"
              className="hover:text-blue-100 text-base font-"
            >
              posgrado.mci@chilpancingo.tecnm.mx
            </a>
          </p>
          <p className="text-base mb-2 mx-2">
            <a
              href="http://chilpancingo.tecnm.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-100 text-base"
            >
              http://chilpancingo.tecnm.mx/
            </a>
          </p>
        </div>
        <p className="text-base">Teléfono: (747) 454 1300 ext. 1325</p>
      </div>
    </footer>
  );
}

export default Footer;
