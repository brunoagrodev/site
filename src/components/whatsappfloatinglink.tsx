'use client';

import { IoIosArrowUp } from 'react-icons/io';

export default function WhatsappFloatingLink() {
  return (
    <div className="fixed bottom-12 right-12 z-10 flex flex-col items-center gap-y-4">
      <button
        className="rounded-full bg-[#243C60] p-3 text-white shadow-md"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <IoIosArrowUp className="h-10 w-10 md:h-14 md:w-14" />
      </button>
    </div>
  );
}