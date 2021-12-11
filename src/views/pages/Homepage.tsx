import React, { useEffect } from 'react';

const Homepage = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <h3>Home</h3>
  );
};

export default Homepage;
