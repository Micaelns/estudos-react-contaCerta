import { useState } from "react";
import { FaUser, FaChevronDown } from "react-icons/fa";
import SubMenuItem from "./SubMenuItem";
import Link from "next/link";

interface SubElementProps {
  text: string;
  linkPage: string;
}
interface ElementProps {
  title: string;
  elements: SubElementProps[];
}

export default function SubMenu(props: ElementProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className="relative cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center gap-2 hover:text-gray-300 transition">
        <FaUser />
        <span>{props.title}</span>
        <FaChevronDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-40 bg-gray-800 rounded shadow-lg overflow-hidden">
          {props.elements.map((element: SubElementProps) => (
            <Link href={element.linkPage}>
              <SubMenuItem text={element.text} />
            </Link>
          ))}
        </ul>
      )}
    </li>
  );
}
