import React from 'react';
import { IoIosContact } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaHouse } from "react-icons/fa6";
import { TbNetwork } from "react-icons/tb";
import { IoMdMegaphone } from "react-icons/io";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { MdFormatLineSpacing } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown';

function Nav() {
  return (
    <nav>
      

      {/* Menú desplegable usando el componente Dropdown de React Bootstrap */}
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuLink" style={{backgroundColor:"red"}}>
        <FaHouse />Inicio
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Principal</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuLink" style={{backgroundColor:"red"}}>
        <TbNetwork />Noticias
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/noticias">Ultimas Noticias</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuLink" style={{backgroundColor:"red"}}>
        <IoMdMegaphone />Noticias Jefatura
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/noticias/jefatura">Avisos</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuLink" style={{backgroundColor:"red"}}>
        <MdOutlineLaptopChromebook />Departmento Informatica
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/noticias/informatica">Temas</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuLink" style={{backgroundColor:"red"}}>
        <MdFormatLineSpacing />Otros
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/noticias/otra">Extras</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle variant="secondary" id="dropdownMenuLink" style={{backgroundColor:"red"}}>
        <IoIosContact />Contacto
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/noticias/otra">Secretaria</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </nav>
  );
}

export default Nav;
