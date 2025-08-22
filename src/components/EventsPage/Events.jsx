import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// BentoTilt component (no changes needed)
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

// BentoCard component: Now accepts a 'to' prop for the Link.
const BentoCard = ({ src, title, description, to, winPrice }) => {
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

  // SVG for the location arrow icon
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

        <div className="flex flex-col items-start gap-3">
          {/* The Link component for navigation */}
          {to && (
            <Link to={to}>
              <div
                ref={hoverButtonRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full border border-white/20 bg-black px-5 py-2 text-xs uppercase text-white/20 transition-colors hover:text-white"
              >
                <div
                  className="pointer-events-none absolute -inset-px transition-opacity duration-300"
                  style={{
                    opacity: hoverOpacity,
                    background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                  }}
                />
                <LocationArrowSVG />
                <p className="relative z-20">Event Details</p>
              </div>
            </Link>
          )}

          {winPrice && (
            <div className="flex items-center gap-2 px-3 py-1 text-xs font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-600">WIN: {winPrice} Gold</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Events component: The main container.
const Events = () => {
  // Array of event data
  const eventsData = [
    {
      src: "/ima",
      title: "TEMPLE QUEST",
      description: "A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure.",
      winPrice: "1,000",
      to: "/templequest"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+2",
      title: "LELAM",
      description: "An anime and gaming-inspired NFT collection - the IP primed for expansion.",
      winPrice: "500",
      to: "/lelam"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+3",
      title: "CHROMA",
      description: "A gamified social hub, adding a new dimension of play to social interaction for Web3 communities.",
      winPrice: "200",
      to: "/chroma"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+4",
      title: "LIGHT,CAMERA,ACTION",
      description: "A cross-world AI Agent - elevating your gameplay to be more fun and productive.",
      winPrice: "2,500",
      to: "/light-camera-action"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+5",
      title: "RETRO SNAP",
      description: "A unique cross-platform adventure, blending classic RPG elements with modern web technologies.",
      winPrice: "150",
      to: "/retro-snap"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+6",
      title: "SHAOLIN KICK-OFF",
      description: "Discover a new world of digital art and collectibles with our exclusive NFT drop event.",
      winPrice: "500",
      to: "/shaolin-kick-off"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+7",
      title: "CINESPIN",
      description: "Join the community-driven hackathon and build the future of decentralized applications.",
      winPrice: "10,000",
      to: "/cinespin"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+8",
      title: "RETRO RHYTHM SHOW",
      description: "Experience the next-gen gaming with a live tournament and exclusive prizes.",
      winPrice: "1,500",
      to: "/retro-rhythm-show"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+9",
      title: "CLASSIC CLUES QUEST",
      description: "A virtual reality concert featuring a renowned artist in a spectacular digital setting.",
      winPrice: "100",
      to: "/classic-clues-quest"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+10",
      title: "DRISHYAVUM RUCHIYUM",
      description: "A new era of social interaction, powered by blockchain and AI technology.",
      winPrice: "750",
      to: "/drishyavum-ruchiyum"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+11",
      title: "MR BUTLER",
      description: "Explore the metaverse with a guided tour of the most innovative virtual spaces.",
      winPrice: "500",
      to: "/mr-butler"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+12",
      title: "VINTAGE CUT",
      description: "A masterclass on game development and design from industry veterans.",
      winPrice: "2,000",
      to: "/vintage-cut"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+13",
      title: "KANAMRAYATHU",
      description: "Unveiling a new airdrop event for our most dedicated community members.",
      winPrice: "500",
      to: "/kanamrayathu"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+14",
      title: "SAVALA GIRIGIRI",
      description: "A live Q&A session with the creators behind the Metagame Layer project.",
      winPrice: "100",
      to: "/savala-girigiri"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+15",
      title: "JUDGEMENT DAY",
      description: "Participate in a collaborative storytelling event that will shape the future of our universe.",
      winPrice: "250",
      to: "/judgement-day"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+16",
      title: "THE CODE FATHER",
      description: "A digital art showcase featuring top artists from the global Web3 community.",
      winPrice: "1,200",
      to: "/the-code-father"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+17",
      title: "QUIZCEPTION",
      description: "A virtual reality experience that immerses you in a cyberpunk cityscape.",
      winPrice: "3,000",
      to: "/quizception"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+18",
      title: "CHOICH CHOICH POVAM",
      description: "A grand prize tournament for the top players of our flagship title.",
      winPrice: "5,000",
      to: "/choich-choich-povaa"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+19",
      title: "ENNA ENNOD PARA",
      description: "A design challenge to create new virtual assets for the community.",
      winPrice: "750",
      to: "/enna-ennod-paraa"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+20",
      title: "BRAND FATHER",
      description: "A livestream with game developers, revealing exclusive behind-the-scenes content.",
      winPrice: "50",
      to: "/brand-father"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+21",
      title: "LANES OF LEGACY",
      description: "An AI-driven art exhibition where you can purchase unique, generative NFTs.",
      winPrice: "2,000",
      to: "/lanes-of-legacy"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+22",
      title: "SHOLAY",
      description: "A community-focused event where the top contributors are recognized and rewarded.",
      winPrice: "1,500",
      to: "/sholay"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+23",
      title: "SOCIAL SPARK",
      description: "A series of workshops on how to get started with Web3 gaming and NFTs.",
      winPrice: "100",
      to: "/social-spark"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+24",
      title: "RETRO CIPHER QUEST",
      description: "An exclusive alpha-test event for our upcoming strategic turn-based game.",
      winPrice: "700",
      to: "/retro-cipher-quest"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+25",
      title: "RETRO GRID",
      description: "A collaborative world-building event where the community's ideas will be integrated into the game's lore.",
      winPrice: "3,500",
      to: "/retro-grid"
    },
    {
      src: "https://placehold.co/1920x1080/000/fff?text=Event+26",
      title: "PITCH PERFECT",
      description: "A collaborative world-building event where the community's ideas will be integrated into the game's lore.",
      winPrice: "3,500",
      to: "/pitch-perfect"
    },
  ];

  return (
    <section className="bg-black pb-20 pt-10 font-sans antialiased text-white md:pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-16 md:py-32">
          <p className="text-lg text-blue-50">Into the Metagame Layer</p>
          <p className="max-w-md text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a vibrant
            array of products converge into an interconnected overlay experience
            on your world.
          </p>
        </div>

        <h2 className="bento-title uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8">General Events</h2>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.slice(0, 10).map((event, index) => (
            <BentoTilt
              key={index}
              className="relative h-96 overflow-hidden rounded-2xl border border-white/20"
            >
              <BentoCard
                src={event.src}
                title={event.title}
                description={event.description}
                to={event.to} // Pass the 'to' prop for the specific route
                winPrice={event.winPrice}
              />
            </BentoTilt>
          ))}
        </div>

        <h2 className="bento-title uppercase text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 mt-16">Department-wise Events</h2>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eventsData.slice(10, 26).map((event, index) => (
            <BentoTilt
              key={index + 10}
              className="relative h-96 overflow-hidden rounded-2xl border border-white/20"
            >
              <BentoCard
                src={event.src}
                title={event.title}
                description={event.description}
                to={event.to} // Pass the 'to' prop for the specific route
                winPrice={event.winPrice}
              />
            </BentoTilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;