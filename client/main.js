// Any JS in here is automatically ran

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';

// use class based components when dealing with data
// when using these add them to the react import statement
// for static components use const
class App extends Component {
  // props are send down to child components main>image_list>image_detail>image_score
  // constructor is a method that is automatically called when a react component is created
  constructor(props) {
    // some admin boilerplate
    super(props);

    // inits state where the images can be stored
    this.state = { images: [] };
  }

  // called when the component is about to render on screen
  // making it a fantastic place to load data!
  componentWillMount() {
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
    // the first time render is called the ajax request hasnt returned the images
    // when the ajax request returns the images the state is set and the render method will be called again
    // this time the images are ready
      .then(response => this.setState({ images: response.data.data }));
    // NEVER DO THIS-
    // this.state.images = [ {}, {} ];
    // instead always use setState
  }

  // when ImageList gets access to props it is always an array because it defined earlier as an array
  render() {
    return (
      <div>
        <ImageList images={this.state.images}/>
      </div>
    );
  }
};

// When meteor starts - important as it occurs after the DOM has loaded
// Render this component to the screen
// Pass in two arguments
// Argument 1 What to render - wrap the component in < /> to create an instance of it
// Argument 2 Where to render it - html element with the class container
Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
