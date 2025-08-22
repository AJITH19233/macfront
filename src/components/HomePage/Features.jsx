import { useRef, useState } from 'react';

// Helper component for the tilt effect
const BentoTilt = ({ children, className }) => {
  const tiltRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [tiltPosition, setTiltPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    if (!tiltRef.current) return;
    const { x, y, width, height } = tiltRef.current.getBoundingClientRect();
    const rotateX = -(event.clientY - (y + height / 2)) / 25;
    const rotateY = (event.clientX - (x + width / 2)) / 25;
    setTiltPosition({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => {
    setIsHovering(false);
    setTiltPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={tiltRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`bento-tilt relative ${className} transition-transform duration-300 ease-out`}
      style={{
        transform: isHovering
          ? `perspective(1000px) rotateX(${tiltPosition.x}deg) rotateY(${tiltPosition.y}deg)`
          : 'none',
      }}
    >
      {children}
    </div>
  );
};

// BentoCard component with a hover effect for the button
const BentoCard = ({ src, title, description, RegisterEvent }) => {
  const hoverButtonRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (hoverButtonRef.current) {
      const { x, y } = hoverButtonRef.current.getBoundingClientRect();
      setCursorPosition({ x: e.clientX - x, y: e.clientY - y });
    }
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  // SVG for the location arrow icon, replacing react-icons
  const LocationArrowSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="relative z-20 text-white"
    >
      <path d="M12 2L2 22l10-4 10 4L12 2z" />
    </svg>
  );

  return (
    <div className="relative size-full rounded-2xl">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          className="absolute left-0 top-0 size-full rounded-2xl object-cover object-center"
        />
      )}
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title text-2xl md:text-3xl lg:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-64 text-sm md:text-base">
              {description}
            </p>
          )}
        </div>

        {RegisterEvent && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full border border-white/20 bg-black px-5 py-2 text-xs uppercase text-white/20 transition-colors hover:text-white"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px transition-opacity duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <LocationArrowSVG />
            <p className="relative z-20">View Details</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main Features component, updated for responsiveness and to fix the layout gap
const Features = () => (
  <section className="bg-black pb-20 pt-10 md:pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-16 md:py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>

      <BentoTilt className="relative mb-7 h-96 w-full overflow-hidden rounded-2xl border border-white/20 md:h-[65vh]">
        <BentoCard
          src="https://placehold.co/1920x1080/000/fff?text=Video+Placeholder+1"
          title={
            <>
              E<b>V</b>ENT 1
            </>
          }
          description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          RegisterEvent
        />
      </BentoTilt>

      {/* Main grid container, now responsive and reorganized to fix the gap */}
      <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2">
        <BentoTilt className="relative h-96 overflow-hidden rounded-2xl border border-white/20 md:h-[calc(1920px/2.5)]">
          <BentoCard
            src="https://placehold.co/1920x1080/000/fff?text=Video+Placeholder+2"
            title={
              <>
                E<b>V</b>ENT 2
              </>
            }
            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
            RegisterEvent
          />
        </BentoTilt>
        
        <div className="grid grid-cols-1 gap-7">
          <BentoTilt className="relative h-93 overflow-hidden rounded-2xl border border-white/20">
            <BentoCard
              src="https://placehold.co/1920x1080/000/fff?text=Video+Placeholder+3"
              title={
                <>
                  E<b>V</b>ENT 3
                </>
              }
              description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              RegisterEvent
            />
          </BentoTilt>

          <BentoTilt className="relative h-93 overflow-hidden rounded-2xl border border-white/20">
            <BentoCard
              src="https://placehold.co/1920x1080/000/fff?text=Video+Placeholder+4"
              title={
                <>
                  E<b>V</b>ENT 4
                </>
              }
              description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              RegisterEvent
            />
          </BentoTilt>
        </div>

        <BentoTilt className="relative h-96 overflow-hidden rounded-2xl border border-white/20">
          <BentoCard
            src="https://placehold.co/1920x1080/000/fff?text=Video+Placeholder+5"
            title={
              <>
                FOR <b>MORE </b>EVENTS
              </>
            }
            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
            RegisterEvent
          />
        </BentoTilt>

        
        <BentoTilt className="relative h-96 overflow-hidden rounded-2xl border border-white/20">
          <video
            src="/public/videos/cardvideo.mp4"
            loop
            muted
            autoPlay
            className="size-full rounded-2xl object-cover object-center"
          />
        </BentoTilt>

      </div>
    </div>
  </section>
);

// Main App component
export default function App() {
  return (
    <div className="font-sans antialiased bg-black text-white">
      <Features />
    </div>
  );
}
