// EL 1 - user hit a submit button to get a drink recipe

document.querySelector('form').addEventListener('submit', fetchRecipe);

function fetchRecipe(e) {
    e.preventDefault();
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin")
    .then(res => res.json())
    .then(data => {console.log(data.drinks[Math.floor(Math.random() * 100)].strDrink)})
}

// grab submit button and save to variable
// add 'submit' event listener to submit button
// fetch from API


// Display recipe on screen with a thumbs up button to save as favorite

// EL 2 - user click thumbs up to save recipe

// Saved recipe ius added to favorites list below with an X button to delete

// EL 3 - user can click the X to delete from favorites

