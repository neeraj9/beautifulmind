//import * as _ from 'lodash';

import { FASTElement } from '@microsoft/fast-element';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
 //   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());