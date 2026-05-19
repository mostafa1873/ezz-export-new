import Image from "next/image";

const LOGO_PATH = "/favicon.png";

export default function Loading() {
  return (
    <div className="route-loading-overlay fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 cursor-wait">
      <div className="relative flex items-center justify-center h-32 w-32">
        <div className="absolute inset-0 h-full w-full rounded-full border-4 border-blue-100 opacity-50"></div>

        <div className="absolute inset-0 h-full w-full animate-spin rounded-full border-4 border-blue-600 border-t-transparent drop-shadow-sm"></div>

        <div className="relative h-16 w-16 bg-white rounded-full p-1 shadow-sm flex items-center justify-center z-10">
          <Image
            src={LOGO_PATH}
            alt="شعار الموقع"
            width={48}
            height={48}
            className="object-contain"
            priority
          />
        </div>
      </div>

      <p className="mt-8 text-gray-500 text-sm font-semibold tracking-wider uppercase animate-pulse">
        Loading...
      </p>
    </div>
  );
}