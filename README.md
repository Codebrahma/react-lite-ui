<h1 align="center">
  <br>
  <a href="https://react-lite-ui.netlify.com/"><img src="https://raw.githubusercontent.com/Codebrahma/react-lite-ui/development/.github/images/logo.png" alt="React Lite UI" width="200"></a>
  <br>
  React Lite UI
  <br>
</h1>

<h4 align="center">A set of light weight React Components, which are easily customizable and can be bootstrapped in your project.</h4>

<p align="center">
  <a href="https://travis-ci.org/Codebrahma/react-lite-ui">
    <img src="https://img.shields.io/travis/Codebrahma/react-lite-ui.svg"
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
  <a href="#key-features">Key Features</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage-">Usage</a> •
  <a href="https://react-lite-ui.netlify.com/documentation">Documentation</a>
</p>

##

### Key Features:

Any DOM element can be customized through SASS.

You can import indiviual components which doesn't affect the bundle size of your app.

Clean Design with minimal implementation reducing the code that is shipped to your app with pleasent UI.

##

### Installation: 

```
npm install --save react-lite-ui
```

##

### Usage :

In your `App.js` : 

```
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

