const Nightmare = require('nightmare');   //Get the nightmarejs package
const nightmare = Nightmare({show: true});  //We want electron to display the scraping simulation

nightmare
  .goto('https://google.com') //Go to page as instructed
  .wait('#lst-ib')  //Wait until element with this id is rendered
  .type('#lst-ib', 'W3Schools') //Type 'W3Schools into the search input element'
  .click('input[name="btnK"]')  //Click on the search button
  .evaluate(() => {
    let searchEntry = 'W3Schools' //Create a variable for our search string, this allows us to change the string if we wanted to in the future
    let searchResults = []; //Create an array to hold the search results
    let searchLinks = document.querySelectorAll('.rc .r') //Loop through the class elements that contain the links we are looking for
    for(let i = 0; i < searchLinks.length; i++){  //Iterate through all the elements that contain the same class name
      searchResults.push(searchLinks[i].querySelector('a').href); //Push each iterated element into our searchResults array
    }
    for(let i = 0; i < searchResults.length; i++){  //Now that our array contains our search result links, we can loop through the array
      if(searchResults[i].includes(searchEntry.toLowerCase() + '.com')){  //Perform a check and see if any of the iterated links is the
        return searchResults[i] //official source link to our search entry. If so, return that search entry.
      }
    }
  })
  .end()
  .then(console.log)
  .catch(error => {
    console.error('No link titles match the search', error)
  })
