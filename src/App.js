import React, { useState } from 'react';
import Onboard from './Onboard';
//import CameraGallery from './CameraGallery';
import LogInScreen from './containers/LogInScreen/LogInScreen';

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
        <LogInScreen />
      )}
    </>
  );
};

export default App;
