import NoDataMessage from "@/components/molecules/NoDataMessage/Index";
import { FaSpinner } from "react-icons/fa";
import { ReactNode } from "react";
import ErrorMessage from "@/components/molecules/ErrorMessage/Index";

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
    return (
      <div className="flex justify-center items-center">
        <FaSpinner className="text-gray-900 animate-spin size-6" />
      </div>
    );
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
