import React, { useState } from 'react';
import Onboard from './containers/OnboardScreen/Onboard';
//import CameraGallery from './CameraGallery';
import Navigation from './navigation/Navigation';

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
        <Navigation />
      )}
    </>
  );
};

export default App;
