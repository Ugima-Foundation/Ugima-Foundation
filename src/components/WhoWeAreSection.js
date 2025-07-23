import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer'; // Make sure you have installed this package

const WhoWeAreSection = () => {

  // A sub-component for animated numbers, defined within the main component
  const AnimatedNumber = ({ targetNumber, duration = 2000, suffix = '' }) => {
    const [currentNumber, setCurrentNumber] = useState(0);
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5,
    });
    const animationFrameRef = useRef(null);
    const startTimeRef = useRef(null);

    useEffect(() => {
      if (inView) {
        startTimeRef.current = null;
        const animate = (timestamp) => {
          if (!startTimeRef.current) startTimeRef.current = timestamp;
          const progress = (timestamp - startTimeRef.current) / duration;

          if (progress < 1) {
            setCurrentNumber(Math.floor(targetNumber * progress));
            animationFrameRef.current = requestAnimationFrame(animate);
          } else {
            setCurrentNumber(targetNumber);
            cancelAnimationFrame(animationFrameRef.current);
          }
        };
        animationFrameRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentNumber(0);
      }

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
      };
    }, [inView, targetNumber, duration]);

    return (
      <div ref={ref}>
        {currentNumber.toLocaleString()}
        {suffix}
      </div>
    );
  };

  return (
    <section className="relative py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-6xl px-4 mx-auto">
        <div className="text-center mb-14">
          <h2 className="relative inline-block mb-3 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Who We Are
            <span className="block mx-auto mt-3 h-1.5 w-20 bg-gradient-to-r from-secondary-500 to-secondary rounded-full"></span>
          </h2>
          <p className="max-w-xl mx-auto mt-5 text-xl font-light text-gray-700">
            Powering sustainable coffee and community empowerment in Kenya.
          </p>
        </div>
        <div className="flex flex-col-reverse gap-10 md:flex-row-reverse md:items-center md:gap-16">
          {/* Text */}
          <div className="flex-1 text-gray-800">
            <p className="mb-8 text-lg font-light leading-loose md:text-xl">
              Ugima Foundation is a Kenyan social enterprise focused on Sustainable Production & Export of Coffee while empowering women and fostering lasting community development. United Nations' Sustainable Development Goals (SDGs) are woven deeply into our mission.
            </p>
            <div className="pt-8 text-center border-t border-gray-200">
              <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                <div>
                  <div className="text-6xl font-extrabold leading-tight text-secondary">
                    <AnimatedNumber targetNumber={25468} />
                  </div>
                  <div className="text-lg font-medium text-gray-700">Clients</div>
                </div>
                <div>
                  <div className="text-6xl font-extrabold leading-tight text-secondary">
                    <AnimatedNumber targetNumber={400785} />
                  </div>
                  <div className="text-lg font-medium text-gray-700">Foundation Achievements</div>
                </div>
                <div>
                  <div className="text-6xl font-extrabold leading-tight text-secondary">
                    <AnimatedNumber targetNumber={15} suffix="yrs" />
                  </div>
                  <div className="text-lg font-medium text-gray-700">Journey Experiences</div>
                </div>
              </div>
              <button className="px-8 py-3 mt-12 font-semibold text-white transition duration-300 shadow-lg bg-secondary hover:bg-secondary focus:ring-2 focus:ring-secondary focus:ring-opacity-50">
                Learn More
              </button>
            </div>
          </div>
          {/* Image side */}
          <div className="flex-shrink-0 w-full md:w-80">
            <div className="overflow-hidden shadow-2xl rounded-3xl">
              <img
                src="/Cafe de Costa Rica.jpeg"
                alt="Coffee Plant"
                className="object-cover w-full h-64 md:h-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;