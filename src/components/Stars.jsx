import { useState } from "react";

function Stars({ totalStars, starSize, activeColor, OnChange }) {
    const [rating, setRating] = useState(0);
    const handleClick = (newRating) => {
        setRating(newRating);
        if (onChange) {
            OnChange(newRating);
        }
    };

    const starStyles = {
        fontSize: `${starSize}px`,
        color: '#ddd',
        cursor: 'pointer',
        transition: 'color 200ms'
    };

    const activeStyles = {
        color: activeColor,
    };

    const stars = [];
    for (let i = 1; i <= totalStars; i++) {
        const starStyle = rating >= i ? { ...starStyles, ...activeStyles } : starStyles;
        stars.push(
            <span key={i} style={starStyle} onClick={() => handleClick(i)}>&#9733;</span>
        );
    }

    return (
        <div>
            {stars}
        </div>
    );
}

export default Stars;
