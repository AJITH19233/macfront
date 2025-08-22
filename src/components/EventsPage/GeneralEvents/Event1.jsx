import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Event1() {
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
    eventName: "TEMPLE QUEST",
    registrationFee: "₹500",
    prizeAmount: "₹8000",
    eventDescriptionHeading: "EVENT DETAILS",
    eventDescription: "TEMPLE QUEST is a thrilling treasure hunt event designed to test your wit, teamwork, and problem-solving skills. Navigate through a series of challenging clues to uncover the ultimate prize. Get ready for an adventure that will push your limits!",
    guidelines: "Entry is open to all UG and PG students.\nA team should consist of only 4 members.\nTeam should report at the venue 20 minutes before commencement of event. All the team members must be present at the checkpoint to advance to the next level. No additional time will be provided.\nTeams are prohibited from using mobile phones, electronic devices, or the internet unless coordinators instructed otherwise.\nDifferent rounds are conducted at different locations. Participants are advised not to use any sort of vehicle during any round, Participants are required to travel on foot.\nPlease refrain from damaging college and public property during the Treasure Hunt event.\nParticipants with health concerns are strongly advised not to take part, as the treasure hunt involves a variety of physically and mentally demanding tasks.\nThe college shall not be held responsible for any injury, loss, or mishap occurring due to a participant’s negligence or unsafe conduct during the hunt.\nViolation of the rules of the event by any member will lead to the disqualification of the entire team.\nDo not open the clues without the permission of event coordinators.\nThe decision of the event heads will be considered final under all circumstances.\nAt any point of rounds/time the committee has the full rights to add/modify/deletion of rounds.",
    date: "26-09-2025",
    venue: "Exam Hall",
    mediaType: "video",
    imagePlaceholder: "/public/img/eve1.jpg",
    videoPlaceholder: "/public/videos/hero-4.mp4",
  };

  // Split strings by newline characters for proper formatting
  const formattedGuidelines = eventData.guidelines.split('\n');

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
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 uppercase">
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
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 uppercase">GUIDELINES</h2>
            <ul className="list-disc list-inside text-gray-300 leading-relaxed font-sans text-base space-y-4 max-w-xl mx-auto animate-fade-in">
              {formattedGuidelines.map((item, index) => (
                item.trim() && (
                  <li key={index} className="transition-transform duration-300 hover:scale-[1.02] hover:text-white">
                    {item.trim()}
                  </li>
                )
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

export default Event1;