import React, { useState } from 'react';

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? props.images.length - 1 : prevIndex - 1));
  };

  const goToNextImage = () => {
    setCurrentIndex(currentIndex => (currentIndex + 1));
  };

  return (
    <div>
      <h1>Carousel</h1>
      <div>
        <button onClick={goToPreviousImage}>Previous</button>
        <img src={props.images[currentIndex]} alt="Carousel Image" />
        <button onClick={goToNextImage}>Next</button>
      </div>
    </div>
  );
}

export default Carousel;
