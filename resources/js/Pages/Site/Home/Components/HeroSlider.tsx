
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gsap } from 'gsap';
import BlockProps from "@/Interfaces/Site/BlockProps";

const HeroSlider: React.FC<{slides: BlockProps []}> = ({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
    const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
    const fileURL = `${import.meta.env.VITE_APP_URL}/file/blocks`;

    // const slides = [
    //     {
    //         title: "Excellence in Construction",
    //         subtitle: "Building Tomorrow's Infrastructure Today",
    //         description: "D S H delivers world-class construction solutions with unwavering commitment to quality and innovation.",
    //         image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    //     },
    //     {
    //         title: "Innovative Engineering Solutions",
    //         subtitle: "Precision • Quality • Reliability",
    //         description: "Our expert team combines cutting-edge technology with proven methodologies to deliver exceptional results.",
    //         image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    //     },
    //     {
    //         title: "Your Trusted Partner",
    //         subtitle: "25+ Years of Industry Leadership",
    //         description: "From concept to completion, we transform visions into reality with unmatched expertise and dedication.",
    //         image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
    //     }
    // ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        // Animate slide transition
        slideRefs.current.forEach((slide, index) => {
            if (slide) {
                gsap.to(slide, {
                    opacity: index === currentSlide ? 1 : 0,
                    duration: 1,
                    ease: "power2.inOut"
                });
            }
        });

        // Animate content
        const currentContent = contentRefs.current[currentSlide];
        if (currentContent) {
            const tl = gsap.timeline();
            const elements = currentContent.querySelectorAll('h1, h2, p, button');

            tl.fromTo(elements,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power2.out",
                    delay: 0.3
                }
            );
        }
    }, [currentSlide]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative h-[900px] overflow-hidden">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    ref={(el) => (slideRefs.current[index] = el)}
                    className="absolute inset-0 opacity-0"
                >
                    <div
                        className="h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${fileURL}/${slide.images[0].url})` }}
                    >
                        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                        <div className="relative h-full flex items-center justify-center">
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className="text-center text-white max-w-4xl px-4"
                            >
                                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                                    {slide.title}
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-light mb-6" dangerouslySetInnerHTML={{ __html: slide.brief }} >
                                    {/*{slide.brief}*/}
                                </h2>
                                <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: slide.description }} >
                                    {/*{slide.description}*/}
                                </p>
                                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
            >
                <ChevronRight className="h-6 w-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white' : 'bg-white/50'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
