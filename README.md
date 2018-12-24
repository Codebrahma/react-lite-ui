
<h1 align="center">
  <a href="https://codebrahma.com/react-lite-ui/"><img src="https://raw.githubusercontent.com/Codebrahma/react-lite-ui/development/.github/images/logo.png" alt="React Lite UI" width="150"></a>
  <br/>
  React Lite UI
  <br>
</h1>

<h4 align="center">A set of light weight React Components, which are easily customizable and can be bootstrapped in your project.</h4>

<p align="center">
  <a href="https://travis-ci.org/Codebrahma/react-lite-ui">
    <img src="https://img.shields.io/travis/Codebrahma/react-lite-ui/development.svg"
         alt="TravisCI">
  </a>
  <a href="https://david-dm.org/Codebrahma/react-lite-ui">
      <img src="https://img.shields.io/david/Codebrahma/react-lite-ui.svg" alt="dependencies">
  </a>
  <a href="https://david-dm.org/Codebrahma/react-lite-ui?type=dev">
    <img src="https://img.shields.io/david/dev/Codebrahma/react-lite-ui.svg" alt="dev dependencies">
  </a>
  <a href="https://codecov.io/gh/Codebrahma/react-lite-ui">
    <img src="https://codecov.io/gh/Codebrahma/react-lite-ui/branch/development/graph/badge.svg" alt="Codecov">
  </a>
</p>

<p align="center">
  <a href="#sparkles-key-features">Key Features</a> •
  <a href="#link-installation">Installation</a> •
  <a href="#rocket-usage-">Usage</a> •
  <a href="https://codebrahma.com/react-lite-ui/documentation">Documentation</a> •
  <a href="https://codebrahma.com/react-lite-ui/">Demo</a>
</p>

<p align="center">
<img src="https://raw.githubusercontent.com/Codebrahma/react-lite-ui/development/.github/images/higher-res.gif" >
</p>


### :sparkles: Key Features:

##

* Any DOM element can be customized through a simple SASS file. :tada:

* You can import individual components which doesn't affect the bundle size of your app. :confetti_ball:

* Clean Design with minimal implementation reducing the code that is shipped to your app with pleasant UI. :sunrise_over_mountains:

* Each component is made light-weight - around half the size of components ( and even less! ) from other popular libraries. :muscle:

<br />

### :link: Installation: 

##

```
npm install --save react-lite-ui
```

<br />

### :rocket: Usage :

##

In your `App.js` : 

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-lite-ui';

class App extends React.Component {
      render() {
        const data = [
          "https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?cs=srgb&dl=wood-landscape-sky-371633.jpg&fm=jpg",
          "https://hanslodge.com/images/pTqrL9Rec.jpg",
          "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?cs=srgb&dl=sea-landscape-nature-248797.jpg&fm=jpg"
        ];
        return <Carousel data={data} theme={componentTheme} />;
      }
    }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```

<br />

### :art: Customisation :

##

Let's take our `App.js` file, and add a [Card](https://codebrahma.com/react-lite-ui/documentation?component=card) component to it : 

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-lite-ui';

class App extends React.Component {
      render() {
        return (
          <Card
            header="Am I Cute?"
            footer={
              <Button href="https://github.com/Codebrahma/react-lite-ui" type="primary" bordered>view more</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src="https://placeimg.com/300/300/animals" alt="animals" />
            </div>
          </Card>
        );
      }
    }

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
```
<br />

Create a file named `theme.scss` :

```scss
:local(.card) {
      z-index: 2;
      height: fit-content;
      width: 100%;
      transition: margin 0.2s ease-in-out;
}
    
:local(.cardHeader) {
      color: #0c549c;
      text-align: center;
}
    
:local(.cardFooter) {
      justify-content: center;
      align-self: baseline;
}
```
<br/>

Don't worry if this doesn't make sense to you. For now, we will add these styles and complete wiring up our styles to the card component. 

Now, in our `App.js` file we will pass a `theme` prop to the `Card` component, like this : 

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-lite-ui';
import theme from 'theme.scss';  // Import the styles from theme.scss

class App extends React.Component {
      render() {
        return (
          <Card
            theme={theme}       // Pass the theme as a prop to the card component here.
            header="Am I Cute?"
            footer={
              <Button href="https://github.com/Codebrahma/react-lite-ui" type="primary" bordered>view more</Button>
            }
            elevation="medium"
          >
            <div className="col card-content">
              <img src="https://placeimg.com/300/300/animals" alt="animals" />
            </div>
          </Card>
        );
      }
    }
    
 ...
```
<br />

So, let's take a look at what we did here : 

* We defined our own styles which we wanted to customize for the component using the `card`, `cardHeader` and `cardFooter` classes.

* Then we passed the styles to the component via the `theme` prop which gets applied to the component's structure.

<br />

The styles that you passed are then combined with the default styles of the component to render your customised component!
For more info on how to customise and various props that you can pass to your components, please visit the [Documentation page](https://codebrahma.com/react-lite-ui/documentation).


That's all you need to do! And here's our customised card component :

![screenshot](https://raw.githubusercontent.com/Codebrahma/react-lite-ui/development/.github/images/card-screenshot.png)

Pretty easy, right? Want to try out more components?

Simply visit our [Playground page](https://codebrahma.com/react-lite-ui/playground) to try out the components before using and have fun playing around with them!

### Contributing :

If you want to contribute, please take a look at our [Contribution guidelines]() and raise a PR! We would love contributions!

If you find an issue or have a question, please open an issue [here](https://github.com/Codebrahma/react-lite-ui/issues) and we would love to help you out and keep improving this library! :smile:

Thanks! 

### Contributors :

[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/0)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/0)[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/1)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/1)[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/2)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/2)[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/3)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/3)[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/4)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/4)[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/5)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/5)[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/6)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/6)[![](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/images/7)](https://sourcerer.io/fame/prasanna1211/Codebrahma/react-lite-ui/links/7)