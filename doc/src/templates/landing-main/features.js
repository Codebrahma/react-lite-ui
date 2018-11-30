import React, { Component } from 'react'
import toolsImage from '../../images/tools.svg';
import paintBoard from '../../images/paint-board-and-brush.svg';
import chemistry from '../../images/chemistry.svg';
import codeImage from '../../images/code-image.svg';
import quill from '../../images/quill-drawing-a-line.svg';

class FeaturesSection extends Component {
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <img src={toolsImage} alt="easily-customizable" />
            <p>Easily Customizable by SASS</p>
          </div>
          <div className="col">
            <img src={paintBoard} alt="easily-themeable" />
            <p>Easily Themable</p>
          </div>
          <div className="col">
            <img src={chemistry} alt="well-tested" />
            <p>Well Tested Code</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src={codeImage} alt="components" />
            <h2>30+</h2>
            <p>components </p>
          </div>
          <div className="col">
            <img src={quill} alt="lite-weight" />
            <p>Extremely Lite</p>
          </div>
        </div>
      </>
    )
  }
}


export default FeaturesSection;
