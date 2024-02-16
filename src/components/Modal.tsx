'use client';

import { useEffect } from 'react';
import { createPortal } from 'react-dom';

// * types
type ModalProps = {
  isOpen: boolean;
  children?: React.ReactNode;
};

const Modal = ({ isOpen, children }: ModalProps) => {
  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', isOpen);
  }, [isOpen]);

  if (!isOpen) return null;

  return createPortal(
    <div className='modal-container flex items-center justify-center fixed inset-0 z-10 h-full bg-black/50'>
      <div className='modal flex flex-col bg-[#1e1e1e] p-4'>{children}</div>
    </div>,
    document.body
  );
};

export default Modal;
