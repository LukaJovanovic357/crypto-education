import { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    if (!isOpen) return null;

    return (
        <div
            className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50'
            onClick={onClose}
        >
            <div
                className='bg-white rounded-lg p-8 relative w-96'
                onClick={e => e.stopPropagation()}
            >
                <button
                    className='absolute top-2 right-2 text-xl text-gray-600'
                    onClick={onClose}
                >
                    X
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
