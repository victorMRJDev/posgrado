import React from "react";
import imagePG from "../../assets/Carrusel/1.jpg";
import EstudiantesAccordion from "../../components/Estudiantes/EstudiantesAccordion";
import Footer from "../../components/Footer/Footer";
import Contenido from "../../components/Secciones/Contenido";
import Titulo from "../../components/Secciones/Titulo";
import TopBar from "../../components/TopBar/TopBar";
import NavBarGob from "../../components/TopBar/NavBarGob";

const listaPrimeraGeneracion = [
  {
    id: 1,
    lineaUno: [
      "1. Lizbeth Gómez Muñoz",
      "2. Eumir Esteban Salgado Lampart",
      "3. José Filiberto Maldonado Catalán",
    ],
    lineaDos: [
      "4. María Isabel Ramírez Arcos",
      "5. Bryan Abisaí Nava Ramírez",
      "6. Nestor Uriel Solache Castro",
    ],
  },
];

const listaSegundaGeneracion = [
  {
    id: 2,
    lineaUno: [
      "1. Dominic Brian Román Padilla",
      "2. Víctor Manuel Romero Juárez",
      "3. Arturo Cisneros Mayoral",
    ],
    lineaDos: [
      "4. Carlos Gilberto Jiménez Saldaña",
      "5. Marbens Santos Arrieta",
    ],
  },
];

const listaTerceraGeneracion = [
  {
    id: 3,
    lineaUno: [
      "1. Denisse Peralta Rojo",
      "2. Isaid Uriel Basilios Segovia",
      "3. Diana Dolores Vázquez Martínez",
      "4. Daniela Aurora Morales López",
      "5. Brandon Aldahir Jacobo Salinas",
      "6. José Antonio Hernández Salinas",
      "7. José Antonio Carranza Martínez",
      "8. Mario Alberto Duque Peralta",
      "9. Lisandro Omar Santos Arrieta",
    ],
    lineaDos: [
      "1. José Antonio Rendón Vargas",
      "2. Imanol Marianito Cuahuitic",
      "3. Sergio Fernando Franco Salmerón",
      "4. Williams Reyna Pérez",
    ],
  },
];

const Estudiantes = () => {
  return (
    <>
    <NavBarGob />
      <TopBar />
      <Contenido>
        <Titulo titulo={"Lista de Alumnos"}></Titulo>
        <p className="mt-9 max-sm:mt-5 max-md:mt-7"></p>
        <EstudiantesAccordion
          image={imagePG}
          title="Primera Generación"
          list={listaPrimeraGeneracion}
        />
        <EstudiantesAccordion
          image={imagePG}
          title="Segunda Generación"
          list={listaSegundaGeneracion}
        />
        <EstudiantesAccordion
          image={imagePG}
          title="Tercera Generación"
          list={listaTerceraGeneracion}
        />
      </Contenido>
      <Footer />
    </>
  );
};

export default Estudiantes;
