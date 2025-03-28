import NoDataMessage from "@/components/molecules/NoDataMessage/Index";
import { ReactNode } from "react";

export default function ElementList({ children }: { children?: ReactNode }) {
  var hasChildren =
    !children || (Array.isArray(children) && children.length === 0)
      ? false
      : true;

  return (
    <div className="flex justify-center items-center gap-2 flex-wrap">
      {hasChildren ? children : <NoDataMessage />}
    </div>
  );
}
