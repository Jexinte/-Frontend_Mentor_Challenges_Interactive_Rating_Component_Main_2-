const numberSelected = document.querySelector('.numberSelected');
const search = new URLSearchParams(window.location.search)
const valueOfNumberSelectedFromHomePage = search.get('ratingSelected');
if(valueOfNumberSelectedFromHomePage) 
numberSelected.innerHTML = valueOfNumberSelectedFromHomePage;
