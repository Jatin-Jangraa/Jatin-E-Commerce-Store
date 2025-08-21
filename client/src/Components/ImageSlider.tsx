import  { useState, useRef, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { motion } from 'framer-motion';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

interface item {
    id:number,
    image:string,
}

interface img {
    slides :Array<item>
}

const AUTO_PLAY_DURATION = 5000;

const ImageSlider = ({slides}:img) => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<number | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrent(s.track.details.rel);
    },
  });

  // Autoplay
  useEffect(() => {
    if (!slider) return;
    timeoutRef.current = setInterval(() => {
      slider.current?.next();
    }, AUTO_PLAY_DURATION);

    return () => clearInterval(timeoutRef.current as number);
  }, [slider]);

  return (
    <div className="relative w-[98%]   my-3 max-w-full mx-auto">
      {/* Slide container */}
      <div ref={sliderRef} className="keen-slider overflow-hidden rounded-md">
        {slides.map((slide) => (
          <motion.div
            key={slide.id}
            className="keen-slider__slide"
            initial={{ opacity: 0.7 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={slide.image}
              alt={`Slide ${slide.id}`}
              className="w-full h-38 lg:h-50 object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() => slider.current?.prev()}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50  hover:bg-black/70 p-2 rounded-full text-white z-10"
      >
        <FaAngleLeft/>
      </button>
      <button
        onClick={() => slider.current?.next()}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white z-10"
      >
        <FaAngleRight/>
      </button>

      {/* Dots with progress */}
      <div className="absolute bottom-[-20px] w-full flex justify-center gap-2">
        {slides.map((_, index) => (
          <div key={index} className="relative w-5 h-1 bg-neutral-400 overflow-hidden rounded-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: current === index ? '100%' : '0%',
              }}
              transition={{
                duration: AUTO_PLAY_DURATION / 1000,
                ease: 'linear',
              }}
              className="absolute top-0 left-0 h-full bg-black/50"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;