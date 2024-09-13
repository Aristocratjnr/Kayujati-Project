"use client"
import { Quote } from 'lucide-react';
import { useEffect, useState } from 'react';

const TestimonialsComponent = ({ Testimonials }: any) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % Testimonials.length);
        }, 5000); // Change testimonial every 5 seconds

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [Testimonials.length]);

    return (
        <div className="w-full h-[464px] relative overflow-hidden testimonials flex flex-col items-center justify-center">
            <span className='text-7xl text-[#855C0C] transform flex items-center'>
                {/* <Quote className='transform -rotate-180 fill-[#855C0C] text-6xl font-thin' /> */}
            </span>
            <div className="testimonial-container relative w-full h-full">
                {Testimonials.map((testimonial: any, index: any) => (
                    <div
                        key={index}
                        className={`testimonial absolute w-full h-full flex items-center justify-center transition-opacity duration-500 ease-in-out ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="p-4 text-center w-[70%] md:w-[50%]">
                            <p className="mb-4 text-zinc-200 md:text-2xl">{testimonial.testimonial}</p>
                            <p className="text-sm font-CabinetGrotesk text-zinc-100">{testimonial.user.handle}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="indicators mb-2 absolute">
                {Testimonials.map((_: any, index: any) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={currentIndex === index ? 'active' : ''}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsComponent;