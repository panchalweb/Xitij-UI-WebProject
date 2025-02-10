import React, { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";

export default function Number({ number, time }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once visible
                }
            },
            { threshold: 0.1 } // Trigger when 10% visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            className={`flex justify-center items-center text-4xl font-bold text-gray-800 transition-opacity duration-700 ease-in ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            ref={ref}
        >
            {isVisible && <CountUp duration={time} end={number} />}
        </div>
    );
}
