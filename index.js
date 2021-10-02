// EL 1 - user hit a submit button to get a drink recipe
const form = document.querySelector('form')
const recipeDisplay = document.querySelector("#display-recipe")
const formInput = document.querySelector("#spirit")
form.addEventListener('submit', fetchRecipe);

function fetchRecipe(e) {
    recipeDisplay.innerHTML = ''
    e.preventDefault();
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + formInput.value)
    .then(res => res.json())
    .then(displayRecipes)
}

function displayRecipes(data) {
    for (i=0; i<6; i++) {
        let drinkInfo = data.drinks[Math.floor(Math.random() * data.drinks.length)]
        console.log(drinkInfo)
        let drinkName = document.createElement('p')
        drinkName.innerHTML = `<h1>${drinkInfo.strDrink}</h1><h2 id="liked">👍</h2><img src="${drinkInfo.strDrinkThumb + '/preview'}"/>`
        recipeDisplay.append(drinkName)
    }
    form.reset()
}


// grab submit button and save to variable
// add 'submit' event listener to submit button
// fetch from API


// Display recipe on screen with a thumbs up button to save as favorite

// EL 2 - user click thumbs up to save recipe

// Saved recipe ius added to favorites list below with an X button to delete

// EL 3 - user can click the X to delete from favorites

