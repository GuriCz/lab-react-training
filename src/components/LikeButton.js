import React from 'react';
import { useState } from 'react';

function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [buttonColor, setButtonColor] = useState('blue');
  const updoot = () => {
    setLikes(likes + 1);
    const colors = ['blue', 'green', 'red', 'yellow', 'purple'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setButtonColor(randomColor);
  };
  return (
    <div>
      <button onClick={updoot} style={{ backgroundColor: buttonColor }}>
        CLICK THIS SHIT MAN COME ON YOU WANT IT
      </button>
      <p>
        You clicked that horrendous button {likes} times. No shame or too much
        time?
      </p>
    </div>
  );
}

export default LikeButton;
