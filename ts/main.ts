/// <reference path="./references.ts" />

import HelloBox from './components/HelloBox'

$(document).ready(() => {
  React.render(React.createElement(HelloBox),
               document.getElementById('container'))
});
