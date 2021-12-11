import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <h3>About</h3>
  );
};

export default About;
