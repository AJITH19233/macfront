// import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { useState, useEffect } from 'react';



const Contact = () => {

  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-09-28`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        Hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        Minutes: Math.floor((difference / 1000 / 60) % 60),
        Seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  // State to store the calculated time left
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Effect to update the timer every second
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the timer if the component unmounts
    return () => clearTimeout(timer);
  });

  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            MACFIESTA 2025 IN
          </p>

          {/* <AnimatedTitle
            title="The new era of <br /> MACFIESTA </b>2025."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          /> */}
          <div>
      {Object.keys(timeLeft).length > 0 ? (
        <div>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <span key={unit} style={{ margin: '0 20px', fontSize: '2em' }}>
              <strong>{value}</strong> {unit}
            </span>
          ))}
        </div>
      ) : (
        <h2>THE WAIT IS OVER!</h2>
      )}
    </div>

          <Button title="join us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
