import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import MenuItem from "./MenuItem";
import SubMenu from "./SubMenu";
import { FaHome, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  var elementsCost = [
    { text: "Criar", linkPage: "/custos/custoPage" },
    { text: "Listar", linkPage: "/custos/lista" },
  ];
  var elementsUser = [
    { text: "Criar", linkPage: "/usuarios/usuarioPage" },
    { text: "Listar", linkPage: "/usuarios/lista" },
  ];

  function setClose() {}

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold">Conta Certa</div>

          {/* Ícone do menu mobile */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-6">
            <Link href="/">
              <MenuItem icon={<FaHome />} text="Início" />
            </Link>
            <SubMenu title="Custos" elements={elementsCost} />
            <SubMenu title="Usuários" elements={elementsUser} />
            <MenuItem icon={<FaSignOutAlt />} text="Sair" />
          </ul>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
            <Link href="/">
              <MenuItem icon={<FaHome />} text="Início" />
            </Link>
            <SubMenu title="Custos" elements={elementsCost} />
            <SubMenu title="Usuários" elements={elementsUser} />
            <MenuItem icon={<FaSignOutAlt />} text="Sair" />
          </div>
        )}
      </div>
    </nav>
  );
}
