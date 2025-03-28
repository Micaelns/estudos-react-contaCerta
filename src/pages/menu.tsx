import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaCog,
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

export default function ModernMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo / Nome do site */}
          <div className="text-xl font-bold">MeuSite</div>

          {/* Ícone do menu mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Menu Desktop */}
          <ul className="hidden md:flex space-x-6">
            <MenuItem icon={<FaHome />} text="Início" />

            {/* Submenu Perfil */}
            <li
              className="relative cursor-pointer"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="flex items-center gap-2 hover:text-gray-300 transition">
                <FaUser />
                <span>Perfil</span>
                <FaChevronDown
                  className={`transition-transform ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isProfileOpen && (
                <ul className="absolute left-0 mt-2 w-40 bg-gray-800 rounded shadow-lg overflow-hidden">
                  <SubMenuItem text="Meu Perfil" />
                  <SubMenuItem text="Configurações" />
                  <SubMenuItem text="Sair" />
                </ul>
              )}
            </li>

            <MenuItem icon={<FaCog />} text="Configurações" />
          </ul>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
            <MenuItem icon={<FaHome />} text="Início" />
            <div className="w-full text-center">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center justify-center gap-2 w-full"
              >
                <FaUser /> <span>Perfil</span>{" "}
                <FaChevronDown
                  className={`transition-transform ${
                    isProfileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isProfileOpen && (
                <div className="mt-2 space-y-2 bg-gray-800 w-full p-2 rounded-md">
                  <SubMenuItem text="Meu Perfil" />
                  <SubMenuItem text="Configurações" />
                  <SubMenuItem text="Sair" />
                </div>
              )}
            </div>
            <MenuItem icon={<FaCog />} text="Configurações" />
          </div>
        )}
      </div>
    </nav>
  );
}

// Componente para cada item do menu
function MenuItem({ icon, text }: { icon: JSX.Element; text: string }) {
  return (
    <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
      {icon} <span>{text}</span>
    </li>
  );
}

// Componente para submenu
function SubMenuItem({ text }: { text: string }) {
  return (
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition">
      {text}
    </li>
  );
}
