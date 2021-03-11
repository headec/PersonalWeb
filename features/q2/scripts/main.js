// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

$(document).ready(function() {
    let goButton = $('#go');
    goButton.click(function(event){
      let wp = Math.pow($('#w_p').val(),2);
      let hp = Math.pow($('#h_p').val(),2);
      let di = $('#d_i').val();
      let result = 'PPI = ' + Math.pow((wp+hp),1/2)/3;
      let display = $('#displayHere');
      display.text(result);
    });
    // always call your code through ready to ensure the DOM is fully loaded
});
