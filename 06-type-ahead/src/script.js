const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities = [];
const searchBox = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
         const regex = new RegExp(wordToMatch, 'gi');
         return place.city.match(regex);
    });  
}


function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const htmlDisplay = matchArray.map(place => {
        return `
        <li>
            <span class="name">${place.city}</span>
            <span class="state">${place.state}</span>
            <span class="population">${place.population}</span>
        </li>`
    }).join('');
    suggestions.innerHTML = htmlDisplay;
}
searchBox.addEventListener('change', displayMatches);
searchBox.addEventListener('keyup', displayMatches);


