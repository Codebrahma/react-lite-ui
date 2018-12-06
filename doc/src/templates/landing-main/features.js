import React from 'react';
import toolsImage from '../../images/tools.svg';
import paintBoard from '../../images/paint-board-and-brush.svg';
import chemistry from '../../images/chemistry.svg';
import quill from '../../images/quill-drawing-a-line.svg';

const FeaturesSection = () => (
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
    <div className="col">
      <img src={quill} alt="lite-weight" />
      <p>Extremely Lite</p>
    </div>
  </div >
);


export default FeaturesSection;
