
import Image from 'next/image'


export const Card = ({ image, title, description, showArrow = false }) => {
  return (
    <div className="relative lg:w-101.5 w-72 h-90 lg:h-130.5 overflow-hidden cursor-pointer group">

      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 scale-100 group-hover:scale-110"
      />

      {/* Top-left triangle */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-transform duration-700 ease-in-out translate-x-0 translate-y-0 group-hover:-translate-x-full group-hover:-translate-y-full bg-[#c2bcb321]"
        style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
      />

      {/* Bottom-right triangle */}
      <div
        className="absolute inset-0 z-10 pointer-events-none transition-transform duration-700 ease-in-out translate-x-0 translate-y-0 group-hover:translate-x-full group-hover:translate-y-full bg-[#c2bcb321]"
        style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }}
      />

      {/* Arrow Button */}
      {showArrow && (
        <div className="absolute top-4 right-4 z-30 group/arrow w-15 h-15 rounded-full flex items-center justify-center bg-[#1a6b7c] hover:bg-[#1a1a1a] transition-colors duration-300">

          {/* Single arrow (↗  →) */}
          <svg
            className="w-7 h-10 text-white transition-transform duration-700 ease-in-out -rotate-45 group-hover/arrow:rotate-0"
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
          </svg>

        </div>
      )}

      {/* Text Overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 z-20 lg:px-9 px-6 py-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)',
        }}
      >
        <p className="text-white font-bold text-[20px]  mb-1.5 ">
          {title}
        </p>
        <p className="text-white text-base leading-relaxed m-0 ">
          {description}
        </p>
      </div>

    </div>
  )
}