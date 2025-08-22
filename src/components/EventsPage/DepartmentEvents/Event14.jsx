import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Event14() {
  const navigate = useNavigate();

  // New useEffect hook to scroll to the top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = () => {
    // Corrected navigation: removes the { replace: true } option
    // to push the new page onto the history stack.
    navigate('/signin');
  };

  const eventData = {
    eventName: "SAVALA GIRIGIRI",
    registrationFee: "₹350",
    prizeAmount: "₹5,000",
    eventDescriptionHeading: "Event Details:",
    eventDescription: "Vegetable carving is the artistic practice of sculpting vegetables into intricate designs and shapes, often used for decoration in culinary presentations. This technique can transform ordinary vegetables into stunning centre pieces, showcasing creativity and skill. Vegetable carving combines artistry with food, enhancing the visual appeal of dishes while also celebrating the beauty of fresh produce.",
    guidelines: [
      "Entry is open for both UG and PG students. No professional experience is required.",
      "All contestants are required to produce one sculpture that is made entirely of fruits and/or vegetables. No flowers or any other decorative items are permitted. Only sculptures made from fruits and vegetables should be used.",
      "Max Participants per group: 2",
      "The contestant will have one hour to complete the piece for judging.",
      "All pieces are to be made of entirely edible items. No plastic materials are allowed for the decoration.",
      "Extra emphasis will be placed on the use of the natural shapes and colours of the fruit/vegetables and how they are used to support and enhance each other.",
      "All tools are acceptable, including hand tools (chisels, knives, saws, drills, angle cutters) and power tools (power drills, squares, levels).",
      "All contestants should bring their own tools.",
      "Participants should not take the help of others to complete the task.",
      "Participants should report 15 minutes prior to the start of the event.",
      "No pre-preparation of vegetables or fruits before competition is allowed.",
      "Registration fee will be 100 Rs per individual.",
      "There will be three stages in the event:",
      "Stage 1: Carving with limited resources.",
      "    - Carve a model with the limited number of vegetables or fruits given to you within the time limit. Time limit: 30 min",
      "Stage 2: Freestyle carving.",
      "    - Carve a model by your own style within the listed fruits or vegetables. Time limit: 30 min",
      "Stage 3: Recreate.",
      "    - Model which will be provided at that time. The Participant has to create something similar to the model within the time limit. Time limit: 1 hr",
    ],
    date: "26/09/2025",
    venue: "B.Sc. Food Technology class ",
    mediaType: "video",
    imagePlaceholder: "/public/img/eve1.jpg",
    videoPlaceholder: "/public/videos/hero-4.mp4",
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-neutral-950 text-gray-200 font-sans">
      <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-12 space-y-12 sm:space-y-16 animate-fade-in-up relative z-10 pt-16">
        
        {/* Background */}
        <div className="fixed inset-0 z-0 bg-neutral-950">
          <div 
            className="absolute inset-0"
            style={{
              background: 'none',
            }}
          ></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 space-y-12 sm:space-y-16">
          
          {/* Event Details Section */}
          <div className="text-left space-y-6 sm:space-y-8">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight uppercase">
              {eventData.eventName}
            </h1>
            {/* Registration & Prize Section */}
            <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-12">
              {/* Registration Fee */}
              <div className="flex flex-col items-start space-y-1">
                <p className="text-lg sm:text-xl font-semibold text-gray-400">
                  Registration Fee
                </p>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-800 animate-pulse">
                  {eventData.registrationFee}
                </span>
              </div>

              {/* Prize Amount */}
              <div className="flex flex-col items-start space-y-1">
                <p className="text-lg sm:text-xl font-semibold text-gray-400">
                  Prize Amount
                </p>
                <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500 animate-pulse">
                  {eventData.prizeAmount}
                </span>
              </div>
            </div>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-700/50 my-8 sm:my-12"></div>

          {/* Event Description Section */}
          <div className="w-full max-w-4xl mx-auto text-justify space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase text-left">
              {eventData.eventDescriptionHeading}
            </h2>
            <div className="flex flex-col sm:flex-row justify-between text-gray-400 text-sm sm:text-base">
              <span className="font-semibold">Date: {eventData.date}</span>
              <span className="font-semibold">Venue: {eventData.venue}</span>
            </div>
            {/* Image/Video Placeholder */}
            <div className="w-full h-auto overflow-hidden shadow-lg">
              {eventData.mediaType === "video" ? (
                <video 
                  src={eventData.videoPlaceholder} 
                  className="w-full h-auto object-cover" 
                  loop
                  muted
                  autoPlay
                />
              ) : (
                <img 
                  src={eventData.imagePlaceholder}
                  alt="Event Description"
                  className="w-full h-auto object-cover"
                />
              )}
            </div>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed font-sans animate-fade-in text-justify">
              {eventData.eventDescription}
            </p>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-700/50 my-8 sm:my-12"></div>

          {/* Guidelines Section */}
          <div className="w-full max-w-4xl mx-auto text-justify">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 uppercase text-left">GUIDELINES</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed font-sans text-base space-y-4 max-w-xl mx-auto animate-fade-in text-left">
              {eventData.guidelines.map((item, index) => (
                <li key={index} className="transition-transform duration-300 hover:scale-[1.02] hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-700/50 my-8 sm:my-12"></div>

          {/* Call to Action Button */}
          <div className="text-left mt-12">
            <button
              className="px-6 py-2 font-bold text-sm rounded-full text-white bg-gradient-to-r from-red-600 to-red-800 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleRegister}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event14;