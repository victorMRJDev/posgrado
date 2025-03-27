import React from "react";
import imagePG from "../../assets/Carrusel/1.jpg";
import fondo from '../../assets/secihti_fondoFot.jpg';
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
      "4. Brandon Aldahir Jacobo Salinas",
      "5. Mario Alberto Duque Peralta",
      "6. Lisandro Omar Santos Arrieta",
    ],
    lineaDos: [
      "1. José Antonio Rendón Vargas",
      "2. Imanol Marianito Cuahuitic",
    ],
  },
];

const listaCuartaGeneracion = [
  {
    id: 4,
    lineaUno:[
      "1. Yaozihuatl López García",
      "2. Celeste Bello Pastor"
    ],
    lineaDos:[
      "1. Jonathan Jesús Carranza Vega",
      "2. Orlando Mares Hernández"
    ]
  }
]

const listaQuintaGeneracion =[
  {
    id:5,
    lineaUno:[
      "1. Alejandra Texta Nogueda",
      "2. Jorge Arturo Ocampo Pineda",
      "3. Itzel Nizaritani Reyes"

    ],
    lineaDos:[
      "1. Alberto Barrera Azoños",
      "2. Joaquín Zueriel Nava Salazar"
    ]
  }
]
const Estudiantes = () => {
  return (
    <>
      <NavBarGob />
      <TopBar />
      <Contenido>
        <Titulo titulo={"Lista de Alumnos"}></Titulo>
        <p className="mt-9 max-sm:mt-5 max-md:mt-7"></p>
        <EstudiantesAccordion
          image={fondo}
          title="Primera Generación"
          list={listaPrimeraGeneracion}
        />
        <EstudiantesAccordion
          image={fondo}
          title="Segunda Generación"
          list={listaSegundaGeneracion}
        />
        <EstudiantesAccordion
          image={fondo}
          title="Tercera Generación"
          list={listaTerceraGeneracion}
        />
         <EstudiantesAccordion
          image={fondo}
          title="Cuarta Generación"
          list={listaCuartaGeneracion}
        />
        <EstudiantesAccordion
          image={fondo}
          title="Quinta Generación"
          list={listaQuintaGeneracion}
        />
      </Contenido>
      <Footer />
    </>
  );
};

export default Estudiantes;
