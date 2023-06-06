import React, { useState } from 'react';

function SignupPage() {
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [password, setPassword] = useState('');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  let message = '';
  if (selectedLanguage === 'English') {
    message = 'Hello';
  } else if (selectedLanguage === 'German') {
    message = 'HALLO';
  } else {
    message = 'Grow up man and select a valid language ';
  }

  let passwordMessage = '';
  if (password.length === 0) {
    passwordMessage = 'Please enter a password.';
  } else if (password.length < 6) {
    passwordMessage = 'Password must be at least 6 characters long.';
  } else {
    passwordMessage = 'Password length is sufficient.';
  }

  return (
    <div>
      <input type="text" placeholder="Email" />
      <br></br>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <br></br>
      {passwordMessage}
      <br></br>
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="">Select an option</option>
        <option value="English">English</option>
        <option value="German">German</option>
        <option value="Chaos">Chaos</option>
      </select>
      <br></br>
      {message}
    </div>
  );
}

export default SignupPage;
