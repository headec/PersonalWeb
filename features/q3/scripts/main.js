// main.js

// 'use strict;' turns on JavaScripts strict mode, which helps catch errors

// $ is the main jQuery function used for calling jQuery functions

// document is a pre-defined JavaScript variable that refers to the entire web
// page

// ready is a jQuery function that is not called until the page's DOM is fully
// loaded and the page is ready --- you should always use it!

'use strict';

$(document).ready(function() {
  /*checkbox*/
    let check = $('#myCheck');
    let text = $('#para');
    let capFunction = function(event){
      if(check.prop('checked')){
        text.css('text-transform', 'uppercase');
      }
      else{
        text.css('text-transform', 'none');
      }
    }
    check.click(capFunction);
  /*checkbox 2*/
  let check2 = $('#myCheck2');
  let bordFunction = function(event){
    if(check2.prop('checked')){
      text.css('border', '1px solid black');
    }
    else{
      text.css('border', 'none');
    }
  }
  check2.click(bordFunction);
  /////////////////////////////////////////////////////////////
  /*radio buttons*/
  let radioButtons = $('input[name="font"]');
  let fontFunction = function(event) {
      let font = $('input[name="font"]:checked').val();
      text.css('font-family', font);
  }
  radioButtons.click(fontFunction);
});
