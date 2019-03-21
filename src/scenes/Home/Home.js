import React from 'react';
/** Import components */

/** Import assets */
import './home.css';

class Home extends React.Component {
  render() {
    /** If not signed in redirect to '/login' page */
    // TODO: If not signed in redirect to '/login' page
    return (
      <div id="home" className="home-container">
        Home Page
      </div>
    );
  }
}

export default Home;
