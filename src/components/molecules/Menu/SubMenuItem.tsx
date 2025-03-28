export default function SubMenuItem({ text }: { text: string }) {
  return (
    <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer transition">
      {text}
    </li>
  );
}
