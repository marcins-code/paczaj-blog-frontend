import React, { useEffect } from 'react';
// import MainTemplate from '../../templates/MainTemplate';
// import BlogCard from '../../components/organisms/BlogCard/BlogCard';

const Homepage = () => {
  // @ts-ignore

  // const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <h3>Home</h3>
  );
};

export default Homepage;
