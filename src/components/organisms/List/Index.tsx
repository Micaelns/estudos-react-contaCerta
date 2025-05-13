import NoDataMessage from "@/components/molecules/NoDataMessage/Index";
import { ReactNode } from "react";
import ErrorMessage from "@/components/molecules/ErrorMessage/Index";
import Loading from "@/components/atoms/Loading/Index";

interface ElementProps {
  loading: boolean;
  error: string | null;
  children: ReactNode;
}

export default function ElementList({
  children,
  loading = false,
  error = "",
}: ElementProps) {
  if (loading) {
    return <Loading />;
  }
  if (error != null) {
    return (
      <div className="flex justify-center items-center">
        <ErrorMessage message={error} />
      </div>
    );
  }

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
