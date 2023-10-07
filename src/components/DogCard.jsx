import React, { useState } from "react";


const DogCard = ({ dogcard }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const flippedCard = () => {
        setIsFlipped(!isFlipped);
    }
    
    return (
        <div className= {`dogCard ${isFlipped ? 'back' : 'front'}`} onClick= {flippedCard}> 
            {isFlipped ? dogcard.answer : dogcard.question}
        </div>
    )
}

export default DogCard;