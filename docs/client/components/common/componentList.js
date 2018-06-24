import Card from '../../../../src/card';
import CardReadme from '../../../../src/card/readMe.md';
import Button from '../../../../src/button';
import ButtonReadme from '../../../../src/button/readMe.md';

import {
  CardDefaultCode,
  ButtonDefaultCode,
} from './DefaultCode';

export const componentList = [
  {
    name: 'Card',
    docs: CardReadme,
    component: Card,
    defaultCode: CardDefaultCode,
  },  
];
