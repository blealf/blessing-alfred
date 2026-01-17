import { X } from 'lucide-react';
import { useEffect } from "react";

const Modal = (
  { isOpen, onClose, title, children }:
  { isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode }
) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 px-5 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="w-full max-w-xl rounded-lg bg-[var(--bg-secondary)] shadow-lg
          animate-in fade-in zoom-in-95"
      >
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 id="modal-title" className="text-lg font-semibold">
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X />
          </button>
        </div>

        <div className="p-4">{children}</div>
      </div>
    </div>
  );
}

export default Modal;