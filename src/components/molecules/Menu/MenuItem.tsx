interface MenuItemProps {
  icon: any;
  text: string;
}

export default function MenuItem({ icon, text }: MenuItemProps) {
  return (
    <li className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition">
      {icon} <span>{text}</span>
    </li>
  );
}
