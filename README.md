# react-lite-ui

<!-- Badges -->
<!-- npm package verson and downloads info can be included once the package is published -->
<!-- [![npm version](https://badge.fury.io/js/react-lite-ui.svg)](https://badge.fury.io/js/react-lite-ui) -->
<!-- [![npm downloads](https://img.shields.io/npm/dm/react-lite-ui.svg)](https://www.npmjs.com/package/react-lite-ui) -->
[![Dependencies](https://img.shields.io/david/Codebrahma/react-lite-ui.svg)](https://david-dm.org/Codebrahma/react-lite-ui)
[![devDependencies](https://img.shields.io/david/dev/Codebrahma/react-lite-ui.svg)](https://david-dm.org/Codebrahma/react-lite-ui?type=dev)
[![Travis (.org)](https://img.shields.io/travis/Codebrahma/react-lite-ui.svg)](https://travis-ci.org/Codebrahma/react-lite-ui)
[![codecov](https://codecov.io/gh/Codebrahma/react-lite-ui/branch/development/graph/badge.svg)](https://codecov.io/gh/Codebrahma/react-lite-ui)

A set of React Components, easily customizable and can be bootstrapped in your project.

# Key Features:

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

