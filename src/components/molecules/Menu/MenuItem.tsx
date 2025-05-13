interface MenuItemProps {
  icon: any;
  text: string;
  click?: () => void;
}

export default function MenuItem({ icon, text, click }: MenuItemProps) {
  return (
    <li
      className="flex items-center gap-2 cursor-pointer hover:text-gray-300 transition"
      onClick={() => (click !== undefined ? click() : "")}
    >
      {icon} <span>{text}</span>
    </li>
  );
}
