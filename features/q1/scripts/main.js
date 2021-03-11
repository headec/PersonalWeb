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
      let cmVar = $('#cm').val();
      let result = cmVar*0.39 + " in";
      let title = $('#resultHere');
      title.text(result);
    });
    // always call your code through ready to ensure the DOM is fully loaded

});
