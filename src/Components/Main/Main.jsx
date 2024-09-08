import React, { useEffect, useState } from 'react';
import Rasm_26 from '../../images/rasm26.png';

const Main = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set your target date here (e.g., New Year's Eve)
  const targetDate = new Date('2024-12-31T00:00:00');

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, [targetDate]);

  return (
    <div className="bg-black py-10">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center px-5 md:px-10">
        <div className="md:w-1/2">
          <p className="text-[#00FF66] font-poppins font-semibold text-sm md:text-base mb-4">
            Categories
          </p>
          <h1 className="text-[#FAFAFA] font-inter font-semibold text-3xl md:text-5xl leading-tight md:leading-snug mb-6">
            Enhance Your Music Experience
          </h1>
          <ul className="flex gap-4 mb-8">
            <li className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <p className="font-poppins font-semibold text-lg text-black">
                {timeLeft.days}
              </p>
              <span className="font-poppins text-xs text-black">Days</span>
            </li>
            <li className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <p className="font-poppins font-semibold text-lg text-black">
                {timeLeft.hours}
              </p>
              <span className="font-poppins text-xs text-black">Hours</span>
            </li>
            <li className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <p className="font-poppins font-semibold text-lg text-black">
                {timeLeft.minutes}
              </p>
              <span className="font-poppins text-xs text-black">Minutes</span>
            </li>
            <li className="flex flex-col items-center justify-center w-16 h-16 bg-white rounded-full">
              <p className="font-poppins font-semibold text-lg text-black">
                {timeLeft.seconds}
              </p>
              <span className="font-poppins text-xs text-black">Seconds</span>
            </li>
          </ul>
          <button className="bg-[#00FF66] hover:bg-[#00CC55] text-[#FAFAFA] font-poppins font-medium text-base py-3 px-6 rounded transition duration-300">
            Buy Now!
          </button>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0 flex justify-center">
          <img
            className="w-full h-auto max-w-sm md:max-w-md lg:max-w-lg"
            src={Rasm_26}
            alt="Music Experience"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;

