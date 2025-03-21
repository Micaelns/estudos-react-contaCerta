import Link from "next/link";

export default function Layout(props: any) {
  return (
    <div className="h-screen flex">
      <div className="w-1/12 p-4">
        <ul className="list-outside">
          <li>
            <Link href="/">
              <span className="hover:text-gray-600">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/usuarios/usuarioPage">
              <span className="hover:text-gray-600">Usuários</span>
            </Link>
          </li>
          <li>
            <Link href="/usuarios/usuarioNovo">
              <span className="hover:text-gray-600">Usuário[basic]</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="w-11/12 flex flex-col items-center">
        <div className="bg-gray-100 w-11/12 p-2 overflow-auto h-screen">
          {props.children}
        </div>
      </div>
    </div>
  );
}
