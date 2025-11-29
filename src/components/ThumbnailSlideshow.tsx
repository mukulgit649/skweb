import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ThumbnailSlideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Array of thumbnail images
    const thumbnails = [
        "/thumbnail_L cover1.jpg",
        "/thumbnail_L cover2.jpg",
        "/thumbnail_L cover3.jpg",
        "/thumbnail_cover1_page-0002.jpg",
        "/thumbnail_cover2_page-0002.jpg",
        "/thumbnail_cover3_page-0001.jpg",
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % thumbnails.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [isPaused, thumbnails.length]);

    return (
        <div className="w-full py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div
                    className="relative h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl shadow-2xl"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={currentIndex}
                            src={thumbnails[currentIndex]}
                            alt={`Thumbnail ${currentIndex + 1}`}
                            className="absolute inset-0 w-full h-full object-contain bg-gradient-to-br from-background to-primary/5"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                        />
                    </AnimatePresence>

                    {/* Navigation Dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {thumbnails.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                                        ? "bg-primary w-8"
                                        : "bg-white/50 hover:bg-white/80"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Pause indicator */}
                    {isPaused && (
                        <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                            Paused
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ThumbnailSlideshow;
