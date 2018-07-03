const Nightmare = require('nightmare'); //NightmareJS is a node package, we can use npm to install it and save it as a dependency for our webscraper
const nightmare = Nightmare({show: true});  //This method enables the electron simulation, if omitted or set to false, it would be headless
const jquery = require('jquery');
const { csvFormat } = require('d3-dsv');  //Another node package for handling data is d3-dsv
const { readFileSync, writeFileSync } = require('fs');  //We have to require the 'file systems' method so we can manipulate with ours later on

nightmare
  .goto('https://www.google.com') // Go to Google
  .wait('#lst-ib')  //Wait until the search input fully renders
  .type('#lst-ib', 'datatables')  //Type 'datatables' into the search input
  .click('input[name="btnK"]') //Click on the search button
  .wait(1000) //wait a second for the search results to load
  .evaluate(function(){ //Use javascript to evaluate page contents
    let link = document.querySelectorAll('.rc')[0].querySelector('a');  //Save first search link result into a variable
    link.click()  //CLick on the link
  })
  .wait(2000) //wait 2 seconds for the datatables page to render
  .evaluate(function(){ //Use javascript to evaluate the example table on the page
    let arrOfData = []; //We need to store our data into an array as per instructions
    let rowData = document.querySelectorAll('#example')['0'].children['1'].querySelectorAll('tr') //Save all 'tr' elements to a varible
    for(let i = 0; i < rowData.length; i++){  // We can access all the rowData elements by looping through them
      let rowEntry = {};  //We have to store each tablerow into an object as instructed, so we create an empty object for storage
      let lineEntry = rowData[i].querySelectorAll('td');  //Save each all the tabledata of each tablerow iterated into a variable
      rowEntry.name = lineEntry[0].textContent; //Construct the object properties and give them their repective values,
      rowEntry.position = lineEntry[1].textContent; //we access the values of the tabledata with the textContent property
      rowEntry.office = lineEntry[2].textContent;
      rowEntry.age = lineEntry[3].textContent;
      rowEntry.startDate = lineEntry[4].textContent;
      rowEntry.salary = lineEntry[5].textContent;
      arrOfData.push(rowEntry) //After giving properties their values for each row, push the finished objects into the array.
    }
    return arrOfData; //Return the array. This data will be passed onto our .then() method so we can convert it into a csv file later
  })
  .end()  //End the electron simulation process
  .then(function(data){ //Once the promise has been met,
    const csvData = csvFormat(data.filter(i => i)); //We use d3-dsv to save our data into csv's
    writeFileSync('./dataTable.csv', csvData, {encoding: 'utf8'}) //We use the 'fs' method that comes with NodeJS to write our csvData into a file called
  })  //datatables.csv in the same folder. We will set the encoding to utf8.
  .catch(error => { //We set our catch method to handle errors
    console.error('Search failed:', error)  //If there is an error, we log 'Search failed'
  })
