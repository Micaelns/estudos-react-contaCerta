import Menu from "@/components/molecules/Menu/Index";
import Link from "next/link";

export default function Layout(props: any) {
  return (
    <div className="h-screen flex">
      <div className="w-full flex flex-col items-center">
        <div className="bg-gray-100 w-11/12">
          <Menu />
        </div>
        <div className="bg-gray-100 w-11/12 p-2 overflow-auto h-screen">
          {props.children}
        </div>
      </div>
    </div>
  );
}
