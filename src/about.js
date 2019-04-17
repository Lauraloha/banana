import React, { Component } from 'react';
import './about.css'
import Gallery from 'react-photo-gallery';

class About extends Component {
    render() {
  return (
      <div>

    <div id="venn" class="parent">
  

      <div class="child grow"><h1>About the site</h1>
        <p>My career in making money has brought many many tosses and turns.
           At first I was a warehouse worker,
           then I became a renovator.
           During the times that I was a warehouse worker and renovator,
        </p>
      </div>


      <div class="child grow"><h1>About fruits</h1>
        <p>Hi there, I'm Terrance.
           I am a front-end web developer in training,
           and with backend development as my next goal.
           I've been learning and practicing web development for about 6 months.
        </p>
      </div>


      <div class="child grow"><h1>About recipes</h1>
        <p>Welcome to my website.
           I display all of my accomplishments here at this website of mine.
           You'll get a demostration of my skills and abilities.
        </p>
      </div>
    </div>
    </div>
      )
}}

export default About;




