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
  let clickFunction = function(event){
    let ans = "";
    let selector = Math.floor((Math.random()*5)+1);
    if(selector==1){
      ans = "Yes";
    }
    else if (selector==2) {
      ans ="No";
    }
    else if(selector==3) {
      ans = "Absolutely!"
    }
    else if(selector==4){
      ans = "Definitely not!"
    }
    else{
      ans = "Maybe."
    }
    let display = $('#result');
    display.hide();
    display.text(ans);
    display.fadeIn('slow');
  }
    goButton.click(clickFunction);
});
