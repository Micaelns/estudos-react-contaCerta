import React from "react";
import { FaOutdent, FaSignOutAlt, FaTimes } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
        <FaTimes
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 cursor-pointer"
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
}
