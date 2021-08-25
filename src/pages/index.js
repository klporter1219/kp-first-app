import React from 'react';
import { Link } from 'gatsby';

const HomePage = () => {

  function onButtonClick() {
    console.log('Hi, Pal :)');
  }

  return (
    <React.Fragment>
      <h1>Home Page</h1>
      <p>Hi</p>
      <button onClick={onButtonClick}>Click Me!</button>
      <a href='/about'>Go to the about page</a>
      <Link to='/about'>Link to about page</Link>
    </React.Fragment>
  );
};

export default HomePage;