import './index.scss';


import React, { useEffect, useState } from 'react';

const AnimatedJobLetters = ({ letterClass, strArray }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true); // true for typing, false for deleting

    useEffect(() => {
        const interval = setInterval(() => {
            if (isTyping) {
                if (currentIndex < strArray.length) {
                    setCurrentText((prevText) => prevText + strArray[currentIndex]);
                    setCurrentIndex((prevIndex) => prevIndex + 1);
                } else {
                    setIsTyping(false); // Once typing is complete, start deleting
                }
            } else {
                if (currentIndex > 0) {
                    setCurrentText((prevText) => prevText.slice(0, -1));
                    setCurrentIndex((prevIndex) => prevIndex - 1);
                } else {
                    setIsTyping(true); // Once deleting is complete, start typing again
                }
            }
        }, 100); // Adjust speed as needed (100ms here)

        return () => clearInterval(interval);
    }, [currentIndex, isTyping, strArray]);

    return <span className={letterClass}>{currentText}</span>;
};

export default AnimatedJobLetters;
