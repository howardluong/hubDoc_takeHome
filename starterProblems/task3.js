jquery = require('jquery'); //Require jquery through npm

//It is better to start off declaring jquery variables with the '$' sign.
//This would be an indicator for everyone that this is a jquery variable and not
//a javascript variable
var $titleOfInput = $('#lst-ib').attr('title')
//We can access the search input's title by using jquery's id selector
//instead of going the document.getElementById/querySelector route.
//We can get the value of the title attribute by using the attr() method.
