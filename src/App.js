import React, { useState } from 'react';
import Onboard from './Onboard';
import CameraGallery from './CameraGallery';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  };

  return (
    <>
      {showOnboard ? (
        <Onboard handleDone={handleOnboardFinish} />
      ) : (
        <CameraGallery />
      )}
    </>
  );
};

export default App;
