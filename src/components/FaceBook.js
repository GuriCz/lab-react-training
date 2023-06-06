import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
    const [selectedCountry, setSelectedCountry] = useState('');
  return (
    <div>
      <nav>
        <button onClick={() => setSelectedCountry('England')}>England</button>
        <button onClick={() => setSelectedCountry('USA')}>USA</button>
        <button onClick={() => setSelectedCountry('Germany')}>GER</button>
        <button onClick={() => setSelectedCountry('Malaysia')}>MAL</button>
        <button onClick={() => setSelectedCountry('Nigeria')}>NIG</button>
        <button onClick={() => setSelectedCountry('Italy')}>ITA</button>
        <button onClick={() => setSelectedCountry('')}>All</button>
      </nav>
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`id-card ${profile.country === selectedCountry ? 'blue-background' : ''}`}
        >
          <div className="picture">
            <img src={profile.img} alt="Profile" />
          </div>

          <div className="data">
            <p>
              <strong>Last Name:</strong> {profile.lastName}
            </p>
            <p>
              <strong>First Name:</strong> {profile.firstName}
            </p>
            <p>
              <strong>Country:</strong> {profile.country}
            </p>
            <p>
              <strong>Type:</strong> {profile.isStudent ? 'Student' : 'Teacher'}

            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;
