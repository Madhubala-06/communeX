import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Modal({ isOpen, setIsOpen }) {
  return (
    <>
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
        <div className="fixed inset-0 bg-black bg-opacity-70" aria-hidden="true"></div>

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 relative">
            <Dialog.Title className="text-xl font-bold text-center text-teal-800">Page Under Construction</Dialog.Title>
            <div className="flex justify-center py-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-12 h-12 text-teal-500 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  className="opacity-25"
                />
                <path
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291a7.963 7.963 0 001.387 1.43l2.83-2.83a5 5 0 01-.684-1.59H6v2.99z"
                  className="opacity-75"
                />
              </svg>
            </div>
            <p className="text-center text-gray-600">
              We&apos;re working  on this page, and it will be available soon! Thank you for your patience and eagerness to explore.
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setIsOpen(false)}
                className="bg-teal-100 text-teal-600 px-4 py-2 rounded-full hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}
