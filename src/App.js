import React, { useState } from 'react';
import Onboard from './containers/OnboardScreen';
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
