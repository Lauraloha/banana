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


      <div class="child grow"><h1>Banana recipes</h1>
        <p>
Banana bread, banana muffins, banana pudding, or banana cream pie. You can do more with bananas than the old peel-and-eat. Want recipes? We’ve got a bunch!
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




