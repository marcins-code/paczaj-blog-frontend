import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Page404 } from './views/errors/Page404';
import About from './views/pages/About';
import Homepage from './views/pages/Homepage';
// import Categories from './views/pages/Categories';
// import Series from './views/pages/Series';
// import Contact from './views/pages/Contact';
// import Glossary from './views/pages/Glossary';
// import AdminArticles from './views/admin/AdminArticles';
// import AdminArticleTypes from './views/admin/AdminArticleTypes';
// import AdminGlossary from './views/admin/AdminGlossary';
// import Login from './views/admin/Login';

const App = () => (

  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="about" element={<About />} />
    <Route path="*" element={<Page404 />} />
    {/* <Route path="/categories" exact component={Categories} />
        <Route path="/series" exact component={Series} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/glossary" exact component={Glossary} />
        <Route path="/administration" exact component={Login} />
        <Route path="/administration/articles" exact component={AdminArticles} />
        <Route path="/administration/article-types" exact component={AdminArticleTypes} />
        <Route path="/administration/glossary" exact component={AdminGlossary} /> */}

  </Routes>

);

export default App;
