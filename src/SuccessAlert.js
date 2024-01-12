import React, { useState } from 'react';

const SuccessAlert = () => {
  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
  };

  return (
    <div>
      <button onClick={handleShowAlert}>Show Custom Alert</button>

      {showAlert && (
        <div className="custom-alert">
          <p>This is a custom alert message!</p>
          <button onClick={() => setShowAlert(false)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default SuccessAlert;
