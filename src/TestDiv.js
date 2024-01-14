import React from 'react';

const MyComponent = ({ shouldHide }) => {
  if (shouldHide) {
    return null;
  }

  return (
    <div>
      <p>This code is visible</p>
    </div>
  );
};

export default MyComponent;
