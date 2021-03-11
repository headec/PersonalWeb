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
    let f_name = document.getElementById('fan-name').value;
    let thing = document.getElementById('thing').value;
    let display = $('#name');
    let display_1 = $('.thing_1');
    display.text(f_name);
    display_1.text(thing);
  });
  /*random function for <famous-person> */
  let personFunction = function(event){
    let ans = "";
    let selector = Math.floor((Math.random()*4)+1);
    if(selector==1){
      ans = "my mother";
    }
    else if (selector==2) {
      ans ="Bill Gates";
    }
    else if(selector==3) {
      ans = "Beyonce"
    }
    else{
      ans = "Jennifer Lawrence’s pool cleaner"
    }
    let display = $('#famous-person');
    display.text(ans);
  }
/*random function for <location> */
  let locationFunction = function(event){
    let ans = "";
    let selector = Math.floor((Math.random()*4)+1);
    if(selector==1){
      ans = "washing machine";
    }
    else if (selector==2) {
      ans ="dashboard";
    }
    else if(selector==3) {
      ans = "lawn mower"
    }
    else{
      ans = "bedside table"
    }
    let display = $('#location');
    display.text(ans);
  }
/*random function for <time> */
  let timeFunction = function(event){
      let ans = "";
      let selector = Math.floor((Math.random()*3)+1);
      if(selector==1){
        ans = "every third Tuesday around 10am";
      }
      else if (selector==2) {
        ans ="once in a blue moon";
      }
      else {
        ans = "whenever I am feeling really hungry"
      }
      let display = $('#time');
      display.text(ans);
  }
/*random function for <picture> */
  let picFunction = function(event){
      let ans = "";
      let fileName = "";
      let altText = "";
      let selector = Math.floor((Math.random()*3)+1);
      if(selector==1){
        fileName = 'img_1.jpg';
        altText = 'silly';
      }
      else if (selector==2) {
        fileName = 'img_2.jpg';
        altText = 'dumb';
      }
      else {
        fileName = 'img_3.jpg';
        altText = 'Justin Bieber';
      }
      let display = $('#picture');
      display.attr('src','images/'+fileName);
      display.attr('alt', altText);
  }
    goButton.click(personFunction);
    goButton.click(locationFunction);
    goButton.click(timeFunction);
    goButton.click(picFunction);
});
