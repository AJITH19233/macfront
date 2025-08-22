import { useEffect, useRef, useState } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline';

// Static media data to display, now featuring a 10-second video for all items
const media = [
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-images-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
  { type: "image", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", title: "Sintel", desc: "A short, beautiful fantasy film following a young girl's quest to find a baby dragon." },
];

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

// A component for a single, horizontally-moving media row
const MediaRow = ({ title, items, onItemClick, isModalOpen, speed = 1.5 }) => {
  const reelRef = useRef(null);
  const positionRef = useRef(0);
  const userScrollingRef = useRef(false);
  const scrollTimeout = useRef(null);
  const animationFrameId = useRef(null);
  
  // Create an infinite version of the items for seamless looping
  const infiniteItems = [...items, ...items];

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;

    const animate = () => {
      // Don't auto-scroll if the modal is open or the user is scrolling manually
      if (!userScrollingRef.current && !isModalOpen) {
        positionRef.current += speed;
        if (positionRef.current >= reel.scrollWidth / 2) {
          positionRef.current = 0;
        }
        reel.style.transform = `translateX(${-positionRef.current}px)`;
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animate();

    const onWheel = (e) => {
      // Check for horizontal scroll only
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        userScrollingRef.current = true;
        clearTimeout(scrollTimeout.current);

        positionRef.current += e.deltaX;
        if (positionRef.current < 0) {
          positionRef.current = reel.scrollWidth / 2 + positionRef.current;
        }
        if (positionRef.current >= reel.scrollWidth / 2) {
          positionRef.current -= reel.scrollWidth / 2;
        }

        reel.style.transform = `translateX(${-positionRef.current}px)`;

        scrollTimeout.current = setTimeout(() => {
          userScrollingRef.current = false;
        }, 200);
      }
    };

    reel.parentElement.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      reel.parentElement.removeEventListener("wheel", onWheel);
      cancelAnimationFrame(animationFrameId.current);
      clearTimeout(scrollTimeout.current);
    };
  }, [isModalOpen, speed]);

  return (
    <div className="mb-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <div className="flex overflow-hidden relative rounded-lg">
          <div
            ref={reelRef}
            className="flex gap-4 sm:gap-6 md:gap-8 items-center transition-transform duration-100 ease-out will-change-transform"
          >
            {infiniteItems.map((item, i) => (
              <div
                key={i}
                onClick={() => onItemClick(item)}
                className="flex-shrink-0 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-lg overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white"
              >
                <div className="relative w-full h-full">
                  {item.type === "image" ? (
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = 'https://placehold.co/500x750/110f0a/ffffff?text=Image+Not+Found';
                        e.target.onerror = null;
                      }}
                    />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover rounded-lg"
                      onError={(e) => {
                        e.target.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
                        e.target.onerror = null;
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
                    <h3 className="text-white text-sm sm:text-lg font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App component
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-950 to-black min-h-screen font-sans text-gray-100 antialiased relative p-4 md:p-10">
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
        `}
      </style>
      
      <div className="py-12 md:py-24">
        <h1 className="text-3xl md:text-5xl font-bold mb-2 text-center md:text-left">Media for You</h1>
        <p className="text-lg text-gray-400 mb-8 text-center md:text-left">
          Explore a selection of our top-rated videos, curated just for you.
        </p>
        
        {/* Render three separate MediaRows */}
        <MediaRow
          title="Trending Now"
          items={media}
          onItemClick={handleItemClick}
          isModalOpen={isModalOpen}
        />
        <MediaRow
          title="Recently Added"
          items={shuffleArray(media)} // Shuffle to show different order
          onItemClick={handleItemClick}
          isModalOpen={isModalOpen}
          speed={1.8} // A slightly different speed for variety
        />
        <MediaRow
          title="Your Top Picks"
          items={shuffleArray(media)}
          onItemClick={handleItemClick}
          isModalOpen={isModalOpen}
        />
      </div>
      
      {/* Modal View */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-[fadeIn_0.3s_ease-out]">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl">
            {/* Close button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 z-50 p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
              aria-label="Close"
            >
              <XMarkIcon className="h-6 w-6 text-white" />
            </button>
            
            {/* Media content */}
            <div className="w-full h-full">
              {selectedItem.type === "image" ? (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded-t-xl"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x600/110f0a/ffffff?text=Image+Not+Found';
                    e.target.onerror = null;
                  }}
                />
              ) : (
                <video
                  src={selectedItem.src}
                  controls
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-auto max-h-[60vh] object-contain rounded-t-xl"
                  onError={(e) => {
                    e.target.src = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4';
                    e.target.onerror = null;
                  }}
                />
              )}
            </div>
            
            {/* Details section */}
            <div className="p-6 md:p-8 text-white">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">{selectedItem.title}</h2>
              <p className="text-sm md:text-base text-gray-400">{selectedItem.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
