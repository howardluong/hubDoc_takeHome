//Task 4
let searchBar = document.querySelector('#lst-ib');    //Save the searchbar element as a variable
const searchString = searchBar.value + ` robot`;  //set the value of the searchbar to its current value and concat 'robot' to it
searchBar.value = searchString; //Change the value of our searchbar element to the searchString variable

//Task 5
const clickSearch = () => {   //  Create a click function to click the Google Search Button using javascript
  document.querySelector('#lst-ib').click();
}

clickSearch();

//Task 6
let searchResults = []; //Create an empty array so we can store the search links using the push method later on
let searchLinks = document.querySelectorAll('.rc .r') //Save the class elements that contain the links into a variable
for(let i = 0; i < searchLinks.length; i++){  //iterate through each link
  searchResults.push(searchLinks[i].querySelector('a').href)  //Push in each search link that gets iterated and access its href value via querySelector
}
console.log(searchResults)  //Log the searchResults array with its new content
